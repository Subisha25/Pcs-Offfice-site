import React, { useState } from "react";
import "./banner.css";
// முதல் ஸ்கிரீன்ஷாட்டில் உள்ள icon-களைப் பயன்படுத்த Lucide React-ல் உள்ள icons-ஐ மாற்றுகிறேன்.
// User -> GraduationCap, Briefcase -> TrendingUp, CheckCircle -> Pocket & Award
import { GraduationCap, TrendingUp, Pocket, Award } from "lucide-react";
import bgBanner from "../assets/contact/cantactbanner.png"; // *** உங்கள் பின்னணிப் படம் ***
import StateSection from "./statesection";

const ContactSection = () => {
    const [selectedOption, setSelectedOption] = useState("work");

    return (
        <div
            className="contact-wrapper"
        // style={{ backgroundImage: `url(${bgBanner})` }}
        >
            <div>
                <img src={bgBanner} alt="Contact Banner" className="banner-image" />
            </div>
            <div className="contact-container">
                {/* LEFT CONTENT */}
                <div className="left-section">
                    <h2 className="title">
                        Why Choose Us for <br />
                        Your Learning <span className="highlight">Journey</span>
                    </h2>


                    <div className="benefit-card">
                        {/* முதல் ஸ்கிரீன்ஷாட்டைப் போல மாற்றப்பட்டது */}
                        <GraduationCap className="icon" />
                        <div>
                            <h4>Expert-Led Courses</h4>
                            <p>Learn from industry professionals with real-world experience.</p>
                        </div>
                    </div>

                    <div className="benefit-card">
                        {/* முதல் ஸ்கிரீன்ஷாட்டைப் போல மாற்றப்பட்டது */}
                        <TrendingUp className="icon" />
                        <div>
                            <h4>Comprehensive Learning Paths</h4>
                            <p>
                                Structured and detailed courses tailored to your skill goals.
                            </p>
                        </div>
                    </div>

                    <div className="benefit-card">
                        {/* முதல் ஸ்கிரீன்ஷாட்டைப் போல மாற்றப்பட்டது */}
                        <Pocket className="icon" />
                        <div>
                            <h4>Hands-On Projects</h4>
                            <p>Apply your knowledge in real practical projects.</p>
                        </div>
                    </div>

                    <div className="benefit-card">
                        {/* முதல் ஸ்கிரீன்ஷாட்டைப் போல மாற்றப்பட்டது */}
                        <Award className="icon" />
                        <div>
                            <h4>Certification Upon Completion</h4>
                            <p>Receive a recognized certificate to boost your career.</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="right-section">
                    <h2 className="connect-title">Connect With Us</h2>

                    <p className="label">What you Preferred to connect</p>
                    <div className="toggle-options">
                        {/* Need to Work பட்டன் 'active' ஆக வைக்கப்பட்டுள்ளது */}
                        <button
                            className={`toggle-btn ${selectedOption === "work" ? "active" : ""
                                }`}
                            onClick={() => setSelectedOption("work")}
                        >
                            Need to Work
                        </button>

                        <button
                            className={`toggle-btn ${selectedOption === "learn" ? "active" : ""
                                }`}
                            onClick={() => setSelectedOption("learn")}
                        >
                            I Want to Learn
                        </button>
                    </div>

                    <div className="input-group">
                        <input type="text" placeholder="Enter your Full Name" />
                    </div>

                    <div className="input-group">
                        <input type="email" placeholder="Enter your Email" />
                    </div>

                    <div className="phone-row">
                        <select>
                            <option>India +91</option>
                        </select>
                        <input type="text" placeholder="Enter your Mobile Number" />
                    </div>

                    <div className="input-group">
                        {/* Placeholder Text முதல் ஸ்கிரீன்ஷாட்டைப் போல மாற்றப்பட்டது */}
                        <input type="text" placeholder="Enter your Interest to Learn" />
                    </div>

                    {/* முதல் ஸ்கிரீன்ஷாட்டில் Submit பட்டன் இல்லை. */}
                    {/* <button className="submit-btn">
            I'm Ready to Start Happy Learning!
          </button> */}

                    {/* முதல் ஸ்கிரீன்ஷாட்டில் இந்த footer text-ம் இல்லை. */}
                    {/* <p className="footer-text">
            Once Submit form Our Team will connect with you
          </p> */}
                </div>
            </div>
            <StateSection/>
        </div>
        
    );
};

export default ContactSection;