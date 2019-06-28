import React, { Component } from "react";
import "./cardItem.css";
class CardItem extends Component {
  static defaultProps = {
    title: "Starbucks UX Consulting",
    tags: "Client Project, UX/UI",
    date: "16.4-5 (1M)",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quod perspiciatis, modi illo quisquam officiis repudiandae quia aut quo sapiente laudantium hic officia obcaecati accusantium. Quos repudiandae aut perspiciatis quas."
  };
  render() {
    return (
      <div className={this.props.className}>
        <h3>{this.props.title}</h3>

        <p>{this.props.tags}</p>
        <p>{this.props.date}</p>
        <div className="descriptionWrapper">
          <p className="cardDescription">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default CardItem;
