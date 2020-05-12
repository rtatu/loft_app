import React from "react";
import FieldHOC from "./FieldHOC";

const CheckBox = (props) => (
  <div className="fb-check">
    <input
      type="checkbox"
      name="rememberMe"
      className="fb-col-vis-check checkbox-field"
      onChange={(e) => props.handleChange(e, props.label)}
      checked={props.isMulti ? undefined : props.checked}
    />
    <div className="fb-custom-checkbox">
      <svg className="fb-svg svg-icon" viewBox="0 0 20 20">
        <path
          d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
          style={{ stroke: "rgb(255, 255, 255)", fill: "white" }}
        ></path>
      </svg>
    </div>
    <label name="fb-col-vis-check">{props.label}</label>
  </div>
);

class FbFieldCheckBox extends React.Component {
  state = {
    checked: "",
  };

  handleChange = (e, label) => {
    if (this.props.isMulti) return;
    let checked = this.state.checked;

    if (checked == label) {
      this.setState({ checked: "" });
      return;
    }

    this.setState({ checked: label });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "15px",
        }}
      >
        {this.props.options &&
          this.props.options.map((option, index) => {
            return (
              <CheckBox
                handleChange={this.handleChange}
                checked={option == this.state.checked}
                label={option}
                key={index}
                isMulti={this.props.isMulti}
              />
            );
          })}
      </div>
    );
  }
}

export default FieldHOC(FbFieldCheckBox);
