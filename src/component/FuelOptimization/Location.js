import React from "react";
import "./geo.css";
import Geosuggest from "react-geosuggest";

class LocationSearch extends React.Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <Geosuggest />
      </div>
    );
  }
}

export default LocationSearch;
