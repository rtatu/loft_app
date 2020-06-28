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
      },
      {
        status: "Waiting",
        day: 4,
        source: "",
        destination: "",
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
        span: [1, 1],
        source: "",
        destination: "",
      },
      {
        status: "Dropping Trailer in Mississauaga, ON",
        day: 2,
        source: "",
        destination: "",
      },
      {
        status: "Waiting for order",
        day: 3,
        source: "",
        destination: "",
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
      },
    ],
  },
  {
    name: "Rohit Tatu",
    code: "3ASDCW",
    currentStatus: "In Transit",
    history: [
      {
        status: "In Transit",
        from: "1",
        to: "3",
        source: "",
        destination: "",
      },
    ],
  },
];

const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default data;
export { day };
