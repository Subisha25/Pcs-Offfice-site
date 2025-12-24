import React, { useState, useEffect, useRef } from "react";
import "./ProjectSlider.css";

import img1 from "../assets/explore/1.jpg";
import img2 from "../assets/explore/2.jpg";
import img3 from "../assets/explore/3.jpg";
import img4 from "../assets/explore/4.jpg";

const projects = [
  {
    id: 1,
    title: "Lhome",
    tags: ["Web Design", "UI/UX Design"],
    image: img1,
  },
  {
    id: 2,
    title: "Grace Cabs",
    tags: ["Web Design", "UI/UX Design"],
    image: img2,
  },
  {
    id: 3,
    title: "Nibras",
    tags: ["Web Design", "UI/UX Design"],
    image: img3,
  },
  {
    id: 4,
    title: "World Tamil Siragam",
    tags: ["Web Design", "UI/UX Design"],
    image: img4,
  },
];

export default function ProjectSlider() {
  const containerRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(
    projects.map(() => ({
      imageProgress: 0,
      titleProgress: 0,
      progressBar: 0,
    }))
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      const newProgress = projects.map((_, index) => {
        const projectScrollHeight = containerHeight / projects.length;
        const projectStart = containerTop + index * projectScrollHeight;
        const projectEnd = projectStart - projectScrollHeight;

        let progress = 0;

        if (projectStart <= 0 && projectEnd > -windowHeight) {
          progress = Math.min(
            Math.max((0 - projectStart) / projectScrollHeight, 0),
            1
          );
        } else if (projectEnd <= -windowHeight) {
          progress = 1;
        }

        const imageProgress = Math.min(progress / 0.5, 1);
        const titleProgress = Math.min(
          Math.max((progress - 0.3) / 0.3, 0),
          1
        );

        const progressBar =
          progress < 0.5
            ? progress * 0.5
            : 0.5 + ((progress - 0.5) / 0.5) * 0.5;

        return { imageProgress, titleProgress, progressBar };
      });

      setScrollProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="project-slider-container" ref={containerRef}>
      {/* PROGRESS BAR */}
      <div className="progress-container">
        {projects.map((_, index) => {
          const progress = scrollProgress[index].progressBar;
          const isActive = progress > 0 && progress < 1;
          const isCompleted = progress >= 1;

          return (
            <div className="progress-wrapper" key={index}>
              <div className="progress-line-wrapper">
                {isActive && (
                  <div className="active-circle">
                    <span className="circle-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                )}

                <div className="progress-line">
                  <div
                    className="progress-fill"
                    style={{ width: `${progress * 100}%` }}
                  />
                </div>
              </div>

              {index < projects.length - 1 && (
                <div
                  className={`progress-dot ${
                    isCompleted ? "completed" : ""
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* PROJECT SECTIONS */}
      {projects.map((project, index) => {
        const { imageProgress, titleProgress } = scrollProgress[index];

        return (
          <div className="project-section" key={project.id}>
            <div className="image-container">
              {/* IMAGE */}
              <div
                className="image-wrapper"
                style={{
                  transform: `translateX(${(1 - imageProgress) * 100}%)`,
                  opacity: imageProgress,
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="image-overlay" />
              </div>

              {/* TEXT */}
              <div className="text-container">
                <div
                  className="text-wrapper"
                  style={{
                    transform: `translateX(${(1 - titleProgress) * 100}%)`,
                    opacity: titleProgress,
                  }}
                >
                  <h2 className="project-title">{project.title}</h2>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
