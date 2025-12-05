import React from "react";
import "./lhome.css";
import Portfoliobanner from "./portfoliobanner";
import wtsbannerImg from "../assets/wts.png";
const WtsBanner = () => {
  return (
    <>
    <Portfoliobanner/>
    <div className="home-container">
      
      {/* TOP FULL IMAGE */}
      <div className="top-banner">
        <img src={wtsbannerImg} alt="Banner" />
      </div>

      {/* CONTENT BELOW */}
      <div className="content-section">
        <p>
         World Tamil Siragam is an informational static website developed using ReactJS, 
         NodeJS, and MongoDB to promote and support Tamil culture, language, and global
          community initiatives. The platform provides an engaging user experience with
           well-structured content, fast navigation, and a responsive design that
            works across all devices.
        </p>
      </div>

    </div>
    </>
  );
};

export default WtsBanner;
