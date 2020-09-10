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
import DatatableEvents from "../component/Datatable/datatable_renderer_events";
import Footer from "./footer";

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

const ViewSummary = ({ data }) => {
  const updateOdometer = () => {
    DatatableEvents.editForm(
      "truckOdometer/odometer",
      "truckOdometer",
      data.id
    );
  };
  return (
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
          onClick={updateOdometer}
        >
          <img src={odometer} />
          <span>
            {data.truckOdometer.odometer +
              " " +
              data.truckOdometer.odometerUnit}{" "}
          </span>
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
};


class DataTableView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchSafety()
    this.props.fetchSafetyGroups()
  }

  manageGroup = (e,id) => {
    if(id){
      DatatableEvents.addNewWindow(e,id)
      return
    }
    DatatableEvents.assignSafetyGroups(e,id,this.props.data.id)
  }
  render() {
    const { tableName } = this.props.match.params;
    return (
      <div className="viewContainer" style={{overflowY:"auto"}}>
        <ViewDetails data={this.props.data} />
        {tableName == "truck" ? <ViewSummary data={this.props.data} /> : null}
        {tableName == "truck" ? (
          <Footer
            safety={this.props.safety}
            heading={"Safety and Compliance"}
            truckSafeties={this.props.data.truckSafeties}
            manageGroup={this.manageGroup}
          />
        ) : null}
      </div>
    );
  }
}

export default DataTableView;
