import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <div className="grid">
      <div className="row h-100 w-100 pr-0 mr-0 ml-0">
        <div className="grid_item col-2 pl-0 pr-0"></div>
        <div className="grid_item col-2 pl-0 pr-0"></div>
        <div className="grid_item col-2 pl-0 pr-0"></div>
        <div className="grid_item col-2 pl-0 pr-0"></div>
        <div className="grid_item col-2 pl-0 pr-0"></div>
        <div className="grid_item col-2 pl-0 pr-0"></div>
      </div>
    </div>

    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
