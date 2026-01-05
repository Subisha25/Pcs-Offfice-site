import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiCheck, FiTool, FiUser, FiInfo, FiBriefcase } from "react-icons/fi";
import coursedata from "./coursedata";
import "./coursedetails.css";
import CommonButton from "../../components/common/button";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = coursedata.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="not-found">
        <h2>Course Not Found</h2>
        <p>The course you're looking for doesn't exist.</p>
      </div>
    );
  }

  const handleEnrollClick = () => {
    alert(`Enrolling in ${course.title}. Redirecting to payment...`);
    // Add your enrollment logic here
  };

  const handleDownloadSyllabus = () => {
    alert("Downloading syllabus...");
    // Add your download logic here
  };

  const handleCounselorClick = () => {
    alert("Connecting you with our counselor...");
    // Add your counselor contact logic here
  };

  return (
    <div className="course-details">
      {/* HERO SECTION */}
      <section className="course-hero">
        <div className="hero-overlay" />
        <div className="course-hero-content">
          <div className="course-hero-grid">
            {/* LEFT : TEXT */}
            <div className="course-hero-left">
              <div className="breadcrumb">
                <span>Home</span> / <span>Courses</span> /{" "}
                <span>{course.category}</span>
              </div>

              <h1 className="hero-title">{course.title}</h1>
              <p className="hero-subtitle">{course.overview}</p>

              {/* If you want stats later, you can uncomment and add icons */}
              {/* <div className="course-stats">
                ...
              </div> */}

          <div className="course-meta">
  <span className="meta-badge">
    <span className="dot"></span>
    {course.level}
  </span>

  <span className="meta-badge">
    <span className="dot"></span>
    {course.mode}
  </span>

  <span className="meta-badge">
    <span className="dot"></span>
    {course.language}
  </span>

  {course.certificate && (
    <span className="meta-badge">
      <span className="dot"></span>
      Certificate
    </span>
  )}
</div>


              <div className="hero-actions">
                <CommonButton onClick={() => navigate("/contact")} />
                {/* <button className="secondary-btn" onClick={handleDownloadSyllabus}>
                  Download Syllabus
                </button> */}
              </div>
            </div>

            {/* RIGHT : IMAGE */}
            <div className="course-hero-right">
              <div className="course-hero-illustration">
                <div className="course-hero-illustration-inner">
                  <img
                    src={course.image}
                    alt={course.title}
                    onError={(e) => {
                      e.target.style.opacity = 0.08;
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS BANNER */}
      <section className="highlights-banner">
        <div className="highlights-container">
          {course.highlights.map((highlight, i) => (
            <div key={i} className="highlight-card">
              <div className="highlight-icon">
                <FiCheck />
              </div>
              <p>{highlight}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="course-section learn-section">
        <div className="section-header">
          <h2>What You'll Learn</h2>
          <p className="section-subtitle">
            Master these skills and technologies
          </p>
        </div>
        <div className="learn-grid">
          {course.learn.map((item, i) => (
            <div key={i} className="learn-card">
              <div className="check-icon">
                <FiCheck />
              </div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="course-section curriculum-section gray-bg">
        <div className="section-header">
          <h2>Course Curriculum</h2>
          <p className="section-subtitle">
            Structured learning path from basics to advanced
          </p>
        </div>
        <div className="curriculum-container">
          {course.curriculum.map((mod, i) => (
            <div key={i} className="module-card">
              <div className="module-header">
                <div className="module-number">{i + 1}</div>
                <div className="module-info">
                  <h3>{mod.module}</h3>
                  <p className="module-desc">{mod.desc}</p>
                  <span className="module-duration">⏱ {mod.duration}</span>
                </div>
              </div>
              {mod.topics && mod.topics.length > 0 && (
                <div className="module-topics">
                  <strong>Topics covered:</strong>
                  <div className="topics-list">
                    {mod.topics.map((topic, j) => (
                      <span key={j} className="topic-tag">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* TOOLS & TECH */}
      <section className="course-section tools-section">
        <div className="section-header">
          <h2>Tools & Technologies</h2>
          <p className="section-subtitle">
            Industry-standard tools you'll master
          </p>
        </div>
        <div className="tools-grid">
          {course.tools.map((tool, i) => (
            <div key={i} className="tool-card">
              <div className="tool-icon">
                <FiTool />
              </div>
              <span>{tool}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHO CAN JOIN */}
      <section className="course-section who-section">
        <div className="section-header">
          <h2>Who Can Join?</h2>
          <p className="section-subtitle">This course is perfect for</p>
        </div>
        <div className="who-grid">
          {course.whoCanJoin.map((person, i) => (
            <div key={i} className="who-card">
              <div className="who-icon">
                <FiUser />
              </div>
              <p>{person}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PREREQUISITES */}
      {course.prerequisites && course.prerequisites.length > 0 && (
        <section className="course-section prereq-section gray-bg">
          <div className="section-header">
            <h2>Prerequisites</h2>
            <p className="section-subtitle">What you need to get started</p>
          </div>
          <div className="prereq-list">
            {course.prerequisites.map((prereq, i) => (
              <div key={i} className="prereq-item">
                <div className="prereq-icon">
                  <FiInfo />
                </div>
                <p>{prereq}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CAREER OPPORTUNITIES */}
      {course.careerOpportunities && course.careerOpportunities.length > 0 && (
        <section className="course-section career-section">
          <div className="section-header">
            <h2>Career Opportunities</h2>
            <p className="section-subtitle">
              Roles you can pursue after this course
            </p>
          </div>
          <div className="career-grid">
            {course.careerOpportunities.map((career, i) => (
              <div key={i} className="career-card">
                <div className="career-icon">
                  <FiBriefcase />
                </div>
                <p>{career}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA SECTION */}
      {/* <section className="course-cta">
        <div className="cta-content">
          <h2>Ready to Start Your Learning Journey?</h2>
          <p>
            Join {course.students.toLocaleString()}+ students already enrolled
            in this course
          </p>
          <div className="cta-actions">
            <button className="cta-primary-btn" onClick={handleEnrollClick}>
              Enroll Now - ₹{course.price.toLocaleString()}
            </button>
            <button
              className="cta-secondary-btn"
              onClick={handleCounselorClick}
            >
              Talk to Counselor
            </button>
          </div>
          <p className="cta-note">
            💡 30-day money-back guarantee | 🎓 Lifetime access
          </p>
        </div>
      </section> */}
    </div>
  );
};

export default CourseDetails;
