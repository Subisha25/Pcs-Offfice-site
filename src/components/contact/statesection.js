import React from "react";
import "./statesection.css";

const StateSection = ({ selectedOption }) => {
    // "Learn" மற்றும் "Work" விருப்பங்களுக்கான வேறுபட்ட ஸ்டாட்கள்
    const statsData = {
        learn: [
            { number: "1K+", label: "Happy Learners" },
            { number: "99%", label: "Success Rate" },
            { number: "50+", label: "Collage Projects" },
            { number: "6+", label: "Years Experience" }
        ],
        work: [
            { number: "100+", label: "Job Placements" },
            { number: "95%", label: "Hiring Rate" },
            { number: "20+", label: "Partner Companies" },
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