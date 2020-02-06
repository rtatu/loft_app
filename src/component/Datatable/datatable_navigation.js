import React from "react";
import "./datatable_navigation.sass";
import { NavLink } from "react-router-dom";
import data from "./dtnav.json";

const DtNavs = props =>
  Object.keys(data).includes(props.navigate) ? (
    <div className="dtnavs">
      <ul>
        {data.list.map((item, index) => (
          <li key={index}>
            <NavLink
              style={{ zIndex: `${data.list.length - index}` }}
              to={`${props.baseLink}/${item.toLocaleLowerCase()}`}
              activeClassName="dtn-active"
              activeStyle={{ zIndex: 100 }}
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  ) : null;

export default DtNavs;
