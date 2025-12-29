import React from "react";

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
import mysql from "../../components/assets/teach/mysql-svgrepo-com.svg";
import mongodb from "../../components/assets/teach/mongodb-svgrepo-com.svg";
import seo from "../../components/assets/teach/seo-tag-search-engine-optimization-svgrepo-com.svg";
import ads from "../../components/assets/teach/megaphone-advertising-svgrepo-com.svg";
import social from "../../components/assets/teach/internet-connection-contact-svgrepo-com.svg";

export default function TechLogoScroll() {
  const techs = [
    { name: "HTML5", img: html },
    { name: "CSS3", img: css },
    { name: "JavaScript", img: js },
    { name: "React", img: reactLogo },
    { name: "Node.js", img: node },
    { name: "Java", img: java },
    { name: "Python", img: python },
    { name: "PHP", img: php },
    { name: "Django", img: django },
    { name: "Flask", img: flask },
    { name: "Android", img: android },
    { name: "iOS", img: ios },
    { name: "MySQL", img: mysql },
    { name: "MongoDB", img: mongodb },
    { name: "SEO", img: seo },
    { name: "Google Ads", img: ads },
    { name: "Social Media", img: social },
  ];

  return (
    <section className="serviceteach-scroll">
      <div className="serviceteach-wrapper">
        <div className="serviceteach-track">
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
          gap: 28px;
          width: max-content;
          animation: serviceteach-scroll-left 35s linear infinite;
        }

        .serviceteach-card {
          min-width: 160px;
          padding: 26px 16px;
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
            gap: 16px;
            animation-duration: 28s;
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
            gap: 14px;
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
            gap: 12px;
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
