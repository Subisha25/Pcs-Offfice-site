import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productsData from "../products/productsData";
import "./productdetails.css";
import featureIcon from "../../components/assets/teach/icon.png";
import benifit from "../../components/assets/teach/benifit.png";
const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));

  // 1. Hooks must be placed HERE (before any returns)
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    if (product?.screenshots?.length > 1) {
      const interval = setInterval(() => {
        setCurrentImgIndex((prev) => (prev + 1) % product.screenshots.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [product]);

  // 2. Check if product exists AFTER the hooks
  if (!product) {
    return <div style={{ textAlign: "center", padding: "80px" }}>Product Not Found</div>;
  }

  return (
    <div className="product-page">
      {/* ===== HERO SECTION ===== */}
      <section className="container hero">
        <div>
          <img src={product.image} alt={product.title} />
        </div>

        <div className="hero-content">
          <h1>
            {product.title} <span>store</span>
          </h1>
          <p className="desc">{product.description}</p>
          <p className="overview">{product.overview}</p>

          <div className="tech">
            {product.technology_stack.map((tech, index) => (
              <div key={index} className="tech-item">
                <img src={tech.icon} alt={tech.name} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION WITH SLIDER ===== */}
      <section className="features">
        <div className="container hero">
          <div className="features-text-content">
            <h2 className="main-heading">Key Features</h2>
            <p className="sub-title">Everything you need to run this solution end-to-end.</p>

       <div className="feature-list-wrapper">
  {product.key_features.map((feature, index) => (
    <div key={index} className="feature-item">
      <div className="feature-icon-container">
        {/* Your icon image will now show without any background circle */}
        <img src={featureIcon} alt="icon" />
      </div>
      <p className="feature-list-text">{feature.text || feature}</p>
    </div>
  ))}
</div>
          </div>

          <div className="feature-image">
            <div className="slider-container">
  <img
    key={currentImgIndex}
    src={product.screenshots[currentImgIndex]}
    alt="screenshot"
    className="fade-in" 
  />
</div>
          </div>
        </div>
      </section>

     {/* ===== BUSINESS BENEFITS ===== */}
<section className="benefits">

   <h2 className="benifit-main-heading">Business Benefits</h2>
            <p className="benifit-sub-title">Designed to be adopted by real-world businesses.</p>
 

  <div className="container benefit-grid">
    {product.benefits.map((benefit, index) => (
      <div key={index} className="product-benefit-card">
        {/* Use the actual image icon here */}
        <div className="benefit-icon-wrapper">
          <img src={benifit} alt="benefit icon" className="benefit-img-icon" />
        </div>
        <p className="benefit-text">{benefit}</p>
      </div>
    ))}
  </div>
</section>
    </div>
  );
};

export default ProductDetails;