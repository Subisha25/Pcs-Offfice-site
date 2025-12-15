import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../products/productdetails.css";
import productsData from "../products/productsData";
import CommonButton from "../common/button";
import { useEffect } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const productId = Number(id);
  const navigate = useNavigate();

  const product =
    productsData.find((p) => p.id === productId) || productsData[0];

  const [activeShot, setActiveShot] = useState(0);

  const hasScreens =
    product.screenshots && product.screenshots.length > 0;

  const handlePrev = () => {
    setActiveShot((prev) =>
      prev === 0 ? product.screenshots.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveShot((prev) =>
      prev === product.screenshots.length - 1 ? 0 : prev + 1
    );
  };

useEffect(() => {
  if (!hasScreens) return;

  const intervalId = setInterval(() => {
    setActiveShot((prev) =>
      prev === product.screenshots.length - 1 ? 0 : prev + 1
    );
  }, 3500);

  return () => clearInterval(intervalId);
}, [hasScreens, product.screenshots.length]);


  return (
    <div className="pd-page">
      <div className="pd-container">
        {/* HERO */}
        <section className="pd-hero">
          <div className="pd-hero-content">
            <h1 className="pd-title">{product.title}</h1>
            <p className="pd-short">{product.description}</p>
            {product.overview && (
              <p className="pd-sub">{product.overview}</p>
            )}
            <div className="pd-tech">
              {product.technology_stack?.map((t) => (
                <span key={t} className="pd-badge">
                  {t}
                </span>
              ))}
            </div>
            <div className="pd-actions">
              <CommonButton onClick={() => navigate("/contact")} />
            </div>
          </div>
        </section>

        {/* SCREENSHOTS (LEFT) + BENEFITS (RIGHT) */}
        <section className="pd-section pd-screenshots-benefits-grid">
          {/* Left: Screenshots */}
          {hasScreens && (
            <div className="pd-screenshots-container">
              <div className="pd-section-header">
                {/* <h3 className="pd-section-title">Screenshots</h3> */}
                <p className="pd-section-subtitle">
                  Preview how users experience this product across different screens.
                </p>
              </div>

              <div className="pd-carousel">
                <button
                  className="pd-carousel-arrow"
                  onClick={handlePrev}
                  aria-label="Previous screenshot"
                >
                  ‹
                </button>

               <div
  className="pd-carousel-main"
 
>
  <img
    src={product.screenshots[activeShot]}
    alt={`Screenshot ${activeShot + 1}`}
    onError={(e) => {
      e.target.style.opacity = 0.04;
    }}
  />
</div>


                <button
                  className="pd-carousel-arrow"
                  onClick={handleNext}
                  aria-label="Next screenshot"
                >
                  ›
                </button>
              </div>

              <div className="pd-carousel-dots">
                {product.screenshots.map((_, idx) => (
                  <button
                    key={idx}
                    className={`pd-dot ${idx === activeShot ? "active" : ""}`}
                    onClick={() => setActiveShot(idx)}
                    aria-label={`Go to screenshot ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Right: Business Benefits */}
          <div className="pd-kb-block">
            <h3 className="pd-section-title">Business Benefits</h3>
            <p className="pd-kb-sub">
              Designed to be adopted by real-world businesses.
            </p>
            <ul className="pd-benefit-list">
              {product.benefits?.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* KEY FEATURES - Separate Row */}
        <section className="pd-section">
          <div className="pd-kb-block">
            <h3 className="pd-section-title">Key Features</h3>
            <p className="pd-kb-sub">
              Everything you need to run this solution end-to-end.
            </p>
            <div className="pd-feature-list">
              {product.key_features?.map((f, idx) => (
                <div className="pd-feature" key={idx}>
                  <div className="pd-feature-icon">
                    <span>✓</span>
                  </div>
                  <div>
                    <p>{f}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ - Separate Row */}
        <section className="pd-section">
          <div className="pd-kb-block">
            <h3 className="pd-section-title">FAQ</h3>
            <div className="pd-faq-list">
              {product.faq?.map((item, idx) => (
                <details className="pd-faq-item" key={idx}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}