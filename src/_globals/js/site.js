import Prism from "../../_globals/libs/prism/prism";
import "prismjs/themes/prism-tomorrow.css";

import "../styles/global.scss";

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

function loadCodeSnippets(snippets) {
   snippets.forEach(function (snippet) {
      loadCode(...snippet);
   });
}

export { escape, loadCode, loadCodeSnippets };
