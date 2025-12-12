import React, { useEffect, useState } from "react";
import "./banner.css";
import Header from "./header";
import Arrow from "../assets/arrow.png";
import About from "./aboutus";
import Products from "./products";
import ServicesSection from "./services";
import OurWorkExplore from "./ourworks";
import Portfoliobanner from "../portfolio/portfoliobanner";
import WorkProcess from "./workprocess";
import CTASection from "./cta";
import Footer from "./footer";
import WordAnimation from "./explore";
import Benefits from "../aboutpage/benefits";
import CommonButton from "../common/button";
import { Navigate, useNavigate } from "react-router-dom";

const words = ["build", "learn"]; // 🔁 cycle panna words

function Banner() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
const Navigate = useNavigate();
  // 🔤 Typewriter effect
  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && displayText.length < currentWord.length) {
      // typing
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      }, 120);
    } else if (!isDeleting && displayText.length === currentWord.length) {
      // pause on full word
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayText.length > 0) {
      // deleting
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      }, 80);
    } else if (isDeleting && displayText.length === 0) {
      // move to next word
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <>
      {/* 👑 HEADER NOW OUTSIDE BANNER – ALWAYS ON TOP */}
      {/* <Header /> */}

      {/* 🔥 Fixed hero wrapper placeholder for scroll spacing */}
      <section className="hero-wrapper">
        <div className="banner">
          {/* 🔥 Background Video */}
          <video className="bg-video" autoPlay loop muted playsInline>
            <source src="/videos/PCS-Headertheme.mp4" type="video/mp4" />
          </video>

          {/* Content on top of video */}
          <div className="banner-content">
            <h1 className="homebanner-title">
              Let’s{" "}
              <span className="blue typing-word">
                {displayText}
              </span>{" "}
              something
              <br />
              amazing <span className="gradient-text">together.</span>
            </h1>

            <div className="banner-buttons">

              <CommonButton   onClick={() => Navigate("/contact")}/>
              {/* <button className="btn-primaryhome">
                <div className="icon-circle">
                  <img alt="arrow" src={Arrow} />
                </div>
                Let’s Discuss
              </button> */}
<p className="homebanner-titles">ttttt</p>
              <button className="btn-link"  onClick={() => Navigate("/pcstrainingsite")}>Learn Something</button>
            </div>
          </div>
        </div>
      </section>

      {/* 🔽 Next sections */}
      <section id="about" className="next-section">
        <About />
        <ServicesSection />
        <OurWorkExplore />
        <WordAnimation />
        <WorkProcess />
        <Products/>
        <CTASection />
        {/* <Footer /> */}
      </section>
    </>
  );
}

export default Banner;
