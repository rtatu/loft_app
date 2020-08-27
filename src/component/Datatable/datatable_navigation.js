import React from "react";
import "./datatable_navigation.sass";
import { NavLink } from "react-router-dom";
import data from "./dtnav.json";

const DtNavs = (props) =>
  Object.keys(data).includes(props.navigate) ? (
    <div className="dtnavs">
      <ul>
        {data[props.navigate].map((item, index) => {
          let tableName = item.split(" ").join("");
          tableName =
            tableName.charAt(0).toLocaleLowerCase() + tableName.slice(1);
          return (
            <li key={index}>
              <NavLink
                style={{ zIndex: `${data[props.navigate].length - index}` }}
                to={`${props.baseLink}/${tableName}`}
                activeClassName="dtn-active"
                activeStyle={{ zIndex: 100 }}
              >
                {item}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  ) : null;

export default DtNavs;
