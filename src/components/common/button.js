import React from "react";
import Arrow from "../assets/arrow.png"; // adjust path if needed
import '../homepage/banner.css';


export default function CommonButton({
  text = "Let’s Discuss",
  icon = Arrow,
  wrapperClass = "",
  onClick,
}) {
  return (
    <div className={`${wrapperClass}`}>
      <button className="btn-primaryhome" onClick={onClick}>
        <div className="icon-circle">
          <img src={icon} alt="icon" />
        </div>
        {text}
      </button>
    </div>
  );
}
