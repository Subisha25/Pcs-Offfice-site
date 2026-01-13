import React from "react";
import "./blog.css";
import CommonButton from "../components/common/button";
import Arrow from "../components/assets/arrow.png"; // adjust path if needed

const blogs = [
  {
    date: "NOV, 2025",
    title: "A Small Change with a Big Impact: Our Commitment to Recycled Packaging",
    desc: "In the footwear manufacturing industry, sustainability is often discussed in terms of materials, processes, and technologies. But at Co.Bo., we believe that responsibility extends far beyond the product itself.",
    image: "https://static.wixstatic.com/media/9973c1_19aa4863624b488484bb2c3ae3ad9ca3~mv2.jpg/v1/fill/w_365,h_487,fp_0.50_0.50,q_90,enc_avif,quality_auto/9973c1_19aa4863624b488484bb2c3ae3ad9ca3~mv2.jpg"
  },
  {
    date: "OCT, 2025",
    title: "Designing for Comfort and Performance",
    desc: "Every design choice we make is driven by comfort, performance, and long-term durability.",
    image: "https://static.wixstatic.com/media/9973c1_19aa4863624b488484bb2c3ae3ad9ca3~mv2.jpg/v1/fill/w_365,h_487,fp_0.50_0.50,q_90,enc_avif,quality_auto/9973c1_19aa4863624b488484bb2c3ae3ad9ca3~mv2.jpg"
  },
  {
    date: "SEP, 2025",
    title: "How Sustainable Materials Shape the Future",
    desc: "Sustainable materials are no longer optional, they are essential for future growth.",
    image: "https://static.wixstatic.com/media/9973c1_19aa4863624b488484bb2c3ae3ad9ca3~mv2.jpg/v1/fill/w_365,h_487,fp_0.50_0.50,q_90,enc_avif,quality_auto/9973c1_19aa4863624b488484bb2c3ae3ad9ca3~mv2.jpg"
  },
  {
    date: "AUG, 2025",
    title: "Minimal Design Philosophy",
    desc: "Less is more. Our design language focuses on clarity and simplicity.",
    image: "https://static.wixstatic.com/media/9973c1_19aa4863624b488484bb2c3ae3ad9ca3~mv2.jpg/v1/fill/w_365,h_487,fp_0.50_0.50,q_90,enc_avif,quality_auto/9973c1_19aa4863624b488484bb2c3ae3ad9ca3~mv2.jpg"
  },
  {
    date: "JUL, 2025",
    title: "Behind the Scenes of Manufacturing",
    desc: "A closer look into how our products are carefully crafted.",
    image: "https://static.wixstatic.com/media/9973c1_19aa4863624b488484bb2c3ae3ad9ca3~mv2.jpg/v1/fill/w_365,h_487,fp_0.50_0.50,q_90,enc_avif,quality_auto/9973c1_19aa4863624b488484bb2c3ae3ad9ca3~mv2.jpg"
  },
  {
    date: "JUN, 2025",
    title: "Why Packaging Matters",
    desc: "Packaging plays a major role in sustainability and brand perception.",
    image: "https://static.wixstatic.com/media/9973c1_19aa4863624b488484bb2c3ae3ad9ca3~mv2.jpg/v1/fill/w_365,h_487,fp_0.50_0.50,q_90,enc_avif,quality_auto/9973c1_19aa4863624b488484bb2c3ae3ad9ca3~mv2.jpg"
  },
  {
    date: "MAY, 2025",
    title: "Innovation Through Responsibility",
    desc: "Innovation should always go hand-in-hand with responsibility.",
    image: "https://static.wixstatic.com/media/9973c1_19aa4863624b488484bb2c3ae3ad9ca3~mv2.jpg/v1/fill/w_365,h_487,fp_0.50_0.50,q_90,enc_avif,quality_auto/9973c1_19aa4863624b488484bb2c3ae3ad9ca3~mv2.jpg"
  },
  {
    date: "APR, 2025",
    title: "Building a Better Supply Chain",
    desc: "Transparency and ethics define our supply chain.",
    image: "https://static.wixstatic.com/media/9973c1_19aa4863624b488484bb2c3ae3ad9ca3~mv2.jpg/v1/fill/w_365,h_487,fp_0.50_0.50,q_90,enc_avif,quality_auto/9973c1_19aa4863624b488484bb2c3ae3ad9ca3~mv2.jpg"
  },
  {
    date: "MAR, 2025",
    title: "Our Commitment to the Planet",
    desc: "Planet-first approach in everything we do.",
    image: "https://static.wixstatic.com/media/9973c1_19aa4863624b488484bb2c3ae3ad9ca3~mv2.jpg/v1/fill/w_365,h_487,fp_0.50_0.50,q_90,enc_avif,quality_auto/9973c1_19aa4863624b488484bb2c3ae3ad9ca3~mv2.jpg"
  },
  {
    date: "FEB, 2025",
    title: "The Future of Footwear",
    desc: "Exploring trends that will define the next decade.",
    image: "https://static.wixstatic.com/media/9973c1_19aa4863624b488484bb2c3ae3ad9ca3~mv2.jpg/v1/fill/w_365,h_487,fp_0.50_0.50,q_90,enc_avif,quality_auto/9973c1_19aa4863624b488484bb2c3ae3ad9ca3~mv2.jpg"
  }
];

function BlogPage() {
  return (
    <div className="layout">
      {/* LEFT SIDE - FREEZE */}
      <div className="left">
        <h1 className="big-text">
          BLOG-<br />NEWS
        </h1>
        <p className="sub-text">Latest News<br />and updates</p>
      </div>

      {/* RIGHT SIDE - SCROLL */}
      <div className="right">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt="blog" />
            <div className="content">
              <span className="date">{blog.date}</span>
              <h2>{blog.title}</h2>
              <p>{blog.desc}</p>

              <CommonButton
  text="Discover"
  icon={Arrow}
  wrapperClass="blog-discover-btn"
  onClick={() => console.log(blog.title)}
/>

           </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
