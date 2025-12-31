import React, { useState } from "react";
import "./feedback.css";
import tagicon from "../assets/allheadingicon/feedbackicon.png";
import quote from "../assets/quote.svg";
import leftarrow from "../assets/leftarrow.svg";
import rightarrow from "../assets/rightarrow.svg";
import { useEffect, useRef } from "react";
import CommonTopTag from "../common/toptag";
import { Link, useNavigate } from "react-router-dom";


const reviewsData = [
  {
    text: "The Lhome project was executed beautifully. The team understood our vision for a modern and welcoming home platform and delivered a clean, user-friendly website. From layout to performance, everything feels perfect.",
    name: "Tony Rosario",
    role: "Rio business solutions",
    // img: "https://i.pravatar.cc/60?img=11",
  },
  {
    text: "The Nibras project was handled with great clarity and professionalism. The team understood our startup requirements perfectly and delivered a high-quality product on time. The overall experience was smooth and stress-free.",
    name: "Nausheen",
    role: "Nibras",
    // img: "https://i.pravatar.cc/60?img=47",
  },
  {
    text: "The World Tamil Siragam project was handled with great responsibility and cultural understanding. The team was highly responsive and ensured every stage of development aligned with our vision. The final outcome met all our expectations.",
    name: "Gopi Ramesh",
    role: "World Tamil Siragam",
    // img: "https://i.pravatar.cc/60?img=22",
  },
  {
    text: "The Grace Cabs project stood out for its strong development approach and attention to detail. The booking flow, performance, and UI were well optimized, making the platform smooth and reliable for users.",
    name: "Robert Jeyakumar",
    role: "Grace Cabs",
    // img: "https://i.pravatar.cc/60?img=33",
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
    const end = 10;
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
        <CommonTopTag text="Feed Back" icon={tagicon} />

        <h2>
          Real reviews <br />
          <span className="italic-text">from real</span> people!
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
            <button className="discuss-btn" onClick={() => navigate("/contact")}>
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
              <div className="avatars-circles">
                {current.name.charAt(0)}
              </div>

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
