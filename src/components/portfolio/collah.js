import React from "react";
import "./lhome.css";
import Portfoliobanner from "./portfoliobanner";
import collahbannerImg from "../assets/coollah.jpg";
const CollahBanner = () => {
  return (
    <>
    <Portfoliobanner/>
    <div className="home-container">
      
      {/* TOP FULL IMAGE */}
      <div className="top-banner">
        <img src={collahbannerImg} alt="Banner" />
      </div>

      {/* CONTENT BELOW */}
      <div className="content-section">
        <p>
     Users can explore service offerings, schedule appointments, and make payments,
      while service providers receive real-time booking requests and updates.
       With responsive UI, dynamic routing, and robust server-side operations,
        Collah bridges customers and professionals efficiently, improving both
         accessibility and service convenience.
        </p>
      </div>

    </div>
    </>
  );
};

export default CollahBanner;
