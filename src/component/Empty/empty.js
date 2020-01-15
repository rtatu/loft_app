import React from "react";
import empty_data from "../../static/empty.svg";
import "./empty.sass";
import { NavLink } from "react-router-dom";
import DatatableEvents from "../Datatable/datatable_renderer_events";

const Empty = props => (
  <div class="empty">
    <div>
      <img src={empty_data} />
      <p>No data found here.</p>
      {props.link ? (
        <NavLink
          onClick={() =>
            DatatableEvents["formEvent"](
              `${props.link.toLocaleLowerCase(props.link)}`,
              props.datastore
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
