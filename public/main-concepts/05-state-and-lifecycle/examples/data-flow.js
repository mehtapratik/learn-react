// From parent component or page
<FormattedDate date={this.state.date} />;

// FormattedDate component
function FormattedDate(props) {
   return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
