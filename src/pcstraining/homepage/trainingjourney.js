import React from 'react';
import './trainingjourney.css';
import CommonButton from '../../components/common/button';
import { useNavigate } from "react-router-dom";

const TrainingJourney = () => {
  const navigate = useNavigate();

  return (
    <div className="trainingjourney-container">
      <div className="trainingjourney-content">
        <h2 className="trainingjourney-title">
          Start Your <span className="trainingjourney-highlight-learning">Learning</span>
          <br />
          <span className="trainingjourney-highlight-journey">Journey</span> Today!
        </h2>
        
        <p className="trainingjourney-description">
          Become part of a global community of learners who are enhancing their skills and
          <br />
          advancing their careers through our expert-led courses.
        </p>
        
       <CommonButton text='Get Started'  onClick={() => navigate("/contact")}/>
      </div>
    </div>
  );
};

export default TrainingJourney;