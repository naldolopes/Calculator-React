import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Calculator from "./components/main/Calculator";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>Calculadora</h1>
      <Calculator />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
