import React from "react";
import "./lhome.css";
import Portfoliobanner from "./portfoliobanner";
import bjmmbannerImg from "../assets/bjmm.jpeg";
const BjmmBanner = () => {
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
        BJMM is a user maintenance mobile application built using React Native for the
         front-end and PHP for backend services. It includes secure authentication and
          authorization features, enabling users to manage profiles, update account
           information, and access the app based on their assigned roles.

        </p>
      </div>

    </div>
    </>
  );
};

export default BjmmBanner;
