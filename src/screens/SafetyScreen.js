import React from "react";
import SafetyAndCompliance from "../component/SafetyAndCompliance";
import SafetyForm from "../component/SafetyAndCompliance/SafetyGroupForm";
import Base from "../container/base";
import { connect } from "react-redux";
import {
  fetchSafety,
  fetchSafetyGroups,
  addSafetyGroup,
  updateSafetyGroup,
} from "../store/actions/safetyAction";

const SafetyComponent = (props) => {
  return (
    <Base>
      <SafetyAndCompliance {...props} />
    </Base>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.safety,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSafety: () => dispatch(fetchSafety),
    fetchSafetyGroups: () => dispatch(fetchSafetyGroups),
  };
};

const SafetyScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SafetyComponent);

const SafetyFormComponent = (props) => {
  return <SafetyForm {...props} />;
};

const mapStateToPropsForm = (state, ownProps) => {
  return {
    data: state.safety.data,
    groups: state.safety.groups,
  };
};

const mapDispatchToPropsForm = (dispatch) => {
  return {
    addSafetyGroup: (data) =>
      dispatch((dispatch) => addSafetyGroup(dispatch, data)),
    updateSafetyGroup: (data) =>
      dispatch((dispatch) => updateSafetyGroup(dispatch, data)),
  };
};

const SafetyFormScreen = connect(
  mapStateToPropsForm,
  mapDispatchToPropsForm
)(SafetyFormComponent);

export { SafetyScreen, SafetyFormScreen };
