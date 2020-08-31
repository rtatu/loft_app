import React from "react";
import "./safetyform.scss";
import { header, newdata } from "./safetydata";
import {
  TextField,
  NumericalField,
  MultiLineField,
  SelectField,
} from "./FormFields";
import addrow from "../../../static/icon/safety/addrow.svg";

class SafetyTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      row: [],
      change: 0,
    };
    this.data = [];
  }

  componentDidMount() {
    this.resizeWindow('init');
  }

  resizeWindow = (init) => {
    let table = document.getElementsByClassName("table")[0];
    let width =  (init)? 1250: electronRemote.getCurrentWindow().getSize()[0];
    let height = Math.min(table.offsetHeight + 300, 1200);
    electronRemote.getCurrentWindow().setSize(width, height);
  };

  setData = (data) => {
    this.data = data;
    this.setState({ change: this.state.change + 1 });
  };

  renderCol = (props) => {
    switch (props.type) {
      case "text":
        return (
          <TextField
            {...props}
            setData={this.setData}
            parentData={this.data}
            change={this.state.change}
          />
        );
      case "number":
        return (
          <NumericalField
            {...props}
            setData={this.setData}
            parentData={this.data}
            change={this.state.change}
          />
        );
      case "multiline":
        return (
          <MultiLineField
            {...props}
            setData={this.setData}
            parentData={this.data}
            change={this.state.change}
          />
        );
      case "select":
        return (
          <SelectField
            {...props}
            setData={this.setData}
            parentData={this.data}
            change={this.state.change}
          />
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="tableWrapper">
        <div className="table">
          <div className="tablerow">
            {header.map((item, _) => (
              <div className={`header-col ${item.style}`} key={item.id}>
                {item.label}
              </div>
            ))}
          </div>
          {this.state.row.map((_, ind) => (
            <div className="tablerow" key={ind}>
              {header.map((item, index) => (
                <div className={`normal-col col-${item.style}`} key={index}>
                  {this.renderCol({ ...item, ind: ind })}
                </div>
              ))}
            </div>
          ))}
          <div className="tablerow">
            {header.map((item, _) => (
              <div className={`add-col ${item.style}`} key={item.id}>
                {item.id == 1 ? (
                  <img
                    src={addrow}
                    onClick={() => {
                      this.data = [...this.data, { ...newdata }];
                      this.setState({ row: [...this.state.row, 1] });
                      this.resizeWindow()
                    }}
                  />
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="form-action" style={{width:'90%', margin:'50px auto'}}>
          <button className="discard" type="button">
            Discard Changes
          </button>
          <button className="save" type="submit">
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default SafetyTable;
