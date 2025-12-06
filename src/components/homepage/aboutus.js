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
//            <button className="btn-primaryabout">
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

// import React, { useEffect, useRef, useState } from "react";
// import "./aboutus.css";
// import tagicon from "../assets/Union.png";
// import Arrow from "../assets/arrow.png";

// export default function About() {
//   const sectionRef = useRef(null);
//   const statsRef = useRef(null);

//   const [startWordFill, setStartWordFill] = useState(false);
//   const [countStarted, setCountStarted] = useState(false);
//   const [filledWords, setFilledWords] = useState(0);

//   const paragraph = `We're a passionate creatives and experts who believe in delivering results. Experience in Web Dev, Digital Marketing and UI/UX design, we help brands stand out in the crowded digital space.`.split(
//     " "
//   );

//   // START WORD FILL when section comes into view
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) setStartWordFill(true);
//       },
//       { threshold: 0.5 }
//     );

//     observer.observe(sectionRef.current);
//   }, []);

//   // WORD-BY-WORD COLOR FILL ANIMATION
//   useEffect(() => {
//     if (!startWordFill) return;

//     let index = 0;
//     const interval = setInterval(() => {
//       setFilledWords((prev) => {
//         if (prev === paragraph.length) {
//           clearInterval(interval);
//           return prev;
//         }
//         return prev + 1;
//       });
//     }, 120); // speed of word fill

//     return () => clearInterval(interval);
//   }, [startWordFill]);

//   // COUNTER ANIMATION
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting && !countStarted) {
//           setCountStarted(true);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     observer.observe(statsRef.current);
//   }, []);

//   return (
//     <div className="about-section" ref={sectionRef}>
//       <div className="container">

//         {/* TOP TAG */}
//         <div className="top-center">
//           <div className="tag">
//             <div className="tag-icon">
//               <img src={tagicon} alt="icon" className="boxicon" />
//             </div>
//             About
//           </div>
//         </div>

       
//         {/* DESCRIPTION WORD BY WORD */}
//         <p className="animated-text">
//           {paragraph.map((word, index) => (
//     <span
//   key={index}
//   className={`word 
//      ${index < filledWords ? "filled" : ""} 
//      ${word === "passionate" || word === "creatives" ? "gradient-word" : ""}
//   `}
// >
//   {word}{" "}
// </span>


//           ))}
//         </p>

//         {/* COUNT SECTION */}
//         <div className="stats-container" ref={statsRef}>
//           <div className="stat-item">
//             <div className="stat-number">
//               {countStarted ? "6+" : "0"}
//             </div>
//             <div className="stat-label">Years of Experience</div>
//           </div>

//           <div className="cta-section">
//             <a href="#" className="link">Know More About Us</a>
//             <button className="btn-primaryabout">
//               <div className="icon-circle">
//                 <img alt="arrow" src={Arrow} />
//               </div>
//               Let’s Discuss
//             </button>
//           </div>

//           <div className="stat-item">
//             <div className="stat-number">
//               {countStarted ? "50+" : "0"}
//             </div>
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

  // useEffect(() => {
  //   function onScroll() {
  //     if (!sectionRef.current) return;

  //     const rect = sectionRef.current.getBoundingClientRect();
  //     const viewportH = window.innerHeight;
  //     const centerY = viewportH / 2;

  //     // Only react when user is scrolling downward
  //     const scrollingDown = window.scrollY > lastScrollY.current;
  //     lastScrollY.current = window.scrollY;

  //     // distance the section top has moved past the center line (positive when user scrolls down)
  //     // when section is perfectly centered initially rect.top ≈ (viewportH - sectionHeight) / 2
  //     // centerY - rect.top becomes positive as user scrolls down.
  //     const distanceFromCenter = Math.max(0, centerY - rect.top);

  //     // choose a sensible distance window that maps to full fill.
  //     // I use 0.0..0.9 * viewport height so roughly one screen worth of downward scroll fills all words.
  //     const fillWindow = viewportH * 0.9;
  //     const progress = Math.min(1, distanceFromCenter / fillWindow);

  //     const targetWords = Math.floor(progress * maxWords);

  //     // Only increase on downward scroll, and never decrease (freeze on stop or upward)
  //     if (scrollingDown && targetWords > filledWords) {
  //       setFilledWords(targetWords);
  //     }

  //     // COUNTER: when the stats section comes near center, increase counts based on how far it has moved into view.
  //     if (statsRef.current) {
  //       const sRect = statsRef.current.getBoundingClientRect();
  //       // how far the top of stats is above the center line (positive when scrolling down into it)
  //       const statsDistance = Math.max(0, centerY - sRect.top);
  //       const statsWindow = viewportH * 0.9;
  //       const statsProgress = Math.min(1, statsDistance / statsWindow);

  //       // Map statsProgress to count values slowly (slow increase because it maps to scroll)
  //       const projects = Math.floor(statsProgress * maxProjects);
  //       const years = Math.floor(statsProgress * maxYears);

  //       // Only increase (do not decrease), and only when user scrolls down into it
  //       if (scrollingDown) {
  //         if (projects > countValue) {
  //           setCountValue(projects);
  //         } else if (years > countValue && years > countValue) {
  //           // ensure it increases at least for years when projects small
  //           setCountValue(projects);
  //         }
  //       }
  //     }
  //   }

  //   // Throttle with rAF for smoother behavior and less work
  //   let ticking = false;
  //   const handler = () => {
  //     if (!ticking) {
  //       window.requestAnimationFrame(() => {
  //         onScroll();
  //         ticking = false;
  //       });
  //       ticking = true;
  //     }
  //   };

  //   window.addEventListener("scroll", handler, { passive: true });
  //   // run once to set initial state (centered -> 0)
  //   onScroll();

  //   return () => {
  //     window.removeEventListener("scroll", handler);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [filledWords, countValue]);

  return (
    <div className="about-section" ref={sectionRef}>
      <div className="container">

        {/* TOP TAG */}
        <div className="top-center">
          <div className="tag">
            <div className="tag-icon">
              <img src={tagicon} alt="icon" className="boxicon" />
            </div>
            About
          </div>
        </div>

        {/* WORD BY WORD FILL */}
        <p className="animated-text">
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
            <a href="#" className="link">Know More About Us</a>
            <button className="btn-primaryhome">
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

