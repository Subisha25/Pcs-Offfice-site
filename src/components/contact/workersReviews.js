import React, { useEffect, useMemo, useRef, useState } from "react";
import "./workersReviews.css";
import CommonTopTag from "../../components/common/toptag";

const testimonials = [
  {
    name: "Manju",
    role: "Full Stack Developer",
    text: "Working at PCS as a Full Stack Developer has given me strong hands-on experience in both frontend and backend technologies. The project-based work culture helped me improve my problem-solving skills and write clean, scalable code.",
    initial: "M",
  },
  {
    name: "Kalai V",
    role: "Full Stack Developer",
    text: "PCS provides a professional environment where developers are encouraged to learn and grow. I gained solid experience in building end-to-end applications and collaborating with team members on real-time projects.",
    initial: "K",
  },
  {
    name: "Surya",
    role: "Full Stack Developer",
    text: "As a Full Stack Developer at PCS, I worked on real-world applications that strengthened my understanding of system design, APIs, and frontend performance. The exposure to live projects helped me grow professionally.",
    initial: "S",
  },
  {
    name: "Marish S",
    role: "Full Stack Developer",
    text: "My experience at PCS has been very valuable. I worked extensively with React, backend services, and databases. The structured workflow and technical guidance helped me deliver quality solutions confidently.",
    initial: "M",
  },
  {
    name: "Abishak S",
    role: "Full Stack Developer",
    text: "PCS helped me enhance my skills as a Full Stack Developer through continuous learning and real-time project exposure. The professional work environment and technical discussions improved both my coding and analytical abilities.",
    initial: "A",
  },
];

const WorkersReviews = () => {
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
    <section className="workersreviews">
      <div className="workersreviews-inner">
        <CommonTopTag text="Feed Back" />

        <div className="traninglearn-heading">
          <h2 className="successtraninglearn-title">Success stories from</h2>
          <span className="successtraninglearn-title-highlight">Workers</span>
        </div>

        <div className="workersreviews-carousel">
          <div className="workersreviews-carousel-viewport" ref={viewportRef}>
            <div
              className="workersreviews-carousel-track"
              style={{
                gap: `${gap}px`,
                transform: `translate3d(-${translateX}px, 0, 0)`,
              }}
            >
              {testimonials.map((item, idx) => (
                <article
                  className="workersreviews-card"
                  key={idx}
                  style={{ width: cardWidth ? `${cardWidth}px` : "auto" }}
                >
                  <div className="workersreviews-card-quoteMark">“</div>
                  <p className="workersreviews-card-text">{item.text}</p>

                  <div className="workersreviews-card-footer">
                    <div className="avatar-circle">{item.initial}</div>
                    <div className="workersreviews-card-person">
                      <div className="workersreviews-card-name">{item.name}</div>
                      <div className="workersreviews-card-role">{item.role}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="workersreviews-nav">
            <button className="workersreviews-nav-btn" onClick={prev} disabled={!canSlide}>
              ←
            </button>
            <button className="workersreviews-nav-btn" onClick={next} disabled={!canSlide}>
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkersReviews;
