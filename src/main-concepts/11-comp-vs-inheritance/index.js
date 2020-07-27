// import React from "react";
// import ReactDOM from "react-dom";

import { loadCodeSnippets } from "../../_globals/js/site";

loadCodeSnippets([
   [
      "./examples/children-prop.js",
      document.getElementById("codeChildrenProp"),
      "lang-jsx"
   ],
   [
      "./examples/custom-holes.js",
      document.getElementById("codeCustomHoles"),
      "lang-jsx"
   ],
   [
      "./examples/specialization.js",
      document.getElementById("codeSpecialization"),
      "lang-jsx"
   ]
]);
