import React from "react";
import "./lhome.css";
import Portfoliobanner from "./portfoliobanner";
import mslonebannerImg from "../assets/msloan.png"
const MsloneBanner = () => {
  return (
    <>
    <Portfoliobanner/>
    <div className="home-container">
      
      {/* TOP FULL IMAGE */}
      <div className="top-banner">
        <img src={mslonebannerImg} alt="Banner" />
      </div>

      {/* CONTENT BELOW */}
      <div className="content-section">
        <p>
         The app features secure authentication, a clean and intuitive UI, and automated 
         calculations that help users make informed financial decisions. With easy access
          to loan history, reminders, and repayment 
         schedules, MS LoanGuru simplifies financial tracking and enhances user convenience.
        </p>
      </div>

    </div>
    </>
  );
};

export default MsloneBanner;
