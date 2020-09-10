import React from "react";
import "./safety.scss";
import add from "../../static/icon/safety/add.svg";
import { getImageForGroup } from "./imagefunction";

const SafetyFooter = (props) => {
  return (
    <div className="safetycontainer">
      <SafetyGroup {...props} />
    </div>
  );
};

class SafetyGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { groupsloading, groups } = this.props.safety;
    let {truckSafeties} = this.props
    if (groupsloading != false) {
      return null;
    }
    return (
      <div className="safetygroupwrapper">
        <div className="safety-heading">{this.props.heading}</div>
        <div className="groupswrapper">
          {Object.values(truckSafeties).map((group, _) =>{
            let groupDetails = groups[group.safetyGroupId]
            return(
            <div
              className="safety-card"
              key={groupDetails.id}
              onClick={(e) =>this.props.manageGroup(e,groupDetails.id)}
            >
              <img
                className="safety-image"
                src={getImageForGroup(groupDetails.name)}
              />
              <div className="safety-name">{groupDetails.name}</div>
              <div className="safety-items">
                {Object.keys(groupDetails.safetyJoins).length} Safety Items
              </div>
            </div>
          )}
          )}
          <div
            className="safety-card add-container"
            onClick={this.props.manageGroup}
          >
            <img className="safety-image" src={add} />
            <div className="safety-name">Add New Safety Schedule</div>
          </div>
        </div>
      </div>
    );
  }
}
export default SafetyFooter;
