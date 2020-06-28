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
  flexDirection: "column",
};

Array.prototype.toUppperCase = function () {
  let tempArray = [];
  for (let string of this) {
    tempArray.push(string.charAt(0).toLocaleUpperCase() + string.slice(1));
  }
  return tempArray;
};

const Datatable = (props) =>
  !props.loading && props.data && !(Object.keys(props.data).length == 0) ? (
    <DatatableContainer
      data={Object.values(props.data)}
      tableName={props.tableName}
      key={props.tableName}
      navigate={props.navigate}
      hideHeaderNav={props.hideHeaderNav}
      hideContext={props.hideContext}
    />
  ) : !props.loading ? (
    <Empty tableName={props.tableName} navigate={props.navigate} />
  ) : null;
export default Datatable;
