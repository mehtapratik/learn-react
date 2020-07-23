import React from "react";

class Clock extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         date: new Date()
      };
   }

   componentDidMount() {
      this.TimerID = setInterval(() => {
         this.tick();
      }, 1000);
   }

   componentWillUnmount() {
      clearInterval(this.TimerID);
   }

   tick() {
      this.setState({
         date: new Date()
      });
   }

   render() {
      return <p>{this.state.date.toLocaleTimeString()}</p>;
   }
}

export default Clock;
