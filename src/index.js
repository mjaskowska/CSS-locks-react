import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createStore } from "redux";

//STORE - global states

//ACTION - what to do (it's a function that returns an object)

const doSomething = () => {
  return {
    type: "COUNT",
  };
};

//REDUCER

const counter = (state = 0, action) => {
  switch (action.type) {
    case "COUNT":
      return state + 1;
    default:
      return state;
  }
};

let store = createStore(counter);

store.subscribe(() => console.log(store.getState));

//DISPATCH - to execute action  (dispatch the action to reducer, reducer checks what to do and store gets updated)
store.dispatch(doSomething());






ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
