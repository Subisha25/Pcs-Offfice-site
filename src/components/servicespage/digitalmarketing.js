import React, { useEffect, useRef, useState } from "react";
import "./webdesign.css";
import tagicon from "../assets/allheadingicon/ourWorkicon.webp";

import Mockup from "../assets/digital1.webp";
import Team from "../assets/digital.webp";

import Discover from "../assets/discovers.png";
import Deliver from "../assets/deliver.png";
import Create from "../assets/create.png";
import Grow from "../assets/grow.png";

import CTASection from "../homepage/cta";
import CommonTopTag from "../common/toptag";

/* ==================== PURPOSE SECTION (SCROLL PIN) ==================== */

function PurposeSection() {
  const cardsRef = useRef(null);

  const [animate, setAnimate] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(
    sessionStorage.getItem("digitalMarketingPurposeAnimated") === "true"
  );

  useEffect(() => {
    if (hasAnimated) {
      setAnimate(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setAnimate(true);
            setHasAnimated(true);
            sessionStorage.setItem(
              "digitalMarketingPurposeAnimated",
              "true"
            );
          }, 400);
        }
      },
      { threshold: 0.4 }
    );

    if (cardsRef.current) observer.observe(cardsRef.current);

    return () => observer.disconnect();
  }, [hasAnimated]);
  return (
    <div className="purpose-container">
    
        {/* Top Badge */}
        <div className="" >
          <CommonTopTag text="Why Choose Us" icon={tagicon} />
        </div>
        <p className="webdesign-p">
          Design with purpose,
        </p>
        <p className="webdesign-p"> built with{" "}
          <span className="highlight-result">results</span>
        </p>
         <div className="workprocess-scroll-area">
        <div
          ref={cardsRef}
          className={`workprocess-cards-grid ${animate ? "cards-open" : ""}`}
        >
        <Card
            img={Discover}
            title="Analyze"
            sub=""
            text="We study your audience, market trends, and goals to uncover actionable insights."
          />

          <Card
            img={Deliver}
            title="Strategize"
            sub=""
            text="We create a focused marketing plan using SEO, content, social, and paid channels."
          />

          <Card
            img={Create}
            title="Execute"
            sub=""
            text="We launch data-driven campaigns with compelling creatives that attract and convert."
          />

          <Card
            img={Grow}
            title="Optimize"
            sub=""
            text="We track results, refine strategies, and continuously improve performance for growth."
          />
        </div>
      </div>
      </div>
  );
}
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

/* ==================== MAIN WEB DESIGN PAGE ==================== */

export default function DigitalMarketing() {
   useEffect(() => {
    /* ================= MOBILE CHECK ================= */
    const isMobileTypewriterDisabled =
      window.matchMedia("(max-width: 425px)").matches;
  
    /* ================= 1) SCROLL ANIMATIONS ================= */
    const animatedEls = document.querySelectorAll("[data-animate]");
    const scrollIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.35 }
    );
  
    animatedEls.forEach((el) => scrollIO.observe(el));
  
    /* ================= 2) TYPEWRITER (DESKTOP ONLY) ================= */
    let typeIO = null; // 🔥 declare outside (important)
  
    if (!isMobileTypewriterDisabled) {
      const typeEls = document.querySelectorAll("[data-typewriter]");
      const typeMap = new WeakMap();
  
      function startTypewriter(el) {
        if (typeMap.has(el)) return;
  
        const fullText = el.dataset.typewriter || el.textContent.trim();
        const words = fullText.split(" ");
        el.textContent = "";
  
        let index = 0;
  
        const interval = setInterval(() => {
          if (index >= words.length) {
            clearInterval(interval);
            return;
          }
  
          const span = document.createElement("span");
          span.className = "sw-type-word";
          span.textContent = words[index];
  
          if (index > 0) el.appendChild(document.createTextNode(" "));
          el.appendChild(span);
  
          index++;
        }, 110);
  
        typeMap.set(el, interval);
      }
  
      typeIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startTypewriter(entry.target);
              typeIO.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
  
      typeEls.forEach((el) => typeIO.observe(el));
    }
  
    /* ================= 3) BANNER SCROLL ZOOM ================= */
    const bannerImg = document.querySelector(".sw-banner-img");
    const bannerWrap = document.querySelector(".sw-banner-wrapper");
    let ticking = false;
  
    function updateBannerZoom() {
      if (!bannerImg || !bannerWrap) return;
  
      const rect = bannerWrap.getBoundingClientRect();
      const vh = window.innerHeight || 1;
  
      const start = vh * 0.95;
      const end = vh * 0.35;
  
      let progress = (start - rect.top) / (start - end);
      progress = Math.min(Math.max(progress, 0), 1);
  
      bannerImg.style.transform = `
        scale(${0.1 + 0.9 * progress})
        translateY(${80 - 80 * progress}px)
      `;
      bannerImg.style.opacity = progress;
    }
  
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateBannerZoom();
          ticking = false;
        });
        ticking = true;
      }
    }
  
    updateBannerZoom();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
  
    /* ================= CLEANUP ================= */
    return () => {
      scrollIO.disconnect();
      if (typeIO) typeIO.disconnect(); // 🔥 safe cleanup
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  
  return (
    <>
      <div className="sw-container">
        {/* HERO + BANNER (sticky area) */}
        <div className="sw-hero-wrap">
          {/* Top Heading */}
          <div
            className="sw-header"
            data-animate="fade-up"
            style={{ "--delay": "0s" }}
          >
            <p className="sw-small-title">Digital Marketing </p>
            <h1 className="sw-main-title">
              Drive traffic, boost conversions &
              <br />
              grow your brand online
            </h1>
          </div>

          {/* Banner Image sticky + scroll zoom */}
          <div className="sw-banner-wrapper">
            <div className="sw-banner">
              <img
                src={Mockup}
                alt="Website Mockup"
                className="sw-banner-img"
              />
            </div>
          </div>
        </div>

        {/* STEP 1: Description with typewriter words */}
        <p
          className="sw-description"
          data-typewriter="We craft responsive and visually stunning websites tailored to your brand’s needs.
From concept to deployment, our team handles every stage with precision and care.
Each website is optimized for speed, performance, and smooth user experience.
We focus on clean design, usability, and conversion-driven layouts.
Our goal is to build websites that truly represent your brand and drive results."
        >
          Effective digital marketing is more than campaigns—it’s about creating meaningful connections with your audience. We craft strategies that combine creativity, analytics, and smart technology, ensuring every touchpoint drives engagement, builds trust, and converts visitors into loyal customers. From social media to search engine campaigns, we design experiences that inspire action and deliver measurable results.        </p>

        {/* STEP 2: What We Offer Section */}
        <div className="sw-offer-section">
          <div
            className="sw-offer-img-box"
            data-animate="fade-right"
            style={{ "--delay": "0s" }}
          >
            <img src={Team} alt="Team" className="sw-offer-img" />
          </div>

          <div
            className="sw-offer-content"
            data-animate="fade-left"
            style={{ "--delay": "0.15s" }}
          >
            <h2 className="sw-offer-title">What We Offer:</h2>

            <ul className="sw-offer-list">
              <li>Search Engine Optimization (SEO)</li>
              <li>Social Media Marketing (SMM)</li>
              <li>Pay-Per-Click (PPC) Campaigns</li>
              <li>Email & Content Marketing</li>
              <li>Analytics & Performance Optimization</li>
            </ul>
          </div>
        </div>

     

      </div>
         {/* PURPOSE SCROLL SECTION + CTA */}
      <PurposeSection />
      <CTASection />
    </>
  );
}
