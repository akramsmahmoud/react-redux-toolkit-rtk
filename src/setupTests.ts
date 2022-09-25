// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import swapiApi from './app/services/people';
import { store } from './app/store';
import { server } from './test/server'

// make debug output for TestingLibrary Errors larger
process.env.DEBUG_PRINT_LIMIT = '15000'

// enable API mocking in test runs using the same request handlers
// as for the client-side mocking.
jest.setTimeout(80000);
beforeAll(() => server.listen())
afterAll(() => server.close())
beforeEach(()=>{
    store.dispatch(swapiApi.util.resetApiState())
})
afterEach(() => {
    // Reset any runtime handlers tests may use.
    server.resetHandlers()
    console.log('server.resetHandlers')
})
