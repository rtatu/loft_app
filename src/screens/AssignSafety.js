import React from "react";
import AssignPop from "../Views/AssignSafety";
import { connect } from "react-redux";
import { addSafetyGroupsToTrucks } from "../store/actions/listAction";

const AssignScreen = (props) => <AssignPop {...props} />;

const mapStateToProps = (state) => {
  return {
    groups: state.safety.groups,
    data: state.dm.lists.data.truck,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addSafetyGroupsToTrucks: (data) =>
      dispatch((dispatch) => addSafetyGroupsToTrucks(dispatch, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AssignScreen);
