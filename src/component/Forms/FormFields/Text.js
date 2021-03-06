import React from "react";
import "./fields.sass";

const Text = ({
  label,
  handleChange,
  name,
  value,
  defaultValue,
  error,
  disabled,
}) => (
  <div className="field">
    <label>{label}</label>
    <input
      type="text"
      name={name}
      onChange={handleChange}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
    />
    {error ? <p className="form-error">{error}</p> : null}
  </div>
);

export default Text;
