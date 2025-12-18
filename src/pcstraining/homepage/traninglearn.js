import React, { useState, useEffect } from "react";
import "./traninglearn.css";

// Replace with your real avatar image path
import Avatar1 from "../assets/learn.png";
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
];

const TraningLearn = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Decide how many cards to show based on screen width
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const maxIndex = Math.max(testimonials.length - slidesPerView, 0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const canSlide = testimonials.length > slidesPerView;
  const translateX = (100 / slidesPerView) * currentIndex;

  return (
    <section className="traninglearn-section">
      <div className="traninglearn-inner">
        {/* Top tag */}
       <CommonTopTag text="Feed Back" />

        {/* Heading */}
<div className="traninglearn-heading">
  <h2 className="traninglearn-title">Success stories from</h2>
  <span className="traninglearn-title-highlight">learners</span>
</div>




        {/* Carousel */}
        <div className="traninglearn-carousel">
          <div className="traninglearn-carousel-viewport">
            <div
              className="traninglearn-carousel-track"
              style={{
                transform: `translateX(-${translateX}%)`,
              }}
            >
              {testimonials.map((item, idx) => (
                <article
                  className="traninglearn-card"
                  key={idx}
                  style={{
                    flex: `0 0 ${100 / slidesPerView}%`,
                  }}
                >
                  <div className="traninglearn-card-quoteMark">“</div>

                  <p className="traninglearn-card-text">{item.text}</p>

                  <div className="traninglearn-card-footer">
                    <div className="avatar-circle">
  {item.initial}
</div>

                    <div className="traninglearn-card-person">
                      <div className="traninglearn-card-name">{item.name}</div>
                      <div className="traninglearn-card-role">{item.role}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Nav buttons */}
          <div className="traninglearn-nav">
            <button
              className="traninglearn-nav-btn"
              onClick={handlePrev}
              disabled={!canSlide}
              aria-label="Previous testimonials"
            >
              ←
            </button>
            <button
              className="traninglearn-nav-btn"
              onClick={handleNext}
              disabled={!canSlide}
              aria-label="Next testimonials"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraningLearn;
