import React from "react";
import {} from '../../index'
import "./Card.css";


const Card = (props) => {
  return (
    <>
      <div className="card-container">
        <div className="card-img-container">
          <img src={props.url} className="card-img" />
        </div>
        <div className="card-info">
          <div className="card-info--1">
            <span className="game-name">{props.gameName}</span>
            <span className="game-rating">
              <i className="fa-solid fa-star"></i> {props.gameRate}
            </span>
          </div>
          <div className="card-info--2">
            <span className="game-type">{props.gameType}</span>
            <span className="game-download">
              <i className="fa-solid fa-download"></i> {props.gameDownload}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
