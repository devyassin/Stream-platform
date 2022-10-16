import React from "react";
import "./Hero.css";
import { Button } from "../index";

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-text">
        <div className="hero-small-title">Welcome To Cyborg</div>
        <div className="hero-big-title">
          <span>BROWSE</span> OUR POPULAR GAMES HERE
        </div>
        <div className="main-btn">
          <Button text={"Browse Now"}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
