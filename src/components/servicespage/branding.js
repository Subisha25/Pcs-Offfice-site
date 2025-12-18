import React, { useEffect, useRef, useState } from "react";
import "./webdesign.css";
import tagicon from "../assets/allheadingicon/ourWorkicon.png";

import Mockup from "../assets/brand.jpg";
import Team from "../assets/brand3.avif";
import Result from "../assets/brand2.avif";

import Whychoose from "../assets/whychoose.png";
import Discover from "../assets/discovers.png";
import Deliver from "../assets/deliver.png";
import Create from "../assets/create.png";
import Grow from "../assets/grow.png";

import CTASection from "../homepage/cta";
import CommonTopTag from "../common/toptag";

/* ==================== PURPOSE SECTION (SCROLL PIN) ==================== */

function PurposeSection() {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const badgeRef = useRef(null);
  const cardsRef = useRef([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;

      const wrapper = wrapperRef.current;
      const rect = wrapper.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const wrapperHeight = wrapper.offsetHeight;

      // Calculate scroll progress when section is in view
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const scrolled = Math.abs(rect.top);
        const scrollRange = wrapperHeight - windowHeight;
        const progress = Math.min(Math.max(scrolled / scrollRange, 0), 1);
        setScrollProgress(progress);
      } else if (rect.top > 0) {
        setScrollProgress(0);
      } else {
        setScrollProgress(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Badge visibility (0–10% scroll)
  const badgeOpacity = Math.min(scrollProgress * 10, 1);

  // Typewriter effect (10–30% scroll)
  const typewriterProgress = Math.min(
    Math.max((scrollProgress - 0.1) / 0.2, 0),
    1
  );
  const fullText = "Design with purpose,";
  const typedLength = Math.floor(fullText.length * typewriterProgress);
  const typedText = fullText.substring(0, typedLength);
  const showCursor = typewriterProgress < 1;

  // Title movement (30–60% scroll)
  const titleMoveProgress = Math.min(
    Math.max((scrollProgress - 0.3) / 0.3, 0),
    1
  );
  const titleTranslateY = -120 * titleMoveProgress; // softer move
  const titleScale = 1 - 0.2 * titleMoveProgress;

  // Cards visibility (60–100% scroll)
  const cardsStartProgress = 0.6;
  const getCardOpacity = (index) => {
    const cardProgress =
      (scrollProgress - cardsStartProgress - index * 0.08) / 0.08;
    return Math.min(Math.max(cardProgress, 0), 1);
  };

  const getCardTransform = (index) => {
    const opacity = getCardOpacity(index);
    const translateY = 50 * (1 - opacity);
    const scale = 0.9 + 0.1 * opacity;
    return { opacity, translateY, scale };
  };

  const cardsData = [
    {
      img: Discover,
      title: "Brand Strategy",
      text: "We define what your brand stands for—its purpose, voice, values, audience, and positioning—creating a foundation that guides every creative decision.",
    },
    {
      img: Create,
      title: "Identity Creation",
      text: "We craft your visual identity with logos, colors, typography, patterns, and design elements that express your brand’s personality with clarity and style.",
    },
    {
      img: Deliver,
      title: "Brand Experience",
      text: "We bring your brand to life across web, social, print, and marketing touchpoints to ensure a consistent, memorable experience everywhere.",
    },
    {
      img: Grow,
      title: "Brand Growth",
      text: "We refine, optimize, and expand your brand by analyzing performance and evolving your identity to stay relevant in a changing digital landscape.",
    },
  ];


  return (
    <div className="purpose-scroll-wrapper" ref={wrapperRef}>
      <div
        className="purpose-container"
        ref={containerRef}
        style={{
          position:
            scrollProgress > 0 && scrollProgress < 1 ? "fixed" : "absolute",
          top: scrollProgress >= 1 ? "auto" : "0",
          bottom: scrollProgress >= 1 ? "0" : "auto",
        }}
      >
        {/* Top Badge */}
        <div
          className="purpose-badge-box"
          ref={badgeRef}
          style={{
            opacity: badgeOpacity,
            transform: `translateY(${-20 * (1 - badgeOpacity)}px)`,
          }}
        >
          {/* <button className="btn-primary">
            <div className="icon-circle">
              <img alt="arrow" src={Whychoose} />
            </div>
            Why Choose Us
          </button> */}
          <CommonTopTag text="Why Choose Us" icon={tagicon} />

        </div>

        {/* Main Heading with Typewriter */}
        <h2
          className="purpose-title"
          ref={titleRef}
          style={{
            transform: `translateY(${titleTranslateY}px) scale(${titleScale})`,
            transition: "transform 0.1s linear",
          }}
        >
          <span className="typewriter-text">
            {typedText}
            {showCursor && <span className="cursor">|</span>}
          </span>
          <br />
          built with <span className="highlight">results</span>
        </h2>

        {/* Cards Section */}
        <div className="purpose-cards">
          {cardsData.map((card, index) => {
            const { opacity, translateY, scale } = getCardTransform(index);
            return (
              <div
                key={index}
                className="purpose-card"
                ref={(el) => (cardsRef.current[index] = el)}
                style={{
                  opacity,
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="purpose-icon"
                />
                <h3 className="purpose-card-title">{card.title}</h3>
                <p className="purpose-card-text">{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ==================== MAIN WEB DESIGN PAGE ==================== */

export default function Branding() {
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
            <p className="sw-small-title">Branding &amp; Identity Design</p>
            <h1 className="sw-main-title">
              Build a brand
              <br />
              that people remember
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
          data-typewriter="We craft responsive, visually stunning websites tailored to your brand’s needs.From concept to deployment, our team ensures every website is optimized forperformance, usability, and conversions for a website—like the text content thatappears on a single service page in a CMS. Here’s a clean, professional exampleyou can use or adapt."
        >
          A strong brand is more than a logo—it’s an experience your audience remembers. We deliver branding and creative services that combine strategy with creativity, ensuring every touchpoint feels memorable, engaging, and purposeful. From visual identity to storytelling, we craft experiences that inspire trust, build loyalty, and set your brand apart.        </p>

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
              <li>Brand Identity & Logo Design</li>
              <li>Visual & Graphic Design</li>
              <li>Content Strategy & Copywriting</li>
              <li>Marketing Collateral Design</li>
              <li>Creative Campaign Development</li>
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
            <p className="sw-result-content">

              The results of our branding and creative services demonstrate the power of strategic storytelling. By understanding your audience and crafting meaningful visuals and messaging, our work enhances brand recognition, strengthens engagement, and drives loyalty. Every project aims to create a cohesive and memorable brand experience that resonates with your target audience.
            </p></ul>

          <div
            className="sw-result-img-box"
            data-animate="zoom-in"
            style={{ "--delay": "0.15s" }}
          >
            <img src={Result} alt="Results" className="sw-result-img" />
          </div>
        </div>
      </div>

      {/* PURPOSE SCROLL SECTION + CTA */}
      <PurposeSection />
      <CTASection />
    </>
  );
}
