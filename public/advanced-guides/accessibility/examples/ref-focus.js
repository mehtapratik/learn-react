class CustomTextInput extends React.Component {
   constructor(props) {
      super(props);
      // Create a ref to store the textInput DOM element
      this.textInput = React.createRef();
   }
   render() {
      // Use the `ref` callback to store a reference to the text input DOM
      // element in an instance field (for example, this.textInput).
      return (
         <input
            type="text"
            ref={this.textInput}
         />
      );
   }
}


focus() {
   // Explicitly focus the text input using the raw DOM API
   // Note: we're accessing "current" to get the DOM node
   this.textInput.current.focus();
}