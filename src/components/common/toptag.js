import React from "react";
import tagicon from "../assets/Union.png"; // adjust path if needed
import '../homepage/aboutus.css';
export default function CommonTopTag({ text = "About", icon }) {
  return (
    <div className="top-center">
      <div className="tag">
        <div className="tag-icon">
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
