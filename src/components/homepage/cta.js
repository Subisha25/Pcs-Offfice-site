import React from "react";
import "./cta.css";

import enrollBg from "../assets/footer/enroll-bg.png";       // button bg
import arrowIcon from "../assets/footer/arrow.png";          // arrow
import enrollCircle from "../assets/cta/ctaCircle.png"; // circle

const CTASection = () => {
  return (
    <div className="cta_section_wrapper">
      
      <div className="cta_section_heading">
        <h1 className="cta_title_line1">
          Ready to bring your brand to life?
        </h1>

        <h2 className="cta_title_line2">
          Let’s <span className="cta_highlight">create</span> something bold
        </h2>
      </div>

      {/* UPDATED CTA BUTTON */}
      <div className="cta_btn_wrapper">
        <div className="cta_btn">
          <img src={enrollBg} className="cta_btn_bg" alt="button background" />

          <div className="cta_btn_circle">
            <img src={enrollCircle} className="cta_circle_img" alt="circle" />
            <img src={arrowIcon} className="cta_arrow_icon" alt="arrow" />
          </div>

          <span className="cta_btn_text">Let’s Discuss</span>
        </div>
      </div>

    </div>
  );
};

export default CTASection;
