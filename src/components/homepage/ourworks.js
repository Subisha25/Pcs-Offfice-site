import React, { useState, useEffect, useRef } from 'react';
import ourWorksBg from '../assets/ourworks/Rectangle.png';
import './ourworks.css';

const OurWorkExplore = () => {
  const [typedText, setTypedText] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const headingRef = useRef(null);
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);

  const fullText = 'Explore our work where we played, experimented, and built something amazing.';
  const totalCharacters = fullText.length;

  // Scroll progress calculate pannum
  useEffect(() => {
    const calculateScrollProgress = () => {
      if (!containerRef.current || !headingRef.current) return;

      const container = containerRef.current;
      const heading = headingRef.current;
      
      // Get viewport dimensions
      const viewportHeight = window.innerHeight;
      const containerRect = container.getBoundingClientRect();
      const headingRect = heading.getBoundingClientRect();
      
      // When heading starts entering viewport
      const headingTop = headingRect.top;
      const headingBottom = headingRect.bottom;
      
      // Calculate progress based on heading position
      let progress = 0;
      
      // Heading viewport la fullah enter aana
      if (headingTop <= viewportHeight * 0.7 && headingTop >= 0) {
        // 0% to 100% based on scroll position
        const visibleHeight = viewportHeight * 0.7 - headingTop;
        const totalTravel = viewportHeight * 0.7;
        progress = Math.min(Math.max(visibleHeight / totalTravel, 0), 1);
      } else if (headingTop < 0) {
        // Already scrolled past
        progress = 1;
      }
      
      setScrollProgress(progress);
      
      // Calculate how many characters to show based on scroll progress
      const charsToShow = Math.floor(progress * totalCharacters);
      setTypedText(fullText.substring(0, charsToShow));
    };

    const handleScroll = () => {
      // Smooth animation with requestAnimationFrame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animationFrameRef.current = requestAnimationFrame(calculateScrollProgress);
    };

    // Initial calculation
    calculateScrollProgress();
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateScrollProgress);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateScrollProgress);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [fullText, totalCharacters]);

  // Highlight special words in the typed text
  const renderTextWithHighlights = (text) => {
    const words = text.split(' ');
    const result = [];
    
    words.forEach((word, index) => {
      const space = index < words.length - 1 ? ' ' : '';
      
      if (word.includes('something')) {
        result.push(
          <span key={index} className="ourwork-something-text">
            {word + space}
          </span>
        );
      } else if (word.includes('amazing')) {
        result.push(
          <span key={index} className="ourwork-amazing-text">
            {word + space}
          </span>
        );
      } else {
        result.push(
          <span key={index}>
            {word + space}
          </span>
        );
      }
    });
    
    return result;
  };

  return (
    <div className="ourwork-explore-container" ref={containerRef}>
      <div className="ourwork-explore-top-section">
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

        <div className="ourwork-header-wrapper" ref={headingRef}>
          <h1 className="ourwork-main-heading">
            {renderTextWithHighlights(typedText)}
            
            {/* Blinking cursor */}
            {scrollProgress > 0 && scrollProgress < 1 && (
              <span className="ourwork-cursor"></span>
            )}
          </h1>
     
        </div>
      </div>
    </div>
  );
};

export default OurWorkExplore;