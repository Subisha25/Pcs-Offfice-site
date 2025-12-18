



import React, { useEffect, useRef, useState } from "react";
import tagicon from "../assets/allheadingicon/ourWorkicon.png";
import Arrow from "../assets/arrow.png";
import CommonTopTag from "../common/toptag";
import "./aboutus.css";
import "./ourworks.css";

export default function OurWorkExplore() {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  const [filledWords, setFilledWords] = useState(0);
  const [countValue, setCountValue] = useState(0);

  const paragraph =
    `Explore our work where we played, experimented, and built something amazing.`
      .split(" ");

  const maxWords = paragraph.length;
  const maxProjects = 50; // final projects number
  const maxYears = 6; // years number

  // keep last scroll Y to detect downward scroll only
//  const maxWords = paragraph.length;

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
    <div className="ourwork-section" ref={sectionRef}>
      <div className="container">

        {/* TOP TAG */}
       <CommonTopTag  text="Our Works" icon={tagicon}/>

        {/* WORD BY WORD FILL */}
        {/* <p className="animated-text">
          {paragraph.map((word, index) => (
            <span
              key={index}
              className={`word 
                ${index < filledWords ? "filled" : ""} 
                ${word === "something" || word === "amazing." ? "gradient-word" : ""}
              `}
            >
              {word + " "}
            </span>
          ))}
        </p> */}
           <p className="animated-text2">
            {paragraph.map((word, index) => (
              <span
                key={index}
                className={`word 
                  ${index < filledWords ? "filled" : ""} 
                  ${word ===  "something" || word === "amazing." ? "gradient-word" : ""}
                `}
              >
                {word + " "}
              </span>
            ))}
          </p>


        {/* COUNTER */}
        
      </div>
    </div>
  );
}

