import React from "react";
import "./planner.sass";
import { NavLink } from "react-router-dom";
import profile from "./../../static/avatar_current.png";

const days = [
  [1, "Monday"],
  [2, "Tuesday"],
  [3, "Wednesday"],
  [4, "Thursday"],
  [5, "Friday"],
  [6, "Saturday"],
  [7, "Sunday"],
  [8, "Monday"]
];

const data = [
  {
    name: "Rohit Tatu",
    code: "3ASDCW",
    currentStatus: "In Transit",
    history: [
      {
        status: "In Transit",
        span: [1, 3],
        source: "",
        destination: ""
      },
      {
        status: "Waiting",
        day: 4,
        source: "",
        destination: ""
      }
    ]
  },
  {
    name: "James Murphy",
    code: "3ASECM",
    currentStatus: "Waiting",
    history: [
      {
        status: "Waiting for Order",
        day: 4,
        source: "",
        destination: ""
      }
    ]
  },
  {
    name: "John Snow",
    code: "3ASDCW",
    currentStatus: "Waiting",
    history: [
      {
        status: "In Transit",
        span: [1, 1],
        source: "",
        destination: ""
      },
      {
        status: "Dropping Trailer in Mississauaga, ON",
        day: 2,
        source: "",
        destination: ""
      },
      {
        status: "Waiting for order",
        day: 3,
        source: "",
        destination: ""
      }
    ]
  },
  {
    name: "Samwell Tarly",
    code: "3ASDCW",
    currentStatus: "On Vacation",
    history: [
      {
        status: "On Vacation",
        span: [1, 8],
        source: "",
        destination: ""
      }
    ]
  },
  {
    name: "Commander Yun",
    code: "3ASDCW",
    currentStatus: "In Transit",
    history: [
      {
        status: "In Transit",
        span: [2, 3],
        source: "",
        destination: ""
      }
    ]
  },
  {
    name: "Yun Jang",
    code: "3ASDCW",
    currentStatus: "Picking Load",
    history: [
      {
        status: "Picking load in Ontario",
        day: 4,
        source: "",
        destination: ""
      }
    ]
  },
  {
    name: "Ronnie Sull",
    code: "3ASDCW",
    currentStatus: "Waiting",
    history: [
      {
        status: "Waiting for Order",
        day: 3,
        source: "",
        destination: ""
      }
    ]
  }
  // {
  //   name: "Rohit Tatu",
  //   code: "3ASDCW",
  //   currentStatus: "In Transit",
  //   history: [
  //     {
  //       status: "In Transit",
  //       from: "1",
  //       to: "3",
  //       source: "",
  //       destination: ""
  //     }
  //   ]
  // }
];

const Planning = () => (
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
            <NavLink className="planner-active">Driver</NavLink>
            <NavLink>Truck</NavLink>
            <NavLink>Trailer</NavLink>
            <NavLink>Chasis</NavLink>
            <NavLink>Container</NavLink>
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

const PlannerData = () => <div>Hello World!</div>;

export default Planning;
