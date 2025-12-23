import React from 'react';
import './banner.css';
import TrainingSimple from './trainingsimple';
import TraningWhyChoose from './traningwhychoose';
import TraningPopular from './traningpopular';
import Banner1 from '../assets/trainingbanner1.png';
import Banner2 from '../assets/trainingbanner2.png';
import Banner3 from '../assets/trainingbanner3.png';
import Banner4 from '../assets/trainingbanner4.png';
import TraningLearn from './traninglearn';
import CommonButton from '../../components/common/button';
import TrainingJourney from './trainingjourney';
import { useNavigate } from 'react-router-dom';

const TrainingHomeBanner = () => {

  const navigate = useNavigate();


  return (
    <>
    <div className="train-home-ban-container">
      <div className="train-home-ban-header">
        <button className="train-home-ban-back"  onClick={() => navigate(-1)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <button className="train-home-ban-home" onClick={() => navigate("/")}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
        <span className="train-home-ban-breadcrumb">PCS Training</span>
      </div>

      <div className="train-home-ban-content">
        <div className="train-home-ban-avatar train-home-ban-avatar-1">
          <img src={Banner1} alt="Student 1" />
        </div>
        
        <div className="train-home-ban-avatar train-home-ban-avatar-2">
          <img src={Banner4} alt="Student 2" />
        </div>

        <div className="train-home-ban-text">
          <h1 className="train-home-ban-title">
            Explore IT Skills<br />
            That Shape Your <span className="train-home-ban-highlight">Future.</span>
          </h1>
          <p className="train-home-ban-subtitle">
            Your next career step in IT starts with PCS, the No.1 Software Training Institute since 2021
          </p>
          
          <div className="train-home-ban-buttons">
           <CommonButton text='Explore all Course'  onClick={() => navigate("/allcourses")}/>
            <button className="train-home-ban-btn train-home-ban-btn-secondary"  onClick={() => navigate("/contact")}>
              Enroll Now
            </button>
          </div>
        </div>

        <div className="train-home-ban-avatar train-home-ban-avatar-3">
          <img src={Banner3} alt="Student 3" />
        </div>

        <div className="train-home-ban-avatar train-home-ban-avatar-4">
          <img src={Banner2} alt="Student 4" />
        </div>

        {/* <div className="train-home-ban-dimension">1440 x 680</div> */}
      </div>

     
    </div>
    {/* Bottom Services Strip - Carousel */}
<div className="services-strip2">
  <div className="strip-track2">
    <span>APP DESIGN</span>
    <span className="dot">•</span>
    <span>DIGITAL MARKETING</span>
    <span className="dot">•</span>
    <span>BRANDING</span>
    <span className="dot">•</span>
    <span>WEB DEVELOPMENT</span>
    <span className="dot">•</span>
    <span>WEB DESIGN</span>

    {/* Duplicate again for infinite loop */}
    <span className="dot">•</span>

    <span>APP DESIGN</span>
    <span className="dot">•</span>
    <span>DIGITAL MARKETING</span>
    <span className="dot">•</span>
    <span>BRANDING</span>
    <span className="dot">•</span>
    <span>WEB DEVELOPMENT</span>
    <span className="dot">•</span>
    <span>WEB DESIGN</span>
  </div>
</div>
<TrainingSimple />
<TraningWhyChoose />
<TraningPopular />
<TraningLearn />
<TrainingJourney />
    </>
  );
};

export default TrainingHomeBanner;