// import React from "react";
// import "./coursedetails.css";

// const CourseDetails = () => {
//   return (
//     <div className="course-details">

//       {/* HERO SECTION */}
//       <section className="course-hero">
//         <div className="course-hero-content">
//           <h1>Full Stack Web Development</h1>
//           <p>
//             Learn HTML, CSS, JavaScript, React, Node.js and build real-world
//             projects from scratch.
//           </p>

//           <div className="course-meta">
//             <span>⏱ 3 Months</span>
//             <span>🎓 Beginner to Advanced</span>
//             <span>💻 Online / Offline</span>
//           </div>

//           <button className="primary-btn">Enroll Now</button>
//         </div>
//       </section>

//       {/* OVERVIEW */}
//       <section className="course-section">
//         <h2>Course Overview</h2>
//         <p>
//           This Full Stack Web Development course is designed to help you master
//           both frontend and backend technologies. You will work on live projects
//           and gain hands-on experience.
//         </p>
//       </section>

//       {/* WHAT YOU WILL LEARN */}
//       <section className="course-section gray-bg">
//         <h2>What You’ll Learn</h2>
//         <ul className="learn-list">
//           <li>HTML5, CSS3 & Responsive Design</li>
//           <li>JavaScript & ES6 Concepts</li>
//           <li>React.js & Component Based UI</li>
//           <li>Node.js & Express.js</li>
//           <li>MongoDB & API Integration</li>
//           <li>Live Project Development</li>
//         </ul>
//       </section>

//       {/* CURRICULUM */}
//       <section className="course-section">
//         <h2>Course Curriculum</h2>

//         <div className="module">
//           <h3>Module 1: Frontend Basics</h3>
//           <p>HTML, CSS, Flexbox, Grid, Responsive UI</p>
//         </div>

//         <div className="module">
//           <h3>Module 2: JavaScript</h3>
//           <p>JS Basics, DOM, Events, ES6</p>
//         </div>

//         <div className="module">
//           <h3>Module 3: React.js</h3>
//           <p>Components, Hooks, Routing, API Integration</p>
//         </div>

//         <div className="module">
//           <h3>Module 4: Backend</h3>
//           <p>Node.js, Express.js, MongoDB</p>
//         </div>
//       </section>

//       {/* TOOLS */}
//       <section className="course-section gray-bg">
//         <h2>Tools & Technologies</h2>
//         <div className="tools">
//           <span>HTML</span>
//           <span>CSS</span>
//           <span>JavaScript</span>
//           <span>React</span>
//           <span>Node.js</span>
//           <span>MongoDB</span>
//         </div>
//       </section>

//       {/* WHO CAN JOIN */}
//       <section className="course-section">
//         <h2>Who Can Join</h2>
//         <ul className="learn-list">
//           <li>Students & Freshers</li>
//           <li>Career Switchers</li>
//           <li>Working Professionals</li>
//           <li>Entrepreneurs</li>
//         </ul>
//       </section>

//       {/* CTA */}
//       <section className="course-cta">
//         <h2>Start Your Career in Full Stack Development</h2>
//         <p>Enroll now and become a job-ready developer</p>
//         <button className="primary-btn">Enroll Now</button>
//       </section>

//     </div>
//   );
// };

// export default CourseDetails;

import { useParams } from "react-router-dom";
import coursedata from "./coursedata";
import "./coursedetails.css";

const CourseDetails = () => {
  const { id } = useParams();

  const course = coursedata.find((c) => c.id === id);

  if (!course) return <h2>Course Not Found</h2>;

  return (
    <div className="course-details">

      <section className="course-hero">
        <h1>{course.title}</h1>
        <p>{course.overview}</p>

        <div className="course-meta">
          <span>{course.duration}</span>
          <span>{course.level}</span>
          <span>{course.mode}</span>
        </div>
      </section>

      <section className="course-section">
        <h2>What You’ll Learn</h2>
        <ul>
          {course.learn.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="course-section gray-bg">
        <h2>Curriculum</h2>
        {course.curriculum.map((mod, i) => (
          <div key={i} className="module">
            <h3>{mod.module}</h3>
            <p>{mod.desc}</p>
          </div>
        ))}
      </section>

      <section className="course-section">
        <h2>Tools & Technologies</h2>
        <div className="tools">
          {course.tools.map((tool, i) => (
            <span key={i}>{tool}</span>
          ))}
        </div>
      </section>

    </div>
  );
};

export default CourseDetails;
