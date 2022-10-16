import React from "react";
import "./Title.css";

const Title = (props) => {
  return (
    <div className="popular-title">
      <span>{props.whiteTitle}</span>
      <em> {props.pinkTitle}</em>
    </div>
  );
};

export default Title;
