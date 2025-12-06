import React from "react";
import "./traningwhychoose.css";

// Change this import to your actual image path
import LearnImg from "../assets/journey.png";

const features = [
  {
    title: "Expert-Led Courses",
    text: "Learn from industry leaders and professionals who bring real-world experience to every lesson.",
    icon: "🎓",
  },
  {
    title: "Comprehensive Learning Paths",
    text: "Access structured and detailed course roadmaps tailored to your skill level and career goals.",
    icon: "🧭",
  },
  {
    title: "Hands-On Projects",
    text: "Apply your knowledge in practical projects designed to solidify your learning and build a strong portfolio.",
    icon: "🧩",
  },
  {
    title: "Certification Upon Completion",
    text: "Receive recognized certificates to showcase your skills and boost your career opportunities.",
    icon: "📜",
  },
];

const stats = [
  { number: "2K+", label: "Happy Learners" },
  { number: "99%", label: "Success Rate" },
  { number: "100+", label: "Projects Delivered" },
  { number: "15+", label: "Experience" },
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
          <p className="traningwhychoose-eyebrow">Why Choose Us</p>

          <h2 className="traningwhychoose-title">
            Why Choose Us for Your{" "}
            <span className="traningwhychoose-title-highlight">Learning journey</span>
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
                  <span>{item.icon}</span>
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
