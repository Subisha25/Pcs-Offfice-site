import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./blogdetailsh.css";
import "./blog.css";
import api, { IMG_BASE_URL } from "../utils/api";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/blog/get_one.php?id=${id}`)
      .then((res) => {
        if (res.data.ok) {
          setBlog(res.data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("Blog detail error", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p style={{ padding: "40px" }}>Loading...</p>;
  if (!blog) return <h2>Blog not found</h2>;

  return (
    <>
      {/* ===== BLOG DETAILS ===== */}
      <div className="blog-details">
        <div className="blog-image-wrapper">
          <img
            src={`${IMG_BASE_URL}${blog.image}`}
            alt={blog.title}
            className="blog-centered-image"
          />
        </div>

        <article className="blog-article">
          <div className="article-header">
            <h1 className="article-title">{blog.title}</h1>

            <div className="details-meta">
              <span>{new Date(blog.created_at).toDateString()}</span>
              <span>•</span>
              <span>Blog</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>

          <div className="article-content">
            <p className="intro-paragraph">{blog.description}</p>

            {blog.sections.map((section) => (
              <section key={section.id} className="content-section">
                <h2 className="section-title">
                  {section.section_title}
                </h2>
                <p className="section-text">
                  {section.section_body}
                </p>
              </section>
            ))}
          </div>
        </article>
      </div>

      {/* ===== BACK TO BLOG ===== */}
      <div style={{ padding: "40px", textAlign: "center" }}>
        <Link to="/blog">← Back to Blogs</Link>
      </div>
    </>
  );
};

export default BlogDetails;
