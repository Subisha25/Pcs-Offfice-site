import React from "react";
import "./blog.css";
import { Link } from "react-router-dom";


const BlogPage = () => {
const blogs = [
  {
    image:
      "https://itbrief.com.au/uploads/story/2021/06/01/GettyImages-1244482898.webp",

    date: "05 Nov",
    category: "Product Updates",
    readTime: "2 min read",

    // 🔹 Preview (Blog listing / card)
    previewTitle: "AI-Powered Email That Saves You Time",
    previewDescription:
      "Reduce inbox overload and boost productivity with our new AI-driven email solution.",

    // 🔹 Full Blog (Detail page)
    title:
      "Save 1+ Hour a Day: How AI-Powered Email Unlocks Workplace Productivity",
    description:
      "Email takes time – often too much of it. Learn how AI-powered email solutions reduce inbox overload and help teams focus on meaningful work.",

    slug: "ai-powered-email-productivity",
  },

  {
    image:
      "https://augmentify.dev/wp-content/uploads/2024/07/AI-Automation-Strategies-to-Supercharge-Your-Business.png",

    date: "10 Jun",
    category: "Product Updates",
    readTime: "3 min read",

    previewTitle: "Smarter Email Marketing with AI",
    previewDescription:
      "Create, send, and scale campaigns faster using AI-powered email marketing tools.",

    title:
      "Prompt, Send, Grow: How AI Is Transforming Email Marketing for Businesses",
    description:
      "Discover how AI-powered email marketing platforms help businesses automate campaigns, personalize outreach, and drive growth.",

    slug: "ai-email-marketing-growth",
  },

  {
    image:
      "https://w3-lab.com/wp-content/uploads/2023/02/will-artificial-intelligence-AI-replace-software-engineering-1024x683.jpg",

    date: "03 Jun",
    category: "Technology News",
    readTime: "3 min read",

    previewTitle: "AI Platforms Developers Are Loving",
    previewDescription:
      "See how thousands are building apps faster using AI-driven development platforms.",

    title:
      "Hundreds of Thousands Are Building Software Faster Using AI Platforms",
    description:
      "Since its release, AI-powered development platforms have helped developers and businesses build scalable software solutions faster.",

    slug: "ai-development-platforms-trend",
  },
];
  return (
    <>
      <div className="about-banner">
        <h1 className="about-title">
          BLOG&nbsp;&nbsp;
        </h1>
      </div>

     

 {/* Blog Cards Section */}
  <section className="blog-section">
      <div className="blog-container">
        <div className="blog-row">
         {blogs.map((blog, index) => (
  <Link to={`/blog/${index}`} className="blog-link" key={index}>
    <div className="blog-card">
      <div className="blog-image">
        <img src={blog.image} alt={blog.title} />
      </div>

      <div className="blog-meta">
        <span>{blog.date}</span>
        <span>•</span>
        <span>{blog.category}</span>
        <span>•</span>
        <span>{blog.readTime}</span>
      </div>

      <h3 className="blog-title">{blog.title}</h3>
    </div>
  </Link>
))}

        </div>
      </div>
    </section>

    </>
  );
};

export default BlogPage;
