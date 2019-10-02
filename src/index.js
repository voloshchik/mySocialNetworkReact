import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import state, { subscribe } from "./redux/redux-store";
import * as serviceWorker from "./serviceWorker";

import store from "./redux/store";

let rerenderEntireTree = state => {
    ReactDOM.render(
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} />,
        document.getElementById("root")
    );
};

rerenderEntireTree(state);
store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
