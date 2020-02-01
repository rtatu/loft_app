import DatatableContainer from "./datatable";
import DtNavs from "./datatable_navigation";
import Header from "../header";
import React from "react";
import DtConfig from "./datatable_config";
import Empty from "../Empty";

const style = {
  width: "100%",
  height: "100%",
  flex: 1,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
};

Array.prototype.toUppperCase = function() {
  let tempArray = [];
  for (let string of this) {
    tempArray.push(string.charAt(0).toLocaleUpperCase() + string.slice(1));
  }
  return tempArray;
};

const Datatable = props => (
  <div>
    <h1>test with datatablse</h1>
  </div>
);
export default Datatable;
