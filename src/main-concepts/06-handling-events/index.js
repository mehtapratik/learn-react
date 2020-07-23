// import React from "react";
// import ReactDOM from "react-dom";

import { loadCodeSnippets } from "../../_globals/js/site";

loadCodeSnippets([
   [
      "./examples/events-dom-vs-jsx.js",
      document.getElementById("codeDOMvsJSX"),
      "lang-jsx"
   ],
   [
      "./examples/binding-this.js",
      document.getElementById("codeBindingThis"),
      "lang-jsx"
   ],
   [
      "./examples/passing-args.js",
      document.getElementById("codePassingArgs"),
      "lang-jsx"
   ]
]);

// ReactDOM.render(<Clock />, document.getElementById("previewClock"));
