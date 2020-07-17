import React from "react";
import ReactDOM from "react-dom";

const name = "Pratik";
const element = <p>Hello, {name}</p>;

ReactDOM.render(element, document.getElementById("hello"));
