
import React, { useState, useEffect } from 'react';
import ourWorksBg from '../assets/ourworks/Rectangle.png';
import './ourworks.css';
import './workprocess.css';
import Globe from '../assets/workprocess/Group 1.png';
import Server from '../assets/workprocess/Group 2.png';
import BookOpen from '../assets/workprocess/Group 3.png';
import TrendingUp from '../assets/workprocess/Group 4.png';


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

export default function WorkProcess() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'From idea to impact—our process makes it easy, exciting, and effective !';

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
    <>
      {/* <style>{styles}</style> */}
      <div className="work-process-container">

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
                if (word === 'effective') {
                  return <span key={index} className="ourwork-something-text">{word} </span>;
                } else if (word === '!') {
                  return <span key={index} className="ourwork-amazing-text">{word}</span>;
                }
                return word + ' ';
              })}
              {/* <span className="cursor">|</span> */}
            </h1>
          </div>
        </div>
        <div className="work-process-process-grid">
          <div className="work-process-process-card">
            <div className="work-process-icon-wrapper">
              {/* <Globe size={32} strokeWidth={1.5} /> */}
              <img src={Globe} alt="Discover & Strategize Icon" />
            </div>
            <h3 className="work-process-card-title">Discover &<br />Strategize</h3>
            <p className="work-process-card-description">
              We dive deep into understanding your brand, goals, and audience. Through collaborative discussions and research, we craft a strategic roadmap tailored to your needs.
            </p>
          </div>

          <div className="work-process-process-card">
            <div className="work-process-icon-wrapper">
              <img src={Server} alt="Conversion & Focused Icon" />
            </div>
            <h3 className="work-process-card-title">Conversion &<br />Focused</h3>
            <p className="work-process-card-description">
              Our layouts are built to perform guides every element from copy to design visuals...
            </p>
          </div>

          <div className="work-process-process-card">
            <div className="work-process-icon-wrapper">
              <img src={BookOpen} alt="Build & Launch Icon" />
            </div>
            <h3 className="work-process-card-title">Build &<br />Launch</h3>
            <p className="work-process-card-description">
              Our creatives team gets to work...
            </p>
          </div>

          <div className="work-process-process-card">
            <div className="work-process-icon-wrapper">
              <img src={TrendingUp} alt="Refine & Grow Icon" />
            </div>
            <h3 className="work-process-card-title">Refine &<br />Grow</h3>
            <p className="work-process-card-description">
              We don't stop at the launch...
            </p>
          </div>

        </div>
      </div>
    </>
  );
}