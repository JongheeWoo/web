import React, { Component } from "react";
import "./works.css";
import CardItem from "../component/cardItem";
class Works extends Component {
  render() {
    return (
      <section className="worksWrapper">
        <div className="title">
          <h2>Works</h2>
        </div>
        <div className="cards">
          <CardItem className="cardItem-horz" />
          <CardItem className="cardItem-vrtc" />
          <CardItem className="cardItem-single" />
          <CardItem className="cardItem-single" />
          <CardItem className="cardItem-horz" />
          <CardItem className="cardItem-single" />
          <CardItem className="cardItem-single" />
          <CardItem className="cardItem-horz" />
        </div>
      </section>
    );
  }
}

export default Works;
