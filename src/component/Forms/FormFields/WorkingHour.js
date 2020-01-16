import React from "react";
import "./fields.sass";
import down from "../../../static/icon/down.svg";
import CheckBox from "./Checkbox";

const WorkingHour = ({
  label,
  handleChange,
  handleBlur,
  handleFocus,
  name,
  value,
  defaultValue,
  inputRef,
  dropDownRef,
  show
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
    {show ? (
      <ul className="workingHour" ref={dropDownRef}>
        {Object.keys(value).map((item, index) => (
          <li className="wh-day" key={index}>
            <CheckBox label={item} value={value} handleChange={handleChange} />
            <div className="day-time">
              <div className="day-time-from">
                <span>From</span>
                <input
                  type="time"
                  className="time-field from"
                  value={value[item]["from"]}
                  onChange={e => handleChange(e, "from", item)}
                />
              </div>
              <div className="day-time-to">
                <span>To</span>
                <input
                  type="time"
                  className="time-field to"
                  value={value[item]["to"]}
                  onChange={e => handleChange(e, "to", item)}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    ) : null}
  </div>
);

const DropDownHOC = FormField => {
  class DropDown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: this.props.name,
        label: this.props.label,
        value: {
          Sunday: {
            checked: false,
            from: "00:00",
            to: "00:00"
          },
          Monday: {
            checked: false,
            from: "00:00",
            to: "00:00"
          },
          Tuesday: {
            checked: false,
            from: "00:00",
            to: "00:00"
          },
          Wednesday: {
            checked: false,
            from: "00:00",
            to: "00:00"
          },
          Thursday: {
            checked: false,
            from: "00:00",
            to: "00:00"
          },
          Friday: {
            checked: false,
            from: "00:00",
            to: "00:00"
          },
          Saturday: {
            checked: false,
            from: "00:00",
            to: "00:00"
          }
        },
        show: false
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

  DropDown.prototype.componentDidMount = function() {
    document.addEventListener("mousedown", this.handleDropDown.bind(this));
  };

  DropDown.prototype.componentWillUnmount = function() {
    document.removeEventListener("mousedown", this.handleDropDown.bind(this));
  };

  DropDown.prototype.handleDropDown = function(e) {
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

export default DropDownHOC(WorkingHour);
