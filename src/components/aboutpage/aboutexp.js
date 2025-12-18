import React, { useEffect, useRef, useState } from "react";
import "./aboutexp.css";
import imageicon from "../assets/Union.svg";
import CommonTopTag from "../common/toptag";

const AboutExperience = () => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  
  // Text animation states
  const [filledWords, setFilledWords] = useState(0);
  const textRef = useRef(null);
  const lastScrollY = useRef(typeof window !== "undefined" ? window.scrollY : 0);

  // Split the main heading into words
  const headingText = `We're a passionate creatives and experts who believe in delivering results. Experience in Web Dev, Digital Marketing and UI/UX design, we help brands stand out in the crowded digital space.`;
  const paragraph = headingText.split(" ");
  const maxWords = paragraph.length;

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = 6;
          const duration = 1500;
          const incrementTime = 50;
          const step = Math.ceil((end - start) / (duration / incrementTime));

          const interval = setInterval(() => {
            start += step;
            if (start >= end) {
              start = end;
              clearInterval(interval);
            }
            setCount(start);
          }, incrementTime);

          observer.unobserve(counterRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
  }, []);

  // Text animation on scroll
  useEffect(() => {
    function onScroll() {
      if (!textRef.current) return;

      const rect = textRef.current.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const centerY = viewportH / 2;

      const currentScroll = window.scrollY;
      const scrollingDown = currentScroll > lastScrollY.current;
      const scrollingUp = currentScroll < lastScrollY.current;
      lastScrollY.current = currentScroll;

      const distanceFromCenter = centerY - rect.top;
      const fillWindow = viewportH * 0.5;
      let progress = distanceFromCenter / fillWindow;

      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      const targetWords = Math.floor(progress * maxWords);

      if (scrollingDown && targetWords > filledWords) {
        setFilledWords(targetWords);
      }

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
    onScroll();

    return () => window.removeEventListener("scroll", handler);
  }, [filledWords, maxWords]);

  return (
    <div className="about-exp-section">
      {/* Left content */}
      <div className="left-box">
       <CommonTopTag />

        <h2 className="years" ref={counterRef}>
          {count}+
        </h2>
        <p className="exp-text">Years of Experience</p>
      </div>

      {/* Right content */}
      <div className="right-boxs">
        <h1 className="main-heading animated-heading" ref={textRef}>
          {paragraph.map((word, index) => (
            <span
              key={index}
              className={`word-animate 
                ${index < filledWords ? "filled" : ""} 
                ${word === "passionate" || word === "creatives" ? "gradient-word-animate" : ""}
              `}
            >
              {word + " "}
            </span>
          ))}
        </h1>

        <p className="sub-text">
          We are a collective of passionate creatives and forward-thinking technologists.
        </p>

        <p className="sub-text">
          We began as a small team of dreamers, turning creativity into meaningful
          connections. From day one, our mission has been to blend design and
          strategy into experiences that matter.
        </p>

        <p className="sub-text">
          Curiosity drives us—we listen, explore, and craft solutions that feel
          authentic. Every project is built on clarity, collaboration, and
          creativity from start to finish.
        </p>

        <p className="sub-text">
          We value honesty, passion, and respect in every interaction. For us,
          creativity isn't about noise—it's about making ideas simple, powerful,
          and human.
        </p>
      </div>
    </div>
  );
};

export default AboutExperience;