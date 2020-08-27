import React from "react";
import DataTableView from "../Views/DataTableView";
import ViewBase from "../container/ViewBase";
import { connect } from "react-redux";

const DataTableViewScreen = (props) => {
  console.log(props);
  return (
    <ViewBase>
      <DataTableView {...props} />
    </ViewBase>
  );
};

const mapStateToProps = (state, ownProps) => {
  let { navigate, tableName, id } = ownProps.match.params;
  console.log(navigate, tableName, id);
  console.log(state["dm"][navigate]["data"][tableName], "hola");
  return {
    data: state["dm"][navigate]["data"][tableName][id],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataTableViewScreen);
