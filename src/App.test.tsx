import App from './App';
import { rest } from 'msw';
import { server } from './test/server';
import { queryByText, render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import withProviders from './test/withProviders';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils';

const makeSut = () => {
  return withProviders(<App />);
}

describe('App', () => {
  test('Default route Should renders first 10 people', async () => {
    let { container } = await makeSut();
    await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i))

    expect(container.querySelectorAll("li").length).toBe(1);
  });

  test('Handles error response', async () => {
    // force msw to return error response
    server.use(
      rest.get("https://swapi.dev/api/people", (req, res, ctx) => {
        return res(
          ctx.status(404),
          ctx.json({
            error: "error"
          })
        );
      })
    );

    withProviders(<App />)
    await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i))
    expect(screen.getByText(/404/i)).toBeInTheDocument()
  });

  test('full app rendering/navigating to single people', async () => {
    let { container } = await makeSut();
    const user = userEvent.setup()
    await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i))
    expect(container.querySelectorAll("li").length).toBe(1);

    await user.click(screen.getByText(/Luke Skywalker/i))
    await screen.findByText(/Star wars/i, undefined, { timeout: 10000 })
    expect(screen.getByText(/PEOPLE DETAILS/i)).toBeInTheDocument()
  });

  test('landing on a invalid page', async () => {
    const badRoute = '/some/bad/route'

    render(<MemoryRouter initialEntries={[badRoute]}><App /></MemoryRouter>)
    await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i))

    expect(screen.getByText(/404/i)).toBeInTheDocument()
  })
})

