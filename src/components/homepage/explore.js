import React, { useState, useEffect, useRef } from 'react';
import Image1 from '../assets/ourworks/Mask group (1).png';
import Image2 from '../assets/coollah.png';
import Image3 from '../assets/bjmm.jpeg';
import Image4 from '../assets/wts.png';
import { useNavigate } from "react-router-dom";

// Note: Replace these placeholder image paths with your actual paths if running this code.
const projectsData = [
  {
    id: 1,
    image: Image1,
    overlayText: "Featuring curators from around the world",
    title: "Lhome",
    link: "/lhome",
    tags: ["Web Design", "UI/UX Design"]
  },
  {
    id: 2,
    image: Image2,
    overlayText: "Modern kitchen designs",
    title: "Coollah",
    link: "/collah",
    tags: ["Web Design", "UI/UX Design"]
  },
  {
    id: 3,
    image: Image3,
    overlayText: "Luxury bedroom collections",
    title: "BJMM",
    link: "/bjmm",
    tags: ["Web Design", "UI/UX Design"]
  },
  {
    id: 4,
    image: Image4,
    overlayText: "Smart living solutions",
    title: "WorldTmil Siragam",
    link: "/wts",
    tags: ["Web Design", "UI/UX Design"]
  }
];

// --- Constants for Scroll Segments ---
const START_PHASE_END = 0.25; // Scroll progress when the first image finishes zooming/fading in
const SLIDE_PHASE_START = START_PHASE_END;
const SLIDE_PHASE_END = 1.0;
const SLIDE_PROGRESS_LENGTH = SLIDE_PHASE_END - SLIDE_PHASE_START; // 0.75

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

      // Calculate the maximum scroll distance within the container
      const maxScroll = containerHeight - windowHeight;
      // Calculate how much is scrolled, clamped between 0 and maxScroll
      const scrolled = Math.min(Math.max(-containerTop, 0), maxScroll);
      // Calculate the total progress (0 to 1)
      const totalProgress = maxScroll > 0 ? scrolled / maxScroll : 0;

      setScrollProgress(totalProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getWordStyle = (isLeft) => {
    // Word animation should complete by START_PHASE_END (0.25)
    if (scrollProgress >= START_PHASE_END) {
      return {
        transform: `translateX(${isLeft ? -2000 : 2000}px)`,
        opacity: 0
      };
    }

    const wordProgress = scrollProgress / START_PHASE_END; // Scales 0 -> 1 over first 25% scroll
    const moveDistance = 2000;

    return {
      transform: `translateX(${wordProgress * (isLeft ? -moveDistance : moveDistance)}px)`,
      opacity: 1 - wordProgress
    };
  };

  const getImageStyle = (projectIndex) => {
    const projectCount = projectsData.length;

    // --- PHASE 1: Initial Zoom/Fade for the first image (0% to 25% scroll) ---
    if (scrollProgress < START_PHASE_END) {
      if (projectIndex !== 0) {
        // Hide all other images during the initial phase
        return {
          opacity: 0,
          transform: "translateY(0%) scale(0.1)",
          zIndex: 0
        };
      }

      const imageProgress = scrollProgress / START_PHASE_END; // 0 -> 1
      const scale = 0.1 + imageProgress * 0.9; // Scale from 0.1 to 1

      return {
        opacity: imageProgress,
        transform: `translateY(0%) scale(${scale})`,
        zIndex: 2 // Highest z-index for the image being focused on
      };
    }

    // --- PHASE 2: Image Sliding Transition (25% to 100% scroll) ---
    
    // Calculate progress within the sliding phase (0 to 1)
    const slideProgress = (scrollProgress - SLIDE_PHASE_START) / SLIDE_PROGRESS_LENGTH;
    
    // The number of transition segments (one less than project count)
    const transitionSegments = projectCount - 1; 

    // Calculate the progress for a single transition segment (e.g., Image 1 -> Image 2)
    const segmentLength = 1 / transitionSegments;
    
    // Determine the scroll value range for the *current* image transition (e.g., 0% - 25% is zoom, 25% - 50% is 1->2 slide, 50% - 75% is 2->3 slide, 75% - 100% is 3->4 slide)
    const startSegmentProgress = (projectIndex - 1) * segmentLength;
    const endSegmentProgress = projectIndex * segmentLength;

    // The image that is currently in the main/active view
    const activeIndex = Math.floor(slideProgress / segmentLength) + 1; // 1, 2, 3, or 4

    if (projectIndex === 0) {
        // Image 1 stays fully visible and fixed after the zoom phase
        return {
            opacity: 1,
            transform: "translateY(0%) scale(1)",
            zIndex: 1 // Lower z-index so subsequent images can slide over it
        };
    }

    // Calculate progress for the current transition segment (0 to 1)
    // Example: If projectIndex is 2 (Coollah), transition happens between startSegmentProgress (1/3) and endSegmentProgress (2/3)
    let transitionProgress = 0;
    if (slideProgress > startSegmentProgress && slideProgress <= endSegmentProgress) {
        // This is the image currently sliding in
        transitionProgress = (slideProgress - startSegmentProgress) / segmentLength;
    } else if (slideProgress > endSegmentProgress) {
        // This image has finished sliding in and is now the 'active' image
        transitionProgress = 1; 
    }

    // This is the desired translation (move up from 100% below the screen to 0% at the center)
    const translateY = (1 - transitionProgress) * 100; // 100% (start) -> 0% (end)

    if (projectIndex === activeIndex) {
        // The image currently sliding into view
        return {
            opacity: 1,
            transform: `translateY(${translateY}%) scale(1)`,
            zIndex: 3 // High z-index while sliding
        };
    } else if (projectIndex < activeIndex) {
        // Images that have already passed (keep them visible, fixed)
        return {
            opacity: 1,
            transform: "translateY(0%) scale(1)",
            zIndex: 1 
        };
    } else { // projectIndex > activeIndex
        // Images that haven't appeared yet (start them below the screen, hidden)
        return {
            opacity: 0,
            transform: "translateY(100%) scale(1)",
            zIndex: 0
        };
    }
  };


  const getCurrentProjectIndex = () => {
    if (scrollProgress < SLIDE_PHASE_START) return 0; // First image during zoom/fade

    const remainingProgress = (scrollProgress - SLIDE_PHASE_START) / SLIDE_PROGRESS_LENGTH; // 0 to 1

    // We want this to range from 0 to 3 for projectsData array (length 4)
    const projectCount = projectsData.length;
    // The index of the project that should be displayed in the bottom content
    // Math.floor(remainingProgress * projectCount) gives 0, 1, 2, 3
    return Math.min(Math.floor(remainingProgress * projectCount), projectCount - 1);
  };

  const getBottomContentStyle = () => {
    if (scrollProgress < START_PHASE_END) {
      return {
        transform: `translateY(100px)`,
        opacity: 0,
      };
    }

    // Fade in over a small segment after the initial zoom phase
    const fadeSegmentLength = 0.05;
    const fadeProgress = Math.min((scrollProgress - START_PHASE_END) / fadeSegmentLength, 1);

    return {
      transform: `translateY(${100 - fadeProgress * 100}px)`,
      opacity: fadeProgress,
    };
  };

  const currentProjectIndex = getCurrentProjectIndex();
  const currentProject = projectsData[currentProjectIndex];

  return (
    <>
      <style>{`
        @import url('https://fonts.cdnfonts.com/css/sf-pro-display');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          min-height: 100vh;
          overflow-x: hidden;
          font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .wordanimation-scroll-container {
          height: 400vh; /* Total scroll height */
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
          pointer-events: none; /* Prevents interaction with words */
        }

        .wordanimation-word {
          font-size: 80px;
          font-weight: 500;
          letter-spacing: 2px;
          transition: transform 0.1s ease-out, opacity 0.1s ease-out;
          will-change: transform, opacity;
          color: #1a1a1a;
          font-style: medium;
        }

        .wordanimation-center-image {
          position: absolute;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f0f0f0;
          /* Reduced transition time for a snappier image slide */
          transition: transform 0.05s linear, opacity 0.05s linear; 
          will-change: transform;
          overflow: hidden;
        }

        .wordanimation-center-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Note: Overlay text is not visible in the provided image styles, but keeping the class */
        .wordanimation-image-overlay-text { 
          position: absolute;
          color: white;
          font-size: 32px;
          font-weight: 500;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }

        .wordanimation-bottom-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: white;
          padding: 30px 90px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 10;
          transition: transform 0.1s ease-out, opacity 0.1s ease-out;
          will-change: transform, opacity;
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

        .wordanimation-our-works-bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 9999px;
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

        .wordanimation-arrow {
          width: 24px;
          height: 24px;
          filter: brightness(0) invert(1);
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

          .wordanimation-center-image {
            width: 90vw;
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
            {/* Scroll to Explore words */}
            <div className="wordanimation-words-wrapper">
              <h1 className="wordanimation-word" style={getWordStyle(true)}>
                Scroll to
              </h1>
              <h1 className="wordanimation-word" style={getWordStyle(false)}>
                Explore
              </h1>
            </div>
            
            {/* Render all images stacked with calculated styles */}
            {projectsData.map((project, index) => {
              const style = getImageStyle(index);
              return (
                <div 
                  key={project.id}
                  className="wordanimation-center-image" 
                  style={style}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                  />
                  {/* <div className="wordanimation-image-overlay-text">{project.overlayText}</div> */}
                </div>
              );
            })}
          </div>
          
          {/* Bottom Content (Project Title/Tags/Link) */}
          <div className="wordanimation-bottom-content" style={getBottomContentStyle()}>
            <div className="wordanimation-bottom-left">
              <h2>{currentProject.title}</h2>
              <div className="wordanimation-bottom-links">
                {currentProject.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </div>
            <div 
              className="wordanimation-our-works-wrapper"
              onClick={() => navigate(currentProject.link)}
              style={{ cursor: "pointer" }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 100%)',
                borderRadius: '9999px'
              }}></div>

              <div className="wordanimation-our-works-icon">
                <span style={{fontSize: '24px', color: 'white'}}>→</span>
              </div>

              <span className="wordanimation-our-works-text">
                View
              </span>
            </div>
            <div className="wordanimation-view-all">→ View All Works</div>
          </div>
        </div>
      </div>
    </>
  );
}