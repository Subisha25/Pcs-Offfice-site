
import React, { useState, useEffect } from 'react';
import ourWorksBg from '../assets/ourworks/Rectangle.png';
import './ourworks.css';
import { Globe, Server, BookOpen, TrendingUp } from 'lucide-react';

const styles = `
  .work-process-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
    background-color: #ffffff;
  }

  .work-process-header {
    text-align: center;
    margin-bottom: 80px;
  }

  .work-process-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background-color: #f8f9fa;
    padding: 8px 20px;
    border-radius: 25px;
    margin-bottom: 24px;
    font-size: 14px;
    color: #1a1a1a;
  }

  .work-process-badge-icon {
    font-size: 16px;
  }

  .work-process-badge-text {
    font-weight: 500;
  }

  .work-process-title {
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
    color: #000000;
    margin: 0;
  }

  .work-process-highlight {
    color: #7c3aed;
    font-style: italic;
  }

  .work-process-process-grid {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    margin-right: 25%;
    padding: 20px;
    position: relative;
    min-height: 400px;
  }

  .work-process-process-card {
    text-align: left;
    background: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    width: 280px;
    height: 400px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    display: flex;
    flex-direction: column;
  }
  .work-process-process-card:nth-child(1) {
    animation: slideToPosition1 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards;
  }

  .work-process-process-card:nth-child(2) {
    animation: slideToPosition2 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards;
  }

  .work-process-process-card:nth-child(3) {
    animation: slideToPosition3 1.2s cubic-bezier(0.4, 0, 0.2, 1) 1.1s forwards;
  }

  .work-process-process-card:nth-child(4) {
    animation: slideToPosition4 1.2s cubic-bezier(0.4, 0, 0.2, 1) 1.4s forwards;
  }

  @keyframes slideToPosition1 {
    0% {
      opacity: 1;
      left: 50%;
      transform: translateX(-50%);
    }
    100% {
      opacity: 1;
      left: calc(50% - 465px);
      transform: translateX(0);
    }
  }

  @keyframes slideToPosition2 {
    0% {
      opacity: 1;
      left: 50%;
      transform: translateX(-50%);
    }
    100% {
      opacity: 1;
      left: calc(50% - 155px);
      transform: translateX(0);
    }
  }

  @keyframes slideToPosition3 {
    0% {
      opacity: 1;
      left: 50%;
      transform: translateX(-50%);
    }
    100% {
      opacity: 1;
      left: calc(50% + 155px);
      transform: translateX(0);
    }
  }

  @keyframes slideToPosition4 {
    0% {
      opacity: 1;
      left: 50%;
      transform: translateX(-50%);
    }
    100% {
      opacity: 1;
      left: calc(50% + 465px);
      transform: translateX(0);
    }
  }

  .work-process-process-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(124, 58, 237, 0.2);
  }

  .work-process-icon-wrapper {
    width: 48px;
    height: 48px;
    margin-bottom: 24px;
    color: #7c3aed;
  }

  .work-process-card-title {
    font-size: 24px;
    font-weight: 600;
    color: #000000;
    margin: 0 0 16px 0;
    line-height: 1.3;
  }

  .work-process-card-description {
    font-size: 15px;
    line-height: 1.6;
    color: #666666;
    margin: 0;
  }

  @media (max-width: 768px) {
    .work-process-title {
      font-size: 32px;
    }

    .work-process-process-grid {
      flex-direction: column;
      gap: 30px;
    }

    .work-process-process-card {
      width: 100%;
      max-width: 350px;
    }
  }
`;
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
            <style>{styles}</style>
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
                            <Globe size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="work-process-card-title">Discover &<br />Strategize</h3>
                        <p className="work-process-card-description">
                            We dive deep into understanding your brand, goals, and audience. Through collaborative discussions and research, we craft a strategic roadmap tailored to your needs.
                        </p>
                    </div>

                    <div className="work-process-process-card">
                        <div className="work-process-icon-wrapper">
                            <Server size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="work-process-card-title">Conversion &<br />Focused</h3>
                        <p className="work-process-card-description">
                            Our layouts are built to perform guides every element from copy to design visuals, content and assets that resonate with your brand.
                        </p>
                    </div>

                    <div className="work-process-process-card">
                        <div className="work-process-icon-wrapper">
                            <BookOpen size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="work-process-card-title">Build &<br />Launch</h3>
                        <p className="work-process-card-description">
                            Our creatives team gets to work, blending innovation with strategy to design visuals, content and assets that resonate with your brand. Every detail is refined to perfection.
                        </p>
                    </div>

                    <div className="work-process-process-card">
                        <div className="work-process-icon-wrapper">
                            <TrendingUp size={32} strokeWidth={1.5} />
                        </div>
                        <h3 className="work-process-card-title">Refine &<br />Grow</h3>
                        <p className="work-process-card-description">
                            We don't stop at the launch. We analyze performance, gather feedback, and fine-tune to ensure your brand continues to grow and thriving in the digital landscape.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}