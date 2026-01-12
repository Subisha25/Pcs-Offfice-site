import React, { useEffect, useRef, useState } from "react";
import "./webdesign.css";
import tagicon from "../assets/allheadingicon/ourWorkicon.png";

import Mockup from "../assets/appdevelop.jpg";
import Team from "../assets/mobileapp.webp";
import Result from "../assets/mobile-app.png";

import Whychoose from "../assets/whychoose.png";
import Discover from "../assets/discovers.png";
import Deliver from "../assets/deliver.png";
import Create from "../assets/create.png";
import Grow from "../assets/grow.png";
import CicdImg from "../assets/cicd/cicd.png";

import CTASection from "../homepage/cta";
import CommonTopTag from "../common/toptag";

/* ==================== PURPOSE SECTION (SCROLL PIN) ==================== */

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
         <Card
  img={Discover}
  title="Business Needs &"
  sub="User Research"
  text="We analyze goals and user behavior to uncover real business opportunities."
/>

<Card
  img={Deliver}
  title="UI/UX Design &"
  sub="Prototyping"
  text="We design intuitive interfaces and interactive prototypes for smooth user experiences."
/>

<Card
  img={Create}
  title="App &"
  sub="Engineering"
  text="We build scalable, high-performance apps with clean architecture."
/>


<Card
  img={Grow}
  title="Launch &"
  sub="Optimization"
  text="We optimize performance, refine features, and support continuous digital growth."
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

export default function Appdesign() {
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
            <p className="sw-small-title">App Design &amp; Development</p>
            <h1 className="sw-main-title">
              Launch a seamless,
              <br />
              conversion-focused mobile app
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
          data-typewriter="A successful app is more than functionality—it’s an experience users remember.
          We design and develop apps that blend sleek design with intelligent technology, ensuring every screen feels intuitive, engaging, and purposeful. From navigation to user flow, we craft digital experiences that inspire trust and turn casual users into loyal app advocates."
        >
          We craft intuitive and visually stunning mobile applications tailored to your brand’s mission and user needs. From concept to deployment, our team ensures every app is built to deliver performance, usability, and conversions — whether it’s a startup idea or an enterprise solution. We ensure a clean, scalable build that is easy to maintain and enhance.
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
              <li>Custom App Design</li>
              <li>Cross-Platform Development (iOS & Android)</li>
              <li>eCommerce & Enterprise Apps</li>
              <li>UI/UX Strategy</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>

        {/* STEP 3: Result Section */}
        {/* <div className="sw-result">
          <ul
            className="sw-result-text"
            data-animate="fade-up"
            style={{ "--delay": "0s" }}
          >
            <h2 className="sw-result-title">Result:</h2>
            <p className="sw-result-content">

The results of our app development approach demonstrate how technology can deeply enhance user experiences. By understanding user behavior, our apps deliver seamless navigation, personalized interactions, and actionable insights. This enables users to engage more, complete tasks faster, and build greater trust in the app—resulting in higher retention, satisfaction, and conversion rates.
            </p>
          </ul>

          <div
            className="sw-result-img-box"
            data-animate="zoom-in"
            style={{ "--delay": "0.15s" }}
          >
            <img src={Result} alt="Results" className="sw-result-img" />
          </div>
        </div> */}
        <div className="cicd-flow-section">
  <h2 className="cicd-title">CI/CD & Deployment</h2>

  <p className="cicd-desc">
    Continuous integration and delivery streamline releases, reduce manual
    errors, and keep your site up-to-date with fast, reliable deployments.
    We automate testing and delivery so updates reach users safely and quickly.
  </p>

  <div className="cicd-flow-image">
    <img src={CicdImg} alt="CI/CD Flow Diagram" />
  </div>
</div>

      </div>

      {/* PURPOSE SCROLL SECTION + CTA */}
      <PurposeSection />
      <CTASection />
    </>
  );
}
