import React, { Component } from "react";
import "./btnGnb.css";
class BtnGnb extends Component {
  render() {
    return <div className="gnbBtn">{this.props.label}</div>;
  }
}

export default BtnGnb;
