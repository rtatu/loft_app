import React from "react";
import CardHOC from "./CardHOC";
import survey from "../../../static/icon/survey.svg";
import three_dot from "../../../static/icon/three_dot.svg";

const STATUS_COLOR = {
  DRAFT: "rgba(242, 233, 78, 0.5)",
  PUBLISHED: "rgba(104, 237, 198, 0.5)",
};

class SurveyCard extends React.Component {
  render() {
    let date = new Date(this.props.data.createdAt).toDateString();
    let status = this.props.data.status;
    return (
      <React.Fragment>
        <img src={three_dot} className="sc-actions" />
        <div
          className="sc-image"
          style={{
            background: STATUS_COLOR[status],
          }}
        >
          <img src={survey} />
        </div>
        <div className="sc-details">
          <p>{this.props.data.name}</p>
          <span>Jaimal Singh</span>
          <span className="sc-date">{`Created At ${date}`}</span>
        </div>
      </React.Fragment>
    );
  }
}

export default CardHOC(SurveyCard);
