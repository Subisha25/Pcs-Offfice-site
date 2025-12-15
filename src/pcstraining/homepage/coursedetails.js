// // // import React from "react";
// // // import "./coursedetails.css";

// // // const CourseDetails = () => {
// // //   return (
// // //     <div className="course-details">

// // //       {/* HERO SECTION */}
// // //       <section className="course-hero">
// // //         <div className="course-hero-content">
// // //           <h1>Full Stack Web Development</h1>
// // //           <p>
// // //             Learn HTML, CSS, JavaScript, React, Node.js and build real-world
// // //             projects from scratch.
// // //           </p>

// // //           <div className="course-meta">
// // //             <span>⏱ 3 Months</span>
// // //             <span>🎓 Beginner to Advanced</span>
// // //             <span>💻 Online / Offline</span>
// // //           </div>

// // //           <button className="primary-btn">Enroll Now</button>
// // //         </div>
// // //       </section>

// // //       {/* OVERVIEW */}
// // //       <section className="course-section">
// // //         <h2>Course Overview</h2>
// // //         <p>
// // //           This Full Stack Web Development course is designed to help you master
// // //           both frontend and backend technologies. You will work on live projects
// // //           and gain hands-on experience.
// // //         </p>
// // //       </section>

// // //       {/* WHAT YOU WILL LEARN */}
// // //       <section className="course-section gray-bg">
// // //         <h2>What You’ll Learn</h2>
// // //         <ul className="learn-list">
// // //           <li>HTML5, CSS3 & Responsive Design</li>
// // //           <li>JavaScript & ES6 Concepts</li>
// // //           <li>React.js & Component Based UI</li>
// // //           <li>Node.js & Express.js</li>
// // //           <li>MongoDB & API Integration</li>
// // //           <li>Live Project Development</li>
// // //         </ul>
// // //       </section>

// // //       {/* CURRICULUM */}
// // //       <section className="course-section">
// // //         <h2>Course Curriculum</h2>

// // //         <div className="module">
// // //           <h3>Module 1: Frontend Basics</h3>
// // //           <p>HTML, CSS, Flexbox, Grid, Responsive UI</p>
// // //         </div>

// // //         <div className="module">
// // //           <h3>Module 2: JavaScript</h3>
// // //           <p>JS Basics, DOM, Events, ES6</p>
// // //         </div>

// // //         <div className="module">
// // //           <h3>Module 3: React.js</h3>
// // //           <p>Components, Hooks, Routing, API Integration</p>
// // //         </div>

// // //         <div className="module">
// // //           <h3>Module 4: Backend</h3>
// // //           <p>Node.js, Express.js, MongoDB</p>
// // //         </div>
// // //       </section>

// // //       {/* TOOLS */}
// // //       <section className="course-section gray-bg">
// // //         <h2>Tools & Technologies</h2>
// // //         <div className="tools">
// // //           <span>HTML</span>
// // //           <span>CSS</span>
// // //           <span>JavaScript</span>
// // //           <span>React</span>
// // //           <span>Node.js</span>
// // //           <span>MongoDB</span>
// // //         </div>
// // //       </section>

// // //       {/* WHO CAN JOIN */}
// // //       <section className="course-section">
// // //         <h2>Who Can Join</h2>
// // //         <ul className="learn-list">
// // //           <li>Students & Freshers</li>
// // //           <li>Career Switchers</li>
// // //           <li>Working Professionals</li>
// // //           <li>Entrepreneurs</li>
// // //         </ul>
// // //       </section>

// // //       {/* CTA */}
// // //       <section className="course-cta">
// // //         <h2>Start Your Career in Full Stack Development</h2>
// // //         <p>Enroll now and become a job-ready developer</p>
// // //         <button className="primary-btn">Enroll Now</button>
// // //       </section>

// // //     </div>
// // //   );
// // // };

// // // export default CourseDetails;

// // import { useParams } from "react-router-dom";
// // import coursedata from "./coursedata";
// // import "./coursedetails.css";

// // const CourseDetails = () => {
// //   const { id } = useParams();

// //   const course = coursedata.find((c) => c.id === id);

// //   if (!course) return <h2>Course Not Found</h2>;

// //   return (
// //     <div className="course-details">

// //       <section className="course-hero">
// //         <h1>{course.title}</h1>
// //         <p>{course.overview}</p>

// //         <div className="course-meta">
// //           <span>{course.duration}</span>
// //           <span>{course.level}</span>
// //           <span>{course.mode}</span>
// //         </div>
// //       </section>

// //       <section className="course-section">
// //         <h2>What You’ll Learn</h2>
// //         <ul>
// //           {course.learn.map((item, i) => (
// //             <li key={i}>{item}</li>
// //           ))}
// //         </ul>
// //       </section>

// //       <section className="course-section gray-bg">
// //         <h2>Curriculum</h2>
// //         {course.curriculum.map((mod, i) => (
// //           <div key={i} className="module">
// //             <h3>{mod.module}</h3>
// //             <p>{mod.desc}</p>
// //           </div>
// //         ))}
// //       </section>

// //       <section className="course-section">
// //         <h2>Tools & Technologies</h2>
// //         <div className="tools">
// //           {course.tools.map((tool, i) => (
// //             <span key={i}>{tool}</span>
// //           ))}
// //         </div>
// //       </section>

// //     </div>
// //   );
// // };

// // export default CourseDetails;

// import { useParams } from "react-router-dom";
// import coursedata from "./coursedata";
// import "./coursedetails.css";
// import CommonButton from "../../components/common/button";
// import { useNavigate } from "react-router-dom";

// const CourseDetails = () => {
//   const { id } = useParams();
//   const course = coursedata.find((c) => c.id === id);
// const navigate = useNavigate();

//   if (!course) {
//     return (
//       <div className="not-found">
//         <h2>Course Not Found</h2>
//         <p>The course you're looking for doesn't exist.</p>
//       </div>
//     );
//   }

//   const handleEnrollClick = () => {
//     alert(`Enrolling in ${course.title}. Redirecting to payment...`);
//     // Add your enrollment logic here
//   };

//   const handleDownloadSyllabus = () => {
//     alert("Downloading syllabus...");
//     // Add your download logic here
//   };

//   const handleCounselorClick = () => {
//     alert("Connecting you with our counselor...");
//     // Add your counselor contact logic here
//   };

//   return (
//     <div className="course-details">
      
//       {/* HERO SECTION */}
//       <section className="course-hero">
//         <div className="hero-overlay"></div>
//         <div className="course-hero-content">
//           <div className="breadcrumb">
//             <span>Home</span> / <span>Courses</span> / <span>{course.category}</span>
//           </div>
          
//           <h1 className="hero-title">{course.title}</h1>
//           <p className="hero-subtitle">{course.overview}</p>

//           {/* <div className="course-stats">
//             <div className="stat-item">
//               <i className="icon">⭐</i>
//               <div>
//                 <strong>{course.rating}</strong>
//                 <span>({course.reviews} reviews)</span>
//               </div>
//             </div>
//             <div className="stat-item">
//               <i className="icon">👥</i>
//               <div>
//                 <strong>{course.students}+</strong>
//                 <span>Students enrolled</span>
//               </div>
//             </div>
//             <div className="stat-item">
//               <i className="icon">📚</i>
//               <div>
//                 <strong>{course.lessons}</strong>
//                 <span>Lessons</span>
//               </div>
//             </div>
//             <div className="stat-item">
//               <i className="icon">🏆</i>
//               <div>
//                 <strong>{course.liveProjects}</strong>
//                 <span>Live Projects</span>
//               </div>
//             </div>
//           </div> */}

//           <div className="course-meta">
//             {/* <span className="meta-badge">⏱ {course.duration}</span> */}
//             <span className="meta-badge">📊 {course.level}</span>
//             <span className="meta-badge">💻 {course.mode}</span>
//             <span className="meta-badge">🌐 {course.language}</span>
//             {course.certificate && <span className="meta-badge">📜 Certificate</span>}
//           </div>

//           <div className="hero-actions">
//             <CommonButton  onClick={() => navigate("/contact")}/>
//             {/* <button className="primary-btn" onClick={handleEnrollClick}>
//               Enroll Now - ₹{course.price.toLocaleString()}
//             </button> */}
//             {/* <button className="secondary-btn" onClick={handleDownloadSyllabus}>
//               Download Syllabus
//             </button> */}
//           </div>
//         </div>
//       </section>

//       {/* HIGHLIGHTS BANNER */}
//       <section className="highlights-banner">
//         <div className="highlights-container">
//           {course.highlights.map((highlight, i) => (
//             <div key={i} className="highlight-card">
//               <span className="highlight-icon">✓</span>
//               <p>{highlight}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* WHAT YOU'LL LEARN */}
//       <section className="course-section learn-section">
//         <div className="section-header">
//           <h2>What You'll Learn</h2>
//           <p className="section-subtitle">Master these skills and technologies</p>
//         </div>
//         <div className="learn-grid">
//           {course.learn.map((item, i) => (
//             <div key={i} className="learn-card">
//               <span className="check-icon">✓</span>
//               <p>{item}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CURRICULUM */}
//       <section className="course-section curriculum-section gray-bg">
//         <div className="section-header">
//           <h2>Course Curriculum</h2>
//           <p className="section-subtitle">Structured learning path from basics to advanced</p>
//         </div>
//         <div className="curriculum-container">
//           {course.curriculum.map((mod, i) => (
//             <div key={i} className="module-card">
//               <div className="module-header">
//                 <div className="module-number">
//                   {i + 1}
//                 </div>
//                 <div className="module-info">
//                   <h3>{mod.module}</h3>
//                   <p className="module-desc">{mod.desc}</p>
//                   <span className="module-duration">⏱ {mod.duration}</span>
//                 </div>
//               </div>
//               {mod.topics && mod.topics.length > 0 && (
//                 <div className="module-topics">
//                   <strong>Topics covered:</strong>
//                   <div className="topics-list">
//                     {mod.topics.map((topic, j) => (
//                       <span key={j} className="topic-tag">{topic}</span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* TOOLS & TECH */}
//       <section className="course-section tools-section">
//         <div className="section-header">
//           <h2>Tools & Technologies</h2>
//           <p className="section-subtitle">Industry-standard tools you'll master</p>
//         </div>
//         <div className="tools-grid">
//           {course.tools.map((tool, i) => (
//             <div key={i} className="tool-card">
//               <div className="tool-icon">🛠</div>
//               <span>{tool}</span>
//             </div>
//           ))}
//         </div>
//       </section>

   

//       {/* WHO CAN JOIN */}
//       <section className="course-section who-section">
//         <div className="section-header">
//           <h2>Who Can Join?</h2>
//           <p className="section-subtitle">This course is perfect for</p>
//         </div>
//         <div className="who-grid">
//           {course.whoCanJoin.map((person, i) => (
//             <div key={i} className="who-card">
//               <span className="who-icon">👤</span>
//               <p>{person}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* PREREQUISITES */}
//       {course.prerequisites && course.prerequisites.length > 0 && (
//         <section className="course-section prereq-section gray-bg">
//           <div className="section-header">
//             <h2>Prerequisites</h2>
//             <p className="section-subtitle">What you need to get started</p>
//           </div>
//           <div className="prereq-list">
//             {course.prerequisites.map((prereq, i) => (
//               <div key={i} className="prereq-item">
//                 <span className="prereq-icon">📌</span>
//                 <p>{prereq}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* CAREER OPPORTUNITIES */}
//       {course.careerOpportunities && course.careerOpportunities.length > 0 && (
//         <section className="course-section career-section">
//           <div className="section-header">
//             <h2>Career Opportunities</h2>
//             <p className="section-subtitle">Roles you can pursue after this course</p>
//           </div>
//           <div className="career-grid">
//             {course.careerOpportunities.map((career, i) => (
//               <div key={i} className="career-card">
//                 <span className="career-icon">💼</span>
//                 <p>{career}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* CTA SECTION */}
//       <section className="course-cta">
//         <div className="cta-content">
//           <h2>Ready to Start Your Learning Journey?</h2>
//           <p>Join {course.students.toLocaleString()}+ students already enrolled in this course</p>
//           <div className="cta-actions">
//             <button className="cta-primary-btn" onClick={handleEnrollClick}>
//               Enroll Now - ₹{course.price.toLocaleString()}
//             </button>
//             <button className="cta-secondary-btn" onClick={handleCounselorClick}>
//               Talk to Counselor
//             </button>
//           </div>
//           <p className="cta-note">💡 30-day money-back guarantee | 🎓 Lifetime access</p>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default CourseDetails;

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
                {/* <span className="meta-badge">⏱ {course.duration}</span> */}
                <span className="meta-badge">📊 {course.level}</span>
                <span className="meta-badge">💻 {course.mode}</span>
                <span className="meta-badge">🌐 {course.language}</span>
                {course.certificate && (
                  <span className="meta-badge">📜 Certificate</span>
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
