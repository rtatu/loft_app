import React from "react";
import data from "./data";
import { lastday } from "./dateHelpers";
import { NavLink } from "react-router-dom";
import "./planner.sass";

const days = [
  [1, "Monday"],
  [2, "Tuesday"],
  [3, "Wednesday"],
  [4, "Thursday"],
  [5, "Friday"],
  [6, "Saturday"],
  [7, "Sunday"],
  [8, "Monday"],
];

class Planning extends React.Component {
  constructor(props) {
    super(props);

    this.currentMonth = new Date().getMonth();

    this.totalDays = lastday(2020, this.currentMonth);
  }

  render() {
    return (
      <div className="planner-container">
        <div className="planner">
          <div className="planner-name">
            <h1>Planner</h1>
          </div>
          <div className="planner-month">August</div>

          {/*  planner header */}
          <div className="planner-header">
            {/* link header */}

            <div className="planner-header-left">
              {/* links */}
              <div className="planner-links">
                <NavLink className="planner-active" to="#">
                  Driver
                </NavLink>
                <NavLink to="#">Truck</NavLink>
                <NavLink to="#">Trailer</NavLink>
                <NavLink to="#">Chasis</NavLink>
                <NavLink to="#">Container</NavLink>
              </div>
              {/* data-header */}
              <div className="planner-data-header">
                <span>Name</span>
                <span>Status</span>
              </div>
            </div>

            <div className="planner-header-right">
              {days.map((item, index) => (
                <div className="day" key={index}>
                  <span>{item[0]}</span>
                  <span>{item[1]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Planning;
