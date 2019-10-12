import React from "react";

const UploadFieldJSX = () => (
  <div style={uploadfieldstyle} id="file-drop-area">
    <p style={addfont}>Drop here or click to choose</p>
    <div>
      <input type="file" id="fileElem" style={{ display: "none" }} />
      <label style={button} for="fileElem">
        Choose File
      </label>
    </div>
  </div>
);

class UploadField extends React.Component {
  componentDidMount(){
    let dropArea = document.getElementById('file-drop-area')
    // add event listener
  }
  render() {
    return <UploadFieldJSX />;
  }
}

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
