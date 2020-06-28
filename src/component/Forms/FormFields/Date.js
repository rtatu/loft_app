import React from "react";

const Datefield = ({ label, handleChange, name, value, error, disabled }) => (
  <div className="field">
    <label>{label}</label>
    <input
      type="date"
      name={name}
      onChange={handleChange}
      value={value}
      disabled={disabled}
    />
    {error ? <p className="form-error">{error}</p> : null}
  </div>
);

export default Datefield;
