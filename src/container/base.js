import React from "react";
import App from "../component/App";
import Header from "../component/header";

const style = {
  width: "100%",
  height: "100%",
  flex: 1,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
};

class Base extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", height: "100%" }}>
        <App />
        <div style={style}>
          <Header />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Base;
