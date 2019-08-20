import React from "react";

const Text = ({ label, handleChange, name, value, defaultValue }) => (
  <div className="field">
    <label>{label}</label>
    <input
      type="text"
      name={name}
      onChange={handleChange}
      value={value}
      defaultValue={defaultValue}
    />
  </div>
);

export default Text;
