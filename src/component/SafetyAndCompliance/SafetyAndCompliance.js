import React from "react";
import Datatable from "../Datatable";
import SafetyHeader from "./SafetyHeader";
import SafetyFooter from "./SafetyFooter";
import DatatableEvents from "../Datatable/datatable_renderer_events";
import "./safety.scss";

class SafetyAndCompliance extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchSafety()
    this.props.fetchSafetyGroups()
  }
  addNewItem = (e) => {
    DatatableEvents.newForm(e, "safetyAndCompliance/safety Item", "safetyAndCompliance");
  };

  manageGroup = (e,id)=>{
    DatatableEvents.addNewWindow(e,id)
  }

  render() {
    let {loading,data} = this.props.data
    return (
      <div className="main-container">
        <SafetyHeader title={"Safety Items"} onPressAddNew={this.addNewItem} />
        <div className="safetywrapper">
          <div className="safetyItem">
            <Datatable
              tableName={"safety Item"}
              navigate={"safetyAndCompliance"}
              data={data}
              loading={loading}
              hideHeaderNav={true}
              hideContext={true}
            />
          </div>
          <div className="safetyItem">
            <SafetyFooter {...this.props} heading="Safety Groups" manageGroup={this.manageGroup} />
          </div>
        </div>
      </div>
    );
  }
}

export default SafetyAndCompliance;
