import "./styles.scss";

// Hello {name}
import "./examples/hello-name";

// Hello {userObject}
import "./examples/user-object";

// Attributes with String and Expression values
import "./examples/attributes";

import { loadCodeSnippets } from "../../_globals/js/site";

loadCodeSnippets([
   [
      "examples/attributes.js",
      document.getElementById("codeExAttributes"),
      "lang-jsx"
   ],
   [
      "examples/create-element.js",
      document.getElementById("codeCreateEl"),
      "lang-jsx"
   ],
   [
      "examples/hello-name.js",
      document.getElementById("codeHelloName"),
      "lang-jsx"
   ],
   ["examples/jsx.js", document.getElementById("codeJsx"), "lang-jsx"],
   [
      "examples/react-element.js",
      document.getElementById("codeReactEl"),
      "lang-jsx"
   ],
   [
      "examples/user-object.js",
      document.getElementById("codeUserObject"),
      "lang-jsx"
   ]
]);
