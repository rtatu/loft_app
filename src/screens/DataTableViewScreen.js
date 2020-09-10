import React from "react";
import DataTableView from "../Views/DataTableView";
import ViewBase from "../container/ViewBase";
import { connect } from "react-redux";
import {fetchSafety, fetchSafetyGroups } from "../store/actions/safetyAction";

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
  return {
    data: state["dm"][navigate]["data"][tableName][id],
    safety: state.safety,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSafetyGroups: () => dispatch(fetchSafetyGroups),
    fetchSafety: () => dispatch(fetchSafety),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataTableViewScreen);
