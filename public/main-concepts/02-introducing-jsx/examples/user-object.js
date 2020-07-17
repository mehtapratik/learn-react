import React from "react";
import ReactDOM from "react-dom";

function helloUser(user) {
   if (typeof user == "object" && typeof user.firstName == "string" && typeof user.lastName == "string") {
      return <p>Hello, {`${user.firstName} ${user.lastName}`}</p>;
   } else {
      return <p>Hello, Stranger!</p>;
   }
}

ReactDOM.render(helloUser({ firstName: "Pratik", lastName: "Mehta" }), document.getElementById("userObject"));
ReactDOM.render(helloUser({ invalid: "object" }), document.getElementById("invalidObject"));
