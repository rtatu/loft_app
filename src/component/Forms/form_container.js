import { withFormik } from "formik";
import config from "./formik_configuration";
import GeneralForm from "./form";
import React from "react";
import Formheader from "./form_header";

const FormHOC = withFormik(config)(GeneralForm);

const FormContainer = () => (
  <FormHOC formName="customer" formheader={Formheader} />
);

export default FormContainer;
