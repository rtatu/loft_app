import React from "react";
import general from "../../static/icon/chp/general.svg";
import issue from "../../static/icon/chp/issue.svg";
import inventory from "../../static/icon/chp/inventory.svg";
import "./po.sass";

const types = [
  ["General", general],
  ["Issue", issue],
  ["Inventory", inventory],
];

const Choose = (props) => (
  <div className="chp-container">
    <h1> Choose Purchase Order</h1>
    <div className="chp-block">
      {types.map((item, index) => (
        <div
          className="chp-block-child"
          key={index}
          onClick={() => props.handleClick(item[0])}
          style={props.type == item[0] ? { border: "1px solid #507DF0" } : null}
        >
          <img src={item[1]} />
          <span>{item[0]}</span>
        </div>
      ))}
    </div>
    <button className="continue">Continue</button>
  </div>
);

export default Choose;
