import React from "react";
import UploadField, { UploadFieldJSX } from "../../General/FileUpload";
import FieldHOC from "./FieldHOC";

class FbFieldFileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.fileName = React.createRef();
  }

  handleChange = () => {};

  render() {
    return (
      <UploadFieldJSX
        handleChange={this.handleChange}
        fileName={this.fileName}
        helpText={"Click to upload file"}
      />
    );
  }
}

export default FieldHOC(FbFieldFileUpload);
