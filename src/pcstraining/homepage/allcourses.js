import React from "react";
import "./traningpopular.css";
import coursedata from "./coursedata";

// Change these image imports to your actual paths
import CourseImg1 from "../assets/popular1.png";
import CourseImg2 from "../assets/popular2.png";
import CourseImg3 from "../assets/popular3.png";
import CommonButton from "../../components/common/button";
import { Link, useNavigate } from "react-router-dom";



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

const AllCourses = () => {
  const navigate = useNavigate(); 


  return (
    <section className="allcourse">
      <div className="traningpopular-inner">
   

        {/* Cards */}
        <div className="traningpopular-grid">
       {coursedata.map((course) => (
  <article className="traningpopular-card" key={course.id}>
<Link to={`/coursedetails/${course.id}`}>
  <img
    src={course.image}
    alt={course.title}
    className="traningpopular-card-image"
  />
</Link>
    <div className="traningpopular-card-body">
      <p className="traningpopular-card-category">
  {course.category}
</p>

<h3 className="traningpopular-card-title">
  {course.shortTitle}
</h3>
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
<Link
  to="/contact"
  state={{ mode: "learn" }}
>
        <button className="traningpopular-card-btn-primary"   onClick={() => navigate("/contact")}>
          Enroll Now
        </button>
        </Link>
      </div>
    </div>
  </article>
))}
        </div>
      </div>
    </section>
  );
};

export default AllCourses;
