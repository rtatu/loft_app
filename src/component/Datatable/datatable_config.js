import React from "react";
import filter from "./../../static/icon/filter.svg";
import down from "./../../static/icon/down.svg";
import action from "./../../static/icon/dots.svg";
import "./datatable_config.sass";
import DatatableEvents from "./datatable_renderer_events";
import PricingMenu from "../ContextMenu/PricingMenu";

const data = ["Edit", "Delete"];

const DtConfig = (props) => {
  const [showAction, setShow] = React.useState(false);
  const [pos, setPos] = React.useState({ X: 0, Y: 0 });
  return (
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
          onClick={(e) =>
            DatatableEvents.newForm(
              e,
              `${props.navigate}/${props.name}`,
              props.name
            )
          }
        >
          Add New{" "}
          {props.name.charAt(0).toLocaleUpperCase() + props.name.slice(1)}
        </button>
        <div
          onClick={(e) => {
            if (props.name == "itemPricing") {
              setPos({ X: e.clientX - 230, Y: e.clientY + 15 });
              setShow(!showAction);
            }
          }}
        >
          <img src={action} />
        </div>
        {showAction ? <PricingMenu {...pos} setShow={setShow} /> : null}
        <ul className="dtconfig-actions" style={{ display: "none" }}>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DtConfig;
