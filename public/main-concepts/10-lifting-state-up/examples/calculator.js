import React from "react";
import ReactDOM from "react-dom";

const scaleNames = {
   c: "Celsius",
   f: "Fahrenheit"
};

function toCelsius(fahrenheit) {
   return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
   return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
   const input = parseFloat(temperature);
   if (Number.isNaN(input)) {
      return "";
   }
   const output = convert(input);
   const rounded = Math.round(output * 1000) / 1000;
   return rounded.toString();
}

function BoilingVerdict(props) {
   if (props.celcius >= 100) {
      return <p>Water would boil.</p>;
   } else {
      return <p>Water would not boil.</p>;
   }
}

class TemperatureInput extends React.Component {
   constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(e) {
      this.props.onTemperatureChange(e.target.value);
   }
   render() {
      const temperature = this.props.temperature;
      const scale = this.props.scale;

      return (
         <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input value={temperature} onChange={this.handleChange} />
         </fieldset>
      );
   }
}

class Calculator extends React.Component {
   constructor(props) {
      super(props);

      this.handleCelciusChange = this.handleCelciusChange.bind(this);
      this.handleFerenheitChange = this.handleFerenheitChange.bind(this);

      this.state = {
         scale: "c",
         temperature: ""
      };
   }

   handleCelciusChange(temperature) {
      console.log("c change");
      this.setState({
         scale: "c",
         temperature
      });
   }

   handleFerenheitChange(temperature) {
      console.log("f change");
      this.setState({
         scale: "f",
         temperature
      });
   }

   render() {
      const temperature = this.state.temperature;
      const scale = this.state.scale;
      const celcius =
         scale == "c" ? temperature : tryConvert(temperature, toCelsius);
      const ferenheit =
         scale == "f" ? temperature : tryConvert(temperature, toFahrenheit);
      console.log(temperature, scale, celcius, ferenheit);
      return (
         <div>
            <TemperatureInput
               scale="f"
               temperature={ferenheit}
               onTemperatureChange={this.handleFerenheitChange}
            />
            <TemperatureInput
               scale="c"
               temperature={celcius}
               onTemperatureChange={this.handleCelciusChange}
            />
            <BoilingVerdict celcius={parseFloat(celcius)} />
         </div>
      );
   }
}

ReactDOM.render(<Calculator />, document.getElementById("previewCalculator"));
