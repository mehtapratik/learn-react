import React from "react";

class WelcomeUser extends React.Component {
   render() {
      return <p>Welcome, {this.props.name}!</p>;
   }
}

export default WelcomeUser;
