import React from "react";
import "./portfoliobanner.css";
import rightarrow from "../assets/rightarrow.svg";
import LhomeBanner from "./lhome";

const Lecatbanner= () => {
  return (
    <>
    <div className="banner-section">
      <div className="banner-content">
        <h1 className="banner-title">
          Lecat<br/> 
        </h1>

        <div className="details-section">
          <div className="detail-box">
            <span className="label">Client</span>
            <span className="value">Gobi Ramesh</span>
          </div>

          <div className="detail-box">
            <span className="label">Year</span>
            <span className="value">2025</span>
          </div>

          <div className="detail-box">
            <span className="label">Services</span>
            <span className="value">Product & UI/UX</span>
          </div>
        </div>
      </div>

     <div className="button-section">
  <button 
    className="view-btn"
    onClick={() => window.open("https://vmobile-v1.web.app/", "_blank")}
  >
    <span className="arrow">
      <img src={rightarrow} alt="rightarrow" />
    </span> 
    View Site
  </button>
</div>

    </div>
    {/* <LhomeBanner/> */}
    </>
  );
};

export default Lecatbanner;
