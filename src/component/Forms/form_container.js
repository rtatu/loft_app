import { withFormik } from "formik";
import config from "./formik_configuration";
import GeneralForm from "./form";
import React from "react";
import Formheader from "./form_header";

const FormHOC = withFormik(config)(GeneralForm);

class FormContainer extends React.Component {
  constructor(props) {
    console.log("fm", props);
    super(props);
    this.state = {
      name: props.match.params.name,
      editMode: props.location.search,
      values: undefined,
      datastore: undefined
    };
  }

  componentDidMount() {
    electronRenderer.on("form_edit_mode", (e, props) => {
      let { data } = props;
      if (data) {
        this.setState(
          { ...this.state, values: data, datastore: props.datastore },
          () => console.log(this.state) || this.resizeForm()
        );
      } else {
        console.log("im working");
        this.setState({ datastore: props.datastore }, () => this.resizeForm());
      }
    });
  }

  resizeForm = () => {
    let form = document.getElementsByClassName("genform")[0];
    let width = 800;
    let height = form.offsetHeight + 100;
    electronRenderer.send("form-resize", {
      width,
      height
    });
  };

  componentWillUnmount() {
    electronRenderer.removeAllListeners("form_edit_mode");
  }

  render() {
    if (this.state.name) {
      if (this.state.editMode == "?editMode") {
        return this.state.values && this.state.datastore ? (
          <FormHOC
            formName={this.state.name}
            formheader={Formheader}
            data={this.state.values}
            datastore={this.state.datastore}
          />
        ) : null;
      }
      return this.state.datastore ? (
        <FormHOC
          formName={this.state.name}
          formheader={Formheader}
          datastore={this.state.datastore}
        />
      ) : null;
    }
    return null;
  }
}
export default FormContainer;
