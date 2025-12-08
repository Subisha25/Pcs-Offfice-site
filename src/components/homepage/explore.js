
// import React, { useState, useEffect, useRef } from 'react';
// import Image1 from '../assets/ourworks/Mask group (1).png';
// import Image2 from '../assets/coollah.png';
// import Image3 from '../assets/bjmm.jpeg';
// import Image4 from '../assets/wts.png';

// const projectsData = [
//   {
//     id: 1,
//     image: Image1,
//     title: "Lhome",
//     link: "/lhome",
//     tags: ["Web Design", "UI/UX Design"]
//   },
//   {
//     id: 2,
//     image: Image2,
//     title: "Coollah",
//     link: "/collah",
//     tags: ["Web Design", "UI/UX Design"]
//   },
//   {
//     id: 3,
//     image: Image3,
//     title: "BJMM",
//     link: "/bjmm",
//     tags: ["Web Design", "UI/UX Design"]
//   },
//   {
//     id: 4,
//     image: Image4,
//     title: "WorldTmil Siragam",
//     link: "/wts",
//     tags: ["Web Design", "UI/UX Design"]
//   }
// ];

// export default function WordAnimation() {
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const containerRef = useRef(null);

//   const projectCount = projectsData.length;
//   const INTRO_END = 0.2; // Reduced intro phase

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;

//       const container = containerRef.current;
//       const rect = container.getBoundingClientRect();
//       const containerTop = rect.top;
//       const containerHeight = container.offsetHeight;
//       const windowHeight = window.innerHeight;

//       if (containerTop > 0) {
//         setScrollProgress(0);
//         return;
//       }

//       const maxScroll = containerHeight - windowHeight;
//       const scrolled = Math.min(Math.max(-containerTop, 0), maxScroll);
//       const totalProgress = maxScroll > 0 ? scrolled / maxScroll : 0;

//       setScrollProgress(totalProgress);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Simple easing function
//   function easeInOutQuad(t) {
//     return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
//   }

//   function getPhase() {
//     const t = Math.min(Math.max(scrollProgress, 0), 1);

//     if (t <= INTRO_END) {
//       return {
//         mode: 'intro',
//         introT: t / INTRO_END
//       };
//     }

//     // Slider phase - linear progression
//     const SLIDER_START = INTRO_END;
//     let sliderT = (t - SLIDER_START) / (1 - SLIDER_START);
//     sliderT = Math.min(Math.max(sliderT, 0), 1);

//     const transitions = projectCount - 1;
//     const segLen = 1 / transitions;

//     let segIndex = Math.floor(sliderT / segLen);
//     if (segIndex < 0) segIndex = 0;
//     if (segIndex > transitions - 1) segIndex = transitions - 1;

//     const segStart = segIndex * segLen;
//     let segLocal = (sliderT - segStart) / segLen;
//     if (segLocal < 0) segLocal = 0;
//     if (segLocal > 1) segLocal = 1;

//     // Apply smooth easing to transition
//     const segProgress = easeInOutQuad(segLocal);

//     return {
//       mode: 'slider',
//       baseIndex: segIndex,
//       overlayIndex: segIndex + 1,
//       segProgress: segProgress
//     };
//   }

//   const phase = getPhase();

//   const getWordStyle = (isLeft) => {
//     if (phase.mode !== 'intro') {
//       return {
//         opacity: 0,
//         transform: `translateX(${isLeft ? -200 : 200}px)`
//       };
//     }

//     const local = phase.introT;
//     const wordStart = 0.30;
//     const wordEnd = 0.50;
//     const wRaw = (local - wordStart) / (wordEnd - wordStart);
//     const wordProgress = Math.max(0, Math.min(wRaw, 1));

//     const imageStart = 0.10;
//     const imageEnd = 0.80;
//     const iRaw = (local - imageStart) / (imageEnd - imageStart);
//     const imageProgress = Math.max(0, Math.min(iRaw, 1));
//     const easedImageProgress = easeInOutQuad(imageProgress);

//     const baseGap = 50;
//     const imageWidth = typeof window !== 'undefined' ? window.innerWidth * 0.5 : 0;
//     const moveDistance = baseGap + imageWidth * easedImageProgress;

//     return {
//       transform: `translateX(${wordProgress * (isLeft ? -moveDistance : moveDistance)}px)`,
//       opacity: 1 - wordProgress * 0.3
//     };
//   };

//   let bgImage = projectsData[0].image;
//   let bgStyle = {};
//   let slideImage = null;
//   let slideStyle = {};

//   if (phase.mode === 'intro') {
//     const local = phase.introT;
//     const imageStart = 0.10;
//     const imageEnd = 0.80;
//     const raw = (local - imageStart) / (imageEnd - imageStart);
//     const p = Math.max(0, Math.min(raw, 1));
//     const eased = easeInOutQuad(p);
//     const scale = eased || 0.001;
//     const opacity = p;

//     bgImage = projectsData[0].image;
//     bgStyle = {
//       transform: `scale(${scale})`,
//       opacity
//     };
//     slideImage = null;
//   } else {
//     const { baseIndex, overlayIndex, segProgress } = phase;

//     bgImage = projectsData[baseIndex].image;
//     bgStyle = {
//       transform: 'scale(1)',
//       opacity: 1
//     };

//     slideImage = projectsData[overlayIndex].image;
    
//     // Smooth slide from bottom
//     const translateY = 100 - segProgress * 100;
//     slideStyle = {
//       transform: `translateY(${translateY}%)`,
//       opacity: 1
//     };
//   }

//   const getBottomContentStyle = () => {
//     if (phase.mode === 'intro') {
//       const local = phase.introT;
//       const contentStart = 0.6;
//       const raw = (local - contentStart) / 0.4;
//       const p = Math.max(0, Math.min(raw, 1));
//       const eased = easeInOutQuad(p);
//       const translateY = 100 - eased * 100;
//       return {
//         transform: `translateY(${translateY}%)`,
//         opacity: eased
//       };
//     }

//     return {
//       transform: 'translateY(0%)',
//       opacity: 1
//     };
//   };

//   const currentIndex = phase.mode === 'intro' ? 0 : phase.baseIndex;
//   const currentProject = projectsData[currentIndex];

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.cdnfonts.com/css/sf-pro-display');

//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         body {
//           min-height: 100vh;
//           overflow-x: hidden;
//           font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
//         }

//         .wordanimation-scroll-container {
//           height: 500vh;
//           background: #E4E4FF;
//         }

//         .wordanimation-animation-container {
//           position: sticky;
//           top: 0;
//           height: 100vh;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 20px;
//           overflow: hidden;
//         }

//         .wordanimation-content-wrapper {
//           position: relative;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 100%;
//         }

//         .wordanimation-words-wrapper {
//           display: flex;
//           gap: 15px;
//           align-items: center;
//           justify-content: center;
//           position: relative;
//           z-index: 3;
//         }

//         .wordanimation-word {
//           font-size: 64px;
//           font-weight: 300;
//           letter-spacing: 2px;
//           transition: transform 0.05s linear, opacity 0.05s linear;
//           will-change: transform, opacity;
//           color: #1a1a1a;
//         }

//         .wordanimation-center-image {
//           position: absolute;
//           width: 100vw;
//           height: 100vh;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: #f0f0f0;
//           overflow: hidden;
//         }

//         .wordanimation-center-image img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         .wordanimation-center-image.bg-layer {
//           z-index: 1;
//         }

//         .wordanimation-center-image.slide-layer {
//           z-index: 2;
//         }

//         .wordanimation-bottom-content {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           background: white;
//           padding: 30px 90px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           z-index: 10;
//         }

//         .wordanimation-bottom-left h2 {
//           font-size: 32px;
//           font-weight: 600;
//           margin: 0 0 10px 0;
//         }

//         .wordanimation-bottom-links {
//           display: flex;
//           gap: 30px;
//           font-size: 14px;
//           color: #666;
//         }

//         .wordanimation-view-all {
//           color: #666;
//           font-size: 16px;
//           cursor: pointer;
//         }

//         .wordanimation-our-works-wrapper {
//           position: relative;
//           width: 220px;
//           height: 70px;
//           cursor: pointer;
//         }

//         .wordanimation-our-works-icon {
//           width: 3.9rem;
//           height: 3.9rem;
//           background-color: #312e81;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           position: absolute;
//           left: 0.4rem;
//           top: 50%;
//           transform: translateY(-50%);
//           z-index: 10;
//         }

//         .wordanimation-our-works-text {
//           font-family: 'SF Pro Display', sans-serif;
//           font-weight: 520;
//           font-size: 24px;
//           color: black;
//           position: absolute;
//           right: 40px;
//           top: 50%;
//           transform: translateY(-50%);
//           z-index: 10;
//         }

//         @media (max-width: 768px) {
//           .wordanimation-word {
//             font-size: 32px;
//           }

//           .wordanimation-words-wrapper {
//             gap: 20px;
//           }

//           .wordanimation-center-image {
//             width: 90vw;
//           }

//           .wordanimation-bottom-content {
//             padding: 20px;
//             flex-direction: column;
//             gap: 20px;
//           }

//           .wordanimation-our-works-text {
//             font-size: 20px;
//           }
//         }
//       `}</style>

//       <div className="wordanimation-scroll-container" ref={containerRef}>
//         <div className="wordanimation-animation-container">
//           <div className="wordanimation-content-wrapper">
//             <div className="wordanimation-words-wrapper">
//               <h1 className="wordanimation-word" style={getWordStyle(true)}>
//                 Scroll to
//               </h1>
//               <h1 className="wordanimation-word" style={getWordStyle(false)}>
//                 Explore
//               </h1>
//             </div>

//             <div className="wordanimation-center-image bg-layer" style={bgStyle}>
//               <img src={bgImage} alt="background project" />
//             </div>

//             {slideImage && (
//               <div
//                 className="wordanimation-center-image slide-layer"
//                 style={slideStyle}
//               >
//                 <img src={slideImage} alt="sliding project" />
//               </div>
//             )}
//           </div>

//           <div
//             className="wordanimation-bottom-content"
//             style={getBottomContentStyle()}
//           >
//             <div className="wordanimation-bottom-left">
//               <h2>{currentProject.title}</h2>
//               <div className="wordanimation-bottom-links">
//                 {currentProject.tags.map((tag, index) => (
//                   <span key={index}>{tag}</span>
//                 ))}
//               </div>
//             </div>

//             <div className="wordanimation-our-works-wrapper">
//               <div
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   background: "linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 100%)",
//                   borderRadius: "9999px"
//                 }}
//               ></div>

//               <div className="wordanimation-our-works-icon">
//                 <span style={{ fontSize: "24px", color: "white" }}>→</span>
//               </div>

//               <span className="wordanimation-our-works-text">View</span>
//             </div>

//             <div className="wordanimation-view-all">→ View All Works</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useState, useEffect, useRef } from 'react';
import Image1 from '../assets/ourworks/Mask group (1).png';
import Image2 from '../assets/coollah.png';
import Image3 from '../assets/bjmm.jpeg';
import Image4 from '../assets/wts.png';

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

export default function WordAnimation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  const projectCount = projectsData.length;
  const INTRO_END = 0.2; // Reduced intro phase

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

  // Simple easing function
  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }

  function getPhase() {
    const t = Math.min(Math.max(scrollProgress, 0), 1);

    if (t <= INTRO_END) {
      return {
        mode: 'intro',
        introT: t / INTRO_END
      };
    }

    // Slider phase - linear progression
    const SLIDER_START = INTRO_END;
    let sliderT = (t - SLIDER_START) / (1 - SLIDER_START);
    sliderT = Math.min(Math.max(sliderT, 0), 1);

    const transitions = projectCount - 1;
    const segLen = 1 / transitions;

    let segIndex = Math.floor(sliderT / segLen);
    if (segIndex < 0) segIndex = 0;
    if (segIndex > transitions - 1) segIndex = transitions - 1;

    const segStart = segIndex * segLen;
    let segLocal = (sliderT - segStart) / segLen;
    if (segLocal < 0) segLocal = 0;
    if (segLocal > 1) segLocal = 1;

    // Apply smooth easing to transition
    const segProgress = easeInOutQuad(segLocal);

    return {
      mode: 'slider',
      baseIndex: segIndex,
      overlayIndex: segIndex + 1,
      segProgress: segProgress
    };
  }

  const phase = getPhase();

  const getWordStyle = (isLeft) => {
    if (phase.mode !== 'intro') {
      return {
        opacity: 0,
        transform: `translateX(${isLeft ? -200 : 200}px)`
      };
    }

    const local = phase.introT;
    const wordStart = 0.30;
    const wordEnd = 0.50;
    const wRaw = (local - wordStart) / (wordEnd - wordStart);
    const wordProgress = Math.max(0, Math.min(wRaw, 1));

    const imageStart = 0.10;
    const imageEnd = 0.80;
    const iRaw = (local - imageStart) / (imageEnd - imageStart);
    const imageProgress = Math.max(0, Math.min(iRaw, 1));
    const easedImageProgress = easeInOutQuad(imageProgress);

    const baseGap = 50;
    const imageWidth = typeof window !== 'undefined' ? window.innerWidth * 0.5 : 0;
    const moveDistance = baseGap + imageWidth * easedImageProgress;

    return {
      transform: `translateX(${wordProgress * (isLeft ? -moveDistance : moveDistance)}px)`,
      opacity: 1 - wordProgress * 0.3
    };
  };

  let bgImage = projectsData[0].image;
  let bgStyle = {};
  let slideImage = null;
  let slideStyle = {};

  if (phase.mode === 'intro') {
    const local = phase.introT;
    const imageStart = 0.10;
    const imageEnd = 0.80;
    const raw = (local - imageStart) / (imageEnd - imageStart);
    const p = Math.max(0, Math.min(raw, 1));
    const eased = easeInOutQuad(p);
    const scale = eased || 0.001;
    const opacity = p;

    bgImage = projectsData[0].image;
    bgStyle = {
      transform: `scale(${scale})`,
      opacity
    };
    slideImage = null;
  } else {
    const { baseIndex, overlayIndex, segProgress } = phase;

    bgImage = projectsData[baseIndex].image;
    bgStyle = {
      transform: 'scale(1)',
      opacity: 1
    };

    slideImage = projectsData[overlayIndex].image;
    
    // Smooth slide from bottom
    const translateY = 100 - segProgress * 100;
    slideStyle = {
      transform: `translateY(${translateY}%)`,
      opacity: 1
    };
  }

  const getBottomContentStyle = () => {
    if (phase.mode === 'intro') {
      const local = phase.introT;
      const contentStart = 0.6;
      const raw = (local - contentStart) / 0.4;
      const p = Math.max(0, Math.min(raw, 1));
      const eased = easeInOutQuad(p);
      const translateY = 100 - eased * 100;
      return {
        transform: `translateY(${translateY}%)`,
        opacity: eased
      };
    }

    return {
      transform: 'translateY(0%)',
      opacity: 1
    };
  };

  // Determine which project content to show based on transition progress
  let currentIndex;
  if (phase.mode === 'intro') {
    currentIndex = 0;
  } else {
    // Show overlay project content when transition is more than 50% complete
    currentIndex = phase.segProgress > 0.5 ? phase.overlayIndex : phase.baseIndex;
  }
  const currentProject = projectsData[currentIndex];

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
          height: 500vh;
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
          z-index: 3;
        }

        .wordanimation-word {
          font-size: 64px;
          font-weight: 300;
          letter-spacing: 2px;
          transition: transform 0.05s linear, opacity 0.05s linear;
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
          overflow: hidden;
        }

        .wordanimation-center-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .wordanimation-center-image.bg-layer {
          z-index: 1;
        }

        .wordanimation-center-image.slide-layer {
          z-index: 2;
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
            <div className="wordanimation-words-wrapper">
              <h1 className="wordanimation-word" style={getWordStyle(true)}>
                Scroll to
              </h1>
              <h1 className="wordanimation-word" style={getWordStyle(false)}>
                Explore
              </h1>
            </div>

            <div className="wordanimation-center-image bg-layer" style={bgStyle}>
              <img src={bgImage} alt="background project" />
            </div>

            {slideImage && (
              <div
                className="wordanimation-center-image slide-layer"
                style={slideStyle}
              >
                <img src={slideImage} alt="sliding project" />
              </div>
            )}
          </div>

          <div
            className="wordanimation-bottom-content"
            style={getBottomContentStyle()}
          >
            <div className="wordanimation-bottom-left">
              <h2>{currentProject.title}</h2>
              <div className="wordanimation-bottom-links">
                {currentProject.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </div>

            <div className="wordanimation-our-works-wrapper">
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 100%)",
                  borderRadius: "9999px"
                }}
              ></div>

              <div className="wordanimation-our-works-icon">
                <span style={{ fontSize: "24px", color: "white" }}>→</span>
              </div>

              <span className="wordanimation-our-works-text">View</span>
            </div>

            <div className="wordanimation-view-all">→ View All Works</div>
          </div>
        </div>
      </div>
    </>
  );
}