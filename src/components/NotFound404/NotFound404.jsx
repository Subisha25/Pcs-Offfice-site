import React from "react";
import "./NotFound404.css";
import PcsLogoimg from "../assets/logo.png";
import robotImg from "../assets/404-error.webp";

const NotFound404 = () => {
  return (
    <div className="notfound-wrapper">
      <div className="notfound-left">
        <img src={PcsLogoimg} alt="logo" className="errorlogo-img" />

        <div className="text-section">
          <h1 className="error-code">404</h1>
          <p className="error-text">That’s an error.</p>
          <p className="error-subtext">
            The requested URL was not found on this server.
            <br />
            That’s all we know.
          </p>
        </div>
      </div>

      <div className="notfound-right">
        <img src={robotImg} alt="robot" className="robot-img" />
      </div>
    </div>
  );
};

export default NotFound404;
