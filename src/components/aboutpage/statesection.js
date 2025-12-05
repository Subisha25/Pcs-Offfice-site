import React from "react";
import "./statesection.css";
import stateImg from "../assets/Rectangle 3.png"; // Change to your image path

const StatsSection = () => {
  return (
    <div className="stats-section">
      
      {/* ---- Banner Image ---- */}
      <div className="banner-wrapper">
        <img src={stateImg} alt="Banner" className="banner-img" />
      </div>

      {/* ---- Main Text ---- */}
      <div className="stats-heading">
        <h2>We don’t just work</h2>
        <h2><span></span>together —we <i>grow together.</i></h2>
      </div>

<div className="stats-cards">

  <div className="stats-item">
    <div className="stats-card">
      <h1>50+</h1>
      <p className="title">Projects Delivered</p>
    </div>
    <p className="desc">
      We've successfully completed over 50 projects—and we're just getting started!
    </p>
  </div>

  <div className="stats-item">
    <div className="stats-card">
      <h1>70%</h1>
      <p className="title">Business Growth</p>
    </div>
    <p className="desc">
      Our strategies have helped clients achieve up to 70% revenue growth in just one year!
    </p>
  </div>

  <div className="stats-item">
    <div className="stats-card">
      <h1>52+</h1>
      <p className="title">Happy Clients</p>
    </div>
    <p className="desc">
      More than 52 satisfied clients trust us to bring their ideas to life.
    </p>
  </div>

</div>


    </div>
  );
};

export default StatsSection;
