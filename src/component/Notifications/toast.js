import React from "react";
import "./toast.sass";

const Toast = (props) => {
  return (
    <div>
      <img src={props.image} />
      <div>
        <h1>{props.title}</h1>
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default Toast;
