import React from "react";
import remove from "../../../static/icon/fb-fields/delete.svg";

/**
 * @param removeQuestion --> function to delete question
 * @param index --> index of the question
 */
class RemoveQuestion extends React.Component {
  render() {
    return (
      <div
        className="fb-ed-del"
        onClick={() => this.props.removeQuestion(this.props.index)}
      >
        <img src={remove} />
        <span>Remove Field</span>
      </div>
    );
  }
}

export default RemoveQuestion;
