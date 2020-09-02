import React from "react";
import "./form-fields.scss";
import Select from "./Select";

const addBorder = (e) => {
  let parent = e.target.parentElement;
  parent.style = "border-left: 3px solid #507df0;";
};
const removeBorder = (e) => {
  let parent = e.target.parentElement;
  parent.style = "border:none;";
};

export const TextField = ({ ind, name, parentData, setData, change }) => {
  const [value, setValue] = React.useState(parentData[ind][name]);
  React.useEffect(() => {
    setValue(parentData[ind][name]);
  }, [change]);

  return (
    <div className="text-field">
      <input
        type="text"
        className="input-field"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          parentData[ind][name] = e.target.value;
          setData(parentData);
        }}
        onFocus={addBorder}
        onBlur={removeBorder}
      />
    </div>
  );
};

export const NumericalField = ({ ind, name, parentData, setData, change }) => {
  const [value, setValue] = React.useState(parentData[ind][name]);
  React.useEffect(() => {
    setValue(parentData[ind][name]);
  }, [change]);

  return (
    <div className="text-field">
      <input
        type="number"
        className="input-field"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          parentData[ind][name] = e.target.value;
          setData(parentData);
        }}
        onFocus={addBorder}
        onBlur={removeBorder}
        min={0}
      />
    </div>
  );
};

export const MultiLineField = ({ ind, name, parentData, setData, change }) => {
  const [value, setValue] = React.useState(parentData[ind][name]);
  React.useEffect(() => {
    setValue(parentData[ind][name]);
  }, [change]);

  return (
    <div className="text-field">
      <input
        type="text"
        className="input-field"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          parentData[ind][name] = e.target.value;
          setData(parentData);
        }}
        onFocus={addBorder}
        onBlur={removeBorder}
      />
    </div>
  );
};

export const SelectField = ({
  ind,
  name,
  parentData,
  data,
  setData,
  change,
  readOnly,
  safetydata,
  autofillProp,
  disabled,
}) => {
  const [value, setValue] = React.useState(parentData[ind][name]);
  React.useEffect(() => {
    setValue(parentData[ind][name]);
  }, [change]);

  const changeValue = (val, aff = "TRUCK", id = null) => {
    setValue(val);
    parentData[ind][name] = val;
    if (name == "safetyItem") {
      parentData[ind]["affiliatedWith"] = aff;
      parentData[ind]["safetyItemId"] = id;
    }
    setData(parentData);
  };
  const filledItem = Object.values(parentData)
    .map((item, _) => item.safetyItem)
    .filter((_, i) => i != ind);
  return (
    <div className="text-field" style={{ paddingTop: 0, paddingBottom: 0 }}>
      <Select
        label=""
        name={name}
        readOnly={readOnly}
        data={readOnly ? data : safetydata}
        value={value}
        autofillProp={autofillProp}
        setValue={changeValue}
        disabled={disabled}
        filledItem={filledItem}
      />
    </div>
  );
};
