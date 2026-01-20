import React, { useEffect,useRef, useState } from "react";
import "./webdesign.css";
import "../homepage/workprocess.css";
import { GitBranch, GitCommit, Package, TestTube, Network, Eye, Layers, Box, Monitor, Terminal } from 'lucide-react';

import tagicon from "../assets/allheadingicon/ourWorkicon.png";

import Mockup from "../assets/servicebanner.png";
import Team from "../assets/service1.png";
// import CicdImg from "../assets/cicd/cicd.jpeg";
import CicdImg from "../assets/cicd/cicd.png";

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

/* ==================== CI/CD INTERACTIVE DIAGRAM ==================== */
function CICDFlowDiagram() {
  const [hoveredNode, setHoveredNode] = useState(null);

  const CircleNode = ({ node, isHovered, onHover }) => {
    const Icon = node.icon;

    return (
      <div
        onMouseEnter={() => onHover(node.id)}
        onMouseLeave={() => onHover(null)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          zIndex: isHovered ? 100 : 1
        }}
      >
        <div style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          background: isHovered
            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            : '#0a1f44',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          boxShadow: isHovered
            ? '0 10px 25px rgba(102, 126, 234, 0.5)'
            : '0 4px 12px rgba(10, 31, 68, 0.3)',
          position: 'relative'
        }}>
          <Icon
            size={30}
            color="white"
            strokeWidth={2.5}
            style={{
              transition: 'transform 0.3s ease',
              transform: isHovered ? 'scale(1.15)' : 'scale(1)'
            }}
          />

          {isHovered && (
            <>
              <div style={{
                position: 'absolute',
                inset: '-5px',
                borderRadius: '50%',
                border: '2px solid #667eea',
                animation: 'cicdPulse 1.5s ease-in-out infinite'
              }} />
              <div style={{
                position: 'absolute',
                inset: '-10px',
                borderRadius: '50%',
                border: '2px solid rgba(102, 126, 234, 0.4)',
                animation: 'cicdPulse 1.5s ease-in-out infinite 0.2s'
              }} />
            </>
          )}
        </div>

        <span style={{
          fontSize: '14px',
          fontWeight: '500',
          color: '#1a1a1a',
          transition: 'all 0.3s ease',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          fontFamily: '"WF Visual Sans", sans-serif'
        }}>
          {node.label}
        </span>
      </div>
    );
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      position: 'relative'
    }}>
      <style>{`
        @keyframes cicdPulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }
        
        @media (max-width: 1100px) {
          .cicd-desktop-layout {
            display: none !important;
          }
          .cicd-mobile-layout {
            display: flex !important;
          }
        }
        
        @media (min-width: 1101px) {
          .cicd-desktop-layout {
            display: block !important;
          }
          .cicd-mobile-layout {
            display: none !important;
          }
        }
      `}</style>

      {/* Desktop Layout */}
      <div className="cicd-desktop-layout" style={{ display: 'none' }}>
        {/* Headers */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '280px',
          marginBottom: '40px'
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#1a1a1a',
            margin: 0,
            fontFamily: '"WF Visual Sans", sans-serif'
          }}>
            Continous Integration
          </h3>

          <h3 style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#1a1a1a',
            margin: 0,
            fontFamily: '"WF Visual Sans", sans-serif'
          }}>
            Continous Deployment
          </h3>
        </div>

        {/* Main Flow */}
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          minHeight: '380px',
          paddingTop: '40px'
        }}>
          {/* Left Column - Code, Commit, Related */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0',
            position: 'relative'
          }}>
            {/* Code & Commit Box */}
            <div style={{
              border: '2px dashed #999',
              borderRadius: '16px',
              padding: '20px 25px',
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '0'
            }}>
              <CircleNode
                node={{ id: 'code', icon: GitBranch, label: 'Code' }}
                isHovered={hoveredNode === 'code'}
                onHover={setHoveredNode}
              />

              {/* Arrow right */}
              <svg width="40" height="2" style={{ margin: '0 8px' }}>
                <line x1="0" y1="1" x2="40" y2="1" stroke="#1a1a1a" strokeWidth="2" />
              </svg>

              <CircleNode
                node={{ id: 'commit', icon: GitCommit, label: 'Commit' }}
                isHovered={hoveredNode === 'commit'}
                onHover={setHoveredNode}
              />
            </div>

            {/* Arrow down to Related */}
            {/* <svg width="2" height="40" style={{ margin: '8px 0' }}>
              <line x1="1" y1="0" x2="1" y2="40" stroke="#1a1a1a" strokeWidth="2" />
            </svg> */}

            {/* Related to Code */}
            <CircleNode
              node={{ id: 'related', icon: Terminal, label: 'Related to Code' }}
              isHovered={hoveredNode === 'related'}
              onHover={setHoveredNode}
            />
          </div>

          {/* Arrow from Commit to Build */}
          <svg width="50" height="2" style={{ margin: '0 15px' }}>
            <line x1="0" y1="1" x2="50" y2="1" stroke="#1a1a1a" strokeWidth="2" />
            <polygon points="50,1 44,4 44,-2" fill="#1a1a1a" />
          </svg>

          {/* CI Box - Build, Unit Tests, Integration Tests */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0',
            padding: '28px 32px',
            background: 'rgba(255, 200, 200, 0.2)',
            borderRadius: '20px',
            border: '2px dashed #ff6b6b'
          }}>
            <CircleNode
              node={{ id: 'build', icon: Package, label: 'Build' }}
              isHovered={hoveredNode === 'build'}
              onHover={setHoveredNode}
            />

            <svg width="40" height="2" style={{ margin: '0 8px' }}>
              <line x1="0" y1="1" x2="40" y2="1" stroke="#1a1a1a" strokeWidth="2" />
            </svg>

            <CircleNode
              node={{ id: 'unit', icon: TestTube, label: 'Unit Tests' }}
              isHovered={hoveredNode === 'unit'}
              onHover={setHoveredNode}
            />

            <svg width="40" height="2" style={{ margin: '0 8px' }}>
              <line x1="0" y1="1" x2="40" y2="1" stroke="#1a1a1a" strokeWidth="2" />
            </svg>

            <CircleNode
              node={{ id: 'integration', icon: Network, label: 'Integration Tests' }}
              isHovered={hoveredNode === 'integration'}
              onHover={setHoveredNode}
            />
          </div>

          {/* Arrow between CI and CD */}
          <svg width="50" height="2" style={{ margin: '0 15px' }}>
            <line x1="0" y1="1" x2="50" y2="1" stroke="#1a1a1a" strokeWidth="2" />
            <polygon points="50,1 44,4 44,-2" fill="#1a1a1a" />
          </svg>

          {/* CD Box - Review, Staging, Production */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0',
              padding: '28px 32px',
              background: 'rgba(100, 220, 200, 0.2)',
              borderRadius: '20px',
              border: '2px dashed #06d6a0'
            }}>
              <CircleNode
                node={{ id: 'review', icon: Eye, label: 'Review' }}
                isHovered={hoveredNode === 'review'}
                onHover={setHoveredNode}
              />

              <svg width="40" height="2" style={{ margin: '0 8px' }}>
                <line x1="0" y1="1" x2="40" y2="1" stroke="#1a1a1a" strokeWidth="2" />
              </svg>

              <CircleNode
                node={{ id: 'staging', icon: Layers, label: 'Staging' }}
                isHovered={hoveredNode === 'staging'}
                onHover={setHoveredNode}
              />

              <svg width="40" height="2" style={{ margin: '0 8px' }}>
                <line x1="0" y1="1" x2="40" y2="1" stroke="#1a1a1a" strokeWidth="2" />
              </svg>

              <CircleNode
                node={{ id: 'production', icon: Box, label: 'Production' }}
                isHovered={hoveredNode === 'production'}
                onHover={setHoveredNode}
              />
            </div>

            {/* Arrow down from Staging to Monitor */}
            {/* <svg width="2" height="40" style={{ margin: '8px 0', marginLeft: '80' }}>
              <line x1="1" y1="0" x2="1" y2="40" stroke="#1a1a1a" strokeWidth="2" />
            </svg> */}

            {/* Monitor below Staging */}
            <div style={{ marginLeft: '80' }}>
              <CircleNode
                node={{ id: 'monitor', icon: Monitor, label: 'Monitor' }}
                isHovered={hoveredNode === 'monitor'}
                onHover={setHoveredNode}
              />
            </div>
          </div>

          {/* SVG Connecting Lines */}
          <svg style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0
          }}>
            <defs>
              <marker
                id="arrow"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#1a1a1a" />
              </marker>
            </defs>

            {/* Related back up to Code */}
            {/* <path
              d="M 118 280 L 118 240 L 80 240 L 80 110"
              stroke="#1a1a1a"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrow)"
              strokeDasharray="5,5"
            /> */}

         
            {/* Production feedback loop back to Code */}
         {/* Monitor feedback loop back to Code */}
             {/* Monitor feedback loop back to Code */}
            {/* <path
              d="M 1005 280 
                C 1005 310, 1005 320, 970 320 
                L 30 320 
                C 10 320, 0 310, 0 290 
                L 0 85 
                C 0 70, 10 60, 25 60 
                L 80 60"
              stroke="#1a1a1a"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrow)"
              strokeDasharray="5,5"
            /> */}
          </svg>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="cicd-mobile-layout" style={{
        display: 'none',
        flexDirection: 'column',
        gap: '35px',
        alignItems: 'center'
      }}>
        <div style={{ width: '100%', textAlign: 'center' }}>
          <h3 style={{
            fontSize: '22px',
            fontWeight: '600',
            marginBottom: '25px',
            fontFamily: '"WF Visual Sans", sans-serif'
          }}>
            Continous Integration
          </h3>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            alignItems: 'center',
            padding: '25px',
            background: 'rgba(255, 200, 200, 0.2)',
            borderRadius: '18px',
            border: '2px dashed #ff6b6b',
            maxWidth: '350px',
            margin: '0 auto'
          }}>
            <CircleNode
              node={{ id: 'code-m', icon: GitBranch, label: 'Code' }}
              isHovered={hoveredNode === 'code-m'}
              onHover={setHoveredNode}
            />
            <svg width="2" height="25"><line x1="1" y1="0" x2="1" y2="25" stroke="#1a1a1a" strokeWidth="2" /></svg>
            <CircleNode
              node={{ id: 'commit-m', icon: GitCommit, label: 'Commit' }}
              isHovered={hoveredNode === 'commit-m'}
              onHover={setHoveredNode}
            />
            <svg width="2" height="25"><line x1="1" y1="0" x2="1" y2="25" stroke="#1a1a1a" strokeWidth="2" /></svg>
            <CircleNode
              node={{ id: 'build-m', icon: Package, label: 'Build' }}
              isHovered={hoveredNode === 'build-m'}
              onHover={setHoveredNode}
            />
            <svg width="2" height="25"><line x1="1" y1="0" x2="1" y2="25" stroke="#1a1a1a" strokeWidth="2" /></svg>
            <CircleNode
              node={{ id: 'unit-m', icon: TestTube, label: 'Unit Tests' }}
              isHovered={hoveredNode === 'unit-m'}
              onHover={setHoveredNode}
            />
            <svg width="2" height="25"><line x1="1" y1="0" x2="1" y2="25" stroke="#1a1a1a" strokeWidth="2" /></svg>
            <CircleNode
              node={{ id: 'integration-m', icon: Network, label: 'Integration Tests' }}
              isHovered={hoveredNode === 'integration-m'}
              onHover={setHoveredNode}
            />
          </div>
        </div>

        <div style={{ width: '100%', textAlign: 'center' }}>
          <h3 style={{
            fontSize: '22px',
            fontWeight: '600',
            marginBottom: '25px',
            fontFamily: '"WF Visual Sans", sans-serif'
          }}>
            Continous Deployment
          </h3>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            alignItems: 'center',
            padding: '25px',
            background: 'rgba(100, 220, 200, 0.2)',
            borderRadius: '18px',
            border: '2px dashed #06d6a0',
            maxWidth: '350px',
            margin: '0 auto'
          }}>
            <CircleNode
              node={{ id: 'review-m', icon: Eye, label: 'Review' }}
              isHovered={hoveredNode === 'review-m'}
              onHover={setHoveredNode}
            />
            <svg width="2" height="25"><line x1="1" y1="0" x2="1" y2="25" stroke="#1a1a1a" strokeWidth="2" /></svg>
            <CircleNode
              node={{ id: 'staging-m', icon: Layers, label: 'Staging' }}
              isHovered={hoveredNode === 'staging-m'}
              onHover={setHoveredNode}
            />
            <svg width="2" height="25"><line x1="1" y1="0" x2="1" y2="25" stroke="#1a1a1a" strokeWidth="2" /></svg>
            <CircleNode
              node={{ id: 'production-m', icon: Box, label: 'Production' }}
              isHovered={hoveredNode === 'production-m'}
              onHover={setHoveredNode}
            />
            <svg width="2" height="25"><line x1="1" y1="0" x2="1" y2="25" stroke="#1a1a1a" strokeWidth="2" /></svg>
            <CircleNode
              node={{ id: 'monitor-m', icon: Monitor, label: 'Monitor' }}
              isHovered={hoveredNode === 'monitor-m'}
              onHover={setHoveredNode}
            />
          </div>
        </div>

        <div style={{
          padding: '20px',
          border: '2px dashed #999',
          borderRadius: '16px'
        }}>
          <CircleNode
            node={{ id: 'related-m', icon: Terminal, label: 'Related to Code' }}
            isHovered={hoveredNode === 'related-m'}
            onHover={setHoveredNode}
          />
        </div>
      </div>
    </div>
  );
}

export default function Webdesign() {
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

        {/* STEP 3: CI/CD Section (uses .sw-offer-section for consistent layout) */}
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