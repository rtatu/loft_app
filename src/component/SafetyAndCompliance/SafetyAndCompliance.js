import React from "react";
import Datatable from "../Datatable";
import SafetyHeader from "./SafetyHeader";
import { data } from "./mockdata";
import SafetyFooter from "./SafetyFooter";
import DatatableEvents from "../Datatable/datatable_renderer_events";
import "./safety.scss";

class SafetyAndCompliance extends React.Component {
  addNewItem = (e) => {
    DatatableEvents.newForm(e, "safetyAndCompliance/safety Item", "safetyAndCompliance");
  };

  manageGroup = (e,id)=>{
    DatatableEvents.addNewWindow(e,id)
  }

  render() {
    return (
      <div className="main-container">
        <SafetyHeader title={"Safety Items"} onPressAddNew={this.addNewItem} />
        <div className="safetywrapper">
          <div className="safetyItem">
            <Datatable
              tableName={"safety"}
              navigate={"safetyAndCompliance"}
              data={data}
              loading={false}
              hideHeaderNav={true}
              hideContext={true}
            />
          </div>
          <div className="safetyItem">
            <SafetyFooter heading="Safety Groups" manageGroup={this.manageGroup} />
          </div>
        </div>
      </div>
    );
  }
}

export default SafetyAndCompliance;
