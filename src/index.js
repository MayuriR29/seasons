import React from "react";
import ReactDOM from "react-dom";
import { SeasonDisplay } from "./components/SeasonDisplay";
import { Spinner } from "./components/Spinner";
import getLocation from './components/getLocation'

const App = () => {
  let { lat, errMsg } = getLocation()
  let content;
  if (errMsg && !lat) {
    content = <div>Error:{errMsg}</div>;
  } else if (!errMsg && lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message="Please accept location request" />
  }
  return <div className="border red">{content}</div>;

}
// class App extends Component {
//   state = { lat: null, errorMessage: "", showLoading: true };
//   componentDidMount() {
//     window.navigator.geolocation.getCurrentPosition(
//       position => {
//         this.setState({
//           lat: position.coords.latitude,
//           showLoading: false
//         });
//       }, //success call back
//       err => {
//         this.setState({
//           errorMessage: err.message,
//           showLoading: false
//         });
//       }
//     );
//   }
//   renderContent() {
//     if (this.state.errorMessage && !this.state.lat) {
//       return <div>Error:{this.state.errorMessage}</div>;
//     }
//     if (!this.state.errorMessage && this.state.lat) {
//       return <SeasonDisplay lat={this.state.lat} />;
//     }
//     return (
//       <div>
//         <Spinner message="Please accept location request" />
//       </div>
//     );
//   }
//   render() {
//     return <div className="border red">{this.renderContent()}</div>;
//   }
// }

ReactDOM.render(<App />, document.querySelector("#root"));
