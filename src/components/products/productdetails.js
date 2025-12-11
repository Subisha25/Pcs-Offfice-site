// productdetails.js
import React from "react";
import "../products/productdetails.css";

const Feature = ({ icon, title, desc }) => (
  <div className="pd-feature">
    <div className="pd-feature-icon" dangerouslySetInnerHTML={{ __html: icon }} />
    <div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  </div>
);

export default function ProductDetails({
  product = {
    title: "Doctors Appointment Booking Website",
    subtitle: "Modern platform to schedule doctor appointments seamlessly.",
    short: "An online appointment booking system that simplifies scheduling, improves hospital efficiency and enhances patient convenience.",
    tech: ["React", "Node.js", "MongoDB", "MySQL", "HTML", "CSS"],
    features: [
      { title: "Online Booking", desc: "Patients can book appointments 24/7.", icon: "<svg width=20 height=20 viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 2L12 12\" stroke=\"currentColor\" stroke-width=2 stroke-linecap=round stroke-linejoin=round/><path d=\"M4 22H20\" stroke=\"currentColor\" stroke-width=2 stroke-linecap=round stroke-linejoin=round/></svg>" },
      { title: "Doctor Calendar", desc: "See availability & slots in real-time.", icon: "<svg width=20 height=20 viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" stroke=\"currentColor\" stroke-width=2/><path d=\"M16 2V6M8 2V6\" stroke=\"currentColor\" stroke-width=2 stroke-linecap=round stroke-linejoin=round/></svg>" },
      { title: "Notifications", desc: "Email & SMS reminders for patients.", icon: "<svg width=20 height=20 viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15 17H9\" stroke=\"currentColor\" stroke-width=2 stroke-linecap=round stroke-linejoin=round/><path d=\"M12 3V6\" stroke=\"currentColor\" stroke-width=2 stroke-linecap=round stroke-linejoin=round/></svg>" },
      { title: "Admin Dashboard", desc: "Manage bookings, doctors & reports.", icon: "<svg width=20 height=20 viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3 7H21\" stroke=\"currentColor\" stroke-width=2 stroke-linecap=round stroke-linejoin=round/><path d=\"M12 11V21\" stroke=\"currentColor\" stroke-width=2 stroke-linecap=round stroke-linejoin=round/></svg>" }
    ],
    gallery: [
      "/images/mock-1.png",
      "/images/mock-2.png",
      "/images/mock-3.png"
    ],
  },
}) {
  return (
    <div className="pd-page">
      <div className="pd-container">
        {/* HERO */}
        <section className="pd-hero">
          <div className="pd-hero-media">
            <div className="pd-hero-card">
              {/* replace image src with real screenshots */}
              <img src={product.gallery[0]} alt="product hero" onError={(e)=>{e.target.style.opacity=0.04}}/>
            </div>
          </div>

          <div className="pd-hero-content">
            <h1 className="pd-title">{product.title}</h1>
            <p className="pd-sub">{product.subtitle}</p>
            <p className="pd-short">{product.short}</p>

            <div className="pd-actions">
              <button className="btn-primary">Request Demo</button>
              <button className="btn-outline">Talk to Sales</button>
            </div>

            <div className="pd-tech">
              {product.tech.map((t) => (
                <span key={t} className="pd-badge">{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES & GALLERY */}
        <section className="pd-section">
          <div className="pd-grid">
            <div>
              <h3 className="pd-section-title">Key Features</h3>
              <div className="pd-features">
                {product.features.map((f) => (
                  <Feature key={f.title} {...f} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="pd-section-title">Screenshots</h3>
              <div className="pd-gallery">
                {product.gallery.map((g, i) => (
                  <div className="pd-thumb" key={i}>
                    <img src={g} alt={`shot-${i}`} onError={(e)=>{e.target.style.opacity=0.04}}/>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS, PRICING, FAQ */}
        <section className="pd-section">
          <div className="pd-3cols">
            <div className="pd-card">
              <h4>Business Benefits</h4>
              <ul className="pd-list">
                <li>Reduce manual scheduling work</li>
                <li>Increase patient satisfaction</li>
                <li>Real-time availability & less no-shows</li>
                <li>Configurable & extendable</li>
              </ul>
            </div>

            <div className="pd-card">
              <h4>Pricing</h4>
              <div className="pd-pricing">
                <div className="pd-price">
                  <strong>Basic</strong>
                  <span>Contact for pricing</span>
                </div>
                <div className="pd-price">
                  <strong>Pro</strong>
                  <span>Contact for pricing</span>
                </div>
                <div className="pd-price">
                  <strong>Enterprise</strong>
                  <span>Custom</span>
                </div>
              </div>
            </div>

            <div className="pd-card">
              <h4>FAQ</h4>
              <details>
                <summary>Is the product customizable?</summary>
                <p>Yes — we customize workflows, branding and integrations.</p>
              </details>

              <details>
                <summary>Do you offer maintenance?</summary>
                <p>We offer SLA-based support and yearly maintenance plans.</p>
              </details>

              <details>
                <summary>Can I integrate payments?</summary>
                <p>Yes — supports major payment gateways and offline billing.</p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA FOOTER */}
        <section className="pd-cta">
          <div>
            <h3>Want to see it live?</h3>
            <p>Book a demo with our team — we’ll do a 15-minute walkthrough tailored to your needs.</p>
          </div>
          <div className="pd-cta-actions">
            <button className="btn-primary large">Schedule Demo</button>
            <button className="btn-outline">Contact Us</button>
          </div>
        </section>
      </div>
    </div>
  );
}


