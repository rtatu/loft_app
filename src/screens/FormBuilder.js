import React from "react";

import FormBuilder from "../component/FormBuilder";
import Base from "../container/base";
import { connect } from "react-redux";

import { addFB, updateFB } from "../store/actions/formAction";

const FormBuilderScreen = (props) => (
  <Base>
    <FormBuilder
      formData={props.formData}
      createForm={props.createForm}
      updateForm={props.updateForm}
    />
  </Base>
);

const mapStateToProps = (state, ownProps) => {
  let { formId } = ownProps.match.params;
  console.log(formId, "1222");
  return {
    formData:
      formId &&
      state.maintenance &&
      state.maintenance.forms &&
      state.maintenance.forms.data &&
      state.maintenance.forms.data[formId],
    loading:
      state.maintenance &&
      state.maintenance.forms &&
      state.maintenance.forms.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createForm: (data) => dispatch((dispatch) => addFB(dispatch, data)),
    updateForm: (data) => dispatch((dispatch) => updateFB(dispatch, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormBuilderScreen);
