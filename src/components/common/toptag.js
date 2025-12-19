import React from "react";
import tagicon from "../assets/allheadingicon/abouticon.png"; // adjust path if needed
import '../homepage/aboutus.css';
export default function CommonTopTag({ text = "About", icon }) {
  return (
    <div className="top-center1">
      <div className="commontag">
        <div className="commontag-icon">
          <img
            src={icon || tagicon}
            alt="tag icon"
            className="boxicon"
          />
        </div>
        {text}
      </div>
    </div>
  );
}
