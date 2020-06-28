import React from "react";
import "./style.sass";

const PrimaryButton = ({ text, onPress }) => {
  return (
    <button onClick={onPress} className="pb">
      {text}
    </button>
  );
};

export default PrimaryButton;
