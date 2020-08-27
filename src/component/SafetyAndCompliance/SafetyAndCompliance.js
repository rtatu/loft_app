import React from "react";
import Datatable from "../Datatable";
import SafetyHeader from "./SafetyHeader";
import { data } from "./mockdata";
import SafetyFooter from "./SafetyFooter";
import "./safety.scss";

class SafetyAndCompliance extends React.Component {
  render() {
    return (
      <div
        style={{
          padding: "20px 50px",
          height: "100%",
        }}
      >
        <SafetyHeader title={"Safety Items"} />
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
            <SafetyFooter />
          </div>
        </div>
      </div>
    );
  }
}

export default SafetyAndCompliance;
