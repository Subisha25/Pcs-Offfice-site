
import React, { useEffect, useMemo, useRef, useState } from "react";
import "./learnersReviews.css";
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
    text: "The Full Stack Development training at PCS gave me strong hands-on experience in frontend and backend technologies. Working on real-time projects improved my logical thinking, coding standards, and confidence to build complete applications independently.",
    initial: "R",
  },
];

const LearnReviews = () => {
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

  // 🔥 mobile fix
  if (slidesPerView === 1) {
    return viewportWidth;
  }

  const totalGap = gap * (slidesPerView - 1);
  const w = (viewportWidth - totalGap) / slidesPerView;
  return Math.floor(w);
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
    <section className="learnreviews">
      <div className="learnreviews-inner">
        <CommonTopTag text="Feed Back" />

        <div className="learnreviews-heading">
          <h2 className="successlearnreviews-title">Success stories from</h2>
          <span className="successlearnreviews-title-highlight">learners</span>
        </div>

        <div className="learnreviews-carousel">
          <div className="learnreviews-carousel-viewport" ref={viewportRef}>
            <div
              className="learnreviews-carousel-track"
              style={{
                gap: `${gap}px`,
                transform: `translate3d(-${translateX}px, 0, 0)`,
              }}
            >
              {testimonials.map((item, idx) => (
                <article
                  className="learnreviews-card"
                  key={idx}
                  style={{ width: cardWidth ? `${cardWidth}px` : "auto" }}
                >
                  <div className="learnreviews-card-quoteMark">“</div>
                  <p className="learnreviews-card-text">{item.text}</p>

                  <div className="learnreviews-card-footer">
                    <div className="avatar-circle">{item.initial}</div>
                    <div className="learnreviews-card-person">
                      <div className="learnreviews-card-name">{item.name}</div>
                      <div className="learnreviews-card-role">{item.role}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="learnreviews-nav">
            <button className="learnreviews-nav-btn" onClick={prev} disabled={!canSlide}>
              ←
            </button>
            <button className="learnreviews-nav-btn" onClick={next} disabled={!canSlide}>
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnReviews;
