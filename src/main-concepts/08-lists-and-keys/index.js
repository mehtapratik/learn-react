// import React from "react";
// import ReactDOM from "react-dom";

import { loadCodeSnippets } from "../../_globals/js/site";

import "./examples/simple-map";

loadCodeSnippets([
   [
      "./examples/simple-map.js",
      document.getElementById("codeSimpleMap"),
      "lang-jsx"
   ],
   ["./examples/key-map.js", document.getElementById("codeKeyMap"), "lang-jsx"],
   [
      "./examples/surrounding-array.js",
      document.getElementById("codeSurroundingArray"),
      "lang-jsx"
   ]
]);
