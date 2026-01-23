// import React, { useState, useEffect } from "react";
// import "./traninglearn.css";

// // Replace with your real avatar image path
// import Avatar1 from "../assets/learn.png";
// import CommonTopTag from "../../components/common/toptag";

// const testimonials = [
//   {
//     name: "Jesi J",
//     role: "Full Stack Developer",
//     text: "The Full Stack Development course at PCS was highly practical and well structured. Working on real-time projects helped me strengthen both frontend and backend skills with confidence.",
//     initial: "J",
//   },
//   {
//     name: "Mathavi K",
//     role: "Full Stack Developer",
//     text: "PCS provided excellent hands-on training with clear explanations. The trainers focused on real-world development scenarios, which made learning fast and effective.",
//     initial: "M",
//   },
//   {
//     name: "Maha lakshmi V",
//     role: "Full Stack Developer",
//     text: "The course content was industry-oriented and easy to follow. Building complete applications during the training helped me improve my problem-solving and coding skills.",
//     initial: "M",
//   },
//   {
//     name: "Subisha S",
//     role: "Full Stack Web Developer",
//     text: "I gained strong knowledge in React, Node.js, and database integration. The practical approach and mentor support made a huge difference in my learning journey.",
//     initial: "S",
//   },
//   {
//     name: "Rama lakshmi S",
//     role: "Mobile Application Developer",
//     text: "PCS training boosted my confidence as a developer. The live projects and continuous guidance prepared me well for real-time development and interviews.",
//     initial: "R",
//   },
// ];

// const TraningLearn = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [slidesPerView, setSlidesPerView] = useState(1);

//   // Decide how many cards to show based on screen width
//   useEffect(() => {
//     const updateSlidesPerView = () => {
//       if (window.innerWidth < 640) {
//         setSlidesPerView(1);
//       } else if (window.innerWidth < 1024) {
//         setSlidesPerView(2);
//       } else {
//         setSlidesPerView(3);
//       }
//     };

//     updateSlidesPerView();
//     window.addEventListener("resize", updateSlidesPerView);
//     return () => window.removeEventListener("resize", updateSlidesPerView);
//   }, []);

//   const maxIndex = Math.max(testimonials.length - slidesPerView, 0);

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
//   };

//   const canSlide = testimonials.length > slidesPerView;
//   const translateX = (100 / slidesPerView) * currentIndex;

//   return (
//     <section className="traninglearn">
//       <div className="traninglearn-inner">
//         {/* Top tag */}
//        <CommonTopTag text="Feed Back" />

//         {/* Heading */}
// <div className="traninglearn-heading">
//   <h2 className="successtraninglearn-title">Success stories from</h2>
//   <span className="successtraninglearn-title-highlight">learners</span>
// </div>




//         {/* Carousel */}
//         <div className="traninglearn-carousel">
//           <div className="traninglearn-carousel-viewport">
//             <div
//               className="traninglearn-carousel-track"
//               style={{
//                 transform: `translateX(-${translateX}%)`,
//               }}
//             >
//               {testimonials.map((item, idx) => (
//                 <article
//                   className="traninglearn-card"
//                   key={idx}
//                   style={{
//                     flex: `0 0 ${100 / slidesPerView}%`,
//                   }}
//                 >
//                   <div className="traninglearn-card-quoteMark">“</div>

//                   <p className="traninglearn-card-text">{item.text}</p>

//                   <div className="traninglearn-card-footer">
//                     <div className="avatar-circle">
//   {item.initial}
// </div>

//                     <div className="traninglearn-card-person">
//                       <div className="traninglearn-card-name">{item.name}</div>
//                       <div className="traninglearn-card-role">{item.role}</div>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>

//           {/* Nav buttons */}
//           <div className="traninglearn-nav">
//             <button
//               className="traninglearn-nav-btn"
//               onClick={handlePrev}
//               disabled={!canSlide}
//               aria-label="Previous testimonials"
//             >
//               ←
//             </button>
//             <button
//               className="traninglearn-nav-btn"
//               onClick={handleNext}
//               disabled={!canSlide}
//               aria-label="Next testimonials"
//             >
//               →
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TraningLearn;
import React, { useEffect, useMemo, useRef, useState } from "react";
import "./traninglearn.css";
import CommonTopTag from "../../components/common/toptag";

const testimonials = [
  {
    name: "Jesi J",
    role: "Full Stack Developer",
    text: "The Full Stack Development course at PCS was highly practical and well structured. Working on real-time projects helped me strengthen both frontend and backend skills with confidence.",
    initial: "J",
  },
  {
    name: "Mathavi K",
    role: "Full Stack Developer",
    text: "PCS provided excellent hands-on training with clear explanations. The trainers focused on real-world development scenarios, which made learning fast and effective.",
    initial: "M",
  },
  {
    name: "Maha lakshmi V",
    role: "Full Stack Developer",
    text: "The course content was industry-oriented and easy to follow. Building complete applications during the training helped me improve my problem-solving and coding skills.",
    initial: "M",
  },
  {
    name: "Subisha S",
    role: "Full Stack Web Developer",
    text: "I gained strong knowledge in React, Node.js, and database integration. The practical approach and mentor support made a huge difference in my learning journey.",
    initial: "S",
  },
  {
    name: "Rama lakshmi S",
    role: "Mobile Application Developer",
    text: "PCS training boosted my confidence as a developer. The live projects and continuous guidance prepared me well for real-time development and interviews.",
    initial: "R",
  },
    {
    name: "Ruso K",
    role: "Full Stack Developer",
    text: "The Full Stack Development training at PCS gave me strong hands-on experience and confidence through real-time projects.",
    initial: "R",
  },
];

const TraningLearn = () => {
  const viewportRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [viewportWidth, setViewportWidth] = useState(0);

  // ✅ responsive slides per view
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setSlidesPerView(1);
      else if (w < 1024) setSlidesPerView(2);
      else setSlidesPerView(3);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // ✅ measure viewport width accurately
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      setViewportWidth(el.clientWidth || 0);
    });

    ro.observe(el);
    setViewportWidth(el.clientWidth || 0);

    return () => ro.disconnect();
  }, []);

  const gap = slidesPerView === 1 ? 16 : 24;
  const maxIndex = Math.max(testimonials.length - slidesPerView, 0);

  // ✅ clamp when slidesPerView changes
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const cardWidth = useMemo(() => {
    if (!viewportWidth) return 0;
    const totalGap = gap * (slidesPerView - 1);
    const w = (viewportWidth - totalGap) / slidesPerView;
    return Math.max(260, Math.floor(w));
  }, [viewportWidth, slidesPerView, gap]);

  const translateX = currentIndex * (cardWidth + gap);
  const canSlide = testimonials.length > slidesPerView;

  const next = () => {
    if (!canSlide) return;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    if (!canSlide) return;
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // ✅ swipe support
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    let startX = 0;
    let endX = 0;

    const onTouchStart = (e) => {
      startX = e.touches[0].clientX;
      endX = startX;
    };

    const onTouchMove = (e) => {
      endX = e.touches[0].clientX;
    };

    const onTouchEnd = () => {
      const diff = startX - endX;
      if (Math.abs(diff) < 40) return;
      if (diff > 0) next();
      else prev();
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [cardWidth, gap, slidesPerView, maxIndex, canSlide]);

  return (
    <section className="traninglearn">
      <div className="traninglearn-inner">
        <CommonTopTag text="Feed Back" />

        <div className="traninglearn-heading">
          <h2 className="successtraninglearn-title">Success stories from</h2>
          <span className="successtraninglearn-title-highlight">learners</span>
        </div>

        <div className="traninglearn-carousel">
          <div className="traninglearn-carousel-viewport" ref={viewportRef}>
            <div
              className="traninglearn-carousel-track"
              style={{
                gap: `${gap}px`,
                transform: `translate3d(-${translateX}px, 0, 0)`,
              }}
            >
              {testimonials.map((item, idx) => (
                <article
                  className="traninglearn-card"
                  key={idx}
                  style={{ width: cardWidth ? `${cardWidth}px` : "auto" }}
                >
                  <div className="traninglearn-card-quoteMark">“</div>
                  <p className="traninglearn-card-text">{item.text}</p>

                  <div className="traninglearn-card-footer">
                    <div className="avatar-circle">{item.initial}</div>
                    <div className="traninglearn-card-person">
                      <div className="traninglearn-card-name">{item.name}</div>
                      <div className="traninglearn-card-role">{item.role}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="traninglearn-nav">
            <button className="traninglearn-nav-btn" onClick={prev} disabled={!canSlide}>
              ←
            </button>
            <button className="traninglearn-nav-btn" onClick={next} disabled={!canSlide}>
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraningLearn;
