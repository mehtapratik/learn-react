// Wrong
this.setState({
   counter: this.state.counter + this.props.increment
});

// Correct
this.setState(function (state, props) {
   return {
      counter: state.counter + props.increment
   };
});
