import React from "react";
import filter from "./../../static/icon/filter.svg";
import down from "./../../static/icon/down.svg";
import action from "./../../static/icon/dots.svg";
import "./datatable_config.sass";
import DatatableEvents from "./datatable_renderer_events";

const data = ["Edit", "Delete"];

const DtConfig = props =>
  console.log(props.name) || (
    <div className="dtconfig">
      <div className="dtconfig-input">
        <input placeholder="search or enter coloumn name" />
        <img src={down} className="down" />
        <div className="filter">
          <img src={filter} />
        </div>
      </div>
      <div className="dtconfig-actions">
        <button
          onClick={() =>
            DatatableEvents["formEvent"](props.name, props.datastore)
          }
        >
          Add New{" "}
          {props.name.charAt(0).toLocaleUpperCase() + props.name.slice(1)}
        </button>
        <div>
          <img src={action} />
        </div>
        <ul className="dtconfig-actions" style={{ display: "none" }}>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );

export default DtConfig;