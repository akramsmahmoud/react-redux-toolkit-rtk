import { ChakraProvider } from "@chakra-ui/react";
import { render } from "@testing-library/react";
import { ReactElement, JSXElementConstructor } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../app/store";

const withProviders = (component: JSX.Element) => {
    return render(
        <Provider store={store}>
            <ChakraProvider>
                <BrowserRouter>
                    {component}
                </BrowserRouter>
            </ChakraProvider>
        </Provider>
    );
}

export default withProviders;