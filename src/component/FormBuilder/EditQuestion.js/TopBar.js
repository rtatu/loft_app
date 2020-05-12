import React from "react";
import back from "../../../static/icon/fb-fields/back.svg";

/**
 * @param goBack -- function to goBack from editing
 * @param type -- type of the question
 */
class TopBar extends React.Component {
  render() {
    return (
      <div className="fb-ed-topbar">
        <img src={back} onClick={this.props.goBack} />
        <p>{this.props.type}</p>
      </div>
    );
  }
}

export default TopBar;
