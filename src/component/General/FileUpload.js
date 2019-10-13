import React from "react";

// const PapaParse = require("papaparse");

import PapaParse from "papaparse";

const UploadFieldJSX = props => (
  <div style={uploadfieldstyle} id="file-drop-area">
    <p style={addfont}>click to choose to upload file</p>
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
const readCSVFile = e => {
  let reader = new FileReader();
  if (e.target.files.length > 0) {
    const filename = e.target.files[0].name;

    reader.onload = event => {
      const csvData = PapaParse.parse(event.target.result);
      console.log(csvData.data, filename);
    };

    reader.readAsText(e.target.files[0], "UTF-8");
  }
};

class UploadField extends React.Component {
  handleFileUpload = e => {
    readCSVFile(e);
  };
  render() {
    return <UploadFieldJSX handleChange={this.handleFileUpload} />;
  }
}

// styles
const button = {
  width: "100px",
  height: "30px",
  textAlign: "center",
  lineHeight: "30px",
  marginTop: "10px",
  background: "rgba(80,125,240,0.2)",
  color: "rgba(80,125,240,1)",
  cursor: "pointer"
};

const uploadfieldstyle = {
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "1px dotted rgba(80,125,240,0.2)"
};

const addfont = {
  fontSize: "12px",
  fontFamily: "Source Sans Pro"
};

export default UploadField;
