import React from "react";
import "./safety.scss";
import { groups } from "./mockdata";

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
    return (
      <div className="safetygroupwrapper">
        <div className="safety-heading">{this.props.heading}</div>
        <div className="groupswrapper">
          {groups.map((group, index) => {
            if (index != groups.length - 1) {
              return (
                <div
                  className="safety-card"
                  key={group.id}
                  onClick={(e) => this.props.manageGroup(e, group.id)}
                >
                  <img className="safety-image" src={group.src} />
                  <div className="safety-name">{group.name}</div>
                  <div className="safety-items">{group.items} Safety Items</div>
                </div>
              );
            } else {
              return (
                <div
                  className="safety-card add-container"
                  key={group.id}
                  onClick={this.props.manageGroup}
                >
                  <img className="safety-image" src={group.src} />
                  <div className="safety-name">{group.name}</div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}
export default SafetyFooter;
