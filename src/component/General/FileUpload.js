import React from "react";

// const PapaParse = require("papaparse");

import PapaParse from "papaparse";

/**
 *
 * @param {handleChange} props -- onChange for file upload
 * @param {fileName} props -- fileName
 * @param {helpText} props -- helpText
 */
const UploadFieldJSX = (props) => (
  <div style={uploadfieldstyle} id="file-drop-area">
    <p style={addfont} ref={props.fileName}>
      {props.helpText}
    </p>
    <div>
      <input
        type="file"
        id="fileElem"
        style={{ display: "none" }}
        onChange={props.handleChange}
      />
      <label style={button} htmlFor="fileElem">
        Choose File
      </label>
    </div>
  </div>
);

// csv - file reader using papa parser
const readCSVFile = (e, label, setData) => {
  let reader = new FileReader();
  if (e.target.files.length > 0) {
    const filename = e.target.files[0].name;

    reader.onload = (event) => {
      const csvData = PapaParse.parse(event.target.result, {
        header: true,
      });

      label.innerText = filename;
      setData(csvData.data);
    };

    reader.readAsText(e.target.files[0], "UTF-8");
  }
};

class UploadField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fileData: undefined,
    };

    this.fileName = React.createRef();
  }

  handleFileUpload = (e) => {
    readCSVFile(e, this.fileName.current, this.setData);
  };

  setData = (data) => {
    this.setState({ fileData: data }, () => {
      this.props.pushData(this.state.fileData);
    });
  };
  render() {
    return (
      <UploadFieldJSX
        handleChange={this.handleFileUpload}
        fileName={this.fileName}
      />
    );
  }
}

// styles
const button = {
  display: "inline-block",
  width: "100px",
  height: "30px",
  textAlign: "center",
  lineHeight: "30px",
  marginTop: "10px",
  background: "rgba(80,125,240,0.2)",
  color: "rgba(80,125,240,1)",
  cursor: "pointer",
};

const uploadfieldstyle = {
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "1px dotted rgba(80,125,240,0.2)",
};

const addfont = {
  fontSize: "12px",
  fontFamily: "Source Sans Pro",
};

export default UploadField;
export { UploadFieldJSX };
