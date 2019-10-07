import React from 'react';

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr",
  width: '100%'
};

const Grid = props => (
  <div className="grid" style={{...gridStyle, ...props.style}}>
    {props.children}
  </div>
);

export {Grid}