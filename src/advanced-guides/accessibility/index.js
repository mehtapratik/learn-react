// import React from "react";
// import ReactDOM from "react-dom";

import { loadCodeSnippets } from "../../_globals/js/site";

loadCodeSnippets([
   [
      "./examples/fragment.js",
      document.getElementById("codeFragment"),
      "lang-jsx"
   ],
   [
      "./examples/html-for.js",
      document.getElementById("codeHtmlFor"),
      "lang-jsx"
   ],
   [
      "./examples/parent-ref.js",
      document.getElementById("codeParentRef"),
      "lang-jsx"
   ],
   [
      "./examples/ref-focus.js",
      document.getElementById("codeRefFocus"),
      "lang-jsx"
   ],
   [
      "./examples/short-fragment.js",
      document.getElementById("codeShortFragment"),
      "lang-jsx"
   ]
]);
