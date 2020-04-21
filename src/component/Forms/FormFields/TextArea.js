import React from "react";
import "./fields.sass";

const Textarea = ({ label, handleChange, name, value, error }) => (
  <div className="field textarea">
    <label>{label}</label>
    <textarea name={name} onChange={handleChange} value={value} />
    {error ? <p className="form-error">{error}</p> : null}
  </div>
);

export default Textarea;
