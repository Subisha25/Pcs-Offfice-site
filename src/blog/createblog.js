import React, { useEffect, useState } from "react";
import api, { IMG_BASE_URL } from "../utils/api";
import "./createblog.css";

const CreateBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [editId, setEditId] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [sections, setSections] = useState([
    { section_title: "", section_body: "" },
  ]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* ================= FETCH BLOG LIST ================= */
  const fetchBlogs = () => {
    api.get("/blog/list.php").then((res) => {
      if (res.data.ok) setBlogs(res.data.data);
    });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  /* ================= FORM HELPERS ================= */
  const resetForm = () => {
    setEditId(null);
    setTitle("");
    setDescription("");
    setImage(null);
    setSections([{ section_title: "", section_body: "" }]);
    setError("");
  };

  const addSection = () => {
    setSections([...sections, { section_title: "", section_body: "" }]);
  };

  const removeSection = (index) => {
    const updated = [...sections];
    updated.splice(index, 1);
    setSections(updated);
  };

  const handleSectionChange = (i, field, value) => {
    const updated = [...sections];
    updated[i][field] = value;
    setSections(updated);
  };

  /* ================= CREATE / UPDATE ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // 1. Prepare the payload object to match PHP logic
    const payloadObject = {
      title: title,
      description: description,
      sections: sections,
    };

    // 2. Use FormData to handle both File and JSON payload
    const formData = new FormData();
    formData.append("payload", JSON.stringify(payloadObject)); // This matches PHP's $_POST['payload']
    
    if (image) {
      formData.append("image", image);
    }

    try {
      setLoading(true);

      const url = editId
        ? `/blog/update.php?id=${editId}`
        : "/blog/create.php";

      const res = await api.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.ok) {
        alert(editId ? "Blog updated ✅" : "Blog created ✅");
        resetForm();
        fetchBlogs();
      } else {
        setError(res.data.message || "Operation failed");
      }
    } catch (err) {
      console.error(err);
      setError("Server error occurred while saving.");
    } finally {
      setLoading(false);
    }
  };

  /* ================= EDIT ================= */
  const handleEdit = async (id) => {
    try {
      const res = await api.get(`/blog/get_one.php?id=${id}`);
      if (res.data.ok) {
        const b = res.data.data;
        setEditId(id);
        setTitle(b.title || "");
        setDescription(b.description || "");
        // If the blog has no sections, set a default empty section
        setSections(b.sections && b.sections.length > 0 ? b.sections : [{ section_title: "", section_body: "" }]);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (err) {
      alert("Error fetching blog details");
    }
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this blog permanently?")) return;
    try {
      const res = await api.get(`/blog/delete.php?id=${id}`);
      if (res.data.ok) {
        fetchBlogs();
      }
    } catch (err) {
      alert("Delete failed");
    }
  };

  return (
    <>
      <div className="about-banner">
        <h1 className="about-title">
          {editId ? "EDIT BLOG" : "CREATE BLOG"}
        </h1>
      </div>

      <section className="blog-section">
        <div className="blog-container">
          <form className="blog-form" onSubmit={handleSubmit}>
            {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}

            <div className="form-group">
              <label>Blog Title</label>
              <input 
                required
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Image {editId && "(Leave empty to keep existing)"}</label>
              <input type="file" onChange={(e) => setImage(e.target.files[0])} />
            </div>

            <hr />
            <h3>Sections</h3>

            {sections.map((s, i) => (
              <div key={i} style={{ border: "1px solid #ddd", padding: 15, borderRadius: 6, marginBottom: 15 }}>
                <div className="section-inner">
                  <input
                    placeholder="Section title"
                    value={s.section_title}
                    style={{ marginBottom: 10, width: '100%' }}
                    onChange={(e) => handleSectionChange(i, "section_title", e.target.value)}
                  />
                  <textarea
                    placeholder="Section body"
                    rows="3"
                    style={{ width: '100%' }}
                    value={s.section_body}
                    onChange={(e) => handleSectionChange(i, "section_body", e.target.value)}
                  />
                </div>

                {sections.length > 1 && (
                  <button 
                    type="button" 
                    onClick={() => removeSection(i)}
                    style={{ background: "#ff4d4d", color: "#fff", marginTop: 10, border: "none", padding: "5px 10px", borderRadius: 4, cursor: "pointer" }}
                  >
                    Remove Section
                  </button>
                )}
              </div>
            ))}

            <div style={{ display: "flex", gap: "10px", marginTop: 20 }}>
              <button type="button" onClick={addSection} style={{ flex: 1 }}>
                + Add Section
              </button>

              <button type="submit" disabled={loading} style={{ flex: 2, background: "#101166", color: "#fff" }}>
                {loading ? "Saving..." : editId ? "Update Blog" : "Create Blog"}
              </button>
              
              {editId && (
                <button type="button" onClick={resetForm} style={{ flex: 1, background: "#ccc" }}>
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* ===== BLOG LIST ===== */}
      <section className="blog-section">
        <div className="blog-container">
          <div className="blog-row" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {blogs.map((b) => (
              <div className="blog-card" key={b.id} style={{ border: "1px solid #eee", padding: "10px", width: "300px" }}>
                <div className="blog-image">
                  <img 
                    src={`${IMG_BASE_URL}${b.image}`} 
                    alt="" 
                    style={{ width: "100%", height: "150px", objectFit: "cover" }} 
                  />
                </div>

                <div className="blog-meta">
                  <small>{new Date(b.created_at).toDateString()}</small>
                </div>

                <h3 className="blog-title" style={{ fontSize: "1.1rem", margin: "10px 0" }}>{b.title}</h3>

                <div style={{ display: "flex", gap: "14px", marginTop: "auto" }}>
                  <button onClick={() => handleEdit(b.id)} style={{ background: "none", border: "none", cursor: "pointer" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25Z" fill="#101166"/>
                      <path d="M20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82Z" fill="#101166"/>
                    </svg>
                  </button>

                  <button onClick={() => handleDelete(b.id)} style={{ background: "none", border: "none", cursor: "pointer" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M6 7h12M9 7V5h6v2M10 11v6M14 11v6M5 7l1 14h12l1-14" stroke="#b00020" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateBlog;