import React from "react";
import "./App.css";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import ErrorBoundary from "./pages/errors/error-boundary";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {faCheckSquare, faCoffee} from "@fortawesome/free-solid-svg-icons";
import {store} from "./store/store";
import About from "./pages/about";
import Header from "./components/header";

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <BrowserRouter basename="/">
      <ErrorBoundary>
        <Provider store={store}>
          <div>
            <Header/>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Provider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
