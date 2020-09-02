import React from "react";
import "./safetyform.scss";
import { header, newdata } from "./safetydata";
import cogoToast from "cogo-toast";
import {
  TextField,
  NumericalField,
  MultiLineField,
  SelectField,
} from "./FormFields";
import Fields from "../../Forms/FormFields";
import addrow from "../../../static/icon/safety/addrow.svg";
import del from "../../../static/icon/svg/delete_red.svg";

class SafetyTable extends React.Component {
  constructor(props) {
    super(props);
    this.id = null;
    this.state = {
      row: [],
      change: 0,
      name: "",
    };
    this.data = [];
  }

  componentDidMount() {
    this.resizeWindow("init");
    this.setUpdateData()
  }

  setUpdateData = () => {
    this.id = this.props.match.params.id;
    let editItem =
      !!this.id && JSON.parse(JSON.stringify(this.props.groups[this.id]));
    let row = [];
    let data = [];
    !!editItem &&
      Object.values(editItem.safetyJoins).map((item, _) => {
        row.push(1);
        data.push({
          ...item,
          safetyItemId: item.safetyItem.id,
          safetyItem: item.safetyItem.safetyItem,
          affiliatedWith: item.safetyItem.affiliatedWith,
        });
      });
    this.data = data;
    this.setState({ row, name: !!editItem ? editItem.name : "" });
  };

  resizeWindow = (init) => {
    let table = document.getElementsByClassName("table")[0];
    let width = init ? 1250 : electronRemote.getCurrentWindow().getSize()[0];
    let height = Math.min(table.offsetHeight + 370, 1200);
    electronRemote.getCurrentWindow().setSize(width, height);
  };

  setData = (data) => {
    this.data = data;
    this.setState({ change: this.state.change + 1 });
  };

  validateRow = (ind) => {
    let data = JSON.parse(JSON.stringify(this.data[ind]));
    let err = "";
    if (!data.safetyItemId) {
      err = "Invalid Safety Item";
    } else if (data.description.trim() == "") {
      err = "Description can't be empty";
    } else if (data.mileage <= 0 && period <=0) {
      err = "Mileage or period should be greater than zero";
    }
    return err;
  };

  delRow = (ind) => {
    this.data.splice(ind, 1);
    let row = [...this.state.row];
    row.splice(ind, 1);
    this.setState({ row });
  };

  addRow = () => {
    if (this.data.length == 0) {
      this.data = [...this.data, { ...newdata }];
      this.setState({ row: [...this.state.row, 1] });
      this.resizeWindow();
      return;
    }
    let err = this.validateRow(this.data.length - 1);
    if (err == "") {
      this.data = [...this.data, { ...newdata }];
      this.setState({ row: [...this.state.row, 1] });
      this.resizeWindow();
    } else {
      cogoToast.error(err);
    }
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
            safetydata={this.props.data}
            setData={this.setData}
            parentData={this.data}
            change={this.state.change}
          />
        );
      default:
        return null;
    }
  };

  submitData = () => {
    let err = "";
    for (let i = 0; i < this.data.length; i++) {
      err = this.validateRow(i);
      if (err != "") {
        break;
      }else{
        this.data[i]['mileage']= parseFloat(this.data[i]['mileage'])
        this.data[i]['period']= parseFloat(this.data[i]['period'])
      }
    }
    if (this.state.name == "") {
      err = "Please enter safety group name";
    }
    if (this.data.length == 0) {
      err = "Please add at least one safety item";
    }
    if (err != "") {
      cogoToast.error(err);
    } else {
      let data = {
        name: this.state.name,
        items: this.data,
      };
      if (!this.id) {
        this.props.addSafetyGroup(data).then((res) => {
          if (res) {
            electronRemote.getCurrentWindow().close();
          }
        });
      } else {
        this.props
          .updateSafetyGroup({ ...data, id: parseInt(this.id) })
          .then((res) => {
            if (res) {
              electronRemote.getCurrentWindow().close();
            }
          });
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="tableWrapper">
          <div className="name-wrapper">
            <Fields.Text
              label="Safety Group Name"
              handleChange={(e) => this.setState({ name: e.target.value })}
              name="name"
              value={this.state.name}
            />
          </div>
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
                <img
                  src={del}
                  className="delete-row"
                  onClick={() => this.delRow(ind)}
                />
              </div>
            ))}
            <div className="tablerow">
              {header.map((item, _) => (
                <div className={`add-col ${item.style}`} key={item.id}>
                  {item.id == 1 ? (
                    <img src={addrow} onClick={this.addRow} />
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          </div>

          <div
            className="form-action"
            style={{ width: "90%", margin: "50px auto" }}
          >
            <button className="discard" type="button">
              Discard Changes
            </button>
            <button className="save" type="submit" onClick={this.submitData}>
              Save
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SafetyTable;
