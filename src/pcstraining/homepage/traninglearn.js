import React, { useState, useEffect } from "react";
import "./traninglearn.css";

// Replace with your real avatar image path
import Avatar1 from "../assets/learn.png";
import CommonTopTag from "../../components/common/toptag";

const testimonials = [
  {
    name: "Daniel Kim",
    role: "Founder of MindEase App",
    text: "The hands-on projects and real-world examples gave me the confidence to tackle complex design challenges. PCS made all the difference in my career pivot.",
    avatar: Avatar1,
  },
  {
    name: "Aisha Patel",
    role: "UI/UX Designer",
    text: "Each module was structured clearly, and the feedback from mentors helped me improve fast. I landed my first design role within weeks of finishing.",
    avatar: Avatar1,
  },
  {
    name: "James Lee",
    role: "Front-End Developer",
    text: "The blend of theory and practice was perfect. Building real projects helped me fill my portfolio and feel ready for interviews.",
    avatar: Avatar1,
  },
  {
    name: "Maria Rodriguez",
    role: "Product Designer",
    text: "I loved the community support and live sessions. The course helped me transition from graphic design into full product design.",
    avatar: Avatar1,
  },
  {
    name: "Rahul Sharma",
    role: "Full-Stack Engineer",
    text: "The curriculum stayed aligned with industry trends. I could immediately apply new skills at work and move into a better role.",
    avatar: Avatar1,
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
    <section className="traninglearn">
      <div className="traninglearn-inner">
        {/* Top tag */}
       <CommonTopTag text="Feed Back" />

        {/* Heading */}
        <h2 className="traninglearn-title">
          Success stories from{" "}
        </h2>

          <span className="traninglearn-title-highlight">learners</span>

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
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="traninglearn-card-avatar"
                    />
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
