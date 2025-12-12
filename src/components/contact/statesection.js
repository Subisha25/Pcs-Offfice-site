import React from "react";
import "./statesection.css";

const StateSection = ({ selectedOption }) => {
    // "Learn" மற்றும் "Work" விருப்பங்களுக்கான வேறுபட்ட ஸ்டாட்கள்
    const statsData = {
        learn: [
            { number: "2K+", label: "Happy Learners" },
            { number: "99%", label: "Success Rate" },
            { number: "100+", label: "Projects Delivered" },
            { number: "15+", label: "Years Experience" }
        ],
        work: [
            { number: "500+", label: "Job Placements" },
            { number: "95%", label: "Hiring Rate" },
            { number: "50+", label: "Partner Companies" },
            { number: "24/7", label: "Career Support" }
        ]
    };

    const stats = statsData[selectedOption] || statsData.learn;

    return (
        <section className="traningwhychoose-stat-section">
            <div className="traningwhychoose-stats-container">
                {stats.map((stat, idx) => (
                    <div className="traningwhychoose-stat" key={idx}>
                        <div className="traningwhychoose-stat-number">{stat.number}</div>
                        <div className="traningwhychoose-stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StateSection;