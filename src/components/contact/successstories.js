import React, { useState, useEffect } from "react";
import "./successstories.css";

// Replace with your real avatar image paths
import Avatar1 from "../../pcstraining/assets/learn.png";
import Avatar2 from "../../pcstraining/assets/learn.png"; // வேறு avatar-க்கு
import CommonTopTag from "../../components/common/toptag";

const SuccessStories = ({ selectedOption }) => {
    // "Learn" மற்றும் "Work" விருப்பங்களுக்கான வேறுபட்ட சான்றுகள்
    const testimonialsData = {
        learn: [
            {
    name: "Jesi J",
    role: "Full Stack Developer",
    text: "The Full Stack Development course at PCS was highly practical and well structured. Working on real-time projects helped me strengthen both frontend and backend skills with confidence.",
    initial: "J",
  },
  {
    name: "Mathavi K",
    role: "Full Stack Developer",
    text: "PCS provided excellent hands-on training with clear explanations. The trainers focused on real-world development scenarios, which made learning fast and effective.",
    initial: "M",
  },
  {
    name: "Maha lakshmi V",
    role: "Full Stack Developer",
    text: "The course content was industry-oriented and easy to follow. Building complete applications during the training helped me improve my problem-solving and coding skills.",
    initial: "M",
  },
  {
    name: "Subisha S",
    role: "Full Stack Web Developer",
    text: "I gained strong knowledge in React, Node.js, and database integration. The practical approach and mentor support made a huge difference in my learning journey.",
    initial: "S",
  },
  {
    name: "Rama lakshmi S",
    role: "Mobile Application Developer",
    text: "PCS training boosted my confidence as a developer. The live projects and continuous guidance prepared me well for real-time development and interviews.",
    initial: "R",
  },
        ],
      work: [
  {
    name: "Manju",
    role: "Software Engineer at PCS Software Solutions",
    text: "Working at PCS Software Solutions has been amazing. The team culture and real-time projects helped me grow quickly and take ownership of client solutions.",
    initial: "M",
  },
  {
    name: "Kalam Ruso",
    role: "Frontend Developer at PCS Software Solutions",
    text: "I enjoyed building interactive applications with modern frameworks at PCS Software Solutions. Mentorship here accelerated my career development.",
    initial: "K",
  },
  {
    name: "Abishek",
    role: "Backend Developer at PCS Software Solutions",
    text: "PCS Software Solutions gave me hands-on experience with databases and APIs. I can now confidently design and implement backend systems for clients.",
    initial: "A",
  },
  {
    name: "Surya",
    role: "Full Stack Developer at PCS Software Solutions",
    text: "From frontend to backend, PCS Software Solutions provided exposure to complete project workflows. I feel fully prepared for any challenging project now.",
    initial: "S",
  },
  {
    name: "Marish",
    role: "UI/UX Designer at PCS Software Solutions",
    text: "Designing real client solutions at PCS Software Solutions improved my skills immensely. The collaborative environment helped me understand user needs better.",
    initial: "M",
  },
]

    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);

    const testimonials = testimonialsData[selectedOption] || testimonialsData.learn;

    // Decide how many cards to show based on screen width
    useEffect(() => {
        const updateSlidesPerView = () => {
            if (window.innerWidth < 640) {
                setSlidesPerView(1);
            } else if (window.innerWidth < 1024) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(3);
            }
        };

        updateSlidesPerView();
        window.addEventListener("resize", updateSlidesPerView);
        return () => window.removeEventListener("resize", updateSlidesPerView);
    }, []);

    const maxIndex = Math.max(testimonials.length - slidesPerView, 0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    const canSlide = testimonials.length > slidesPerView;
    const translateX = (100 / slidesPerView) * currentIndex;

    // தலைப்பு மாற்றம்
    const titleData = {
        learn: {
            main: "Success stories from ",
            highlight: "learners"
        },
        work: {
            main: "Career success from ",
            highlight: "professionals"
        }
    };

    const title = titleData[selectedOption] || titleData.learn;

    return (
        <section className="traninglearn">
            <div className="traninglearn-inner">
                {/* Top tag */}
                <CommonTopTag text={selectedOption === "work" ? "Job Placements" : "Feed Back"} />

                {/* Heading */}
<h2 className="traninglearn-title">
  <span className="title-main">{title.main}</span>
  <span className="traninglearn-title-highlight title-highlight">
    {title.highlight}
  </span>
</h2>



                {/* Carousel */}
                <div className="traninglearn-carousel">
                    <div className="traninglearn-carousel-viewport">
                        <div
                            className="traninglearn-carousel-track"
                            style={{
                                transform: `translateX(-${translateX}%)`,
                            }}
                        >
                            {testimonials.map((item, idx) => (
                                <article
                                    className="traninglearn-card"
                                    key={idx}
                                    style={{
                                        flex: `0 0 ${100 / slidesPerView}%`,
                                    }}
                                >
                                    <div className="traninglearn-card-quoteMark">"</div>

                                    <p className="traninglearn-card-text">{item.text}</p>

                                    <div className="traninglearn-card-footer">
                                       <div className="traninglearn-card-avatar-circle">
  {item.initial || item.name.charAt(0)}
</div>

                                        <div className="traninglearn-card-person">
                                            <div className="traninglearn-card-name">{item.name}</div>
                                            <div className="traninglearn-card-role">{item.role}</div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Nav buttons */}
                    <div className="traninglearn-nav">
                        <button
                            className="traninglearn-nav-btn"
                            onClick={handlePrev}
                            disabled={!canSlide}
                            aria-label="Previous testimonials"
                        >
                            ←
                        </button>
                        <button
                            className="traninglearn-nav-btn"
                            onClick={handleNext}
                            disabled={!canSlide}
                            aria-label="Next testimonials"
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;