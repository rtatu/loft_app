import React from "react";

/**
 * @param props.question => question
 * @param props.placeholder => placeholder
 * @param props.helpText => helpText
 * @param props.handleChange => handleChange
 * @param props.index => index of the question
 */

class Essentials extends React.Component {
  state = {
    question: this.props.question || "",
    placeholder: this.props.placeholder || "",
    helpText: this.props.helpText || "",
  };

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      question: props.question,
      placeholder: props.placeholder,
      helpText: props.helpText,
    });
  }

  handleChange = (e, name) => {
    let value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.props.handleChange(name, this.props.index, value);
    });
  };

  render() {
    return (
      <div className="fb-ed-essentials">
        <div>
          <label>Label</label>
          <input
            type="text"
            placeholder={"Question"}
            onChange={(e) => this.handleChange(e, "question")}
            value={this.state.question}
          />
        </div>

        <div>
          <label>Placeholder</label>
          <input
            type="text"
            placeholder={"Placeholder"}
            onChange={(e) => this.handleChange(e, "placeholder")}
          />
        </div>

        <div>
          <label>Help Text</label>
          <input
            type="text"
            placeholder={"Help Text"}
            onChange={(e) => this.handleChange(e, "helpText")}
          />
        </div>
      </div>
    );
  }
}

export default Essentials;
