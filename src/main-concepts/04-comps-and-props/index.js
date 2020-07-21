import React from "react";
import ReactDOM from "react-dom";

import { loadCodeSnippets } from "../../_globals/js/site";

import WelcomeUser from "./examples/es6-class";
import WelcomeMessage from "./examples/func-comp";
import "./examples/button";

loadCodeSnippets([
   [
      "examples/func-comp.js",
      document.getElementById("codeFuncComp"),
      "lang-jsx"
   ],
   [
      "examples/es6-class.js",
      document.getElementById("codeEs6Class"),
      "lang-jsx"
   ],
   ["examples/button.js", document.getElementById("codeButton"), "lang-jsx"]
]);

ReactDOM.render(
   <WelcomeMessage name="Pappu" />,
   document.getElementById("previewFuncComp")
);

ReactDOM.render(
   <WelcomeUser name="Pappu" />,
   document.querySelector("#previewEs6Class")
);
