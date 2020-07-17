import React from "react";
import ReactDOM from "react-dom";

const btnType = "btn btn-primary";
const elWithAttr = (
   <a href="//goodfrontender.com" className={btnType} target="_blank">
      Good Frontender
   </a>
);

ReactDOM.render(elWithAttr, document.getElementById("elWithAttr"));
