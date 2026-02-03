import React, { useState, useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";
import "../products/products.css";
import CommonButton from "../common/button";
import productsData from "../products/productsData";

const Products = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/productdetails/${id}`);
  };

  const sectionRef = useRef(null);

  const [filledWords, setFilledWords] = useState(0);
  const paragraph = [
    "Scalable web & app solutions"
  ].join(" ").split(" ");
  const maxWords = paragraph.length;
  const lastScrollY = useRef(window.scrollY);
  useEffect(() => {
    function onScroll() {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const centerY = viewportH / 2;

      const currentScroll = window.scrollY;
      const scrollingDown = currentScroll > lastScrollY.current;
      const scrollingUp = currentScroll < lastScrollY.current;
      lastScrollY.current = currentScroll;

      const distanceFromCenter = centerY - rect.top;
      const fillWindow = viewportH * 0.35;

      let progress = distanceFromCenter / fillWindow;
      progress = Math.max(0, Math.min(1, progress));

      const targetWords = Math.floor(progress * maxWords);

      if (scrollingDown && targetWords > filledWords) {
        setFilledWords(targetWords);
      }

      if (scrollingUp && targetWords < filledWords) {
        setFilledWords(targetWords);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [filledWords, maxWords]);

  return (
    <div className="product-page">
      <div className="product-page-container">

        <div className="product-page-heading">
          {/* heading section */}
          <div
            style={{
              marginTop: '-60px',
              position: 'relative',
              zIndex: '10'
            }}
          >

            <h1
              className="product-hero-heading"
              style={{
                fontFamily: "WF Visual Sans",
                fontSize: '54px',          // 🔼 MAIN SIZE (others)
                fontWeight: '500',
                color: '#1a1a2e',
                lineHeight: '64px',
                letterSpacing: '1%',
                maxWidth: '900px',
                margin: '0 auto',
                textAlign: 'center'
              }}
            >
              <span className="heading-normal">
                Scalable web & app{" "}
              </span>

              <span
                style={{
                  fontFamily: "Playfair Display",
                  fontWeight: '600',
                  fontStyle: 'italic',
                  fontSize: '56px',       // ❌ execution size SAME
                  background: 'linear-gradient(90deg, #03045E 0%, #FF006E 100%)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                solutions
              </span>


            </h1>


          </div>
        </div>
        {productsData.map((product) => (
          <div key={product.id} className="product-page-card" onClick={() => handleViewDetails(product.id)}>
            <div
              className="product-page-image"
              onClick={() => handleViewDetails(product.id)}
            >
              <img src={product.image} alt={product.title} />
            </div>

            <div className="product-page-content">
              <h2 className="product-page-title">{product.title}</h2>

              <p className="product-page-description">
                {product.description}
              </p>

              <CommonButton
                text="Learn More"
                onClick={() => handleViewDetails(product.id)}
              />

              <div className="product-page-tech-stack">
                {product.technology_stack?.map((tech, index) => (
                  <div key={index} className="product-page-tech-icon">
                    <img src={tech.icon} alt={tech.name} />
                    <p className="product-page-tech-name">{tech.name}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
