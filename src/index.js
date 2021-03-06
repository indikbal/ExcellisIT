import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ThreeScene from "./Appcontainer/ThreeScene";
ReactDOM.hydrate(
  <BrowserRouter>
    <div className="grid">
      <div className="row h-100 w-100 pr-0 mr-0 ml-0">
        <div className="grid_item grid1 col-2 pl-0 pr-0"></div>
        <div className="grid_item grid2 col-2 pl-0 pr-0"></div>
        <div className="grid_item grid3 col-2 pl-0 pr-0"></div>
        <div className="grid_item grid4 col-2 pl-0 pr-0"></div>
        <div className="grid_item grid5 col-2 pl-0 pr-0"></div>
        <div className="grid_item grid6 col-2 pl-0 pr-0"></div>
      </div>
    </div>
    <ThreeScene />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
