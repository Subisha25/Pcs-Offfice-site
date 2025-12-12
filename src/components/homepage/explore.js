import React, { useState, useEffect, useRef } from 'react';
import Image1 from '../assets/ourworks/Mask group (1).png';
import Image2 from '../assets/coollah.png';
import Image3 from '../assets/bjmm.jpeg';
import Image4 from '../assets/wts.png';
import CommonButton from '../common/button';
import { useNavigate } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    image: Image1,
    title: "Lhome",
    link: "/lhome",
    tags: ["Web Design", "UI/UX Design"]
  },
  {
    id: 2,
    image: Image2,
    title: "Coollah",
    link: "/collah",
    tags: ["Web Design", "UI/UX Design"]
  },
  {
    id: 3,
    image: Image3,
    title: "BJMM",
    link: "/bjmm",
    tags: ["Web Design", "UI/UX Design"]
  },
  {
    id: 4,
    image: Image4,
    title: "WorldTmil Siragam",
    link: "/wts",
    tags: ["Web Design", "UI/UX Design"]
  }
];

const START_PHASE_END = 0.25;
const SLIDE_PHASE_START = START_PHASE_END;
const SLIDE_PHASE_END = 1.0;
const SLIDE_PROGRESS_LENGTH = SLIDE_PHASE_END - SLIDE_PHASE_START;

export default function WordAnimation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
const navigate = useNavigate();


  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      if (containerTop > 0) {
        setScrollProgress(0);
        return;
      }

      const maxScroll = containerHeight - windowHeight;
      const scrolled = Math.min(Math.max(-containerTop, 0), maxScroll);
      const totalProgress = maxScroll > 0 ? scrolled / maxScroll : 0;

      setScrollProgress(totalProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getWordStyle = (isLeft) => {
    if (scrollProgress >= START_PHASE_END) {
      return {
        transform: `translateX(${isLeft ? -2000 : 2000}px)`,
        opacity: 0
      };
    }

    const wordProgress = scrollProgress / START_PHASE_END;
    const moveDistance = 2000;

    return {
      transform: `translateX(${wordProgress * (isLeft ? -moveDistance : moveDistance)}px)`,
      opacity: 1 - wordProgress
    };
  };

  const getImageStyle = (projectIndex) => {
    const projectCount = projectsData.length;

    if (scrollProgress < START_PHASE_END) {
      if (projectIndex !== 0) {
        return {
          opacity: 0,
          transform: "translateY(100%) scale(1)",
          zIndex: 0
        };
      }

      const imageProgress = scrollProgress / START_PHASE_END;
      const scale = 0.1 + imageProgress * 0.9;

      return {
        opacity: imageProgress,
        transform: `translateY(0%) scale(${scale})`,
        zIndex: 2
      };
    }

    const slideProgress = (scrollProgress - SLIDE_PHASE_START) / SLIDE_PROGRESS_LENGTH;
    const transitionSegments = projectCount - 1;
    const segmentLength = 1 / transitionSegments;
    const startSegmentProgress = (projectIndex - 1) * segmentLength;
    const endSegmentProgress = projectIndex * segmentLength;
    const activeIndex = Math.floor(slideProgress / segmentLength) + 1;

    if (projectIndex === 0) {
      // First image stays fixed at center - no movement
      return {
        opacity: 1,
        transform: "translateY(0%) scale(1)",
        zIndex: 1
      };
    }

    let transitionProgress = 0;
    if (slideProgress > startSegmentProgress && slideProgress <= endSegmentProgress) {
      transitionProgress = (slideProgress - startSegmentProgress) / segmentLength;
    } else if (slideProgress > endSegmentProgress) {
      transitionProgress = 1;
    }

    const translateY = (1 - transitionProgress) * 100;

    if (projectIndex === activeIndex) {
      return {
        opacity: 1,
        transform: `translateY(${translateY}%) scale(1)`,
        zIndex: 3
      };
    } else if (projectIndex < activeIndex) {
      return {
        opacity: 1,
        transform: "translateY(0%) scale(1)",
        zIndex: 1
      };
    } else {
      return {
        opacity: 0,
        transform: "translateY(100%) scale(1)",
        zIndex: 0
      };
    }
  };

  const getBottomContentStyle = (projectIndex) => {
    if (scrollProgress < START_PHASE_END) {
      // First image: fade in the bottom content from bottom
      if (projectIndex === 0) {
        const fadeSegmentLength = 0.05;
        const fadeProgress = Math.min((scrollProgress - (START_PHASE_END - fadeSegmentLength)) / fadeSegmentLength, 1);
        const opacity = Math.max(0, fadeProgress);
        const translateY = (1 - fadeProgress) * 50; // Start from 50px below
        return {
          opacity,
          transform: `translateY(${translateY}px)`
        };
      }
      return { opacity: 0, transform: 'translateY(50px)' };
    }

    // For other images, content slides up with the image
    const slideProgress = (scrollProgress - SLIDE_PHASE_START) / SLIDE_PROGRESS_LENGTH;
    const projectCount = projectsData.length;
    const segmentLength = 1 / (projectCount - 1);
    const activeIndex = Math.floor(slideProgress / segmentLength) + 1;

    // Check if this is the currently active/incoming image
    if (projectIndex === activeIndex) {
      return { opacity: 1, transform: 'translateY(0)' };
    } else if (projectIndex < activeIndex) {
      // Previous images - keep visible
      return { opacity: 1, transform: 'translateY(0)' };
    } else {
      // Future images - hidden below
      return { opacity: 0, transform: 'translateY(50px)' };
    }
  };

const handleNavigate = (link) => {
  navigate(link);
};


  return (
    <>
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/sf-pro-display');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
          :root {
  --main-bg: #f4f7fb;
  --main-text: #222222;
  --primary-color: #007bff;
  --secondary-color: #555555;
  --button-primary: #101166;
  --button-secondary: #D9D9D9;
  --playfair-fonts: "Playfair Display", serif;
  --heading-font-size: 32px;
  --subheading-font-size: 24px;
  --title-font-size: 20px;
  --description-font-size: 16px;
  --small-text-font-size: 14px;
}



/* Custom font */
@font-face {
  font-family: "WF Visual Sans";
  src: url("/public/fonts/V0.3/V0.3/VF/WFVisualSansVF.woff2") format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

    

        .wordanimation-scroll-container {
          height: 400vh;
          background: #E4E4FF;
        }

        .wordanimation-animation-container {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          overflow: hidden;
        }

        .wordanimation-content-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .wordanimation-words-wrapper {
          display: flex;
          gap: 15px;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          pointer-events: none;
        }

        .wordanimation-word {
         font-family: "WF Visual Sans";
          font-size: 80px;
          font-weight: 500;
          letter-spacing: 2px;
          transition: transform 0.05s linear, opacity 0.05s linear;
          will-change: transform, opacity;
          color: #1a1a1a;
          font-style: medium;
        }

        .wordanimation-image-container {
          position: absolute;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f0f0f0;
          transition: transform 0.05s linear, opacity 0.05s linear;
          will-change: transform;
          overflow: hidden;
        }

        .wordanimation-image-wrapper {
          flex: 1;
          position: relative;
          overflow: hidden;
        }

        .wordanimation-image-wrapper img {
          width: 100%;
          height: 103vh;
          object-fit: cover;
        }

        .wordanimation-bottom-content {
          background: white;
          padding: 30px 90px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: opacity 0.15s ease-out, transform 0.15s ease-out;
          will-change: opacity, transform;
        }

        .wordanimation-bottom-left h2 {
          font-size: 32px;
          font-weight: 600;
          margin: 0 0 10px 0;
        }

        .wordanimation-bottom-links {
          display: flex;
          gap: 30px;
          font-size: 14px;
          color: #666;
        }

        .wordanimation-view-all {
          color: #666;
          font-size: 16px;
          cursor: pointer;
        }

        .wordanimation-our-works-wrapper {
          position: relative;
          width: 220px;
          height: 70px;
          cursor: pointer;
        }

        .wordanimation-our-works-icon {
          width: 3.9rem;
          height: 3.9rem;
          background-color: #312e81;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          left: 0.4rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }

        .wordanimation-our-works-text {
          font-family: 'SF Pro Display', sans-serif;
          font-weight: 520;
          font-size: 24px;
          color: black;
          position: absolute;
          right: 40px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }

        @media (max-width: 768px) {
          .wordanimation-word {
            font-size: 32px;
          }

          .wordanimation-words-wrapper {
            gap: 20px;
          }

          .wordanimation-bottom-content {
            padding: 20px;
            flex-direction: column;
            gap: 20px;
          }

          .wordanimation-our-works-text {
            font-size: 20px;
          }
        }
      `}</style>

      <div className="wordanimation-scroll-container" ref={containerRef}>
        <div className="wordanimation-animation-container">
          <div className="wordanimation-content-wrapper">
            <div className="wordanimation-words-wrapper">
              <h1 className="wordanimation-word" style={getWordStyle(true)}>
                Scroll to
              </h1>
              <h1 className="wordanimation-word" style={getWordStyle(false)}>
                Explore
              </h1>
            </div>
            
            {projectsData.map((project, index) => {
              const imageStyle = getImageStyle(index);
              const contentStyle = getBottomContentStyle(index);
              
              return (
                <div 
                  key={project.id}
                  className="wordanimation-image-container" 
                  style={imageStyle}
                >
                  <div className="wordanimation-image-wrapper">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                    />
                  </div>
                  
                  <div 
                    className="wordanimation-bottom-content" 
                    style={contentStyle}
                  >
                    <div className="wordanimation-bottom-left">
                      <h2>{project.title}</h2>
                      <div className="wordanimation-bottom-links">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  <div 
  className="wordanimation-our-works-wrapper"
  onClick={() => handleNavigate(project.link)}
>
  <CommonButton text='View'/>
</div>

                    <div className="wordanimation-view-all">→ View All Works</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}