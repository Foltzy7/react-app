import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import ErrorBoundary from "./pages/errors/error-boundary";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { store } from "./store/store";

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <BrowserRouter basename="/">
      <ErrorBoundary>
        <Provider store={store}>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
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
