
// import React, { useState, useEffect, useRef } from "react";
// import ourWorksBg from "../assets/ourworks/Rectangle.png";
// import "./benefits.css";
// import Globe from "../assets/workprocess/Group 1.png";
// import Server from "../assets/workprocess/Group 2.png";
// import BookOpen from "../assets/workprocess/Group 3.png";
// import TrendingUp from "../assets/workprocess/Group 4.png";
// import tagicon from "../assets/whychoose.png";

// const TypedText = ({ text, typingSpeed = 50 }) => {
//   const [displayedText, setDisplayedText] = useState("");
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (index < text.length) {
//       const timeoutId = setTimeout(() => {
//         setDisplayedText((prev) => prev + text.charAt(index));
//         setIndex((prev) => prev + 1);
//       }, typingSpeed);

//       return () => clearTimeout(timeoutId);
//     }
//   }, [index, text, typingSpeed]);

//   return <>{displayedText}</>;
// };

// export default function Benefits() {
//   const [displayedText, setDisplayedText] = useState("");
//   const [step, setStep] = useState(0); // 0–4 steps for scroll animation
//   const scrollAreaRef = useRef(null);

  // const fullText = "See why partnering with us isthe smartest move.";

//   // Typing text effect
//   useEffect(() => {
//     let index = 0;
//     const timer = setInterval(() => {
//       if (index <= fullText.length) {
//         setDisplayedText(fullText.slice(0, index));
//         index++;
//       } else {
//         clearInterval(timer);
//       }
//     }, 50);

//     return () => clearInterval(timer);
//   }, []);

//   // Scroll-driven steps
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!scrollAreaRef.current) return;

//       const isDesktop = window.innerWidth >= 1024;
//       if (!isDesktop) {
//         // mobile/tablet – no fancy scroll steps
//         setStep(4);
//         return;
//       }

//       const rect = scrollAreaRef.current.getBoundingClientRect();
//       const viewportH = window.innerHeight;

//       // If completely out of view, keep final state
//       if (rect.bottom <= 0) {
//         setStep(4);
//         return;
//       }
//       if (rect.top >= viewportH) {
//         setStep(0);
//         return;
//       }

//       const totalScrollable = rect.height - viewportH;
//       if (totalScrollable <= 0) {
//         setStep(4);
//         return;
//       }

//       const scrolled = Math.min(Math.max(-rect.top, 0), totalScrollable);
//       const progress = scrolled / totalScrollable;

//       let newStep = 0;
//       if (progress > 0.8) newStep = 4;
//       else if (progress > 0.6) newStep = 3;
//       else if (progress > 0.4) newStep = 2;
//       else if (progress > 0.2) newStep = 1;
//       else newStep = 0;

//       setStep(newStep);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // initial

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="benefits">
//       {/* TOP SECTION - LEFT SIDE */}
//       <div className="benefits-top-section">
//            {/* TOP TAG */}
//         <div className="top-center">
//           <div className="benefit-tag">
//             <div className="benefit-icon">
//               <img src={tagicon} alt="icon" className="benefit-boxicon" />
//             </div>
//             Services
//           </div>
//         </div>
//         {/* Badge */}
//         {/* <div className="benefits-badge-wrapper">
//           <img
//             src={ourWorksBg}
//             alt="Benefits Background"
//             className="benefits-badge-bg"
//           />
//           <div className="benefits-badge-icon-wrapper">
//             <svg
//               className="benefits-badge-icon"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <rect x="3" y="3" width="7" height="7" />
//               <rect x="14" y="3" width="7" height="7" />
//               <rect x="3" y="14" width="7" height="7" />
//               <rect x="14" y="14" width="7" height="7" />
//             </svg>
//           </div>
//           <span className="benefits-badge-text">Benefits</span>
//         </div> */}

//         {/* Typed main heading */}
//         <div className="benefits-heading-wrapper">
//           <h1 className="benefits-main-heading">
//             {displayedText.split(" ").map((word, index) => {
//               if (word === "smartest") {
//                 return (
//                   <span key={index} className="benefits-highlight-text">
//                     {word}{" "}
//                   </span>
//                 );
//               } else if (word === "!") {
//                 return (
//                   <span key={index} className="benefits-amazing-text">
//                     {word}
//                   </span>
//                 );
//               }
//               return word + " ";
//             })}
//           </h1>
//         </div>
//       </div>

//       {/* SCROLL AREA + STICKY CARDS */}
//       <div className="benefits-scroll-area" ref={scrollAreaRef}>
//         <div className={`benefits-cards-grid step-${step}`}>
//           <div className="benefits-card">
//             <div className="benefits-icon-wrapper">
//               <img src={Globe} alt="Discover & Strategize Icon" />
//             </div>
//             <h3 className="benefits-card-title">
//              Discover
//             </h3>
//             <p className="benefits-card-description">
//              We start by listening andlearning—diving deep into yourbrand,
//               audience, and goals touncover insights that shapeevery decision.
//             </p>
//           </div>

//           <div className="benefits-card">
//             <div className="benefits-icon-wrapper">
//               <img src={Server} alt="Conversion & Focused Icon" />
//             </div>
//             <h3 className="benefits-card-title">
//               Create
//             </h3>
//             <p className="benefits-card-description">
//              With clarity in hand, we craftbold ideas and transform 
//              theminto designs, stories, andexperiences that resonate.
//             </p>
//           </div>

//           <div className="benefits-card">
//             <div className="benefits-icon-wrapper">
//               <img src={BookOpen} alt="Build & Launch Icon" />
//             </div>
//             <h3 className="benefits-card-title">
//             Deliver
//             </h3>
//             <p className="benefits-card-description">
//               From concept to launch, weensure every detail is polished,
//               impactful, and aligned with yourvision for lasting results.
//             </p>
//           </div>

//           <div className="benefits-card">
//             <div className="benefits-icon-wrapper">
//               <img src={TrendingUp} alt="Refine & Grow Icon" />
//             </div>
//             <h3 className="benefits-card-title">
             
//               Grow
//             </h3>
//             <p className="benefits-card-description">
//               We don't stop at the launch. Weanalyze performance, gatherfeedback, and fine-tune
//                to ensureyour brand keeps evolving andthriving in the digital landscape.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
    
import React, { useState, useEffect, useRef } from "react";
import "../homepage/workprocess.css";
import "../homepage/aboutus.css";
import '../aboutpage/benefits.css';
  // import "./aboutus.css";
  import "../homepage/aboutus.css";

import Globe from "../assets/workprocess/Group 1.png";
import Server from "../assets/workprocess/Group 2.png";
import BookOpen from "../assets/workprocess/Group 3.png";
import TrendingUp from "../assets/workprocess/Group 4.png";
import tagicon from "../assets/whychoose.png";
import CommonTopTag from "../common/toptag";

export default function Benefits() {
  const cardsRef = useRef(null);
  const sectionRef = useRef(null);

  const [filledWords, setFilledWords] = useState(0);
  const [animate, setAnimate] = useState(false);

  const paragraph = [
    "See why partnering with us is",
    "the smartest move."
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
      <div className="benefits-top-section" ref={sectionRef}>
                 <CommonTopTag text="Benefits" icon={tagicon} />

        <div>

 
          <p className="animated-text2">
            {paragraph.map((word, index) => (
              <span
                key={index}
                className={`word 
                  ${index < filledWords ? "filled" : ""} 
                  ${word === "smartest" ? "gradient-word" : ""}
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
          <Card img={Globe} title="Discover" sub="Strategize"
            text="We dive deep into understanding your brand, goals, and audience." />
          <Card img={Server} title="Conversion" sub="Focused"
            text="Our layouts are performance-driven and guide users clearly." />
          <Card img={BookOpen} title="Build" sub="Launch"
            text="We design and build with precision and clarity." />
          <Card img={TrendingUp} title="Refine" sub="Grow"
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
