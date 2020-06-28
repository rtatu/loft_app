import React from "react";
import "./fields.sass";
import down from "../../../static/icon/down.svg";
import CheckBox from "./Checkbox";

const CheckList = ({
  label,
  handleChange,
  handleBlur,
  handleFocus,
  name,
  value,
  defaultValue,
  inputRef,
  dropDownRef,
  show,
  error,
}) => (
  <div className="field">
    <label>{label}</label>
    <input
      type="text"
      name={name}
      ref={inputRef}
      onFocus={handleFocus}
      onBlur={handleBlur}
      readOnly={true}
    />
    <img src={down} className="select-down" />
    {error ? <p className="form-error">{error}</p> : null}
    {show ? (
      <ul className="workingHour" ref={dropDownRef}>
        {Object.keys(value).map((item, index) => (
          <li className="wh-day" key={index}>
            <CheckBox label={item} value={value} handleChange={handleChange} />
          </li>
        ))}
      </ul>
    ) : null}
  </div>
);

const DropDownHOC = (FormField) => {
  class DropDown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: this.props.name,
        label: this.props.label,
        value: {
          Class: {
            checked: false,
          },
          Department: {
            checked: false,
          },
          Driver: {
            checked: false,
          },
          Location: {
            checked: false,
          },
          Payterm: {
            checked: false,
          },
          Item: {
            checked: false,
          },
          Service: {
            checked: false,
          },
          Subsidiary: {
            checked: false,
          },
          Truck: {
            checked: false,
          },
          Trailer: {
            checked: false,
          },
          Customers: {
            checked: false,
          },
          "Purchase Order": {
            checked: false,
          },
          Issues: {
            checked: false,
          },
          Inventory: {
            checked: false,
          },
          "Order Entry": {
            checked: false,
          },
        },
        show: false,
      };

      this.input = React.createRef();
      this.dropDown = React.createRef();
    }

    handleChange = (e, type, day) => {
      let dayData = { ...this.state.value[day] };

      if (type == "checked") {
        dayData["checked"] = !dayData["checked"];
      } else {
        dayData[type] = e.target.value != "" ? e.target.value : "00:00";
      }
      this.setState(
        { value: { ...this.state.value, [day]: { ...dayData } } },
        () => console.log(this.state)
      );
    };

    render() {
      return (
        <FormField
          name={this.state.name}
          label={this.state.label}
          inputRef={this.input}
          dropDownRef={this.dropDown}
          show={this.state.show}
          handleFocus={this.onInputFocus}
          handleBlur={this.onInputBlur}
          handleChange={this.handleChange}
          value={this.state.value}
        />
      );
    }
  }

  DropDown.prototype.componentDidMount = function () {
    document.addEventListener("mousedown", this.handleDropDown.bind(this));
  };

  DropDown.prototype.componentWillUnmount = function () {
    document.removeEventListener("mousedown", this.handleDropDown.bind(this));
  };

  DropDown.prototype.handleDropDown = function (e) {
    if (this.input.current == e.target) {
      this.setState({ show: true });
      return;
    }

    if (e.target.classList.contains("time-field")) {
      return;
    }

    if (e.target.classList.contains("checkbox-field")) {
      e.preventDefault();
      return;
    }

    this.setState({ show: false }, () => {
      this.props.setFieldsValue(this.props.name, this.state.value, false);
    });
  };

  return DropDown;
};

export default DropDownHOC(CheckList);
