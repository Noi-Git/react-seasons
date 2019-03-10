import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  //alway need constructor(props) to initualize the state and need super(props) when using constructor
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };
    // this.state = { lat: null, long: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        //call setState to update location
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // we need to define render
  render() {
    return (
      <div>
        Latitude: {this.state.lat} <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
