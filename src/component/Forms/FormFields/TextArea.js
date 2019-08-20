import React from "react";

const Textarea = ({ label, handleChange, name, value }) => (
  <div className="field textarea">
    <label>{label}</label>
    <textarea name={name} onChange={handleChange} value={value} />
  </div>
);

export default Textarea;
