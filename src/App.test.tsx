import App from './App';
import { rest } from 'msw';
import { server } from './test/server';
import { screen } from '@testing-library/react'
import withProviders from './test/withProviders';


const makeSut = () => {
  return withProviders(<App />);
}
jest.setTimeout(80000);

describe('App', () => {
  test('Should renders first 10 people', async () => {
    let { container, getByText } = await makeSut();
    await screen.findByText(/Star wars/i, undefined, { timeout: 10000 })


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
    await screen.findByText('404')
  })
})

