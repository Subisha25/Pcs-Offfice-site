// src/pages/Blog/BlogPage.jsx
import React from "react";
import BlogCard from "./BlogCard";
import { blogCategories } from "./blogData";
import "./blog.css";

const BlogPage = () => {
  return (
    <div className="pcs-blog">

      {/* Header */}
      <section className="blog-header">
        <h1>PCS Articles</h1>
        <p>
          Learn from industry experts. Career guidance, IT skills and
          real-time software knowledge from PCS.
        </p>
      </section>

      {/* Categories */}
      {blogCategories.map((cat, index) => (
        <section key={index} className="blog-category">
          <div className="category-header">
            <h2>{cat.category}</h2>
            <span className="view-all">View all →</span>
          </div>

          <div className="blog-grid">
            {cat.posts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      ))}

    </div>
  );
};

export default BlogPage;
