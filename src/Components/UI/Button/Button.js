import React from "react";
import "./Button.css";

const Button = (props) => {
  if (props.styled) return <a className="btn-design styledBtn">{props.text}</a>;
  return <a className="btn-design">{props.text}</a>;
};

export default Button;
