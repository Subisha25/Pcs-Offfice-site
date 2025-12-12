import React, { useState } from "react";
import "./banner.css";
import { GraduationCap, TrendingUp, Pocket, Award, Briefcase, Users, Target, Clock } from "lucide-react";
import bgBanner from "../assets/contact/cantactbanner.png";
import StateSection from "./statesection";
import SuccessStories from "./successstories";

const ContactSection = () => {
    const [selectedOption, setSelectedOption] = useState("learn");

    // "Learn" மற்றும் "Work" விருப்பங்களுக்கான உள்ளடக்கங்கள்
    const content = {
        learn: {
            title: "Why Choose Us for Your Learning Journey",
            highlight: "Journey",
            benefits: [
                {
                    icon: GraduationCap,
                    title: "Expert-Led Courses",
                    desc: "Learn from industry professionals with real-world experience."
                },
                {
                    icon: TrendingUp,
                    title: "Comprehensive Learning Paths",
                    desc: "Structured and detailed courses tailored to your skill goals."
                },
                {
                    icon: Pocket,
                    title: "Hands-On Projects",
                    desc: "Apply your knowledge in real practical projects."
                },
                {
                    icon: Award,
                    title: "Certification Upon Completion",
                    desc: "Receive a recognized certificate to boost your career."
                }
            ],
            formTitle: "What you Preferred to connect",
            button1: "I Need to Work",
            button2: "I Want to Learn",
            interestLabel: "What you Interest to learn",
            interestPlaceholder: "Enter your Interest Eg: Full Stack Development,",
            submitText: "I'm Ready to Start Happy Learning!"
        },
        work: {
            title: "Why Choose Us for Your Career Growth",
            highlight: "Growth",
            benefits: [
                {
                    icon: Briefcase,
                    title: "Job-Ready Training",
                    desc: "Get trained on the latest tools and technologies used in top companies."
                },
                {
                    icon: Users,
                    title: "Industry Connections",
                    desc: "Connect with hiring managers and industry experts directly."
                },
                {
                    icon: Target,
                    title: "Career Coaching",
                    desc: "Personalized guidance to help you land your dream job."
                },
                {
                    icon: Clock,
                    title: "Flexible Schedules",
                    desc: "Learn at your own pace while balancing work and life."
                }
            ],
            formTitle: "What you're looking for",
            button1: "I Want to Learn",
            button2: "I Need to Work",
            interestLabel: "What role are you interested in?",
            interestPlaceholder: "Enter your role Eg: Frontend Developer,",
            submitText: "Get Started with Career Support!"
        }
    };

    const current = content[selectedOption];

    return (
        <div className="contact-wrapper">
            <div>
                <img src={bgBanner} alt="Contact Banner" className="banner-image" />
            </div>
            <div className="contact-container">
                {/* LEFT CONTENT - Benefits Section */}
                <div className="left-section">
                    <h2 className="title">
                        {current.title.split(' ').slice(0, -2).join(' ')} <br />
                        <span className="highlight">{current.highlight}</span>
                    </h2>

                    {current.benefits.map((benefit, idx) => {
                        const Icon = benefit.icon;
                        return (
                            <div className="benefit-card" key={idx}>
                                <Icon className="icon" />
                                <div>
                                    <h4>{benefit.title}</h4>
                                    <p>{benefit.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* RIGHT CONTENT - Form Section */}
                <div className="right-section">
                    <h2 className="connect-title">Connect With Us</h2>
                    <p className="form-label">{current.formTitle}</p>

                    <div className="toggle-wrapper">
                        <button
                            className={`toggle-btn ${selectedOption === "work" ? "active" : ""}`}
                            onClick={() => setSelectedOption("work")}
                        >
                            <span className="dot"></span> I Need to Work
                        </button>

                        <button
                            className={`toggle-btn ${selectedOption === "learn" ? "active" : ""}`}
                            onClick={() => setSelectedOption("learn")}
                        >
                            <span className="dot"></span> I Want to Learn
                        </button>
                    </div>

                    <label className="input-title">Name</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Enter your Full Name  Eg: Raj Kumar"
                    />

                    <label className="input-title">Email*</label>
                    <input
                        type="email"
                        className="form-input"
                        placeholder="Enter your Email  Eg: rjkumar55@gmail.com"
                    />

                    <label className="input-title">Phone*</label>
                    <div className="phone-input-row">
                        <select className="phone-select">
                            <option>India +91</option>
                        </select>
                        <input
                            type="text"
                            className="phone-number"
                            placeholder="Enter your Mobile Number"
                        />
                    </div>

                    <label className="input-title">{current.interestLabel}</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder={current.interestPlaceholder}
                    />

                    <button className="submit-btn">
                        {current.submitText}
                    </button>

                    <p className="footer-note">
                        Once Submit form Our Team will connect with you
                    </p>
                </div>
            </div>

            {/* StateSection மற்றும் SuccessStories காம்போனெண்ட்டுகளுக்கு selectedOption prop அனுப்புகிறேன் */}
            <StateSection selectedOption={selectedOption} />
            <SuccessStories selectedOption={selectedOption} />
        </div>
    );
};

export default ContactSection;