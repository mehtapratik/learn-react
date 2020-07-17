import "./styles.scss";
import "./examples/ticks";
import { loadCodeSnippets } from "../../_globals/js/site";

loadCodeSnippets([
   ["examples/element.js", document.getElementById("codeElement"), "lang-jsx"],
   ["examples/ticks.js", document.getElementById("codeTicks"), "lang-jsx"]
]);
