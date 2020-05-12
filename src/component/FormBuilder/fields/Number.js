import React from "react";
import "./fbfields.sass";
import FieldHOC from "./FieldHOC";

const FbFieldNumber = () => <input type={"number"} />;

export default FieldHOC(FbFieldNumber);
