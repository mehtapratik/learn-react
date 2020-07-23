import React from "react";
import ReactDOM from "react-dom";

import { loadCodeSnippets } from "../../_globals/js/site";

import Clock from "./examples/clock";

loadCodeSnippets([
   ["./examples/clock.js", document.getElementById("codeClock"), "lang-jsx"],
   [
      "./examples/state-modification.js",
      document.getElementById("codeStateModification"),
      "lang-jsx"
   ],
   [
      "./examples/state-asychronicity.js",
      document.getElementById("codeSateAsynchronicity"),
      "lang-jsx"
   ],
   [
      "./examples/merged-state.js",
      document.getElementById("codeMergedState"),
      "lang-jsx"
   ],
   [
      "./examples/data-flow.js",
      document.getElementById("codeDataFlow"),
      "lang-jsx"
   ]
]);

ReactDOM.render(<Clock />, document.getElementById("previewClock"));
