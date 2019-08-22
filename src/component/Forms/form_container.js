import { withFormik } from "formik";
import config from "./formik_configuration";
import GeneralForm from "./form";
import React from "react";
import Formheader from "./form_header";

const FormHOC = withFormik(config)(GeneralForm);

const FormContainer = props => {
  const { name } = props.match.params;
  return name ? <FormHOC formName={name} formheader={Formheader} /> : null;
};
export default FormContainer;
