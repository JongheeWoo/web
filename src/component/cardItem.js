import React from "react";
import "./cardItem.css";

const cardItem = props => {
  return (
    <div className={props.class}>
      <div className={props.background}>
        <div className="background-dimmer" />
      </div>
      <div className="textWrapper">
        <ul className="cardText">
          <div>
            <ul>
              <div className="metaData">
                <li>{props.tags}</li>
                <li>{props.date}</li>
              </div>
              <li className="cardTitle">
                <h3>{props.title}</h3>
              </li>
            </ul>
          </div>
          <div className="description">
            <li>{props.description}</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default cardItem;

cardItem.defaultProps = {
  title: "Starbucks UX Consulting",
  tags: "Client Project, UX/UI",
  date: "16.4-5 (1M)",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quod perspiciatis, modi illo quisquam officiis repudiandae quia aut quo sapiente laudantium hic officia obcaecati accusantium. Quos repudiandae aut perspiciatis quas."
};
