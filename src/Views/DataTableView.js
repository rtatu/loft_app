import React from "react";
import "./vc.sass";

// view details
import truck from "../static/dt-view/truck.svg";
import settings from "../static/dt-view/settings.svg";

// view summary
import compliance from "../static/dt-view/compliance.svg";
import odometer from "../static/dt-view/odometer.svg";
import event from "../static/dt-view/event.svg";

// import
import data from "./header/truck";
import get_In from "../utils/data_functions";

const ViewDetails = (props) => (
  <div className="vc-details">
    <div className="vcd-header">
      <img src={truck} className="vcd-truck" />
      <h1>{props.data.unitNo}</h1>
      <img src={settings} id="vcd-setting" />
    </div>
    <div className="vcd-data">
      {data.map((item, index) => (
        <div key={index}>
          <span className="vcd-label">{item.label}</span>
          <span>{get_In(props.data, item.prop) || "Not Specified"}</span>
        </div>
      ))}
    </div>
  </div>
);

const ViewSummary = () => (
  <div className="vcs-summary">
    <h1>Log Audit Summary</h1>

    <div className="vcs-cards">
      <div className="vcs-card">
        <img src={compliance} />
        <span>10 COMPLIANCE</span>
      </div>

      <div
        className="vcs-card"
        style={{
          background: `linear-gradient(#2193b0 0%, #6dd5ed 100%)`,
        }}
      >
        <img src={odometer} />
        <span>300023 Miles</span>
      </div>

      <div
        className="vcs-card"
        style={{
          background: `linear-gradient(#06beb6 0%, #48b1bf 100%)`,
        }}
      >
        <img src={event} />
        <span>10 EVENTS</span>
      </div>
    </div>
  </div>
);

const SafetyAndCompliance = () => (
  <div>
    <h1>Safety & Compliance</h1>
  </div>
);

class DataTableView extends React.Component {
  render() {
    return (
      <div className="viewContainer">
        <ViewDetails data={this.props.data} />
        <ViewSummary />
      </div>
    );
  }
}

export default DataTableView;
