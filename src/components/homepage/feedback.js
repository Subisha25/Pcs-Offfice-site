import React, { useState } from "react";
import "./feedback.css";
import tagicon from "../assets/allheadingicon/feedbackicon.png";
import quote from "../assets/quote.svg";
import leftarrow from "../assets/leftarrow.svg";
import rightarrow from "../assets/rightarrow.svg";
import  {  useEffect, useRef } from "react";
import CommonTopTag from "../common/toptag";
import { Link, useNavigate } from "react-router-dom";


const reviewsData = [
  {
    text: "Built helped us take our marketing to the next level. Their team is skilled, responsive, and dedicated to driving real results. We’ve seen more traffic, better conversions, and an overall boost in business. Worth every penny!",
    name: "Daniel Kim",
    role: "Founder of MindEase App",
    img: "https://i.pravatar.cc/60?img=8",
  },
  {
    text: "Amazing service! Their creativity and dedication boosted our brand presence enormously.",
    name: "Sophia Lee",
    role: "Marketing Manager",
    img: "https://i.pravatar.cc/60?img=32",
  },
  {
    text: "Excellent support and timely delivery. Worth every investment made!",
    name: "John Carter",
    role: "CEO, UrbanTech",
    img: "https://i.pravatar.cc/60?img=12",
  },
  {
    text: "Super professional team with a great eye for detail. Highly recommended!",
    name: "Priya Sharma",
    role: "Founder, StyleHub",
    img: "https://i.pravatar.cc/60?img=56",
  },
  {
    text: "Our conversions improved a lot after working with them! Friendly and highly skilled.",
    name: "Ahmed Raza",
    role: "Director, FastStore",
    img: "https://i.pravatar.cc/60?img=45",
  },
];

const FeedbackSection = () => {
  const [index, setIndex] = useState(0);
const navigate = useNavigate();

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  const current = reviewsData[index];
const [count, setCount] = useState(0);
const countRef = useRef(null);
const [startCount, setStartCount] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        setStartCount(true);
      }
    },
    { threshold: 0.5 } // 50% visible aana udane start
  );

  if (countRef.current) {
    observer.observe(countRef.current);
  }

  return () => {
    if (countRef.current) {
      observer.unobserve(countRef.current);
    }
  };
}, []);

useEffect(() => {
  if (!startCount) return;

  let start = 0;
  const end = 52;
  const duration = 2000;
  const stepTime = Math.abs(Math.floor(duration / end));

  const timer = setInterval(() => {
    start += 1;
    setCount(start);
    if (start === end) clearInterval(timer);
  }, stepTime);

  return () => clearInterval(timer);
}, [startCount]);

  return (
    <div className="feedback-section">
      
      {/* TOP CENTER */}
      <div className="feedback-header">
        <CommonTopTag text="Feed Back" icon={tagicon}/>

        <h2>
          Real reviews <br />
          <span className="italic-text">from real</span> people
        </h2>
      </div>

      {/* BOTTOM SECTION */}
      <div className="feedback-body">
        {/* LEFT */}
        <div className="left-box">
          <h1 ref={countRef}>{count}+</h1>

          <p className="left-text">Happy Clients</p>

<Link
  to="/contact"
  state={{ mode: "work" }}
>
          <button className="discuss-btn"   onClick={() => navigate("/contact")}>
            <span className="circle-arrow">
              <img src={rightarrow} alt="rightarrow" />
            </span>
            Let’s Discuss
          </button>
          </Link>
        </div>

        {/* RIGHT */}
        <div className="right-box">
          <div className="quote">
            <img src={quote} alt="quote" />
          </div>

          <p className="review">{current.text}</p>

          <div className="profile-line">
            <div className="profile">
              <img src={current.img} alt="{current.name}" />
              <div>
                <h4 className="review-name">{current.name}</h4>
                <span className="review-role">{current.role}</span>

              </div>
            </div>

            <div className="nav-arrows">
              <button className="arrow-btn" onClick={handlePrev}>
                <img src={leftarrow} alt="leftarrow" />
              </button>
              <button className="arrow-btn" onClick={handleNext}>
                <img src={rightarrow} alt="rightarrow" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
