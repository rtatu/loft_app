import React from "react";

const DetailsInput = ({ label, name, value, handleChange, type = "text" }) => (
  <div className="fo-input">
    <label style={{ marginBottom: "5px" }}>{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={e => handleChange(e, name)}
    />
  </div>
);

const DetailsInputWithUnitJSX = props => (
  <div className="fo-input-wrapper">
    <div className="fo-input">
      <label style={{ marginBottom: "5px" }}>{props.label}</label>
      <input
        type="number"
        name="value"
        value={props.value.value}
        onChange={props.handleChange}
        onBlur={props.handleValueChange}
      />
    </div>

    <div>
      <select value={props.value.unit} onChange={props.handleUnitChange}>
        <option value={props.unit[0]}>{props.unit[0]}</option>
        <option value={props.unit[1]}>{props.unit[1]}</option>
      </select>
    </div>
  </div>
);

class DetailsInputWithUnit extends React.Component {
  constructor(props) {
    super(props);
    this.unit = [];

    switch (this.props.unit) {
      case "AVERAGE":
        this.unit = ["KM/L", "M/G", this.mpg2kml];
        break;

      case "DISTANCE":
        this.unit = ["KM", "M", this.m2k];
        break;
      default:
        this.unit = ["L", "G", this.g2l];
        break;
    }

    this.state = {
      value: {
        value: this.props.value,
        unit: this.unit[0]
      },
      name: this.props.name
    };
  }

  m2k = (val, unit) => console.log(val, unit) || (unit == "KM" ? val : val * 1.60934);

  mpg2kml = (val, unit) => (unit == "KM/L" ? val : val * 0.43);

  g2l = (val, unit) => (unit == "L" ? val : val * 3.78541);

  handleUnitChange = e => {
    let unit = e.target.value;
    this.setState({ value: { ...this.state.value, unit } });
  };

  handleValueChange = e => {
    let value = e.target.value;
    let unit = this.state.value.unit;
    let convertedValue = this.unit[2](value, unit);
    console.log(convertedValue)
    if(this.props.unit == "DISTANCE") {
        convertedValue = convertedValue < 5 ? 5 : convertedValue
    } else {
        convertedValue = convertedValue < 0 ? 0 : convertedValue
    }
    this.setState({ value: { ...this.state.value, value : convertedValue } }, () => {
      this.props.handleChange(this.state.value.value, this.props.name)
    });
  };

  handleChange = e => {
    let value = e.target.value;
    this.setState({ value: { ...this.state.value, value  } });
  }

  render() {
    return (
      <DetailsInputWithUnitJSX
        handleUnitChange={this.handleUnitChange}
        handleValueChange={this.handleValueChange}
        handleChange={this.handleChange}
        value={this.state.value}
        label={this.props.label}
        unit={this.unit}
      />
    );
  }
}

export { DetailsInputWithUnit };

export default DetailsInput;
