import React from "react";
import "./traningwhychoose.css";
import journey1 from '../assets/journey1.png';
import journey2 from '../assets/journey2.png';
import journey3 from '../assets/journey3.png';
import journey4 from '../assets/journey4.png';
// Change this import to your actual image path
import LearnImg from "../assets/journey.png";

const features = [
  {
    title: "Expert-Led Courses",
    text: "Learn from industry leaders and professionals who bring real-world experience to every lesson.",
    icon: journey1,
  },
  {
    title: "Comprehensive Learning Paths",
    text: "Access structured and detailed course roadmaps tailored to your skill level and career goals.",
    icon: journey2,
  },
  {
    title: "Hands-On Projects",
    text: "Apply your knowledge in practical projects designed to solidify your learning and build a strong portfolio.",
    icon: journey3,
  },
  {
    title: "Certification Upon Completion",
    text: "Receive recognized certificates to showcase your skills and boost your career opportunities.",
    icon: journey4,
  },
];

const stats = [
  { number: "1K+", label: "Happy Learners" },
  { number: "99%", label: "Success Rate" },
  { number: "50+", label: "Collage Projects" },
  { number: "6+", label: "Experience" },
];

const TraningWhyChoose = () => {
  return (
    <section className="traningwhychoose">
      <div className="traningwhychoose-inner">
        {/* Left image */}
        <div className="traningwhychoose-left">
          <div className="traningwhychoose-image-wrapper">
            <img
              src={LearnImg}
              alt="People learning together"
              className="traningwhychoose-image"
            />
          </div>
        </div>

        {/* Right content */}
        <div className="traningwhychoose-right">
          {/* <p className="traningwhychoose-eyebrow">Why Choose Us</p> */}

          <h2 className="traningwhychoose-title">
            Why Choose Us for Your Learning {" "}
            <span className="traningwhychoose-title-highlight">journey</span>
          </h2>

          <p className="traningwhychoose-description">
            Unlock a world of opportunities with a learning platform that
            prioritizes your success. From personalized support to
            industry-recognized certifications, every aspect is crafted to help
            you achieve your goals faster and more effectively.
          </p>

          <div className="traningwhychoose-features">
            {features.map((item, idx) => (
              <div className="traningwhychoose-feature" key={idx}>
                <div className="traningwhychoose-feature-icon">
                  <span><img alt="" src={item.icon} /></span>
                </div>
                <div className="traningwhychoose-feature-text">
                  <h3 className="traningwhychoose-feature-title">{item.title}</h3>
                  <p className="traningwhychoose-feature-description">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="traningwhychoose-stats">
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

export default TraningWhyChoose;
