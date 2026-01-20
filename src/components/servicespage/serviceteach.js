import React, { useEffect, useRef } from "react";

/* 🔥 IMPORT LOCAL SVG IMAGES */
import html from "../../components/assets/teach/html.svg";
import css from "../../components/assets/teach/css.svg";
import js from "../../components/assets/teach/js.svg";
import reactLogo from "../../components/assets/teach/react.svg";
import node from "../../components/assets/teach/node.svg";
import java from "../../components/assets/teach/java.svg";
import python from "../../components/assets/teach/python.svg";
import php from "../../components/assets/teach/php.svg";
import django from "../../components/assets/teach/django.svg";
import flask from "../../components/assets/teach/flask-svgrepo-com.svg";
import android from "../../components/assets/teach/android-svgrepo-com.svg";
import ios from "../../components/assets/teach/ios-svgrepo-com.svg";
import mysql from "../../components/assets/teach/Group (2).png";
import mongodb from "../../components/assets/teach/mongodb-svgrepo-com.svg";
import seo from "../../components/assets/teach/seo-tag-search-engine-optimization-svgrepo-com.svg";
import ads from "../../components/assets/teach/megaphone-advertising-svgrepo-com.svg";
import social from "../../components/assets/teach/internet-connection-contact-svgrepo-com.svg";

export default function TechLogoScroll() {
  const techs = [
    { name: "", img: html },
    { name: "", img: css },
    { name: "", img: js },
    { name: "", img: reactLogo },
    { name: "", img: node },
    { name: "", img: java },
    { name: "", img: python },
    { name: "", img: php },
    { name: "", img: django },
    { name: "", img: flask },
    { name: "", img: android },
    { name: "", img: ios },
    { name: "", img: mysql },
    { name: "", img: mongodb },
    { name: "", img: seo },
    { name: "", img: ads },
    { name: "", img: social },
  ];

  // Refs to control auto-scroll on small screens (320-425px)
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    // Respect user preference for reduced motion
    const reduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let rafId;
    let pos = 0;
    let lastTs = null;
    const speedPxPerSec = 30; // adjust speed here

    function step(ts) {
      if (!lastTs) lastTs = ts;
      const dt = ts - lastTs;
      lastTs = ts;

      const wrapper = wrapperRef.current;
      const track = trackRef.current;
      if (!wrapper || !track) {
        rafId = requestAnimationFrame(step);
        return;
      }

      const w = window.innerWidth;
      // Only auto-scroll on small devices 320 - 425px
      if (w < 320 || w > 425) {
        rafId = requestAnimationFrame(step);
        return;
      }

      const half = track.scrollWidth / 2;
      pos += (speedPxPerSec * dt) / 1000;
      if (pos >= half) pos = pos - half;
      wrapper.scrollLeft = pos;

      rafId = requestAnimationFrame(step);
    }

    rafId = requestAnimationFrame(step);

    function onResize() {
      pos = wrapperRef.current ? wrapperRef.current.scrollLeft : 0;
      lastTs = null;
    }

    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section className="serviceteach-scroll">
      <div className="serviceteach-wrapper" ref={wrapperRef}>
        <div className="serviceteach-track" ref={trackRef}>
          {[...techs, ...techs].map((tech, i) => (
            <div className="serviceteach-card" key={i}>
              <img src={tech.img} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* ===== DESKTOP DEFAULT ===== */
        .serviceteach-scroll {
          padding: 10px 10px 10px;
          text-align: center;
        }

        .serviceteach-wrapper {
          overflow: hidden;
          margin-top: 50px;
        }

        .serviceteach-track {
          display: flex;
          width: max-content;
  animation: serviceteach-scroll-left 75s linear infinite; /* 🔥 slower */        }

        .serviceteach-card {
          min-width: 160px;
          // padding: 26px 16px;
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .serviceteach-card img {
          width: 44px;
          height: 44px;
          object-fit: contain;
          margin-bottom: 12px;
        }

        .serviceteach-card span {
          font-size: 14px;
          font-weight: 500;
          color: #22282b;
        }

        @keyframes serviceteach-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* ===== MOBILE 425px ===== */
        @media (max-width: 425px) {
          .serviceteach-scroll {
            padding: 0px 10px 20px;
          }

          .serviceteach-track {
            gap: 5px;
            /* disable CSS animation on small screens and use JS auto-scroll */
            animation: none;
          }

          .serviceteach-card {
            min-width: 110px;
            padding: 14px 8px;
          }

          .serviceteach-card img {
            width: 30px;
            height: 30px;
            margin-bottom: 6px;
          }

          .serviceteach-card span {
            font-size: 11px;
          }
        }

        /* ===== MOBILE 375px ===== */
        @media (max-width: 375px) {
          .serviceteach-track {
            gap: 5px;
          }

          .serviceteach-card {
            min-width: 100px;
          }

          .serviceteach-card img {
            width: 28px;
            height: 28px;
          }

          .serviceteach-card span {
            font-size: 10.5px;
          }
        }

        /* ===== MOBILE 320px ===== */
        @media (max-width: 320px) {
          .serviceteach-track {
            gap: 5px;
          }

          .serviceteach-card {
            min-width: 90px;
            padding: 10px 6px;
          }

          .serviceteach-card img {
            width: 26px;
            height: 26px;
          }

          .serviceteach-card span {
            font-size: 10px;
          }
        }
      `}</style>
    </section>
  );
}
