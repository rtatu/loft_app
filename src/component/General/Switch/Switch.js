import React from "react";
import "./switch.sass";

const Switch = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
        width: "100%",
      }}
    >
      <input
        type="checkbox"
        id={`switch-${props.id}`}
        className="cswitch"
        checked={props.checked}
        onChange={(e) => {
          let value = e.target.checked;
          props.handleChange(props.name, props.index, value);
        }}
      />
      <label htmlFor={`switch-${props.id}`} className="custom-switch"></label>
      <span
        style={{
          fontSize: "12px",
          marginLeft: "5px",
        }}
      >
        {props.label}
      </span>
    </div>
  );
};

export default Switch;
