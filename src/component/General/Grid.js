import React from "react";

const stack = {
  display: "grid",
  gridTemplateColumns: "1fr",
  width: "100%"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  width: "100%",
  boxSizing: 'border-box',
}

const Stack = props => (
  <div className="grid" style={{ ...stack, ...props.style }}>
    {props.children}
  </div>
);

const Grid = props => (
  <div className="grid" style={{ ...grid, ...props.style }}>
    {props.children}
  </div>
);

export { Grid, Stack };
