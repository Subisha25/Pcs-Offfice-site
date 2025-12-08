import React, { useEffect, useRef, useState } from "react";
import "./webdesign.css";

import Mockup from "../assets/servicebanner.png";
import Team from "../assets/service1.png";
import Result from "../assets/service2.png";

import Whychoose from "../assets/whychoose.png";
import Discover from "../assets/discovers.png";
import Deliver from "../assets/deliver.png";
import Create from "../assets/create.png";
import Grow from "../assets/grow.png";

import CTASection from "../homepage/cta";

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
      title: "Discover",
      text: "We start by listening and learning—diving deep into your brand, audience, and goals to uncover insights that shape every decision.",
    },
    {
      img: Create,
      title: "Create",
      text: "With clarity in hand, we craft bold ideas and transform them into designs, stories, and experiences that resonate.",
    },
    {
      img: Deliver,
      title: "Deliver",
      text: "From concept to launch, we ensure every detail is polished, impactful, and aligned with your vision for lasting results.",
    },
    {
      img: Grow,
      title: "Grow",
      text: "We don't stop at the launch. We analyze performance, gather feedback, and fine-tune to ensure your brand thrives in the digital world.",
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
          <button className="btn-primary">
            <div className="icon-circle">
              <img alt="arrow" src={Whychoose} />
            </div>
            Why Choose Us
          </button>
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
          data-typewriter="We craft responsive, visually stunning websites tailored to your brand’s needs.From concept to deployment, our team ensures every website is optimized forperformance, usability, and conversions for a website—like the text content thatappears on a single service page in a CMS. Here’s a clean, professional exampleyou can use or adapt."
        >
          We craft responsive, visually stunning websites tailored to your
          brand’s needs.From concept to deployment, our team ensures every
          website is optimized forperformance, usability, and conversions for a
          website—like the text content thatappears on a single service page in
          a CMS. Here’s a clean, professional exampleyou can use or adapt.
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
              <li>Mobile-friendly responsive layouts</li>
              <li>E-commerce and CMS integration</li>
              <li>SEO-optimized structure</li>
              <li>Ongoing maintenance and support</li>
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
            <li>We combine user research, wireframing,</li>
            <li>prototyping, and visual design to deliver</li>
            <li>solutions that not only look great but also</li>
            <li>solve real user problems.</li>
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

      {/* PURPOSE SCROLL SECTION + CTA */}
      <PurposeSection />
      <CTASection />
    </>
  );
}
