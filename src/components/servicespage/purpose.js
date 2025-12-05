// import React from "react";
// import "./purpose.css";
// import Whychoose from '../assets/whychoose.png';
// import Discover from '../assets/discovers.png';
// import Deliver from '../assets/deliver.png';
// import Create from '../assets/create.png';
// import Grow from '../assets/grow.png';

// export default function Purpose() {
//   return (
//     <div className="purpose-container">

//       {/* Top Badge */}
//       <div className="purpose-badge-box">
//           <button className="btn-primary">
//                 <div className="icon-circle">
//                   <img alt="arrow" src={Whychoose} />
//                 </div>
//                 Why Choose Us
//               </button>
//       </div>

//       {/* Main Heading */}
//       <h2 className="purpose-title">
//         Design with purpose, <br />
//         built with <span>results</span>
//       </h2>

//       {/* Cards Section */}
//       <div className="purpose-cards">

//         {/* Card 1 */}
//         <div className="purpose-card">
//           <img src={Discover} alt="Discover" className="purpose-icon" />
//           <h3 className="purpose-card-title">Discover</h3>
//           <p className="purpose-card-text">
//             We start by listening and learning—diving deep into your brand,
//             audience, and goals to uncover insights that shape every decision.
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="purpose-card">
//           <img src={Create} alt="Create" className="purpose-icon" />
//           <h3 className="purpose-card-title">Create</h3>
//           <p className="purpose-card-text">
//             With clarity in hand, we craft bold ideas and transform them into
//             designs, stories, and experiences that resonate.
//           </p>
//         </div>

//         {/* Card 3 */}
//         <div className="purpose-card">
//           <img src={Deliver} alt="Deliver" className="purpose-icon" />
//           <h3 className="purpose-card-title">Deliver</h3>
//           <p className="purpose-card-text">
//             From concept to launch, we ensure every detail is polished,
//             impactful, and aligned with your vision for lasting results.
//           </p>
//         </div>

//         {/* Card 4 */}
//         <div className="purpose-card">
//           <img src={Grow} alt="Grow" className="purpose-icon" />
//           <h3 className="purpose-card-title">Grow</h3>
//           <p className="purpose-card-text">
//             We don’t stop at the launch. We analyze performance, gather
//             feedback, and fine-tune to ensure your brand thrives in the digital
//             world.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// }
import React, { useEffect, useRef, useState } from "react";
import "./purpose.css";
import Whychoose from '../assets/whychoose.png';
import Discover from '../assets/discovers.png';
import Deliver from '../assets/deliver.png';
import Create from '../assets/create.png';
import Grow from '../assets/grow.png';

export default function Purpose() {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const badgeRef = useRef(null);
  const cardsRef = useRef([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;

      const wrapper = wrapperRef.current;
      const rect = wrapper.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const wrapperHeight = wrapper.offsetHeight;

      // Calculate scroll progress when section is in view
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const scrolled = Math.abs(rect.top);
        const scrollRange = wrapperHeight - windowHeight;
        const progress = Math.min(Math.max(scrolled / scrollRange, 0), 1);
        setScrollProgress(progress);
      } else if (rect.top > 0) {
        setScrollProgress(0);
      } else {
        setScrollProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate badge visibility (0-10% scroll)
  const badgeOpacity = Math.min(scrollProgress * 10, 1);
  
  // Typewriter effect (10-30% scroll)
  const typewriterProgress = Math.min(Math.max((scrollProgress - 0.1) / 0.2, 0), 1);
  const fullText = "Design with purpose,";
  const typedLength = Math.floor(fullText.length * typewriterProgress);
  const typedText = fullText.substring(0, typedLength);
  const showCursor = typewriterProgress < 1;

  // Title movement (30-60% scroll) - moves up and scales down
 // Title movement (30-60% scroll)
const titleMoveProgress = Math.min(Math.max((scrollProgress - 0.3) / 0.3, 0), 1);
// const titleTranslateY = -200 * titleMoveProgress;
const titleTranslateY = -120 * titleMoveProgress; // 🔥 softer move

  const titleScale = 1 - (0.2 * titleMoveProgress);

  // Cards visibility (60-100% scroll)
  const cardsStartProgress = 0.6;
  const getCardOpacity = (index) => {
    const cardProgress = (scrollProgress - cardsStartProgress - (index * 0.08)) / 0.08;
    return Math.min(Math.max(cardProgress, 0), 1);
  };

  const getCardTransform = (index) => {
    const opacity = getCardOpacity(index);
    const translateY = 50 * (1 - opacity);
    const scale = 0.9 + (0.1 * opacity);
    return { opacity, translateY, scale };
  };

  return (
    <div className="purpose-scroll-wrapper" ref={wrapperRef}>
      <div 
        className="purpose-container" 
        ref={containerRef}
        style={{
          position: scrollProgress > 0 && scrollProgress < 1 ? 'fixed' : 'absolute',
          top: scrollProgress >= 1 ? 'auto' : '0',
          bottom: scrollProgress >= 1 ? '0' : 'auto',
        }}
      >
        {/* Top Badge */}
        <div 
          className="purpose-badge-box" 
          ref={badgeRef}
          style={{
            opacity: badgeOpacity,
            transform: `translateY(${-20 * (1 - badgeOpacity)}px)`
          }}
        >
          <button className="btn-primary">
            <div className="icon-circle">
              <img alt="arrow" src={Whychoose} />
            </div>
            Why Choose Us
          </button>
        </div>

        {/* Main Heading with Typewriter */}
        <h2 
          className="purpose-title" 
          ref={titleRef}
          style={{
            transform: `translateY(${titleTranslateY}px) scale(${titleScale})`,
            transition: 'transform 0.1s linear'
          }}
        >
          <span className="typewriter-text">
            {typedText}
            {showCursor && <span className="cursor">|</span>}
          </span>
          <br />
          built with <span className="highlight">results</span>
        </h2>

        {/* Cards Section */}
        <div className="purpose-cards">
          {[
            { img: Discover, title: "Discover", text: "We start by listening and learning—diving deep into your brand, audience, and goals to uncover insights that shape every decision." },
            { img: Create, title: "Create", text: "With clarity in hand, we craft bold ideas and transform them into designs, stories, and experiences that resonate." },
            { img: Deliver, title: "Deliver", text: "From concept to launch, we ensure every detail is polished, impactful, and aligned with your vision for lasting results." },
            { img: Grow, title: "Grow", text: "We don't stop at the launch. We analyze performance, gather feedback, and fine-tune to ensure your brand thrives in the digital world." }
          ].map((card, index) => {
            const { opacity, translateY, scale } = getCardTransform(index);
            return (
              <div
                key={index}
                className="purpose-card"
                ref={el => cardsRef.current[index] = el}
                style={{
                  opacity,
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  transition: 'opacity 0.3s ease, transform 0.3s ease'
                }}
              >
                <img src={card.img} alt={card.title} className="purpose-icon" />
                <h3 className="purpose-card-title">{card.title}</h3>
                <p className="purpose-card-text">{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}