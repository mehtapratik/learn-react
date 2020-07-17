import React from "react";
import ReactDOM from "react-dom";
import Prism from "../../_globals/libs/prism/prism";

// import fs from "fs";

import "./styles.scss";

// Hello {name}
import "./examples/hello-name";

// Hello {userObject}
import "./examples/user-object";

// Attributes with String and Expression values
import "./examples/attributes";

function escape(string, lang) {
   var pre = document.createElement("pre");
   var text = document.createTextNode(string);
   pre.appendChild(text);
   return '<code class="lang-jsx">' + pre.innerHTML + "</code>";
}

function loadCode(file, target, lang) {
   fetch(file).then(function (res) {
      res.text().then(function (code) {
         target.innerHTML = escape(code, lang);
         Prism.highlightAll();
      });
   });
}

loadCode(
   "examples/attributes.js",
   document.getElementById("codeExAttributes"),
   "lang-jsx"
);

loadCode(
   "examples/create-element.js",
   document.getElementById("codeCreateEl"),
   "lang-jsx"
);

loadCode(
   "examples/hello-name.js",
   document.getElementById("codeHelloName"),
   "lang-jsx"
);

loadCode("examples/jsx.js", document.getElementById("codeJsx"), "lang-jsx");

loadCode(
   "examples/react-element.js",
   document.getElementById("codeReactEl"),
   "lang-jsx"
);

loadCode(
   "examples/user-object.js",
   document.getElementById("codeUserObject"),
   "lang-jsx"
);
