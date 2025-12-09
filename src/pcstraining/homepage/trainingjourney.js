import React from 'react';
import './trainingjourney.css';
import CommonButton from '../../components/common/button';


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
        
       <CommonButton text='Get Started'/>
      </div>
    </div>
  );
};

export default TrainingJourney;