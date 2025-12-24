import React, { useState, useEffect, useRef } from "react";
import "./workprocess.css";
import "./aboutus.css";

import Globe from "../assets/workprocess/Group 1.png";
import Server from "../assets/workprocess/Group 2.png";
import BookOpen from "../assets/workprocess/Group 3.png";
import TrendingUp from "../assets/workprocess/Group 4.png";
import tagicon from "../assets/allheadingicon/ourWorkicon.png";
import CommonTopTag from "../common/toptag";

export default function WorkProcess() {
  const cardsRef = useRef(null);
  const sectionRef = useRef(null);

  const [filledWords, setFilledWords] = useState(0);
  const [animate, setAnimate] = useState(false);

  const paragraph = [
    "From idea to impact, our process makes it",
    "easy, exciting, and effective!"
  ].join(" ").split(" ");

  const maxWords = paragraph.length;
  const lastScrollY = useRef(window.scrollY);

  /* ================= TEXT SCROLL FILL ================= */
  useEffect(() => {
    function onScroll() {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const centerY = viewportH / 2;

      const currentScroll = window.scrollY;
      const scrollingDown = currentScroll > lastScrollY.current;
      const scrollingUp = currentScroll < lastScrollY.current;
      lastScrollY.current = currentScroll;

      const distanceFromCenter = centerY - rect.top;
const fillWindow = viewportH * 0.35;

      let progress = distanceFromCenter / fillWindow;
      progress = Math.max(0, Math.min(1, progress));

      const targetWords = Math.floor(progress * maxWords);

      if (scrollingDown && targetWords > filledWords) {
        setFilledWords(targetWords);
      }

      if (scrollingUp && targetWords < filledWords) {
        setFilledWords(targetWords);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [filledWords, maxWords]);

  /* ================= CARD FLOWER EFFECT ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimate(true), 400);
        } else {
          setAnimate(false);
        }
      },
      { threshold: 0.4 }
    );

    if (cardsRef.current) observer.observe(cardsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="workprocess">
      {/* ===== ABOUT ===== */}
      <div className="work-process-section1" ref={sectionRef}>
        <div className="container">

        <CommonTopTag text="Our Works Process" icon={tagicon} />
        
             <p className="animated-text2">
            {paragraph.map((word, index) => (
              <span
                key={index}
                className={`word 
                  ${index < filledWords ? "filled" : ""} 
                  ${word ===   "effective!"  ? "gradient-word" : ""}
                `}
              >
                {word + " "}
              </span>
            ))}
          </p>

        </div>
      </div>

      {/* ===== CARDS ===== */}
      <div className="workprocess-scroll-area">
        <div
          ref={cardsRef}
          className={`workprocess-cards-grid ${animate ? "cards-open" : ""}`}
        >
          <Card img={Globe} title="Discover  & " sub="Strategize"
            text="We dive deep into understanding your brand, goals, and audience." />
          <Card img={Server} title="Conversion &" sub="Focused"
            text="Our layouts are performance-driven and guide users clearly." />
          <Card img={BookOpen} title="Build  & " sub="Launch"
            text="We design and build with precision and clarity." />
          <Card img={TrendingUp} title="Refine  & " sub="Grow"
            text="We analyze performance and continuously refine your growth." />
        </div>
      </div>
    </div>
  );
}

/* ===== SMALL CARD COMPONENT ===== */
function Card({ img, title, sub, text }) {
  return (
    <div className="workprocess-card">
      <div className="workprocess-icon-wrapper">
        <img src={img} alt="" />
      </div>
      <h3 className="workprocess-card-title">
        {title} <br /> {sub}
      </h3>
      <p className="workprocess-card-description">{text}</p>
    </div>
  );
}
