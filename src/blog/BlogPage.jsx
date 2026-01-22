import React, { useEffect, useState } from "react";
import "./blog.css";
import { Link } from "react-router-dom";
import api, { IMG_BASE_URL } from "../utils/api";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/blog/list.php")
      .then((res) => {
        if (res.data.ok) {
          setBlogs(res.data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("Blog API error", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="about-banner">
        <h1 className="about-title">BLOG</h1>
      </div>

      <section className="blog-section">
        <div className="blog-container">
          <div className="blog-row">

            {loading && <p>Loading...</p>}

            {!loading &&
              blogs.map((blog) => (
                <Link
                  to={`/blog/${blog.id}`}
                  className="blog-link"
                  key={blog.id}
                >
                  <div className="blog-card">

                    <div className="blog-image">
                      <img
                        src={`${IMG_BASE_URL}${blog.image}`}
                        alt={blog.title}
                      />
                    </div>

                    <div className="blog-meta">
                      <span>
                        {new Date(blog.created_at).toDateString()}
                      </span>
                      <span>•</span>
                      <span>Blog</span>
                      <span>•</span>
                      <span>3 min read</span>
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
