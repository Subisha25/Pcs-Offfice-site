import React from "react";
import "./lhome.css";
import Portfoliobanner from "./portfoliobanner";
import bjmmbannerImg from "../assets/gracecabs.png";
const GraceBanner = () => {
  return (
    <>
    <Portfoliobanner/>
    <div className="home-container">
      
      {/* TOP FULL IMAGE */}
      <div className="top-banner">
        <img src={bjmmbannerImg} alt="Banner" />
      </div>

      {/* CONTENT BELOW */}
      <div className="content-section">
        <p>
      Grace Cabs is an advanced ride booking platform designed to make commuting 
      seamless and hassle-free. Users can schedule rides instantly and track drivers 
      in real-time for complete transparency. The app provides instant fare estimates,
       allows passengers to manage trip history and payments
       efficiently, and offers multiple vehicle options to suit different needs.

        </p>
      </div>

    </div>
    </>
  );
};

export default GraceBanner;
