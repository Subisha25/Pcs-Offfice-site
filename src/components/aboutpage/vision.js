
import React, { useState } from "react";
import "./vision.css";
import Arrow from "../assets/arrow.png";
import tagicon from "../assets/Vector (3).svg";
import Image from "../assets/aboutimg.jpeg";

const VisionMission = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const content = {
    mission:
      "To be a leading global IT consultancy, driving innovation and delivering cutting-edge technology solutions that empower businesses to thrive in the digital age.",
    vision:
      "To transform businesses worldwide through innovative technology solutions, creating a future where digital excellence is accessible to all organizations.",
  };

  return (
    <section className="abt-sec-container">
      <div className="abt-sec-inner">
        {/* TOP TAG */}
        <div className="top-center">
          <div className="tag">
            <div className="tag-icon">
              <img src={tagicon} alt="icon" className="boxicon" />
            </div>
            Services
          </div>
        </div>

        <h1 className="abt-sec-title">
          Our product and vision for the digital
        </h1>

        <div className="abt-sec-content-wrapper">
          {/* IMAGE */}
          <div className="abt-sec-image-section">
            <img
              src={Image}
              alt="Team collaboration"
              className="abt-sec-team-image"
            />
          </div>

          {/* TEXT / TABS */}
          <div className="abt-sec-text-section">
            <div className="abt-sec-tab-buttons">
              <button
                className={`abt-sec-tab-button ${
                  activeTab === "mission" ? "abt-sec-active" : ""
                }`}
                onClick={() => setActiveTab("mission")}
              >
                Our Mission
              </button>
              <button
                className={`abt-sec-tab-button ${
                  activeTab === "vision" ? "abt-sec-active" : ""
                }`}
                onClick={() => setActiveTab("vision")}
              >
                Our Vision
              </button>
            </div>

            <div className="abt-sec-content-text">
              <p>{content[activeTab]}</p>
            </div>

            <button className="btn-primary-abt">
              <div className="icon-circle-abt">
                <img alt="arrow" src={Arrow} />
              </div>
              Let’s Discuss
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
