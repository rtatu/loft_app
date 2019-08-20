import React from "react";
import down from "../../../static/icon/down.svg";

class Select extends React.Component {
  // constructor

  constructor(props) {
    super(props);

    // create refs

    this.state = {
      show: false,
      suggestions: this.props.data,
      value: this.props.value || this.props.defaultValue || "",
      select: -1
    };

    this.input = React.createRef();
    this.list = React.createRef();
    this.dropDown = React.createRef();
    this.selected = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  handleClick = e => {
    if (e.target == this.input.current) {
      e.preventDefault();
      this.input.current.focus();
      return;
    }

    if (e.target == this.dropDown.current) {
      e.preventDefault();
      return;
    }

    this.input.current.blur();
  };

  onDownClick = e => {
    e.preventDefault();

    if (!this.state.show) {
      this.input.current.focus();
    } else {
      this.input.current.blur();
    }
  };

  onInputFocus = e => {
    this.setState({ show: true });
  };

  onInputBlur = e => {
    this.setState(
      { show: false, select: -1 },
      this.pushChange(this.state.value)
    );
  };

  handleSuggestions = value => {
    let d = [...this.props.data];
    let regex = new RegExp(`^${value}`, "i");
    let suggestions = d.sort().filter(v => regex.test(v));

    this.setState({ value, suggestions, select: 0 });
  };

  handleOptionClick = e => {
    e.preventDefault();
    this.setState({ value: e.target.innerText });
  };

  handleChange = e => {
    // search from suggestion
    let inputText = e.target.value;

    if (inputText != "") {
      this.handleSuggestions(inputText);
    } else {
      this.setState({ value: "", select: -1, suggestions: this.props.data });
    }
  };

  onKeyDown = e => {
    if (
      e.keyCode == 40 &&
      this.state.select + 1 < this.state.suggestions.length
    ) {
      // if down key is pressed

      this.setState({ select: this.state.select + 1 }, () => {
        this.setState({ value: this.selected.current.innerText });
        this.selected.current.scrollIntoView({ block: "nearest" });
      });
    }

    if (e.keyCode == 38 && this.state.select - 1 >= 0) {
      // if up key is pressed
      this.setState({ select: this.state.select - 1 }, () => {
        this.setState({ value: this.selected.current.innerText });
        this.selected.current.scrollIntoView({ block: "nearest" });
      });
    }

    if (e.keyCode == 13) {
      // if enter is pressed
      if (
        this.selected.current !== null &&
        this.selected.current !== undefined
      ) {
        this.setState({ value: this.selected.current.innerText }, () =>
          this.input.current.blur()
        );
      }
    }

    if (e.keyCode == 27) {
      // if esc key is pressed
      this.input.current.blur();
    }

    if (e.keyCode == 9) {
      // if tab is pressed
      if (
        this.selected.current !== null &&
        this.selected.current !== undefined
      ) {
        this.setState({ value: this.selected.current.innerText });
      } else if (this.state.suggestions.length == 0) {
        this.setState({ value: "", suggestions: this.props.data });
      }
    }
  };

  pushChange = value => {
    this.props.setFieldsValue(this.props.name, value, false);
  };

  render() {
    return (
      <div className="field">
        <label>{this.props.label}</label>
        <input
          type="text"
          ref={this.input}
          onBlur={this.onInputBlur}
          onFocus={this.onInputFocus}
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.onKeyDown}
          readOnly={this.props.readOnly}
          name={this.props.name}
        />
        <img
          src={down}
          className="select-down"
          onMouseDown={this.onDownClick}
          ref={this.dropDown}
        />
        {this.state.show ? (
          <ul className="select" ref={this.list}>
            {this.state.suggestions.map((value, index) => (
              <li
                key={index}
                ref={index == this.state.select ? this.selected : null}
                onMouseDown={this.handleOptionClick}
                className={index == this.state.select ? "selected" : null}
              >
                {value}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Select;
