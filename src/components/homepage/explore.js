import React, { useState, useEffect, useRef } from 'react';
import Image1 from '../assets/ourworks/Mask group (1).png'; // Replace with your image path
import ourWorksBg from '../assets/ourworks/ViewButton.png';
import Arrow from '../assets/ourworks/Vector.png';


export default function WordAnimation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const words = ['Scroll', 'to', 'Explore'];
  const containerRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      // Start animation when section enters viewport
      if (containerTop <= windowHeight && containerTop + containerHeight >= 0) {
        // Calculate progress within this section only
        const sectionScrolled = windowHeight - containerTop;
        const progress = Math.min(Math.max(sectionScrolled / containerHeight, 0), 1);
        setScrollProgress(progress);
      } else if (containerTop > windowHeight) {
        setScrollProgress(0);
      } else {
        setScrollProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const getWordProgress = (index) => {
    const wordStart = index * 0.15;
    const wordEnd = wordStart + 0.2;

    if (scrollProgress < wordStart) return 0;
    if (scrollProgress > wordEnd) return 1;

    return (scrollProgress - wordStart) / (wordEnd - wordStart);
  };

  const getWordStyle = (index) => {
    const progress = getWordProgress(index);
    const translateY = 50 - (progress * 50);
    const opacity = progress;
    const colorOpacity = 0.05 + (progress * 0.95);

    // After words are set, move them on further scroll
    const moveProgress = Math.max(0, (scrollProgress - 0.5) / 0.3);
    let translateX = 0;

    if (index === 0) {
      // First word moves left
      translateX = -moveProgress * 150;
    } else if (index === 2) {
      // Last word moves right
      translateX = moveProgress * 150;
    }

    return {
      transform: `translateY(${translateY}%) translateX(${translateX}%)`,
      opacity: scrollProgress > 0.5 ? Math.max(0, 1 - moveProgress) : opacity,
      color: `rgba(0, 0, 0, ${colorOpacity})`
    };
  };

  const getImageStyle = () => {
    const imageProgress = Math.max(0, (scrollProgress - 0.5) / 0.3);
    const scale = imageProgress;
    const opacity = imageProgress;

    return {
      transform: `scale(${scale})`,
      opacity: opacity
    };
  };
  const getBottomContentStyle = () => {
    const contentStart = 0.8; // Image almost finished
    const contentProgress = Math.max(0, (scrollProgress - contentStart) / 0.2);
    const translateY = 100 - (contentProgress * 100);
    const opacity = contentProgress;

    return {
      transform: `translateY(${translateY}%)`,
      opacity: opacity
    };
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

        body {
          // background: #E4E4FF;
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
        }

        .wordanimation-words-wrapper {
          display: flex;
          gap: 15px;
          align-items: baseline;
          position: relative;
          z-index: 2;
        }

        .wordanimation-word {
          font-size: 48px;
          font-weight: 300;
          letter-spacing: 2px;
          transition: transform 0.1s ease-out, opacity 0.1s ease-out, color 0.1s ease-out;
          will-change: transform, opacity, color;
        }

        .wordanimation-word:nth-child(1) {
          font-weight: 500;
        }
          .wordanimation-center-image {
  position: absolute;
  width: 61vw;
  display: flex;
  align-items: center;
  justify-content: center;
    font-size: 24px;
          color: white;
          font-weight: 500;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);

  z-index: 1;
  transition: transform 0.1s ease-out, opacity 0.1s ease-out;
  will-change: transform, opacity;
}
.wordanimation-bottom-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 10px 90px 10px 90px;
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
  margin: 0;
}

.wordanimation-bottom-links {
  display: flex;
  gap: 30px;
  font-size: 14px;
}

.wordanimation-view-button {
  background: #1a1a1a;
  color: white;
  padding: 12px 30px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
}
  .wordanimation-our-works-wrapper {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 9999px;
  position: relative;
  width: 220px;
  height: 70px;
}
.wordanimation-our-works-bg-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 220px;
  height: 80px;
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
  left: 0.4rem;   /* icon right edge-ku seranum */
  top: 57%;
  transform: translateY(-50%);

  z-index: 10;
  
}

.wordanimation-our-works-text {
  font-family: 'WF Visual Sans',  sans-serif;
  font-weight: 520;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0.01em;
  text-align: center; 
  color: black;
  position: relative;
  z-index: 10;
   padding-left: 98px; 
   top: 40%;
}

        @media (max-width: 768px) {
          .wordanimation-word {
            font-size: 32px;
          }

          .wordanimation-words-wrapper {
            gap: 10px;
          }

          .wordanimation-center-image {
            width: 200px;
            height: 200px;
            font-size: 18px;
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
              {words.map((word, index) => (
                <div
                  key={index}
                  className="wordanimation-word"
                  style={getWordStyle(index)}
                >
                  {word}
                </div>
              ))}
            </div>
            <div className="wordanimation-center-image" style={getImageStyle()}>
              <img src={Image1} alt="Center" className='wordanimation-center-img' />
            </div>
          </div>
          <div className="wordanimation-bottom-content" style={getBottomContentStyle()}>
            <div className="wordanimation-bottom-left">
              <h2>Lhome</h2>
              <div className="wordanimation-bottom-links">
                <span>Web Design</span>
                <span>UI/UX Design</span>
              </div>
            </div>
            {/* <button className="view-button">
                            <span>→</span>
                            <span>View</span>
                        </button> */}
            <div className="wordanimation-our-works-wrapper">
              <img
                src={ourWorksBg}
                alt="Our Works Background"
                className="wordanimation-our-works-bg-image"
              />
              <div className="wordanimation-our-works-icon">
                <img src={Arrow} alt="Arrow" className="wordanimation-arrow" />
              </div>
              <span className="wordanimation-our-works-text">
                View
              </span>
            </div>
            <div>→ View All Works</div>
          </div>
        </div>
      </div>
    </>
  );
}