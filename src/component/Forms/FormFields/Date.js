import React from "react";

const Datefield = ({ label, handleChange, name, value }) => (
  <div className="field">
    <label>{label}</label>
    <input type="date" name={name} onChange={handleChange} value={value} />
  </div>
);

export default Datefield;
