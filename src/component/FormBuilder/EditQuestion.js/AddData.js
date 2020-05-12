import React from "react";
import remove from "../../../static/icon/fb-fields/delete_blue.svg";

class AddData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data || [],
      value: "",
    };
  }

  handleChange = (e) => {
    let value = e.target.value;
    this.setState({ value });
  };

  addOptions = (e) => {
    let value = this.state.value;
    let d = [...this.state.data];
    d.push(value);
    this.setState({ data: d, value: "" }, () => {
      this.props.handleChange("data", this.props.index, this.state.data);
    });
  };

  removeOptions = (e) => {
    let value = this.state.value;

    let d = [...this.state.data];

    d.splice(d.indexOf(value), 1);

    this.setState({ data: d }, () => {
      this.props.handleChange("data", this.props.index, this.state.data);
    });
  };

  render() {
    return (
      <div className="fb-ed-add">
        <span>ADD DATA</span>
        <ul>
          {this.state.data.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <img src={remove} onClick={this.removeOptions} />
            </li>
          ))}
        </ul>

        <div className="fb-ed-add-button">
          <input
            type="text"
            placeholder={"Type to add data to field."}
            onChange={this.handleChange}
            value={this.state.value}
          />
          <button onClick={this.addOptions}>Add</button>
        </div>
      </div>
    );
  }
}

export default AddData;
