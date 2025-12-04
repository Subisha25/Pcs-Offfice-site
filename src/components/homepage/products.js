import React, { useState } from "react";
import "./products.css";
import tagicon from "../assets/Group 15.svg";
import arrow from "../assets/Vector.svg";
// Add images for each product
import billingImage from "../assets/Rectangle 47.png";
import lmsImage from "../assets/lms.jpg";
import ecommerceImage from "../assets/ecommerce.jpg";
import tailoringImage from "../assets/tailoring.jpg";
import FeedbackSection from "./feedback.js";

const products = [
  { name: "Billing Software", image: billingImage, link: "/billing" },
  { name: "LMS", image: lmsImage, link: "/lms" },
  { name: "E commerce", image: ecommerceImage, link: "/ecommerce" },
  { name: "Tailoring", image: tailoringImage, link: "/tailoring" },
];

const Products = () => {
  const [activeProduct, setActiveProduct] = useState(products[0]);

  return (
    <>
    <div className="products-section">

      {/* TOP CENTER SECTION */}
      <div className="top-center">
        <div className="tag">
          <div className="tag-icon">
            <img src={tagicon} alt="icon" className="boxicon" />
          </div>
          Our Products
        </div>

        <h2 className="title">
          Proud wins from <span>passion</span> <br /> products
        </h2>
      </div>

      {/* LEFT IMAGE & RIGHT LIST */}
      <div className="content-wrapper">
        <div className="left-image">
          <img src={activeProduct.image} alt={activeProduct.name} />
        </div>

        <div className="right-list">
      <div className="products-list">
  {products.map((item, index) => (
    <div className="product-row" key={index}>
      
      {/* Click name to change image */}
      <p
        style={{ cursor: "pointer" }}
        onClick={() => setActiveProduct(item)}
      >
        {item.name}
      </p>

      <div className="view-container">
        
        {/* Arrow ONLY for active product */}
        {activeProduct.name === item.name && (
          <span className="arrow"> <img src={arrow} alt="arrow"/></span>
        )}
        {/* View always visible */}
        <a href={item.link} className="view-link">
          View
        </a>

      </div>

    </div>
  ))}
</div>

        </div>
      </div>
    </div>
 <FeedbackSection/>
    </>
  );
};

export default Products;
