import React, { useEffect,useRef, useState } from "react";
import "./webdesign.css";
import "../homepage/workprocess.css";

import tagicon from "../assets/allheadingicon/ourWorkicon.png";

import Mockup from "../assets/servicebanner.png";
import Team from "../assets/service1.png";
import Result from "../assets/service2.png";

import CTASection from "../homepage/cta";
import CommonTopTag from "../common/toptag";
import Discover from "../assets/discovers.png";
import Deliver from "../assets/deliver.png";
import Create from "../assets/create.png";
import Grow from "../assets/grow.png";
import TechLogoStrip from "./teachstrip";
function PurposeSection() {
  const cardsRef = useRef(null);
  const [animate, setAnimate] = useState(false);
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
          <Card img={Discover} title="Discover  & " sub="Strategize"
            text="We dive deep into understanding your brand, goals, and audience." />
          <Card img={Deliver} title="Conversion &" sub="Focused"
            text="Our layouts are performance-driven and guide users clearly." />
          <Card img={Create} title="Build  & " sub="Launch"
            text="We design and build with precision and clarity." />
          <Card img={Grow} title="Refine  & " sub="Grow"
            text="We analyze performance and continuously refine your growth." />
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

export default function Webdesign() {
  useEffect(() => {
    // ==== 1) Generic fade/slide/zoom for [data-animate] (works on scroll down & up) ====
    const animatedEls = document.querySelectorAll("[data-animate]");

    const scrollIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    animatedEls.forEach((el) => scrollIO.observe(el));

    // ==== 2) Typewriter per word for [data-typewriter] (runs once when visible) ====
    const typeEls = document.querySelectorAll("[data-typewriter]");
    const typeMap = new WeakMap();

    function startTypewriter(el) {
      if (typeMap.has(el)) return;

      const fullText = el.dataset.typewriter || el.textContent.trim();
      const words = fullText.split(" ");
      el.textContent = ""; // clear existing text

      let index = 0;

      const interval = setInterval(() => {
        if (index >= words.length) {
          clearInterval(interval);
          return;
        }

        const span = document.createElement("span");
        span.className = "sw-type-word";
        span.textContent = words[index];

        if (index > 0) {
          el.appendChild(document.createTextNode(" "));
        }
        el.appendChild(span);

        index++;
      }, 110); // speed per word

      typeMap.set(el, interval);
    }

    const typeIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startTypewriter(entry.target);
            typeIO.unobserve(entry.target); // only once
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    typeEls.forEach((el) => typeIO.observe(el));

    // ==== 3) Scroll-driven zoom for banner mockup (clear, no blur) ====
    const bannerImg = document.querySelector(".sw-banner-img");
    const bannerWrap = document.querySelector(".sw-banner-wrapper");
    let ticking = false;

    function updateBannerZoom() {
      if (!bannerImg || !bannerWrap) return;

      const rect = bannerWrap.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;

      // When wrapper top is near bottom -> start
      const start = viewportH * 0.95;
      // When wrapper top is around middle/upper -> end
      const end = viewportH * 0.35;

      let progress = (start - rect.top) / (start - end);
      // clamp 0–1
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      // progress 0 -> 1  => scale 0.1 -> 1, opacity 0 -> 1
      const minScale = 0.1;
      const maxScale = 1;
      const minOpacity = 0;
      const maxOpacity = 1;
      const minTranslate = 80;
      const maxTranslate = 0;

      const scale = minScale + (maxScale - minScale) * progress;
      const opacity = minOpacity + (maxOpacity - minOpacity) * progress;
      const translateY =
        minTranslate + (maxTranslate - minTranslate) * progress;

      bannerImg.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      bannerImg.style.opacity = opacity;
      // no blur here → always clear
    }

    function onScrollOrResize() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateBannerZoom();
          ticking = false;
        });
        ticking = true;
      }
    }

    // initial state (in case page already scrolled)
    updateBannerZoom();

    window.addEventListener("scroll", onScrollOrResize);
    window.addEventListener("resize", onScrollOrResize);

    // cleanup
    return () => {
      scrollIO.disconnect();
      typeIO.disconnect();
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
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
            <p className="sw-small-title">Website Design &amp; Development</p>
            <h1 className="sw-main-title">
              Launch a seamless,
              <br />
              conversion-focused website
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


          data-typewriter="A powerful website is more than visuals—it’s an experience your audience remembers. We design and develop websites that blend creativity with smart technology, ensuring every page feels intuitive, engaging, and purposeful. From layout to user journey, we craft digital experiences that inspire trust and turn visitors into loyal customers"
        >
          A powerful website is more than just visuals—it’s an experience your audience remembers.
          We design and develop websites that seamlessly blend creativity with smart technology, ensuring every page feels intuitive, engaging, and purposeful. From layout to user journey, we craft digital experiences that build trust and turn visitors into loyal customers.
        </p>

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
              <li>Custom website design</li>
              <li>Responsive Web Development</li>
              <li>E-Commerce & CMS</li>
              <li>SEO-optimized structure</li>
              <li>Performance Optimization</li>
              <li>UI/UX Strategy</li>
              {/* Artificial Intelligence (AI) has become one of the most influential technologies shaping human life today. Its ability to understand, analyse, and even predict human behaviour has created new possibilities in the field of psychology. This study explores how AI interacts with human psychology, how it interprets emotions and behaviour patterns, and how it influences future decision-making. By examining both the positive impact and the challenges, this paper aims to provide a clear understanding of the connection between AI and human psychological development */}
            </ul>
          </div>
        </div>

        {/* STEP 3: Result Section */}
        <div className="sw-result">
          <ul
            className="sw-result-text"
            data-animate="fade-up"
            style={{ "--delay": "0s" }}
          >
            <h2 className="sw-result-title">Result:</h2>
            <p>
              The results show that AI can accurately understand and respond to human behaviour. By analysing patterns in thoughts, emotions, and actions, AI provides clear insights into a user’s psychological state. Overall, this study confirms that AI enhances behavioural analysis and delivers a smoother, more personalized user experience.
            </p>
          </ul>

          <div
            className="sw-result-img-box"
            data-animate="zoom-in"
            style={{ "--delay": "0.15s" }}
          >
            <img src={Result} alt="Results" className="sw-result-img" />
          </div>
        </div>
      </div>
<TechLogoStrip />
      <PurposeSection />
      <CTASection />
    </>
  );
}
