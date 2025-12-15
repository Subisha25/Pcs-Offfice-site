import React, { useState, useEffect, useRef } from "react";
import ourWorksBg from "../assets/journey.png";
import "./trainingsimple.css";
import Globe from "../assets/simple1.png";
import Server from "../assets/simple2.png";
import BookOpen from "../assets/simple3.png";
import TrendingUp from "../assets/simple4.png";

export default function TrainingSimple() {
  const cardsRef = useRef(null);
  const sectionRef = useRef(null);

  const [filledWords, setFilledWords] = useState(0);
  const [animate, setAnimate] = useState(false);

  const paragraph = [
    "Learning made",
    "simple, accessible, & effective"
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
      <div className="workprocess-section" ref={sectionRef}>
        <div className="container">


          <p className="animated-text">
            {paragraph.map((word, index) => (
              <span
                key={index}
                className={`word ${
                  index < filledWords ? "filled" : ""
                } ${word === "simple," ? "gradient-word" : ""}`}
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
          <Card img={Globe} title="Certified" sub="Course"
            text="We start by listening andlearning—diving deep into yourbrand, audience, and goals touncover insights that shapeevery decision." />
          <Card img={Server} title="Internship" sub="Program"
            text="With clarity in hand, we craftbold ideas and transform theminto designs, stories, andexperiences that resonate." />
          <Card img={BookOpen} title="Inplant" sub="Training"
            text="From concept to launch, weensure every detail is polished,impactful, and aligned with your
            vision for lasting results." />
          <Card img={TrendingUp} title="Student" sub="Projects"
            text="We don't stop at the launch. Weanalyze performance, gatherfeedback, and fine-tune to ensureyour brand keeps evolving andthriving in the digital landscape." />
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
