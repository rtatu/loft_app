import React from "react";
import empty_data from "../../static/empty.svg";
import "./empty.sass";
import { NavLink } from "react-router-dom";
import DatatableEvents from "../Datatable/datatable_renderer_events";

const Empty = (props) => (
  <div className="empty">
    <div>
      <img src={empty_data} />
      <p>No data found here.</p>
      {props.link ? (
        <NavLink
          onClick={(e) =>
            DatatableEvents.newForm(
              e,
              `${props.navigate}/${props.tableName}`,
              props.tableName
            )
          }
          to="#"
        >
          Add New {props.link}
        </NavLink>
      ) : null}
    </div>
  </div>
);

export default Empty;
