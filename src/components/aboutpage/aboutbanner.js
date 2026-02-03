import React from "react";
import "./aboutbanner.css";
import AboutExperience from "./aboutexp";
import StatsSection from "./statesection";
import Benefits from "./benefits";
import VisionMission from "./vision";
import FeedbackSection from "../homepage/feedback";
import CTASection from "../homepage/cta";

const Aboutbanner = () => {
  return (
    <>
      <div className="about-banner-banner">
        <h1 className="about-title">
          A B O U T&nbsp;&nbsp; U S
        </h1>
      </div>

      {/* Bottom Services Strip */}
    {/* Bottom Services Strip - Carousel */}
<div className="services-strip">
  <div className="strip-track">
    <span>APP DESIGN</span>
    <span className="dot">•</span>
    <span>DIGITAL MARKETING</span>
    <span className="dot">•</span>
    <span>BRANDING</span>
    <span className="dot">•</span>
    <span>WEB DEVELOPMENT</span>
    <span className="dot">•</span>
    <span>WEB DESIGN</span>

    {/* Duplicate again for infinite loop */}
    <span className="dot">•</span>

    <span>APP DESIGN</span>
    <span className="dot">•</span>
    <span>DIGITAL MARKETING</span>
    <span className="dot">•</span>
    <span>BRANDING</span>
    <span className="dot">•</span>
    <span>WEB DEVELOPMENT</span>
    <span className="dot">•</span>
    <span>WEB DESIGN</span>
  </div>
</div>

      <AboutExperience/>
      <StatsSection/>
      <Benefits/>
      <VisionMission/>
      <FeedbackSection/>
      <CTASection/>
      
    </>
  );
};

export default Aboutbanner;
