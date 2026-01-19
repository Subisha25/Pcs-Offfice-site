import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./blogdetailsh.css";

const blogs = [
  {
    title: "Tech Insights: Building Scalable Software Solutions",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    intro:
      "Scalable software solutions are essential for businesses that aim to grow without technical limitations. This article explains how modern architecture helps applications scale efficiently.",
    sections: [
      {
        heading: "What is Scalable Software?",
        text:
          "Scalable software is designed to handle growth in users, data, and traffic without affecting performance. It allows businesses to expand smoothly while maintaining reliability."
      },
      {
        heading: "Modern Architecture Approach",
        text:
          "Cloud infrastructure, microservices, and load balancing play a major role in building scalable systems. These technologies allow independent scaling of different components."
      },
      {
        heading: "Business Benefits",
        text:
          "Scalable software reduces downtime, improves customer experience, and minimizes long-term operational costs."
      }
    ]
  },

  {
    title: "Knowledge Hub: Why Clean Code Matters",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    intro:
      "Clean code is the backbone of maintainable and reliable software. It helps teams collaborate efficiently and ensures long-term success.",
    sections: [
      {
        heading: "Understanding Clean Code",
        text:
          "Clean code is easy to read, well-structured, and follows consistent standards. It avoids unnecessary complexity."
      },
      {
        heading: "Impact on Development Teams",
        text:
          "When code is clean, developers can understand and modify it faster, reducing errors and saving time."
      },
      {
        heading: "Long-Term Value",
        text:
          "Clean code lowers maintenance costs and improves software stability over time."
      }
    ]
  },

  {
    title: "Tech Talks: Latest Trends in Web Development",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    intro:
      "Web development trends evolve rapidly as technology and user expectations grow.",
    sections: [
      {
        heading: "Popular Frameworks",
        text:
          "React, Vue, and Next.js are leading frameworks due to their flexibility and performance."
      },
      {
        heading: "User-Centric Design",
        text:
          "Modern web apps focus heavily on speed, accessibility, and responsive design."
      },
      {
        heading: "Future of the Web",
        text:
          "AI-powered interfaces and server-side rendering will shape future web experiences."
      }
    ]
  },

  {
    title: "Company Updates: Inside Our Development Process",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    intro:
      "Our development process ensures quality, transparency, and timely delivery.",
    sections: [
      {
        heading: "Planning Phase",
        text:
          "We begin by understanding business goals and defining a clear roadmap."
      },
      {
        heading: "Agile Development",
        text:
          "Our agile process allows continuous improvement and client feedback."
      },
      {
        heading: "Testing & Deployment",
        text:
          "Thorough testing ensures stability before final deployment."
      }
    ]
  }
];

function BlogDetails() {
  const { index } = useParams();
  const navigate = useNavigate();
  const blog = blogs[index];

  if (!blog) return null;

  return (
    <div className="blog-details-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back to Blogs
      </button>

      {/* HERO */}
      <div className="details-hero">
        <img src={blog.image} alt={blog.title} />
        <h1>{blog.title}</h1>
      </div>

      {/* INTRO */}
      <p className="details-intro">{blog.intro}</p>

      {/* SECTIONS */}
      {blog.sections.map((sec, i) => (
        <div className="details-section" key={i}>
          <h2>{sec.heading}</h2>
          <p>{sec.text}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
