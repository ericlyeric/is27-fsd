import React from "react";
import { render } from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

render(
  <Router>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={3500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
    />
  </Router>,
  document.getElementById("root")
);
