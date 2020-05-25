import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";


ReactDOM.render(
    <React.StrictMode>
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-1"/>
                <div className="col-md-10">
                    <App/>
                </div>
                <div className="col-md-1"/>
            </div>
        </div>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
