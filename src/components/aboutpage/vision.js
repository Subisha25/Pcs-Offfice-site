
import React, { useState } from "react";
import "./vision.css";
import Arrow from "../assets/arrow.png";
import tagicon from "../assets/Vector (3).svg";
import Image from "../assets/aboutimg.jpeg";
import CommonTopTag from "../common/toptag";
import CommonButton from "../common/button";
import { useNavigate } from "react-router-dom";

const VisionMission = () => {
  const [activeTab, setActiveTab] = useState("mission");
const navigate = useNavigate();
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
       <CommonTopTag text="Services" icon={tagicon} />

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

            <CommonButton  onClick={() => navigate("/contact")}/>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
