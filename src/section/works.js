import React, { Component } from "react";
import "./works.css";
import CardItem from "../component/cardItem";
const data = require("../res/cardList.json");

console.log(data[0].project);
class Works extends Component {
  render() {
    return (
      <section className="worksWrapper">
        <div className="title">
          <h2>Works</h2>
        </div>
        <div className="cards">
          {data.map((card, i) => {
            return (
              <CardItem
                class={`cardItem ${data[i].layout}`}
                tags={data[i].tag}
                date={data[i].date}
                title={data[i].title}
                description={data[i].description}
                background={`background-img img-${i}`}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default Works;
