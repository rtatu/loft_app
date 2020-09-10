import React from "react";
import "./assign.scss";

class AssignSafetyComponent extends React.Component {
  constructor(props) {
    super(props);
    let ids = [];
    let truckSafeties = props.data[props.truckId].truckSafeties;
    Object.values(truckSafeties).map((group, _) => {
      ids.push(group.safetyGroupId.toString());
    });
    this.state = {
      ids,
    };
  }

  handleChange = (id) => {
    let ids = [...this.state.ids];
    let index = ids.indexOf(id.toString());
    if (index > -1) {
      ids.splice(index, 1);
    } else {
      ids.push(id);
    }
    this.setState({ ids });
  };

  render() {
    let { groups, onSubmit } = this.props;
    let { ids } = this.state;
    console.log(groups)
    return (
      <React.Fragment>
        <div className="listWrapper">
          <h1> Choose from below safety groups</h1>
          {Object.values(groups).map((group, ind) => (
            <div className="selectRow" key={ind}>
              <input
                type="checkbox"
                defaultChecked={ids.indexOf(group.id.toString()) > -1}
                onChange={(e) => this.handleChange(group.id)}
              />
              <div className="groupName">{group.name}</div>
            </div>
          ))}
        </div>
        <button className="buttonsave" onClick={()=>onSubmit(ids)}>
          Save
        </button>
      </React.Fragment>
    );
  }
}

export default AssignSafetyComponent;
