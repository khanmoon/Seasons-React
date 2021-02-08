import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import "semantic-ui-css-offline";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (e) => console.log(e),
//     (e) => console.log(e)
//   );
//   return <div>Latitude: </div>;
// };

class App extends React.Component {
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (e) => {
        console.log(e);
        this.setState({ lat: e.coords.latitude });
      },
      (e) => {
        console.log(e);
        this.setState({ error: e.message });
      }
    );
  }
  constructor(props) {
    super();
    this.state = { lat: null, error: "" };
  }
  render() {
    if (this.state.lat && !this.state.error) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    }
    if (!this.state.lat && this.state.error) {
      return <div>Error : {this.state.error}</div>;
    }
    if (!this.state.lat && !this.state.error) {
      return (
        <div>
          <Spinner />
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
