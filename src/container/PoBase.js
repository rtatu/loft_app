import React from "react";
import PoSidebarJSX from "../component/App/po_sidebar";
import Header from "../component/header";

const style = {
  width: "100%",
  height: "100%",
  flex: 1,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
};

const PoBase = props => {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <PoSidebarJSX />
      <div style={style}>
        <Header />
        {props.children}
      </div>
    </div>
  );
};

export default PoBase;
