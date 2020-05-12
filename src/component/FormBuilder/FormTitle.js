import React from "react";
import { withRouter } from "react-router-dom";

const ACTIONS = ["CANCEL", "SAVE AS DRAFT", "PUBLISH"];
const STYLE = [];

const ACTION_BUTTON = ({ handleClick, title, style }) => {
  return (
    <button onClick={handleClick} className="action-button" style={style}>
      {title}
    </button>
  );
};

class FormTitle extends React.Component {
  render() {
    return (
      <div className="fb-header">
        <input
          placeholder={"Enter Form Title"}
          value={this.props.name}
          onChange={this.props.handleName}
        />
        <div>
          {ACTIONS.map((item, index) => {
            return (
              <ACTION_BUTTON
                title={item}
                key={index}
                style={{ marginRight: "20px" }}
                handleClick={() => this.props.handleClick(item)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(FormTitle);
