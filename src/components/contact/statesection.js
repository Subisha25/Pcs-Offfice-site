import React from "react";
import "./statesection.css";

import journey1 from '../../pcstraining/assets/journey1.png';
import journey2 from '../../pcstraining/assets/journey2.png';
import journey3 from '../../pcstraining/assets/journey3.png';
import journey4 from '../../pcstraining/assets/journey4.png';
import LearnImg from "../../pcstraining/assets/journey.png";

const stats = [
  { number: "2K+", label: "Happy Learners" },
  { number: "99%", label: "Success Rate" },
  { number: "100+", label: "Projects Delivered" },
  { number: "15+", label: "Experience" },
];

const StateSection = () => {
  return (
  
    <section className="traningwhychoose-stat-section">
   
      <div className="traningwhychoose-stats-container">
        {stats.map((stat, idx) => (
          <div className="traningwhychoose-stat" key={idx}>
           
            <div className="traningwhychoose-stat-number">{stat.number}</div>
           
            <div className="traningwhychoose-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StateSection;