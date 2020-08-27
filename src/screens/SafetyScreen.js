import React from "react";
import SafetyAndCompliance from "../component/SafetyAndCompliance";
import Base from "../container/base";

const SafetyScreen = (props) => {
  return (
    <Base>
      <SafetyAndCompliance {...props} />
    </Base>
  );
};

export default SafetyScreen;
