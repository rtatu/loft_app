import React from "react";
import "./planner.sass";
import { NavLink } from "react-router-dom";
import profile from "./../../static/avatar_current.png";

const days = [
  [22, "Monday"],
  [23, "Tuesday"],
  [24, "Wednesday"],
  [25, "Thursday"],
  [26, "Friday"],
  [27, "Saturday"],
  [28, "Sunday"],
  [29, "Monday"],
  [30, "Tuesday"],
  ["01", "Thursday"],
  ["02", "Friday"],
  ["03", "Saturday"],
];

const color = {
  "In Transit": {
    color: "#FF2670",
    bg: "rgba(255,38,112,.32)",
  },
  Waiting: {
    color: "#B5B129",
    bg: "rgba(181, 177, 41, .32)",
  },
  Dropping: {
    color: "#268D4B",
    bg: "rgba(38, 141, 75, .32)",
  },
  Vacation: {
    color: "#8991A2",
    bg: "rgba(137, 145, 162, 0.32)",
  },
  Picking: {
    color: "#507DF0",
    bg: "rgba(80, 125, 240, 0.32)",
  },
};

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
        destination: "",
        colorStatus: "In Transit",
      },
      {
        status: "Waiting",
        day: 4,
        source: "",
        destination: "",
        colorStatus: "Waiting",
      },
    ],
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
        destination: "",
        colorStatus: "Waiting",
      },
    ],
  },
  {
    name: "John Snow",
    code: "3ASDCW",
    currentStatus: "Waiting",
    history: [
      {
        status: "In Transit",
        day: 1,
        source: "",
        destination: "",
        colorStatus: "In Transit",
      },
      {
        status: "Dropping Trailer in Mississauaga, ON",
        day: 2,
        source: "",
        destination: "",
        colorStatus: "Dropping",
      },
      {
        status: "Waiting for order",
        day: 3,
        source: "",
        destination: "",
        colorStatus: "Waiting",
      },
    ],
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
        destination: "",
        colorStatus: "Vacation",
      },
    ],
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
        destination: "",
        colorStatus: "In Transit",
      },
    ],
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
        destination: "",
        colorStatus: "Picking",
      },
    ],
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
        destination: "",
        colorStatus: "Waiting",
      },
    ],
  },
];

const Planning = () => (
  <div className="planner-container">
    <div className="planner">
      <div className="planner-name">
        <h1>Planner</h1>
      </div>
      <div className="planner-month">June</div>

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

      {/* planner data */}

      <div className="planner-data">
        {data.map((item, index) => (
          <div className="planner-data-cell" key={index}>
            <div className="data-cell">
              <div className="data-profile">
                <img src={profile} />
                <div>
                  <span>{item.name}</span>
                  <span>{item.code}</span>
                </div>
              </div>
              <span>{item.currentStatus}</span>
            </div>

            <div className="day-cell">
              {days.map((day, count) => (
                <div className="day" key={count} />
              ))}
              {item.history.map((event, index) => (
                <div
                  className="event"
                  key={index}
                  style={{
                    left: event.day
                      ? `${(event.day - 1) * 100}px`
                      : `${(event.span[0] - 1) * 100}px`,
                    width: event.span ? `${event.span[1] * 100}px` : "100px",
                    border: `1px solid ${color[event.colorStatus].color}`,
                    backgroundColor: color[event.colorStatus].bg,
                    color: color[event.colorStatus].color,
                  }}
                >
                  {event.status}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Planning;
