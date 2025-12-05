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
      <div className="about-banner">
        <h1 className="about-title">
          A B O U T&nbsp;&nbsp; U S
        </h1>
      </div>

      {/* Bottom Services Strip */}
      <div className="services-strip">
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
