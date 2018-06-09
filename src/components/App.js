import React, { Component } from "react";
import Logo from "./Logo";
import "../css/App.css";

class App extends Component {
  state = {
    appMounted: false
  };
  componentDidMount() {
    this.setState({
      appMounted: true
    });
  }
  render() {
    return (
      <div className={this.state.appMounted ? "App mounted" : "App"}>
        <Logo />
      </div>
    );
  }
}

export default App;
