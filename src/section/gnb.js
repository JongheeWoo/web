import React, { Component } from "react";
import BtnGnb from "../component/btnGnb";
import "./gnb.css";
class Gnb extends Component {
  render() {
    return (
      <section className="gnb">
        <div className="gnbWrapper">
          <span className="logo">JONGHEE WOO</span>
          <div className="gnbBtns">
            <BtnGnb label={"About"} />
            <BtnGnb label={"Works"} />
            <BtnGnb label={"Contact"} />
          </div>
        </div>
      </section>
    );
  }
}

export default Gnb;
