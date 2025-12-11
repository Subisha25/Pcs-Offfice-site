import React from "react";
import "./lhome.css";
import lecatbannerImg from "../assets/lecat.png";
import Lecatbanner from "./lecatbanner";
const Lecat = () => {
  return (
    <>
    <Lecatbanner/>
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

        </p>
      </div>

    </div>
    </>
  );
};

export default Lecat;
