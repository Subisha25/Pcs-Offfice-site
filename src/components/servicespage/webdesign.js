import React, { useEffect, useRef, useState } from "react";
import "./webdesign.css";
import "../homepage/workprocess.css";
import tagicon from "../assets/allheadingicon/ourWorkicon.webp";
import Mockup from "../assets/servicebanner.webp";
import Team from "../assets/service1.webp";
import CTASection from "../homepage/cta";
import CommonTopTag from "../common/toptag";
import Discover from "../assets/discovers.webp";
import Deliver from "../assets/deliver.png";
import Create from "../assets/create.png";
import Grow from "../assets/grow.png";
import TechLogoStrip from "./teachstrip";
import CICDFlowFinal from "./cicd";

function PurposeSection() {
 const cardsRef = useRef(null);
const [animate, setAnimate] = useState(false);
const [hasAnimated, setHasAnimated] = useState(
  sessionStorage.getItem("webdesignPurposeAnimated") === "true"
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
          sessionStorage.setItem("webdesignPurposeAnimated", "true");
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
      <div className="">
        <CommonTopTag text="Why Choose Us" icon={tagicon} />
      </div>
      <p className="webdesign-p">Design with purpose,</p>
      <p className="webdesign-p">
        {" "}
        built with <span className="highlight-result">results</span>
      </p>
      <div className="workprocess-scroll-area">
        <div
          ref={cardsRef}
          className={`workprocess-cards-grid ${animate ? "cards-open" : ""}`}
        >
          <Card
            img={Discover}
            title="Discover  & "
            sub="Strategize"
            text="We dive deep into understanding your brand, goals, and audience."
          />
          <Card
            img={Deliver}
            title="Conversion &"
            sub="Focused"
            text="Our layouts are performance-driven and guide users clearly."
          />
          <Card
            img={Create}
            title="Build  & "
            sub="Launch"
            text="We design and build with precision and clarity."
          />
          <Card
            img={Grow}
            title="Refine  & "
            sub="Grow"
            text="We analyze performance and continuously refine your growth."
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

export default function Webdesign() {
  useEffect(() => {
    const isMobileTypewriterDisabled =
      window.matchMedia("(max-width: 425px)").matches;

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

    let typeIO = null;

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

    return () => {
      scrollIO.disconnect();
      if (typeIO) typeIO.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div className="sw-container">
        <div className="sw-hero-wrap">
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

        <p
          className="sw-description"
          data-typewriter="A powerful website is more than visuals—it's an experience your audience remembers. We design and develop websites that blend creativity with smart technology, ensuring every page feels intuitive, engaging, and purposeful. From layout to user journey, we craft digital experiences that inspire trust and turn visitors into loyal customers"
        >
          A powerful website is more than just visuals—it's an experience your
          audience remembers. We design and develop websites that seamlessly
          blend creativity with smart technology, ensuring every page feels
          intuitive, engaging, and purposeful. From layout to user journey, we
          craft digital experiences that build trust and turn visitors into
          loyal customers.
        </p>

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
            </ul>
          </div>
        </div>

       
      </div>
      <CICDFlowFinal/>
      <TechLogoStrip />
      <PurposeSection />
      <CTASection />
    </>
  );
}