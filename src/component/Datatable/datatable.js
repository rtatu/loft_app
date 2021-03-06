import React from "react";
import "./datatable.sass";
import colResize from "../resize.js";
import DtConfig from "./datatable_config";
import DTHEADER from "./datatable_header";
import DatatableEvents from "./datatable_renderer_events";
import ContextMenu from "../ContextMenu/ContextMenu";
import { withRouter } from "react-router-dom";

// proto for sum
Array.prototype.sum = function () {
  return this.reduce((a, b) => a + b, 0);
};

// get the flex for calculated width
Array.prototype.getFlex = function () {
  let min = Math.min(...this);
  return this.map((item) => parseInt(item / min));
};

function getIn(data, prop) {
  let path = prop.split(".");
  let temp = data;
  for (let p of path) {
    if (temp[p] != undefined && temp[p] != null && temp != "") {
      temp = temp[p];
    }
  }

  if (typeof temp == "object") {
    return "";
  }

  if (typeof temp == "boolean") {
    return temp ? "True" : "False";
  }

  return temp;
}

const DatatableJSX = (props) => (
  <div className="datatable">
    <div className="dthead">
      <ul className="dtr">
        {/* <li>
                    <input type="checkbox"/>
                </li> */}
        {props.datatable_head.map((item, index) => (
          <li
            key={index}
            className={`dtd col-${index}`}
            style={
              props.styles[`col-${index}`] ? props.styles[`col-${index}`] : {}
            }
          >
            <span>{item.label}</span>
            {/* <span className="resize-line" draggable={true} data-col={index}></span> */}
          </li>
        ))}
      </ul>
    </div>

    <div className="dtbody">
      {props.data.map((item, index) => (
        <ul
          key={index}
          className="dtr"
          data-id={getIn(item, "id")}
          onDoubleClick={props.sendDataToEditMode}
        >
          {/* <li>
                            <input type="checkbox"/>
                        </li> */}
          {props.datatable_head.map((nested_item, nested_index) => (
            <li
              key={nested_index}
              className={`dtd col-${nested_index}`}
              style={
                props.styles[`col-${nested_index}`]
                  ? props.styles[`col-${nested_index}`]
                  : {}
              }
              onContextMenu={(e) =>
                props.showContext(
                  e,
                  getIn(item, nested_item.prop),
                  nested_item.prop,
                  nested_item.label,
                  getIn(item, "id")
                )
              }
            >
              {getIn(item, nested_item.prop)}
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);

class DatatableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: {},
      context: {
        show: false,
        x: 0,
        y: 0,
        idToBeSend: null,
      },
    };
  }

  componentDidMount() {
    console.log(this.props, "1111");

    if (this.props.data) {
      this.resizeEvent();
    }

    document.addEventListener("click", this.hideContextMenu, false);
  }

  componentWillUnmount() {
    // remove event listener
    if (this.colResize) {
      this.colResize.removeEvent();
    }

    document.removeEventListener("click", this.hideContextMenu, false);
  }

  resizeEvent = () => {
    let coloumns = [];

    // get all the coloumns

    for (
      let i = 0;
      i < DTHEADER[this.props.navigate][this.props.tableName].length;
      i++
    ) {
      coloumns.push(document.getElementsByClassName(`col-${i}`));
    }

    // calculate autoWidth given by browser
    let colWidth = [];

    // for every coloumn of columns get the maximum width
    for (let coloumn of coloumns) {
      let width = 0;
      for (let cell of coloumn) {
        if (cell.offsetWidth > width) {
          width = cell.offsetWidth;
        }
      }
      colWidth.push(parseInt(width));
    }

    // create styles used by calculated width
    /**
     * set the flex basis
     * set the min width
     * and flex property
     */
    let ind = 0;
    let style = {};
    let flexValues = colWidth.getFlex();
    for (let col of colWidth) {
      style[`col-${ind}`] = {
        flexBasis: `${col}px`,
        minWidth: `${col + 16}px`,
        flex: flexValues[ind],
      };
      ind++;
    }

    this.setState({ styles: { ...style } });

    let thead = document.getElementsByClassName("dthead")[0];
    let tbody = document.getElementsByClassName("dtbody")[0];

    thead.style.minWidth = `${colWidth.sum() + 16 * colWidth.length}px`;

    tbody.style.minWidth = `${colWidth.sum() + 16 * colWidth.length}px`;

    // console.log(tbody.style.minWidth, tbody.offsetWidth, thead.offsetWidth, thead.style.minWidth)

    // add event listener for resize
    this.colResize = new colResize("resize-line", this.pushStyles);
    this.colResize.addEvent();
  };

  pushStyles = (data, diffX, col) => {
    let styles = { ...this.state.styles };
    styles[`col-${col}`] = {
      ...styles[`col-${col}`],
      // flexBasis : data + 'px',
      minWidth: data + "px",
    };

    let thead = document.getElementsByClassName("dthead")[0];
    let tbody = document.getElementsByClassName("dtbody")[0];

    thead.style.minWidth = `${thead.offsetWidth + diffX}px`;

    tbody.style.minWidth = `${tbody.offsetWidth + diffX}px`;

    // console.log(tbody.style.minWidth, tbody.offsetWidth, thead.offsetWidth, thead.style.minWidth)
    this.setState({ styles });
  };

  // editMode - form
  sendDataToEditMode = (e) => {
    let id = e.target.parentElement.dataset.id;
    DatatableEvents.editForm(
      `${this.props.navigate}/${this.props.tableName}`,
      this.props.tableName,
      id
    );
  };

  render() {
    console.log(this.props.tableName, "hellow");
    return (
      <div
        className="dt_container"
        style={{
          margin: !this.props.hideHeaderNav ? "0px 10px" : "0px",
        }}
      >
        {!this.props.hideHeaderNav ? (
          <DtConfig
            name={this.props.tableName}
            navigate={this.props.navigate}
          />
        ) : null}
        <DatatableJSX
          styles={this.state.styles}
          datatable_head={DTHEADER[this.props.navigate][this.props.tableName]}
          data={this.props.data}
          sendDataToEditMode={this.sendDataToEditMode}
          showContext={this.handleContextMenu}
        />
        {this.state.context.show && !this.props.hideContext ? (
          <ContextMenu
            X={this.state.context.x}
            Y={this.state.context.y}
            handleContextMenu={this.selectOptionFromContext}
          />
        ) : null}
      </div>
    );
  }

  handleContextMenu = (e, value, prop, label, customerId) => {
    let context = { ...this.state.context };
    context.x = e.pageX;
    context.y = e.pageY;
    context.show = true;
    context.idToBeSend = customerId;
    this.setState({ context });
  };

  hideContextMenu = (e) => {
    let context = { ...this.state.context };
    context.show = false;
    this.setState({ context });
    return true;
  };

  selectOptionFromContext = (e, type) => {
    if (type == "manage_contact") {
      let customerId = this.state.context.idToBeSend;
      if (customerId === null) return;
      DatatableEvents.manageContacts(customerId);
    }

    if (type == "view") {
      this.props.history.push(
        `/database-maintenance/${this.props.navigate}/${this.props.tableName}/${this.state.context.idToBeSend}`
      );
    }
  };
}

export default withRouter(DatatableContainer);
