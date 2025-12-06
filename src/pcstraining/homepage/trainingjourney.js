import React from 'react';
import './TrainingJourney.css';

const TrainingJourney = () => {
  return (
    <div className="trainingjourney-container">
      <div className="trainingjourney-content">
        <h2 className="trainingjourney-title">
          Start your <span className="trainingjourney-highlight-learning">learning</span>
          <br />
          <span className="trainingjourney-highlight-journey">journey</span> today!
        </h2>
        
        <p className="trainingjourney-description">
          Become part of a global community of learners who are enhancing their skills and
          <br />
          advancing their careers through our expertly.
        </p>
        
        <button className="trainingjourney-button">
          <span className="trainingjourney-button-icon">→</span>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default TrainingJourney;