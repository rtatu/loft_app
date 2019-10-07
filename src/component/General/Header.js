import React from 'react';

const h1Style = {
  fontSize: '21px',
  fontFamily: "Source Sans Pro",
  fontWeight: 600,
  color: '#131D4A'
}

const Header = ({label, style}) => (
  <div style={style}>
    <h1 style={h1Style}>{label}</h1>
  </div>
);

export { Header };
