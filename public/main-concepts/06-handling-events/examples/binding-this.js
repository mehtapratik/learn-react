// Binding "this": using bind
class LoggingButton extends React.Component {
   constructor(props) {
      super(props);

      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
   }

   handleClick() {
      console.log("this is:", this);
   }

   render() {
      return <button onClick={this.handleClick}>Click me</button>;
   }
}

// Binding "this": using public class field syntax
class LoggingButton extends React.Component {
   // Warning: this is *experimental* syntax.
   handleClick = () => {
      console.log("this is:", this);
   };

   render() {
      return <button onClick={this.handleClick}>Click me</button>;
   }
}

// Binding "this": using arrow function callback
class LoggingButton extends React.Component {
   handleClick() {
      console.log("this is:", this);
   }

   render() {
      return <button onClick={() => this.handleClick()}>Click me</button>;
   }
}
