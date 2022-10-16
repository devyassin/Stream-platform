import React from "react";
import "./ExpendedCard.css";
import {Button} from "../../index";

const ExpendedCard = (props) => {
  return (
    <div className="expended">
      <div className="Expended--1">
        <img src={props.img} className="expended-img" />
        <div className="expended-info--1">
          <span className="expended-title">{props.title1}</span>
          <span className="expended-subtitle">{props.subtitle1}</span>
        </div>
      </div>
      <div className="Expended--2">
        <span className="expended-title">{props.title2}</span>
        <span className="expended-subtitle">{props.subtitle2}</span>
      </div>
      <div className="Expended--3">
        <span className="expended-title">{props.title3}</span>
        <span className="expended-subtitle">{props.subtitle3}</span>
      </div>
      <div className="Expended--4">
        <span className="expended-title">{props.title4}</span>
        <span className="expended-subtitle">{props.subtitle4}</span>
      </div>
      <div className="Expended--5">
        <Button styled={"styledBtn"} text={"Dowlanded"} />
      </div>
    </div>
  );
};

export default ExpendedCard;
