
  import React, { useEffect, useRef, useState } from "react";
  import "./aboutus.css";
  import tagicon from "../assets/Union.png";
  import Arrow from "../assets/arrow.png";
  import CommonTopTag from "../common/toptag";
  import { useNavigate } from "react-router-dom";


  export default function About() {
    const sectionRef = useRef(null);
    const statsRef = useRef(null);
  const Navigate = useNavigate();

    const [filledWords, setFilledWords] = useState(0);
    const [countValue, setCountValue] = useState(0);

    const paragraph =
      `We're a passionate creatives and experts who believe in delivering results. Experience in Web Dev, Digital Marketing and UI/UX design, we help brands stand out in the crowded digital space.`
        .split(" ");

    const maxWords = paragraph.length;
    const maxProjects = 50; // final projects number
    const maxYears = 6; // years number

    // keep last scroll Y to detect downward scroll only
    const lastScrollY = useRef(typeof window !== "undefined" ? window.scrollY : 0);

    // COUNTER ANIMATION (AUTO START WHEN VISIBLE)
  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting(); // auto start
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);
  function startCounting() {
    let current = 0;
    const maxYears = 6;
    const maxProjects = 50;

    const interval = setInterval(() => {
      current += 1;

      // stop when full
      if (current >= maxProjects) {
        clearInterval(interval);
      }

      setCountValue(current);
    }, 50); // adjust speed
  }

  useEffect(() => {
    function onScroll() {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const centerY = viewportH / 2;

      // Detect scroll direction
      const currentScroll = window.scrollY;
      const scrollingDown = currentScroll > lastScrollY.current;
      const scrollingUp = currentScroll < lastScrollY.current;
      lastScrollY.current = currentScroll;

      // How far section moved from center
      const distanceFromCenter = centerY - rect.top;

      // Map distance → 0 to 1 smooth
      const fillWindow = viewportH * 0.9;
      let progress = distanceFromCenter / fillWindow;

      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      const targetWords = Math.floor(progress * maxWords);

      // SCROLL DOWN = FILL
      if (scrollingDown && targetWords > filledWords) {
        setFilledWords(targetWords);
      }

      // SCROLL UP = ERASE
      if (scrollingUp && targetWords < filledWords) {
        setFilledWords(targetWords);
      }
    }

    let ticking = false;
    const handler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handler, { passive: true });

    // initialize
    onScroll();

    return () => window.removeEventListener("scroll", handler);
  }, [filledWords]);

  
    return (
      <div className="about-section" ref={sectionRef}>
        <div className="container">

          {/* TOP TAG */}

          <CommonTopTag />
         
          <p className="animated-text2">
            {paragraph.map((word, index) => (
              <span
                key={index}
                className={`word 
                  ${index < filledWords ? "filled" : ""} 
                  ${word === "passionate" || word === "creatives" ? "gradient-word" : ""}
                `}
              >
                {word + " "}
              </span>
            ))}
          </p>

          {/* COUNTER */}
          <div className="stats-container" ref={statsRef}>
            <div className="stat-item">
          <div className="stat-number">
    {countValue >= 6 ? "6+" : countValue}
  </div>
  <div className="stat-label">Years of Experience</div>

            </div>

            <div className="cta-section">
              <a href="#" className="link" onClick={() => Navigate("/aboutbanner")}>Know More About Us</a>
              <button className="btn-primaryhome"  onClick={() => Navigate("/contact")}>
                <div className="icon-circle">
                  <img alt="arrow" src={Arrow} />
                </div>
                Let’s Discuss
              </button>
            </div>

            <div className="stat-item">
              <div className="stat-number">
    {countValue >= 50 ? "50+" : `${countValue}+`}
  </div>
  <div className="stat-label">Successful Projects</div>

            </div>
          </div>
        </div>
      </div>
    );
  }

