// import React from "react";
// import ReactDOM from "react-dom";

import { loadCodeSnippets } from "../../_globals/js/site";

loadCodeSnippets([
   [
      "./examples/basic-input.js",
      document.getElementById("codeBasicInput"),
      "lang-jsx"
   ],
   [
      "./examples/multiple-inputs.js",
      document.getElementById("codeMultiInputs"),
      "lang-jsx"
   ],
   [
      "./examples/comp-prop.js",
      document.getElementById("codeCompProp"),
      "lang-jsx"
   ]
]);
