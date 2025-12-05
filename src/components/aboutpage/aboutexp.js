import React from "react";
import "./aboutexp.css";
import imageicon from "../assets/Union.svg";
const AboutExperience = () => {
  return (
    <div className="about-exp-section">

      {/* Left content */}
      <div className="left-box">
<div className="about-badge">
  <span className="badge-icon">
    <img src={imageicon} alt="icon" />
  </span>
  <span>About</span>
</div>
        <h2 className="years">6+</h2>
        <p className="exp-text">Years of Experience</p>
      </div>

      {/* Right content */}
      <div className="right-boxs">
        <h1 className="main-heading">
          We're a <span className="purple-text">passionate creatives</span> and
          experts who believe in delivering results. Experience in Web Dev,
          Digital Marketing and UI/UX design, we help brands stand out in the
          crowded digital space.
        </h1>

        <p className="sub-text">
          We are a collective of passionate creatives and forward-thinking 
          technologists.
        </p>

        <p className="sub-text">
          We began as a small team of dreamers, turning creativity into meaningful
          connections. From day one, our mission has been to blend design and
          strategy into experiences that matter.
        </p>

        <p className="sub-text">
          Curiosity drives us—we listen, explore, and craft solutions that feel
          authentic. Every project is built on clarity, collaboration, and
          creativity from start to finish.
        </p>

        <p className="sub-text">
          We value honesty, passion, and respect in every interaction. For us,
          creativity isn’t about noise—it’s about making ideas simple, powerful,
          and human.
        </p>
      </div>

    </div>
  );
};

export default AboutExperience;
