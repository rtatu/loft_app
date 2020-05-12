import React from "react";
import search from "../../../static/icon/search.svg";
import "./search.sass";

/**
 * @param placeholder
 * @param handleSearch
 * @param style
 */
class SearchBar extends React.Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    let value = e.target.value;

    this.setState({ text: value }, () => {
      if (this.props.handleSearch) this.props.handleSearch(this.state.text);
    });
  };
  render() {
    return (
      <div className="search-input" style={this.props.style}>
        <input
          placeholder={this.props.placeholder}
          value={this.state.text}
          onChange={this.handleChange}
        />
        <img src={search} className="search" />
      </div>
    );
  }
}

export default SearchBar;
