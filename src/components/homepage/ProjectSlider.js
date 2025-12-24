import React, { useEffect, useMemo, useRef, useState } from "react";
import "./ProjectSlider.css";

import img1 from "../assets/explore/1.jpg";
import img2 from "../assets/explore/2.jpg";
import img3 from "../assets/explore/3.jpg";
import img4 from "../assets/explore/4.jpg";
import CommonButton from "../common/button";

const projects = [
  { id: 1, title: "World Tamil Siragam", image: img1 },
  { id: 2, title: "Grace Cabs", image: img2 },
  { id: 3, title: "Lhome",  image: img3 },
  { id: 4, title: "Nibras", image: img4 },
];



const clamp01 = (v) => Math.min(1, Math.max(0, v));
const HOLD_SCREENS = 0.12;

export default function ProjectSlider() {
  const wrapRef = useRef(null);
  const rafRef = useRef(null);

  const pinStartRef = useRef(null); // ✅ lock point when sticky engages

  const slides = projects.length;
  const segments = Math.max(1, slides - 1);

  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!wrapRef.current) return;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const wrap = wrapRef.current;
        const sticky = wrap.querySelector(".ps-sticky");
        if (!sticky) return;

        const vh = window.innerHeight;

      // 🔥 IMPORTANT FIX
      const rect = el.getBoundingClientRect();

      // section sticky aagura moment
      const start = window.scrollY + rect.top;

      const hold = HOLD_SCREENS * vh;   // first image hold
      const travel = segments * vh;     // slide travel

      const y = window.scrollY - start;

      // 🛑 BEFORE HOLD → image fixed (NO SCROLL EFFECT)
      if (y <= hold) {
        setP(0);
        return;
      }

      // ▶ AFTER HOLD → scroll start
      const raw = (y - hold) / travel;
      setP(Math.min(1, Math.max(0, raw)));
    });
  };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  };
}, [segments]);




  // Active dot: 1..slides
  const activeDot = useMemo(() => {
    // 0..1 => 1..4 based on segments (3)
    return Math.min(Math.floor(p * segments) + 1, slides);
  }, [p, segments, slides]);

  // Which image to show: dot reached => that image
  const activeSlideIndex = activeDot - 1; // 0..3

  // line fill between dots (3 lines)
  const lineFill = useMemo(() => {
    const fills = [];
    for (let i = 0; i < slides - 1; i++) {
      // each gap is 1/segments
      const start = i / segments;
      const fill = clamp01((p - start) * segments);
      fills.push(fill);
    }
    return fills; // [0..1, 0..1, 0..1]
  }, [p, segments, slides]);

  return (
   <section
  className="ps-wrap"
  ref={wrapRef}
  style={{ "--slides": slides, "--hold": HOLD_SCREENS }}
  aria-label="Project slider"
>

      {/* sticky viewport */}
      <div className="ps-sticky">
        {/* TOP DOTS BAR */}
        <div className="ps-progress">
          <div className="ps-track">
            {projects.map((_, i) => {
              const dotIndex = i + 1;
              const isActive = dotIndex === activeDot;
              const isDone = dotIndex < activeDot;

              return (
                <React.Fragment key={dotIndex}>
                  {/* DOT */}
                  <div
                    className={[
                      "ps-dot",
                      isActive ? "active" : "",
                      isDone ? "done" : "",
                    ].join(" ")}
                  >
                    <span className="ps-dotNum">{String(dotIndex).padStart(2, "0")}</span>
                  </div>

                  {/* LINE (not after last dot) */}
                  {i < projects.length - 1 ? (
                    <div className="ps-line">
                      <div
                        className="ps-lineFill"
                        style={{ transform: `scaleX(${lineFill[i]})` }}
                      />
                    </div>
                  ) : null}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* SLIDES */}
        <div className="ps-stage">
          {projects.map((proj, i) => {
            const cls =
              i === activeSlideIndex
                ? "active"
                : i < activeSlideIndex
                ? "prev"
                : "next";

            return (
              <div className={`ps-slide ${cls}`} key={proj.id}>
                <img className="ps-img" src={proj.image} alt={proj.title} />
                <div className="ps-overlay" />

                <div className="ps-text">
                  <div className="ps-title">{proj.title}</div>
                  <div className="ps-tags">
                    < CommonButton text="View Project"></CommonButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
}
