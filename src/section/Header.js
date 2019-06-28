import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="coverWrapper">
        <div className="contentWrapper">
          <div className="coverTitle">
            <h1>
              I'm a full stack UX designer.
              <br /> I make users' life easier with digital Products.
            </h1>
          </div>
          <span className="btnLevel">Skill Level</span>
        </div>
        <div className="line">
          <svg xmlns="http://www.w3.org/2000/svg" width="1442" height="1">
            <path
              d="M 1 0.5 L 1441.25 0.5"
              fill="transparent"
              opacity="0.514"
              stroke="hsl(0, 0%, 100%)"
              stroke-linecap="square"
              stroke-miterlimit="10"
            />
          </svg>
        </div>
      </header>
    );
  }
}

export default Header;
