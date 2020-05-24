import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Home from "./components/home";
import ErrorBoundary from "./pages/errors/error-boundary";

function App() {
    return (
        <BrowserRouter basename="/">
            <ErrorBoundary>
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
                            <Home/>
                        </Route>
                    </Switch>
                </div>
            </ErrorBoundary>
        </BrowserRouter>
    )
        ;
}

export default App;
