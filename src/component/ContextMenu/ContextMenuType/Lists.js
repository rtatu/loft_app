import React from "react";

const List = ({ icon, name, onPress }) => {
  return (
    <li onClick={onPress} id="ct-menu">
      <img
        src={icon}
        style={{
          width: 15,
          height: 15,
        }}
      />
      <span
        style={{
          marginLeft: 20,
        }}
      >
        {name}
      </span>
    </li>
  );
};

export { List };
