import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import state, { subscribe } from "./redux/state";
import * as serviceWorker from "./serviceWorker";
import { updateNewPostText } from "./redux/state";
import { addPost } from "./redux/state";

let rerenderEntireTree = state => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
        />,
        document.getElementById("root")
    );
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
