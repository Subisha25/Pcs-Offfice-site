import React from "react";
import "./footer.css";

import bgFooter from "../assets/footer/footer-bg.png";
import logoPcs from "../assets/footer/logo.png";
import iconFacebook from "../assets/footer/fb.png";
import iconLinkedin from "../assets/footer/linkedin.png";
import iconInstagram from "../assets/footer/insta.png";
import iconCall from "../assets/footer/call-red.png";
import iconMail from "../assets/footer/mail-red.png";
import iconLocation from "../assets/footer/pin-red.png";
import iconPin from "../assets/footer/learn-icon.png";
import enrollBg from "../assets/footer/enroll-bg.png";       // big button shape
import arrowIcon from "../assets/footer/arrow.png";          // arrow
import enrollCircle from "../assets/footer/enroll-circle.png"; // if circle is an image
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="footer-wrapper"
      style={{ backgroundImage: `url(${bgFooter})` }}
    >
      <div className="footer-inner">

        <div className="footer-top">

          {/* LEFT BLOCK */}
          <div className="footer-left">
            <h2 className="footer-title">
              Let&apos;s Scale <br /> Your Business.
            </h2>

            <p className="footer-sub">
              Feel free to reach our if you want to <br />
              collaborate with us, or simply have a chat
            </p>
          </div>

          {/* CENTER BLOCK → LOGO + ICONS */}
          <div className="footer-center">
            <div className="footer-center-logo">
              <img src={logoPcs} className="pcs-logo" alt="PCS" />
            </div>

            <div className="social-row">
              <a
                href="https://www.facebook.com/Pcstech2021"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={iconFacebook} className="fb-icon" alt="Facebook" />
              </a>

              <a
                href="https://www.linkedin.com/in/pcs-software-solutions-885a95207"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={iconLinkedin} alt="LinkedIn" />
              </a>

              <a
                href="https://www.instagram.com/pcs_tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={iconInstagram} alt="Instagram" />
              </a>
            </div>

          </div>

          {/* RIGHT BLOCK → MENU */}
          <div className="footer-menu-columns">
            <div className="footer-menu-col">
              <a href="/aboutbanner">About</a>
              <a href="/servicespage">Services</a>
              <a href="#">Blog</a>

              <a href="/products">Products</a>
            </div>
            <div className="footer-menu-col">
              {/* <a href="#">Blog</a> */}
              <a href="/contact">Contact</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>

        </div>
        
        <div className="footer-divider" />

        {/* CONTACT BLOCKS */}
        <div className="footer-middle">
          <div className="info-block">
            <div className="info-title">
              <img src={iconCall} alt="" />
              <span>CALL</span>
            </div>
            <p className="footer-call">
              <a href="tel:+918754768231">+91 87547  68231</a><br />
              <a href="tel:+914633211620">04633 211620</a>
            </p>

          </div>

          <div className="info-block">
            <div className="info-title">
              <img src={iconMail} alt="" />
              <span>MAIL</span>
            </div>
            <p>
              <a
                href="mailto:contact@pcstech.in"
                className="footer-mail-link"
              >
                contact@pcstech.in
              </a>
            </p>
          </div>

          <div className="info-block">
            <div className="info-title">
              <img src={iconLocation} alt="" />
              <span>ADDRESS</span>
            </div>
            <p>
              P.M Complex, Sankarankovil Road, <br />
              Sangeetha Mobiles Upstairs, Surandai, <br />
              Tenkasi, Tamil Nadu - 627859
            </p>
          </div>

          <div className="info-block enroll-block">
            <div className="info-title">
              <img src={iconPin} alt="" />
              <span>LET&apos;S LEARN FROM PCS</span>
            </div>
            <div className="enroll-btn cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              <img src={enrollBg} className="enroll-bg" alt="background" />

              <div className="enroll-inner-circle">
                <img src={enrollCircle} className="circle-img" alt="circle" />
                <img src={arrowIcon} className="arrow-icon" alt="arrow" />
              </div>

              <span className="enroll-text">Let's Discuss</span>
            </div>

          </div>
        </div>

        <div className="footer-divider" />

        <p className="footer-copy">
          Copyright PCS Technology © {currentYear}.
          <span className="rights">All Rights Reserved</span>
        </p>
        
      </div>
    </div>
  );
}

export default Footer;
