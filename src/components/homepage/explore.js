import React, { useState, useEffect, useRef } from 'react';
import Image1 from '../assets/ourworks/Mask group (1).png';
import Image2 from '../assets/ourworks/Mask group (1).png';
import Image3 from '../assets/ourworks/Mask group (1).png';
import Image4 from '../assets/ourworks/Mask group (1).png';

const projectsData = [
  {
    id: 1,
    image: Image1,
    overlayText: "Featuring curators from around the world",
    title: "Lhome",
    tags: ["Web Design", "UI/UX Design"]
  },
  {
    id: 2,
    image: Image2,
    overlayText: "Modern kitchen designs",
    title: "Kitchen Pro",
    tags: ["Interior Design", "3D Modeling"]
  },
  {
    id: 3,
    image: Image3,
    overlayText: "Luxury bedroom collections",
    title: "Dream Spaces",
    tags: ["Bedroom Design", "Furniture"]
  },
  {
    id: 4,
    image: Image4,
    overlayText: "Smart living solutions",
    title: "Smart Home",
    tags: ["Technology", "Automation"]
  }
];

export default function WordAnimation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      if (containerTop <= windowHeight && containerTop + containerHeight >= 0) {
        const sectionScrolled = windowHeight - containerTop;
        const totalProgress = Math.min(Math.max(sectionScrolled / containerHeight, 0), 1);
        setScrollProgress(totalProgress);
        
        // Calculate which project should be shown based on scroll
        const projectCount = projectsData.length;
        const progressPerProject = 1 / projectCount;
        const index = Math.min(Math.floor(totalProgress / progressPerProject), projectCount - 1);
        setCurrentProjectIndex(index);
      } else if (containerTop > windowHeight) {
        setScrollProgress(0);
        setCurrentProjectIndex(0);
      } else {
        setScrollProgress(1);
        setCurrentProjectIndex(projectsData.length - 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getWordStyle = (isLeft) => {
    const projectCount = projectsData.length;
    const progressPerProject = 1 / projectCount;
    const localProgress = (scrollProgress % progressPerProject) / progressPerProject;
    
    const wordStart = 0.30;
    const wordEnd = 0.4;
    const wordProgress = Math.max(0, Math.min((localProgress - wordStart) / (wordEnd - wordStart), 1));
    
    const imageProgress = Math.max(0, Math.min((localProgress - 0.15) / (0.85 - 0.15), 1));
    const easedImageProgress = imageProgress * imageProgress;
    const currentImageScale = easedImageProgress;
    
    const baseGap = 50;
    const imageWidth = window.innerWidth * 0.5;
    const moveDistance = baseGap + (imageWidth * currentImageScale);
    
    // Only show words for the first project
    if (currentProjectIndex > 0) {
      return {
        transform: `translateX(${isLeft ? -moveDistance : moveDistance}px)`,
        opacity: 0
      };
    }
    
    return {
      transform: `translateX(${wordProgress * (isLeft ? -moveDistance : moveDistance)}px)`,
      opacity: 1 - (wordProgress * 0.3)
    };
  };

  const getImageStyle = () => {
    const projectCount = projectsData.length;
    const progressPerProject = 1 / projectCount;
    const localProgress = (scrollProgress % progressPerProject) / progressPerProject;
    
    const imageStart = 0.15;
    const imageEnd = 0.85;
    const imageProgress = Math.max(0, Math.min((localProgress - imageStart) / (imageEnd - imageStart), 1));
    
    const easedProgress = imageProgress * imageProgress;
    const scale = easedProgress;
    const opacity = imageProgress;

    return {
      transform: `scale(${scale})`,
      opacity: opacity
    };
  };

  const getBottomContentStyle = () => {
    const projectCount = projectsData.length;
    const progressPerProject = 1 / projectCount;
    const localProgress = (scrollProgress % progressPerProject) / progressPerProject;
    
    const contentStart = 0.7;
    const contentProgress = Math.max(0, (localProgress - contentStart) / 0.3);
    const translateY = 100 - (contentProgress * 100);
    const opacity = contentProgress;

    return {
      transform: `translateY(${translateY}%)`,
      opacity: opacity
    };
  };

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
        }

        .wordanimation-word {
          font-size: 64px;
          font-weight: 300;
          letter-spacing: 2px;
          transition: transform 0.1s ease-out, opacity 0.1s ease-out;
          will-change: transform, opacity;
          color: #1a1a1a;
        }

        .wordanimation-center-image {
          position: absolute;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f0f0f0;
          z-index: 1;
          transition: transform 0.1s ease-out, opacity 0.1s ease-out;
          will-change: transform, opacity;
          overflow: hidden;
        }

        .wordanimation-center-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

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
            width: 80vw;
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
            <div className="wordanimation-center-image" style={getImageStyle()}>
              <img 
                src={currentProject.image} 
                alt={currentProject.title} 
              />
              <div className="wordanimation-image-overlay-text">
                {currentProject.overlayText}
              </div>
            </div>
          </div>
          {/* BottomContent section*/}
          <div className="wordanimation-bottom-content" style={getBottomContentStyle()}>
            <div className="wordanimation-bottom-left">
              <h2>{currentProject.title}</h2>
              <div className="wordanimation-bottom-links">
                {currentProject.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="wordanimation-our-works-wrapper">
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