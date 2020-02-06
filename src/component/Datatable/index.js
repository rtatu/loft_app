import DatatableContainer from "./datatable";
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

const Datatable = props =>
  !props.loading && !(Object.keys(props.data).length == 0) ? (
    <DatatableContainer
      data={Object.values(props.data)}
      tableName={props.tableName}
      key={props.tableName}
    />
  ) : !props.loading ? (
    <Empty
      link={
        props.tableName.charAt(0).toLocaleUpperCase() + props.tableName.slice(1)
      }
    />
  ) : null;
export default Datatable;
