import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import ErrorBoundary from "./pages/errors/error-boundary";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { store } from "./store/store";
import { ChakraProvider, Flex, Switch } from "@chakra-ui/react";
import Header from "./components/layout/header";
import About from "./pages/about";
import Home from "./pages/home";

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <ChakraProvider>
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m={"0 auto"}
        w="100%"
      >
        <Provider store={store}>
          <ErrorBoundary>
            <BrowserRouter basename="/">
              <Header />
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </BrowserRouter>
          </ErrorBoundary>
        </Provider>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
