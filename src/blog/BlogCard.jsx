// src/pages/Blog/BlogCard.jsx
import React from "react";

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <img src={post.image} alt={post.title} />
      <div className="blog-card-content">
        <h4>{post.title}</h4>
        <p>{post.description}</p>
        <span className="blog-date">{post.date}</span>
      </div>
    </div>
  );
};

export default BlogCard;
