import React from "react";
import "./card.sass";
import add from "../../../static/icon/add.svg";
import CardHOC from "./CardHOC";

class AddNewCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="add-sign">
          <img src={add} />
        </div>
        <div className="an-details">
          <p>Create Form</p>
          <span>Click to create a new form</span>
        </div>
      </React.Fragment>
    );
  }
}

export default CardHOC(AddNewCard);
