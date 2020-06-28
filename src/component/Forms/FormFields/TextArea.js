import React from "react";
import "./fields.sass";

const Textarea = ({ label, handleChange, name, value, error, disabled }) => (
  <div className="field textarea">
    <label>{label}</label>
    <textarea
      name={name}
      onChange={handleChange}
      value={value}
      disabled={disabled}
    />
    {error ? <p className="form-error">{error}</p> : null}
  </div>
);

export default Textarea;
