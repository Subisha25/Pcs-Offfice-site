// import React from 'react';
// import './aboutus.css';
// import tagicon from '../assets/Union.png';
// import Arrow from "../assets/arrow.png";

// export default function About() {
//   return (
//     <div className="about-section">
//       <div className="container">
//            <div className="top-center">
//         <div className="tag">
//             <div  className="tag-icon">
//   <img src={tagicon} alt="icon" className="boxicon" />
//   </div>
//  About
// </div>
// </div>

//         <h1 className="main-heading">
//           We're a <span className="gradient-text1">passionate</span> <span className="gradient-text">creatives</span> and<br/>
//           experts who believe in delivering results.<br/>
//           Experience in Web Dev, Digital Marketing<br/>
//           and UI/UX design, we help brands stand<br/>
//           out in the crowded digital space.<br/>
//         </h1>

//         <p className="subtext">
//           We are a collective of passionate creatives and forward-thinking technologists
//         </p>

//         <div className="stats-container">
//           <div className="stat-item">
//             <div className="stat-number">6+</div>
//             <div className="stat-label">Years of Experience</div>
//           </div>

//           <div className="cta-section">
//             <a href="#" className="link">Know More About Us</a>
//            <button className="btn-primary">
//                 <div className="icon-circle">
//                   <img alt="arrow" src={Arrow} />
//                 </div>
//                 Let’s Discuss
//               </button>
//           </div>

//           <div className="stat-item">
//             <div className="stat-number">50+</div>
//             <div className="stat-label">Successful Projects</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import "./aboutus.css";
import tagicon from "../assets/Union.png";
import Arrow from "../assets/arrow.png";

export default function About() {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  const [startAnim, setStartAnim] = useState(false);
  const [filledHeadingWords, setFilledHeadingWords] = useState(0);
  const [filledParaWords, setFilledParaWords] = useState(0);
  const [countStarted, setCountStarted] = useState(false);

  // Split heading into words
  const headingText = `We're a passionate creatives and experts who believe in delivering results.`.split(" ");

  // Split paragraph into words
  const paragraphText = `We are a collective of passionate creatives and forward-thinking technologists`.split(" ");

  // Detect section enter → start animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setStartAnim(true);
      },
      { threshold: 0.4 }
    );

    observer.observe(sectionRef.current);
  }, []);

  // Word-by-word heading fill
  useEffect(() => {
    if (!startAnim) return;

    let index = 0;
    const interval = setInterval(() => {
      setFilledHeadingWords((prev) => {
        if (prev === headingText.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [startAnim]);

  // Word-by-word paragraph fill AFTER heading finished
  useEffect(() => {
    if (filledHeadingWords !== headingText.length) return;

    let index = 0;
    const interval = setInterval(() => {
      setFilledParaWords((prev) => {
        if (prev === paragraphText.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [filledHeadingWords]);

  // COUNT SECTION
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countStarted) {
          setCountStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(statsRef.current);
  }, []);

  return (
    <div className="about-section" ref={sectionRef}>
      <div className="container">

        {/* TAG */}
        <div className="top-center">
          <div className="tag">
            <div className="tag-icon">
              <img src={tagicon} alt="icon" className="boxicon" />
            </div>
            About
          </div>
        </div>

        {/* WORD-BY-WORD HEADING */}
   <h1 className="main-heading animated-text">
  {[
    "We're", "a",
    <span className="blue-word">passionate</span>,
    <span className="gradient-word">creatives</span>,
    "and", "experts", "who", "believe", "in", "delivering", "results."
  ].map((word, index) => (
    <span
      key={index}
      className={`word animated ${index < filledHeadingWords ? "show" : ""}`}
    >
      {word}{" "}
    </span>
  ))}
</h1>


        {/* WORD-BY-WORD PARAGRAPH */}
        <p className="animated-text subtext">
          {paragraphText.map((word, index) => (
            <span
              key={index}
              className={`word ${index < filledParaWords ? "filled" : ""}`}
            >
              {word}{" "}
            </span>
          ))}
        </p>

        {/* COUNTS */}
        <div className="stats-container" ref={statsRef}>
          <div className="stat-item">
            <div className="stat-number">
              {countStarted ? "6+" : "0"}
            </div>
            <div className="stat-label">Years of Experience</div>
          </div>

          <div className="cta-section">
            <a href="#" className="link">Know More About Us</a>
            <button className="btn-primary">
              <div className="icon-circle">
                <img alt="arrow" src={Arrow} />
              </div>
              Let’s Discuss
            </button>
          </div>

          <div className="stat-item">
            <div className="stat-number">
              {countStarted ? "50+" : "0"}
            </div>
            <div className="stat-label">Successful Projects</div>
          </div>
        </div>

      </div>
    </div>
  );
}
