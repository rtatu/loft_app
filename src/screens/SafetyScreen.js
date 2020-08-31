import React from "react";
import SafetyAndCompliance from "../component/SafetyAndCompliance";
import SafetyForm from "../component/SafetyAndCompliance/SafetyGroupForm";
import Base from "../container/base";

const SafetyScreen = (props) => {
  return (
    <Base>
      <SafetyAndCompliance {...props} />
    </Base>
  );
};

const SafetyFormScreen = (props) => {
  return <SafetyForm {...props} />;
};

export { SafetyScreen, SafetyFormScreen };
