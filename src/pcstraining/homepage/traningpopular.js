// import React from "react";
// import "./traningpopular.css";

// // Change these image imports to your actual paths
// import CourseImg1 from "../assets/popular1.png";
// import CourseImg2 from "../assets/popular2.png";
// import CourseImg3 from "../assets/popular3.png";
// import CommonButton from "../../components/common/button";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const courses = [
//   {
//     id: 1,
//     title: "Full Stack web development: HTML, CSS, JS & more",
//     category: "Development",
//     mode: "Online/Offline",
//     lessons: 27,
//     image: CourseImg1,
//   },
//   {
//     id: 2,
//     title: "Full Stack web development: HTML, CSS, JS & more",
//     category: "Development",
//     mode: "Online/Offline",
//     lessons: 27,
//     image: CourseImg2,
//   },
//   {
//     id: 3,
//     title: "Full Stack web development: HTML, CSS, JS & more",
//     category: "Development",
//     mode: "Online/Offline",
//     lessons: 27,
//     image: CourseImg3,
//   },
// ];

// const TraningPopular = () => {
//   const navigate = useNavigate();
//   return (
//     <section className="traningpopular">
//       <div className="traningpopular-inner">
//         {/* Header */}
//         <div className="traningpopular-header">
//           <div className="traningpopular-heading">
//             <p className="traningpopular-eyebrow">Discover our</p>
//             <h2 className="traningpopular-title">
//               most{" "}
//               <span className="traningpopular-title-highlight">popular</span>{" "}
//               Courses
//             </h2>
//           </div>

//         <CommonButton text="Explore all Course"  onClick={() => navigate("/allcourses")}/>
//         </div>

//         {/* Cards */}
//         <div className="traningpopular-grid">
//           {courses.map((course) => (
//             <article className="traningpopular-card" key={course.id}>
//               <div className="traningpopular-card-imageWrapper">
//                 <img
//                   src={course.image}
//                   alt={course.title}
//                   className="traningpopular-card-image"
//                 />
//               </div>

//               <div className="traningpopular-card-body">
//                 <p className="traningpopular-card-category">
//                   {course.category}
//                 </p>

//                 <h3 className="traningpopular-card-title">{course.title}</h3>

//                 <div className="traningpopular-card-meta">
//                   <div className="traningpopular-card-mode">
//                     <span className="traningpopular-card-modeDot" />
//                     <span>{course.mode}</span>
//                   </div>
//                   <div className="traningpopular-card-lessons">
//                     {course.lessons} Lessons
//                   </div>
//                 </div>

//                 <div className="traningpopular-card-actions">
//                   <Link to={"/coursedetails/:id"} className="traningpopular-card-btn-secondary">
//                     More Details
//                   </Link>
//                   <button className="traningpopular-card-btn traningpopular-card-btn-primary">
//                     Enroll Now
//                   </button>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TraningPopular;


import React from "react";
import "./traningpopular.css";
import coursedata from "./coursedata";

// Change these image imports to your actual paths
import CourseImg1 from "../assets/popular1.png";
import CourseImg2 from "../assets/popular2.png";
import CourseImg3 from "../assets/popular3.png";
import CommonButton from "../../components/common/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Full Stack web development: HTML, CSS, JS & more",
    category: "Development",
    mode: "Online/Offline",
    lessons: 27,
    image: CourseImg1,
  },
  {
    id: 2,
    title: "Full Stack web development: HTML, CSS, JS & more",
    category: "Development",
    mode: "Online/Offline",
    lessons: 27,
    image: CourseImg2,
  },
  {
    id: 3,
    title: "Full Stack web development: HTML, CSS, JS & more",
    category: "Development",
    mode: "Online/Offline",
    lessons: 27,
    image: CourseImg3,
  },
];

const  TraningPopular = () => {
  const navigate = useNavigate(); 
  
  return (
    <section className="traningpopular">
      <div className="traningpopular-inner">
        {/* Header */}
        <div className="traningpopular-header">
          <div className="traningpopular-heading">
            <p className="traningpopular-eyebrow">Discover our</p>
            <h2 className="traningpopular-title">
              most{" "}
              <span className="traningpopular-title-highlight">popular</span>{" "}
              Courses
            </h2>
          </div>

        <CommonButton text="Explore all Course"   onClick={() => navigate("/allcourses")}/>
        </div>

        {/* Cards */}
        <div className="traningpopular-grid">
{coursedata.slice(0, 3).map((course) => (
  <article className="traningpopular-card" key={course.id}>
    <img src={course.image} alt={course.title} />

    <div className="traningpopular-card-body">
      <p>{course.category}</p>
      <h3>{course.shortTitle}</h3>

      <div className="traningpopular-card-meta">
        <span>{course.mode}</span>
        <span>{course.lessons} Lessons</span>
      </div>

      <div className="traningpopular-card-actions">
        <Link
          to={`/coursedetails/${course.id}`}
          className="traningpopular-card-btn-secondary"
        >
          More Details
        </Link>

        <button className="traningpopular-card-btn-primary"  onClick={() => navigate("/contact")}>
          Enroll Now
        </button>
      </div>
    </div>
  </article>
))}
        </div>
      </div>
    </section>
  );
};

export default  TraningPopular;
