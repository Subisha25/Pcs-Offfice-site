import React, { useState, useEffect, useRef } from 'react';
import Lhome_MobileS from '../assets/ourworks/mblview/Lhome.jpeg';
import Lhome_MobileM from '../assets/ourworks/mblview/lhome/lhom-M.jpeg';
import Lhome_MobileL from '../assets/ourworks/mblview/lhome/lhom-L.jpeg';
import Lhome_Tablet from '../assets/ourworks/mblview/lhome/lhome-tab.jpeg';
import Lhome_Laptop from '../assets/ourworks/Mask group (1).png';
import Lhome_LaptopL from '../assets/ourworks/mblview/lhome/lhome-lapL.jpeg';


// Coollah Images - All Breakpoints
import Coollah_MobileS from '../assets/ourworks/mblview/coollah.jpeg';
import Coollah_MobileM from '../assets/ourworks/mblview/coollah/coollah-m.jpeg';
import Coollah_MobileL from '../assets/ourworks/mblview/coollah/coollah-L.png';
import Coollah_Tablet from '../assets/ourworks/mblview/coollah/coollah-tab.jpeg';
import Coollah_Laptop from '../assets/coollah.png';
import Coollah_LaptopL from '../assets/ourworks/mblview/coollah/coollah-lapL.jpeg';

// BJMM Images - All Breakpoints
import BJMM_MobileS from '../assets/ourworks/mblview/coollah.jpeg';
import BJMM_MobileM from '../assets/ourworks/mblview/tamil/tamil-m.png';
import BJMM_MobileL from '../assets/ourworks/mblview/tamil/tamil-l.png';
import BJMM_Tablet from '../assets/ourworks/mblview/tamil/tamil-tab.png';
import BJMM_Laptop from '../assets/bjmm.jpeg';
import BJMM_LaptopL from '../assets/ourworks/mblview/tamil/tamil-labL.png';

// WorldTamil Siragam Images - All Breakpoints
import WTS_MobileS from '../assets/ourworks/mblview/tamil.jpeg';
import WTS_MobileM from '../assets/ourworks/mblview/tamil/tamil-m.png';
import WTS_MobileL from '../assets/ourworks/mblview/tamil/tamil-l.png';
import WTS_Tablet from '../assets/ourworks/mblview/tamil/tamil-tab.png';
import WTS_Laptop from '../assets/wts.png';
import WTS_LaptopL from '../assets/ourworks/mblview/tamil/tamil-labL.png';


import ArrowIcon from '../assets/ourworks/arrow.png'; // Add your arrow image path here
import { useNavigate } from 'react-router-dom';
import CommonButton from '../common/button';

// Sample images - replace these with your actual image imports
const projectsData = [
  {
    id: 1,
    title: "Lhome",
    link: "/lhome",
    tags: ["Web Design", "UI/UX Design"],
    images: {
        mobileS: Lhome_MobileS,
      mobileM: Lhome_MobileM,
      mobileL: Lhome_MobileL,
        tablet: Lhome_Tablet,
       laptop: Lhome_Laptop,
      laptopL: Lhome_LaptopL
    }
  },
  {
    id: 2,
    title: "Coollah",
    link: "/collah",
    tags: ["Web Design", "UI/UX Design"],
    images: {
      mobileS: Coollah_MobileS,
      mobileM: Coollah_MobileM,
      mobileL: Coollah_MobileL,
      tablet: Coollah_Tablet,
      laptop: Coollah_Laptop,
      laptopL: Coollah_LaptopL
    }
  },
  {
    id: 3,
    title: "BJMM",
    link: "/bjmm",
    tags: ["Web Design", "UI/UX Design"],
    images: {
       mobileS: BJMM_MobileS,
      mobileM: BJMM_MobileM,
      mobileL: BJMM_MobileL,
      tablet: BJMM_Tablet,
      laptop: BJMM_Laptop,
      laptopL: BJMM_LaptopL
    }
  },
  {
    id: 4,
    title: "WorldTamil Siragam",
    link: "/wts",
    tags: ["Web Design", "UI/UX Design"],
    images: {
     mobileS: WTS_MobileS,
      mobileM: WTS_MobileM,
      mobileL: WTS_MobileL,
      tablet: WTS_Tablet,
      laptop: WTS_Laptop,
      laptopL: WTS_LaptopL
    }
  }
];

const START_PHASE_END = 0.25;
const SLIDE_PHASE_START = START_PHASE_END;
const SLIDE_PHASE_END = 1.0;
const SLIDE_PROGRESS_LENGTH = SLIDE_PHASE_END - SLIDE_PHASE_START;



export default function WordAnimation() {
  const navigate = useNavigate();

  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentBreakpoint, setCurrentBreakpoint] = useState('laptopL');
  const containerRef = useRef(null);

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 375) {
        setCurrentBreakpoint('mobileS');
      } else if (width >= 375 && width < 425) {
        setCurrentBreakpoint('mobileM');
      } else if (width >= 425 && width < 768) {
        setCurrentBreakpoint('mobileL');
      } else if (width >= 768 && width < 1026) {
        setCurrentBreakpoint('tablet');
      } else if (width >= 1026 && width < 1440) {
        setCurrentBreakpoint('laptop');
      } else {
        setCurrentBreakpoint('laptopL');
      }
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

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
      
    // Adjust moveDistance based on breakpoint
    let moveDistance = 650; // Default for laptopL
    
    if (currentBreakpoint === 'mobileS') {
      moveDistance = 150;
    } else if (currentBreakpoint === 'mobileM') {
      moveDistance = 180;
    } else if (currentBreakpoint === 'mobileL') {
      moveDistance = 220;
    } else if (currentBreakpoint === 'tablet') {
      moveDistance = 350;
    }

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
      const scale = 0.00001 + imageProgress * 0.9;

      return {
        opacity: Math.max(0.85, imageProgress),
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
      return { 
        opacity: 0, 
        transform: 'translateY(50px)', 
        pointerEvents: 'none',
        display: 'none'
      };
    }

    const slideProgress = (scrollProgress - SLIDE_PHASE_START) / SLIDE_PROGRESS_LENGTH;
    const projectCount = projectsData.length;
    const segmentLength = 1 / (projectCount - 1);
    const activeIndex = Math.floor(slideProgress / segmentLength);

    if (projectIndex === 0) {
      return { 
        opacity: 1, 
        transform: 'translateY(0)',
        pointerEvents: 'auto',
        display: 'flex'
      };
    }
    
    if (projectIndex <= activeIndex + 1) {
      return { 
        opacity: 1, 
        transform: 'translateY(0)',
        pointerEvents: 'auto',
        display: 'flex'
      };
    } else {
      return { 
        opacity: 0, 
        transform: 'translateY(50px)',
        pointerEvents: 'none',
        display: 'none'
      };
    }
  };

  const getResponsiveImage = (project) => {
    return project.images[currentBreakpoint];
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
          padding-right: 20px;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          pointer-events: none;
        }

        .wordanimation-word {
          font-family: 'SF Pro Display', -apple-system, sans-serif;
          font-size: 80px;
          font-weight: 500;
          letter-spacing: 2px;
          transition: transform 0.05s linear, opacity 0.05s linear;
          will-change: transform, opacity;
          color: #1a1a1a;
        }

        .wordanimation-image-container {
          position: absolute;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: transparent;
          transition: transform 0.05s linear, opacity 0.05s linear;
          will-change: transform;
          overflow: hidden;
        }

        .wordanimation-image-wrapper {
          flex: 1;
          position: relative;
          overflow: hidden;
          background: transparent;
        }

        .wordanimation-image-wrapper img {
          width: 100vw;
          height: 105vh;
          object-fit: cover;
          object-position: center;
        }

        .wordanimation-bottom-content {
          background: white;
          padding: 23px 90px;
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
          color: #000000;
          font-weight: 500;
          font-size: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .wordanimation-arrow-icon {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }

        .wordanimation-our-works-wrapper {
          position: relative;
          width: 220px;
          height: 70px;
          cursor: pointer;
        }

        .breakpoint-indicator {
          position: fixed;
          top: 10px;
          right: 10px;
          background: rgba(0,0,0,0.7);
          color: white;
          padding: 8px 12px;
          border-radius: 4px;
          font-size: 12px;
          z-index: 9999;
          font-family: monospace;
        }

        /* Mobile S (320px - 374px) */
        @media (max-width: 374px) {
          .wordanimation-animation-container {
            padding: 0;
          }
            .wordanimation-image-container {
          height: 115vh;
        }

          .wordanimation-image-wrapper img {
          width: 100vw;
          height: 100vh;
            object-fit: contain;
            object-position: center;
          }

          .wordanimation-word {
            font-size: 24px;
            letter-spacing: 1px;
          }

          .wordanimation-words-wrapper {
            gap: 8px;
            padding-right: 10px;
          }

          .wordanimation-bottom-content {
            padding: 12px 15px;
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
          }

          .wordanimation-bottom-left h2 {
            font-size: 20px;
            margin: 0 0 6px 0;
          }

          .wordanimation-bottom-links {
            gap: 10px;
            font-size: 11px;
            flex-wrap: wrap;
          }

          .wordanimation-view-all {
            padding: 12px 5px;
            margin: 0 0 32px 0;
            font-size: 12px;
            align-self: flex-start;
          }

          .wordanimation-arrow-icon {
            width: 16px;
            height: 16px;
          }
        }

        /* Mobile M (375px - 424px) */
        @media (min-width: 375px) and (max-width: 424px) {
          .wordanimation-animation-container {
            padding: 0;
          }

             .wordanimation-image-container {
          height: 115vh;
        }

          .wordanimation-image-wrapper img {
          width: 100vw;
          height: 100vh;
            object-fit: contain;
            object-position: center;
          }

          .wordanimation-word {
            font-size: 28px;
            letter-spacing: 1px;
          }

          .wordanimation-words-wrapper {
            gap: 10px;
            padding-right: 12px;
          }

      
          .wordanimation-bottom-content {
            padding: 12px 15px;
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
          }

          .wordanimation-bottom-left h2 {
            font-size: 20px;
            margin: 0 0 6px 0;
          }

          .wordanimation-bottom-links {
            gap: 10px;
            font-size: 11px;
            flex-wrap: wrap;
          }

          .wordanimation-view-all {
            padding: 12px 5px;
            margin: 0 0 32px 0;
            font-size: 12px;
            align-self: flex-start;
          }

          .wordanimation-arrow-icon {
            width: 16px;
            height: 16px;
          }
        }

        /* Mobile L (425px - 767px) */
        @media (min-width: 425px) and (max-width: 767px) {
          .wordanimation-animation-container {
            padding: 0;
          }

           .wordanimation-image-container {
          height: 115vh;
        }

          .wordanimation-image-wrapper img {
          width: 100vw;
          height: 100vh;
            object-fit: contain;
            object-position: center;
          }

          .wordanimation-word {
            font-size: 32px;
            letter-spacing: 1.5px;
          }

          .wordanimation-words-wrapper {
            gap: 12px;
            padding-right: 15px;
          }

       
          .wordanimation-bottom-content {
            padding: 12px 15px;
            flex-direction: column;
            gap: 12px;
            align-items: flex-start;
          }

          .wordanimation-bottom-left h2 {
            font-size: 20px;
            margin: 0 0 6px 0;
          }

          .wordanimation-bottom-links {
            gap: 10px;
            font-size: 11px;
            flex-wrap: wrap;
          }

          .wordanimation-view-all {
            padding: 12px 5px;
            margin: 0 0 32px 0;
            font-size: 12px;
            align-self: flex-start;
          }

          .wordanimation-arrow-icon {
            width: 18px;
            height: 18px;
          }
        }

        /* Tablet (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .wordanimation-word {
            font-size: 48px;
            letter-spacing: 1.5px;
          }
    .wordanimation-image-container {
          height: 115vh;
        }

          .wordanimation-image-wrapper img {
          width: 100vw;
          height: 100vh;
            object-fit: contain;
            object-position: center;
          }
          .wordanimation-words-wrapper {
            gap: 15px;
            padding-right: 18px;
          }

          .wordanimation-bottom-content {
            padding: 70px 80px;
            flex-direction: row;
            gap: 20px;
            align-items: center;
          }

          .wordanimation-bottom-left h2 {
            font-size: 26px;
            margin: 0 0 8px 0;
          }

          .wordanimation-bottom-links {
            gap: 20px;
            font-size: 13px;
          }

          .wordanimation-view-all {
            font-size: 14px;
          }

          .wordanimation-arrow-icon {
            width: 20px;
            height: 20px;
          }
        }

        /* Laptop L (1440px and above) */
        @media (min-width: 1440px) {
          .wordanimation-word {
            font-size: 80px;
            letter-spacing: 2px;
          }
.wordanimation-image-wrapper img {
            object-fit: contain;
            object-position: center;
          }
          .wordanimation-words-wrapper {
            gap: 20px;
            padding-right: 20px;
          }

          .wordanimation-bottom-content {
            padding: 23px 90px;
          }

          .wordanimation-bottom-left h2 {
            font-size: 32px;
          }

          .wordanimation-bottom-links {
            gap: 30px;
            font-size: 14px;
          }

          .wordanimation-view-all {
            font-size: 16px;
          }
        }
      `}</style>

      {/* <div className="breakpoint-indicator">
        Current: {currentBreakpoint.toUpperCase()} ({window.innerWidth}px)
      </div> */}

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
                      src={getResponsiveImage(project)}
                      alt={`${project.title} - ${currentBreakpoint}`}
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
                      <CommonButton text='View' />
                    </div>

                    <div className="wordanimation-view-all">
                      <img src={ArrowIcon} alt="arrow" className="wordanimation-arrow-icon" />
                      View All Works
                    </div>
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