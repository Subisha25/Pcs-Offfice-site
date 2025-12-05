
import React, { useState, useEffect } from 'react';
import ourWorksBg from '../assets/ourworks/Rectangle.png';
import './ourworks.css';
import ServicesSection from './services';

const TypedText = ({ text, typingSpeed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeoutId); 
    }
  }, [index, text, typingSpeed]);

  return <>{displayedText}</>;
};

const OurWorkExplore = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Explore our work where we played, experimented, and built something amazing.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50); // 50ms per character - speed adjust pannikonga

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="ourwork-explore-container">
      {/* Top Section */}
      <div className="ourwork-explore-top-section">
        {/* Our Works Button with Icon */}
        <div className="our-works-wrapper">
          <img
            src={ourWorksBg}
            alt="Our Works Background"
            className="our-works-bg-image"
          />
          <div className="our-works-icon">
            <svg
              className="ourwork-icon-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
          </div>
          <span className="our-works-text">
            Our Works
          </span>
        </div>

        {/* Main Text */}
        <div className="ourwork-header-wrapper">
          <h1 className="ourwork-main-heading">
            {displayedText.split(' ').map((word, index) => {
              if (word === 'something') {
                return <span key={index} className="ourwork-something-text">{word} </span>;
              } else if (word === 'amazing.') {
                return <span key={index} className="ourwork-amazing-text">{word}</span>;
              }
              return word + ' ';
            })}
            {/* <span className="cursor">|</span> */}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OurWorkExplore;