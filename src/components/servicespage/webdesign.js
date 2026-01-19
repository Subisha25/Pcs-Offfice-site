import React, { useEffect, useRef, useState } from "react";
import { GitBranch, GitCommit, Package, TestTube, Network, Eye, Layers, Box, Monitor, Terminal } from 'lucide-react';

import "./webdesign.css";
import "../homepage/workprocess.css";

import tagicon from "../assets/allheadingicon/ourWorkicon.png";

import Mockup from "../assets/servicebanner.png";
import Team from "../assets/service1.png";

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

/* ==================== UPDATED CI/CD INFINITY DIAGRAM ==================== */
function CICDFlowDiagram() {
  const steps = ["Plan", "Code", "Build", "Test", "Release", "Deploy", "Operate"];

  return (
    <div className="cicd-wrapper" style={{ 
      padding: "60px 20px", 
      background: "#fff", 
      fontFamily: "sans-serif",
      overflowX: "auto" 
    }}>
      <div style={{ 
        position: "relative", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        minWidth: "900px",
        margin: "0 auto",
        height: "300px"
      }}>
        
        {/* THE MAIN CHEVRON TRACK */}
        <div style={{ display: "flex", alignItems: "center", zIndex: 2 }}>
          {steps.map((step, index) => (
            <div key={step} style={{ position: "relative", display: "flex", alignItems: "center" }}>
              <div style={{
                background: "#eeeeee",
                padding: "15px 40px",
                fontSize: "22px",
                fontWeight: "600",
                color: "#000",
                clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%)",
                marginRight: "-15px",
                minWidth: "140px",
                textAlign: "center"
              }}>
                {step}
              </div>
            </div>
          ))}
        </div>

        {/* LEFT LOOP (Continuous Integration) */}
        <div className="loop-container left-loop" style={{
          position: "absolute",
          left: "145px", /* Positioned between Code and Build */
          top: "50%",
          transform: "translateY(-50%)",
          width: "310px",
          height: "220px",
          pointerEvents: "none"
        }}>
          {/* Top Arrow */}
          <div style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            border: "22px solid #2d417a",
            borderRadius: "50%",
            clipPath: "inset(0 0 55% 0)"
          }} />
          <div style={{
            position: "absolute",
            top: "-5px",
            right: "128px",
            width: 0, height: 0,
            borderLeft: "20px solid transparent",
            borderRight: "20px solid transparent",
            borderBottom: "30px solid #2d417a",
            transform: "rotate(90deg)"
          }} />

          {/* Bottom Arrow */}
          <div style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "100%",
            border: "22px solid #2d417a",
            borderRadius: "50%",
            clipPath: "inset(55% 0 0 0)"
          }} />
          <div style={{
            position: "absolute",
            bottom: "-5px",
            left: "128px",
            width: 0, height: 0,
            borderLeft: "20px solid transparent",
            borderRight: "20px solid transparent",
            borderBottom: "30px solid #2d417a",
            transform: "rotate(-90deg)"
          }} />
          
          {/* Label */}
          <div style={{
            position: "absolute",
            bottom: "-50px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#92d8f4",
            padding: "8px 25px",
            fontWeight: "bold",
            fontSize: "18px",
            color: "#000",
            whiteSpace: "nowrap"
          }}>
            Continuous Integration
          </div>
        </div>

        {/* RIGHT LOOP (Continuous Delivery) */}
        <div className="loop-container right-loop" style={{
          position: "absolute",
          right: "145px", /* Positioned between Release and Deploy */
          top: "50%",
          transform: "translateY(-50%)",
          width: "310px",
          height: "220px",
          pointerEvents: "none"
        }}>
          {/* Top Arrow */}
          <div style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            border: "22px solid #2d417a",
            borderRadius: "50%",
            clipPath: "inset(0 0 55% 0)"
          }} />
          <div style={{
            position: "absolute",
            top: "-5px",
            right: "128px",
            width: 0, height: 0,
            borderLeft: "20px solid transparent",
            borderRight: "20px solid transparent",
            borderBottom: "30px solid #2d417a",
            transform: "rotate(90deg)"
          }} />

          {/* Bottom Arrow */}
          <div style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "100%",
            border: "22px solid #2d417a",
            borderRadius: "50%",
            clipPath: "inset(55% 0 0 0)"
          }} />
          <div style={{
            position: "absolute",
            bottom: "-5px",
            left: "128px",
            width: 0, height: 0,
            borderLeft: "20px solid transparent",
            borderRight: "20px solid transparent",
            borderBottom: "30px solid #2d417a",
            transform: "rotate(-90deg)"
          }} />

          {/* Label */}
          <div style={{
            position: "absolute",
            bottom: "-50px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#92d8f4",
            padding: "8px 25px",
            fontWeight: "bold",
            fontSize: "18px",
            color: "#000",
            whiteSpace: "nowrap"
          }}>
            Continuous Deployment
          </div>
        </div>

      </div>
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

        <div className="cicd-flow-section">
          <h2 className="cicd-title">CI/CD & Deployment</h2>

          <p className="cicd-desc">
            Continuous integration and delivery streamline releases, reduce
            manual errors, and keep your site up-to-date with fast, reliable
            deployments. We automate testing and delivery so updates reach users
            safely and quickly.
          </p>

          <CICDFlowDiagram />
        </div>
      </div>
      <TechLogoStrip />
      <PurposeSection />
      <CTASection />
    </>
  );
}