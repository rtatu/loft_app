import React from "react";
import empty_data from "../../static/empty.svg";
import "./empty.sass";
import { NavLink } from "react-router-dom";
import DatatableEvents from "../Datatable/datatable_renderer_events";

const Empty = (props) => {
  let isNested = props.navigate && props.tableName ? true : false;
  let link = isNested
    ? `${props.navigate}/${props.tableName}`
    : `${props.navigate}`;
  let tableName = isNested ? props.tableName : props.navigate;

  let displayLink = isNested
    ? props.tableName.charAt(0).toLocaleUpperCase() + props.tableName.slice(1)
    : props.navigate.charAt(0).toLocaleUpperCase() + props.navigate.slice(1);

  return (
    <div className="empty">
      <div>
        <img src={empty_data} />
        <p>No data found here.</p>

        <NavLink
          onClick={(e) => DatatableEvents.newForm(e, link, tableName)}
          to="#"
        >
          {`Add New ${displayLink}`}
        </NavLink>
      </div>
    </div>
  );
};
export default Empty;
