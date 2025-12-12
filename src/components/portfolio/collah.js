import React from "react";
import "./lhome.css";
import collahbannerImg from "../assets/coollah.png";
import Collahbanner from "./collahbanner";
const Collah = () => {
  return (
    <>
<Collahbanner/>
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

export default Collah;
