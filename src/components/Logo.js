import React, { Component } from "react";
import "../css/Logo.css";

class Logo extends Component {
  state = {};
  render() {
    return (
      <div className="mainLogoContainer">
        <img className="mainLogo" src="/images/muddy-beards.png" alt="" />;
      </div>
    );
  }
}

export default Logo;
