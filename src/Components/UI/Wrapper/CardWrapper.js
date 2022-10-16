import React from "react";
import "./CardWrapper.css";

const CardWrapper = (props) => {
  return <div className="popular-container">{props.children}</div>;
};

export default CardWrapper;
