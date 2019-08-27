import { withFormik } from "formik";
import config from "./formik_configuration";
import GeneralForm from "./form";
import React from "react";
import Formheader from "./form_header";

const FormHOC = withFormik(config)(GeneralForm);

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.match.params.name,
      editMode: props.location.search,
      values: undefined
    };
  }

  componentDidMount() {
    if (this.state.editMode == "?editMode") {
      electronRenderer.on("form_edit_mode", (e, data) => {
        this.setState({ values: data }, () => {
          let form = document.getElementsByClassName("genform")[0];
          let width = 800;
          let height = form.offsetHeight + 100;
          electronRenderer.send("form-resize", {
            width,
            height
          });
        });
      });
    }

    if (this.state.editMode != "?editMode") {
      let form = document.getElementsByClassName("genform")[0];
      let width = 800;
      let height = form.offsetHeight + 100;
      electronRenderer.send("form-resize", {
        width,
        height
      });
    }
  }

  componentWillUnmount() {
    if (this.state.editMode == "?editMode") {
      electronRenderer.removeAllListeners("form_edit_mode");
    }
  }

  render() {
    if (this.state.name) {
      if (this.state.editMode == "?editMode") {
        return this.state.values ? (
          <FormHOC
            formName={this.state.name}
            formheader={Formheader}
            data={this.state.values}
          />
        ) : null;
      }
      return <FormHOC formName={this.state.name} formheader={Formheader} />;
    }
    return null;
  }
}
export default FormContainer;
