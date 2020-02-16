import { withFormik } from "formik";
import config from "./formik_configuration";
import GeneralForm from "./form";
import React from "react";
import Formheader from "./form_header";

const FormHOC = withFormik(config)(GeneralForm);

class FormContainer extends React.Component {
  componentDidMount() {
    // resize form
    let form = document.getElementsByClassName("genform")[0];
    let width = 800;
    let height = form.offsetHeight + 100;
    electronRemote.getCurrentWindow().setSize(width, height);
  }

  render() {
    return (
      <FormHOC
        formName={this.props.name}
        formheader={Formheader}
        data={this.props.id ? this.props.data : null}
        datastore={this.props.datastore}
      />
    );
  }
}
export default FormContainer;
