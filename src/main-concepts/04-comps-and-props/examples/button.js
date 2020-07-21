import React from "react";
import ReactDOM from "react-dom";

import "./button.scss";

class Button extends React.Component {
   constructor(props) {
      super(props);
      this.onButtonClick = this.onButtonClick.bind(this);
   }
   onButtonClick(e) {
      if (this.props.isDisabled) {
         e.preventDefault();
      } else if (typeof this.props.onClick == "function") {
         this.props.onClick();
      }
   }
   render() {
      var {
         as = "button",
         href,
         type,
         size,
         isBlock,
         isDisabled = false,
         children
      } = this.props;

      var classNames = ["button"];
      var disabledAttr = isDisabled ? true : false;

      if (typeof type == "string") {
         classNames.push("button--" + type);
      }

      if (typeof size == "string") {
         classNames.push("button--" + size);
      }

      if (typeof isBlock == "boolean" && isBlock) {
         classNames.push("button--block");
      }

      if (typeof href == "boolean" && isBlock) {
         classNames.push("button--block");
      }

      if (typeof isDisabled == "boolean" && isDisabled) {
         classNames.push("button--is-disabled");
      }

      if (typeof href == "string") {
         return (
            <a
               href={href}
               className={classNames.join(" ")}
               onClick={this.onButtonClick}
            >
               {children}
            </a>
         );
      } else {
         return (
            <button
               type={as}
               className={classNames.join(" ")}
               onClick={this.onButtonClick}
               disabled={disabledAttr}
            >
               {children}
            </button>
         );
      }
   }
}

function onClickMe() {
   alert("Hello There!");
}

ReactDOM.render(
   <Button
      as="submit"
      type="primary"
      size="lg"
      isBlock="false"
      onClick={onClickMe}
   >
      Click me
   </Button>,
   document.querySelector("#previewButton")
);
