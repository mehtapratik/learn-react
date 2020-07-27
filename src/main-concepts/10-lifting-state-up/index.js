// import React from "react";
// import ReactDOM from "react-dom";

import { loadCodeSnippets } from "../../_globals/js/site";
import "./examples/calculator";
loadCodeSnippets([
   [
      "./examples/calculator.js",
      document.getElementById("codeCalculator"),
      "lang-jsx"
   ]
]);
