
import React from "react";
import { useNavigate } from "react-router-dom";
import "../products/products.css";
import CommonButton from "../common/button";
import productsData from "../products/productsData";

const Products = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/productdetails/${id}`);
  };

  return (
    <div className="product-page">
      <div className="product-page-container">
<div className="product-page-heading">
  <p className="product-main-heading">
    {/* We build scalable websites, mobile apps, and custom software solutions */}Scalable web & app solutions
  </p>
</div>

        {productsData.map((product) => (
          <div key={product.id} className="product-page-card">
            <div className="product-page-image">
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
  {product.technology_stack?.map((icon, index) => (
    <div key={index} className="product-page-tech-icon">
      <img src={icon} alt="tech-icon"/>
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
