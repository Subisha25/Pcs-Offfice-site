import React, { useState, useEffect, useRef } from 'react';
import ourWorksBg from '../assets/ourworks/Rectangle.png';
import './ourworks.css';
import WordAnimation from './explore';

const ExploreSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [startTyping, setStartTyping] = useState(false);
  const textRef = useRef(null);

  const fullText =
    'Explore our work where we played, experimented, and built something amazing.';

  // 🔥 Scroll detect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartTyping(true);
        }
      },
      { threshold: 0.4 }
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  // 🔥 Start typewriter AFTER scroll
  useEffect(() => {
    if (!startTyping) return;

    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 40);

    return () => clearInterval(timer);
  }, [startTyping]);

  return (
    <div className="explore-container">
      <div className="explore-top-section">

        <div className="our-works-wrapper">
          <img src={ourWorksBg} className="our-works-bg-image" alt="" />
          <div className="our-works-icon">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
          </div>
          <span className="our-works-text">Our Works</span>
        </div>

        {/* 🔥 MAIN HEADING WITH TYPEWRITER */}
        <div className="header-wrapper">
          <h1 className="main-heading" ref={textRef}>
            {displayedText.trim().split(' ').map((word, index) => {
              if (word === 'something')
                return (
                  <span key={index} className="something-text">
                    {word + ' '}
                  </span>
                );

              if (word === 'amazing.')
                return (
                  <span key={index} className="amazing-text">
                    {word}
                  </span>
                );

              return <span key={index}>{word} </span>;
            })}
            <span className="cursor">|</span>
          </h1>
        </div>
      </div>

      <div>
        <WordAnimation />
      </div>
    </div>
  );
};

export default ExploreSection;