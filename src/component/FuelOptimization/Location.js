import React from "react";
import "./geo.css";
import Geosuggest from "react-geosuggest";

class LocationSearch extends React.Component {
  onSuggestSelect = (val) => {
    this.props.handleChange(val, this.props.name, this.props.index)
  }


  render() {
    return (
      <div>
        <div style={flexEnable}>
          <label>{this.props.label}</label>
          {
            (this.props.onClose) ?
              <img src={this.props.close} style={closeImage} onClick={() => this.props.onClose(this.props.index)} />
              : null
          }
        </div>
        <Geosuggest onSuggestSelect={this.onSuggestSelect} initialValue={this.props.initialValue} />
      </div>
    );
  }
}

const flexEnable = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '5px'
}

const closeImage = {
  marginLeft: 'auto',
  height: '10px',
  cursor: 'pointer'
}

export default LocationSearch;
