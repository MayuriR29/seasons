import React from "react";
import ReactDOM from "react-dom";
import { SeasonDisplay } from "./components/SeasonDisplay";

class App extends React.Component {
  state = { lat: null, errorMessage: "", showLoading: true };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude,
          showLoading: false
        });
      }, //success call back
      err => {
        this.setState({
          errorMessage: err.message,
          showLoading: false
        });
      }
    );
  }
  render() {
    return (
      <div>
        <SeasonDisplay lat={this.state.lat} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
