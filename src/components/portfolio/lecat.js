import React from "react";
import "./lhome.css";
import Portfoliobanner from "./portfoliobanner";
import lecatbannerImg from "../assets/lecat.png";
const Lecat = () => {
  return (
    <>
    <Portfoliobanner/>
    <div className="home-container">
      
      {/* TOP FULL IMAGE */}
      <div className="top-banner">
        <img src={lecatbannerImg} alt="Banner" />
      </div>

      {/* CONTENT BELOW */}
      <div className="content-section">
        <p>
         Lecat VMobile transforms traditional quiz and exam workflows into a fully
          digital and automated process. Built with React.js and Firebase, it offers 
          a seamless experience where educators can create quizzes, track student 
          performance, and visualize learning progress through an intuitive analytics dashboard.
{/* 
From curriculum progress tracking to detailed score reports, Lecat VMobile 
empowers teachers with actionable insights—making student performance measurable,
 transparent, and easy to manage. It’s the perfect smart solution for modern 
 |educational environments. */}
        </p>
      </div>

    </div>
    </>
  );
};

export default Lecat;
