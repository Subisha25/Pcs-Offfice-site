import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./blogdetailsh.css";
import "./blog.css";
import api, { IMG_BASE_URL } from "../utils/api";

const BlogDetails = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Fetch single blog
    api
      .get(`/blog/get_one.php?id=${id}`)
      .then((res) => {
        if (res.data.ok) {
          setBlog(res.data.data);
        } else {
          setBlog(null);
        }
      })
      .catch((err) => {
        console.log("Blog detail error", err);
        setBlog(null);
      })
      .finally(() => setLoading(false));

    // Fetch suggested blogs
    api.get("/blog/list.php").then((res) => {
      if (res.data.ok) {
        setBlogs(res.data.data);
      }
    });
  }, [id]);

  if (loading) {
    return <p style={{ padding: "40px" }}>Loading...</p>;
  }

  if (!blog) {
    return <h2 style={{ padding: "40px" }}>Blog not found</h2>;
  }

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

            {blog.sections?.map((section) => (
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

      {/* ===== SUGGESTED BLOGS ===== */}
      <section className="blog-section">
        <div className="blog-container">
<h2 className="suggested-title">Suggested Blogs</h2>

          <div className="blog-row">
            {blogs
              .filter((b) => b.id !== blog.id)
              .slice(0, 3)
              .map((b) => (
                <Link
                  to={`/blog/${b.id}`}
                  className="blog-link"
                  key={b.id}
                >
                  <div className="blog-card">
                    <div className="blog-image">
                      <img
                        src={`${IMG_BASE_URL}${b.image}`}
                        alt={b.title}
                      />
                    </div>

                    <div className="blog-meta">
                      <span>
                        {new Date(b.created_at).toDateString()}
                      </span>
                      <span>•</span>
                      <span>Blog</span>
                      <span>•</span>
                      <span>3 min read</span>
                    </div>

                    <h3 className="blog-title">{b.title}</h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
