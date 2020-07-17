import React from "react";
import ReactDOM from "react-dom";

function tick() {
   var element = <p>Now is {new Date().toLocaleTimeString()}.</p>;
   ReactDOM.render(element, document.getElementById("previewTicks"));
}

setInterval(tick, 1000);
