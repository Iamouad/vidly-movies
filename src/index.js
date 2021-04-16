import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css"
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import logService from "./services/logService";

logService.init();

console.log(process.env.REACT_APP_NAME)

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))