import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {updateNewPostText} from './redux/state'
import { addPost } from "./redux/state";

  let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />,
        document.getElementById("root")
    );
};
