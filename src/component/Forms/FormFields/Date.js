import React from "react";

const Datefield = ({
  label,
  handleChange,
  name,
  value,
  error,
  disabled,
  min,
  max,
}) => (
  <div className="field">
    <label>{label}</label>
    <input
      type="date"
      name={name}
      onChange={handleChange}
      value={value}
      disabled={disabled}
      min={min}
      max={max}
    />
    {error ? <p className="form-error">{error}</p> : null}
  </div>
);

export default Datefield;
