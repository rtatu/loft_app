import React from "react";
import "./fbfields.sass";
import FieldHOC from "./FieldHOC";

const FbFieldDate = () => <input type={"date"} />;

export default FieldHOC(FbFieldDate);
