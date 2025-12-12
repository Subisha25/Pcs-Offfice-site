import React from "react";
import "./lhome.css";
import officebannerImg from "../assets/officechat.png"
import Officechatbanner from "./officechatbanner";
const Officechat = () => {
  return (
    <>
    <Officechatbanner/>
    <div className="home-container">
      
      {/* TOP FULL IMAGE */}
      <div className="top-banner">
        <img src={officebannerImg} alt="Banner" />
      </div>

      {/* CONTENT BELOW */}
      <div className="content-section">
        <p>
         Office Chat is a corporate communication platform built using ReactJS, NodeJS,
          and MySQL, designed to streamline collaboration within an organization. 
          It enables team members to send messages,
          make video calls, and assign or track project-related tasks in real-time.
        </p>
      </div>

    </div>
    </>
  );
};

export default Officechat;
