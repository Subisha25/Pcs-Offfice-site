import React, { useEffect, useRef, useState } from "react";
import "./statesection.css";
import stateImg from "../assets/Rectangle 3.png";

const StatsSection = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    growth: 0,
    clients: 0,
  });

  const sectionRef = useRef(null);
  useEffect(() => {
    const img = document.querySelector(".banner-img");

    function handleScroll() {
      const rect = img.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Progress based on scroll visibility
      const progress = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);

      const scaleValue = 0.8 + progress * 0.2;
      img.style.transform = `scale(${scaleValue})`;
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const targets = {
            projects: 50,
            growth: 70,
            clients: 52,
          };

          const duration = 2000;
          const intervalTime = 50;

          const animateCount = (key, endVal) => {
            let startVal = 0;
            const step = Math.ceil(endVal / (duration / intervalTime));

            const interval = setInterval(() => {
              startVal += step;
              if (startVal >= endVal) {
                startVal = endVal;
                clearInterval(interval);
              }
              setCounts((prev) => ({ ...prev, [key]: startVal }));
            }, intervalTime);
          };

          animateCount("projects", targets.projects);
          animateCount("growth", targets.growth);
          animateCount("clients", targets.clients);

          observer.unobserve(sectionRef.current);
        }
      },
      {
        threshold: 0.1, // 🔥 Fix for mobile
        rootMargin: "0px 0px -100px 0px", // 🔥 Trigger early
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);


  return (
    <div className="stats-section" ref={sectionRef}>

      <div className="banner-wrapper">
        <img src={stateImg} alt="Banner" className="banner-img" />
      </div>

      <div className="stats-heading">
        <h2>We don’t just work</h2>
        <h2>
          <span></span>together —we <i>grow together.</i>
        </h2>
      </div>
      {/* states card section*/}
      <div className="stats-cards">
        <div className="stats-item">
          <div className="stats-card">
            <h1>{counts.projects}+</h1>
            <p className="title">Projects Delivered</p>
          </div>
          {/* description section */}
          <p className="desc">
            We've successfully completed over 50 projects—and we're just getting started!
          </p>
        </div>

        <div className="stats-item">
          <div className="stats-card">
            <h1>{counts.growth}%</h1>
            <p className="title">Business Growth</p>
          </div>
          <p className="desc">
            Our strategies have helped clients achieve up to 70% revenue growth in just one year!
          </p>
        </div>

        <div className="stats-item">
          <div className="stats-card">
            <h1>{counts.clients}+</h1>
            <p className="title">Happy Clients</p>
          </div>
          <p className="desc">
            More than 52 satisfied clients trust us to bring their ideas to life.
          </p>
        </div>
      </div>

    </div>
  );
};

export default StatsSection;
