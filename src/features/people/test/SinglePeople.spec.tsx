import {  render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import SinglePeopleContainer from '../SinglePeopleContainer';
import withProviders from '../../../test/withProviders';
import { server } from '../../../test/server';
import { rest } from 'msw';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';

const makeSut = () => {
    return withProviders(<SinglePeopleContainer />);
}

describe('Single People', () => {
    test('Render SinglePeopleDetails', async () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/people/1']}>
                    <Routes>
                        <Route path="/people/:id" element={<SinglePeopleContainer />} />
                    </Routes>
                </MemoryRouter>
            </Provider>
        )
        await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i),{timeout: 9000});

        expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument()

    });

    test('Invalid Id of people, should go to 404', async () => {
        server.use(
            rest.get("https://swapi.dev/api/people/987", (req, res, ctx) => {
                return res(
                    ctx.status(404),
                    ctx.json({
                        error: "error"
                    })
                );
            })
        );
        await makeSut();
        await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i), { timeout: 9000 })
        expect(screen.getByText(/404/i)).toBeInTheDocument()
    });
})
