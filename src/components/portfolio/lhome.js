import React from "react";
import "./lhome.css";
import bannerImg from "../assets/Mask group (1).png"; // Change to your image path
import Lhomebanner from "./lhomebanner";

const Lhome = () => {
  return (
    <>
    <Lhomebanner/>
    <div className="home-container">
      
      {/* TOP FULL IMAGE */}
      <div className="top-banner">
        <img src={bannerImg} alt="Banner" />
      </div>

      {/* CONTENT BELOW */}
      <div className="content-section">
        <p>
          We craft responsive, visually stunning websites tailored to your brand’s 
          needs. From concept to deployment, our team ensures every website is 
          optimized for performance, usability, and conversions — like the text 
          content that appears on a single service page in a CMS. Here’s a clean, 
          professional example you can use or adapt.
        </p>
      </div>

    </div>
    </>
  );
};

export default Lhome;
