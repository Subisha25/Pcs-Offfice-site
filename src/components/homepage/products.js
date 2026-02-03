import React, { useState } from "react";
import "./products.css";
import tagicon from "../assets/Group 15.svg";
import arrow from "../assets/Vector.svg";
// Add images for each product
import billingImage from "../assets/Rectangle 47.webp";
import lmsImage from "../assets/lms.webp";
import ecommerceImage from "../assets/ecommerce.webp";
import tailoringImage from "../assets/tailoring.webp";
import FeedbackSection from "./feedback.js";
import CommonTopTag from "../common/toptag.js";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 4, name: "Billing Software", image: billingImage },
  { id: 7, name: "LMS", image: lmsImage },
  { id: 2, name: "E commerce", image: ecommerceImage },
  { id: 10, name: "Tailoring", image: tailoringImage },
];


const Products = () => {
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const navigate = useNavigate();

  return (
    <>
      <div className="products-section">

        {/* TOP CENTER SECTION */}
        <div className="top-centers">
          <CommonTopTag
            icon={tagicon}
            text={<span className="products-tag-text">Our Products</span>}
          />

          <h2 className="titles">
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
  <div
    className="product-row"
    key={index}
    onMouseEnter={() => setActiveProduct(item)}   // ✅ HERE
  >
    <p>{item.name}</p>

    <div className="view-container">
      {activeProduct.name === item.name && (
        <span className="arrows">
          <img src={arrow} alt="arrows" />
        </span>
      )}

      <span
        className="view-link"
        onClick={() => navigate(`/productdetails/${item.id}`)}
      >
        View
      </span>
    </div>
  </div>
))}

            </div>

          </div>
        </div>
      </div>
      <FeedbackSection />
    </>
  );
};

export default Products;
