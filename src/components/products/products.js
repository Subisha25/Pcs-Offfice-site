// import React from 'react';
// import '../products/products.css';
// import CommonButton from '../common/button';

// const Products = () => {
//   const products = [
//     {
//       id: 1,
//       image: "https://pcstech.in/static/media/doctorappoiunment.42f3868518930b704e33.jpeg",
//       tag: "Featured",
//       title: "Doctors Appointment Booking Website",
//       description: "Easily book doctor appointments online. Simplifies scheduling and enhances patient convenience.",
//       technologies: ["React", "Material UI", "NodeJs", "MySql"]
//     },
//     {
//       id: 2,
//       image: "https://pcstech.in/static/media/e%20commerce.f3223133494f1275b6b2.png",
//       tag: "E-Commerce Store",
//       title: "E-Commerce Store",
//       description: "A shopping platform with product filters, cart system, and checkout.",
//       technologies: ["React", "Tailwind CSS", "Node.js", "MySql"]
//     },
//     {
//       id: 3,
//       image: "https://pcstech.in/static/media/kyc.c51f92619c2c73661f51.jpeg",
//       tag: "Popular",
//       title: "KYC",
//       description: "A secure and automated system to verify customer identity and ensure compliance with regulatory standards.",
//       technologies: ["React", "NodeJs", "MongoDB"]
//     },
//     //    {
//     //   id: 3,
//     //   image: "https://pcstech.in/static/media/kyc.c51f92619c2c73661f51.jpeg",
//     //   tag: "Popular",
//     //   title: "KYC",
//     //   description: "A secure and automated system to verify customer identity and ensure compliance with regulatory standards.",
//     //   technologies: ["React", "NodeJs", "MongoDB"]
//     // },
//        {
//       id: 4,
//       image: "https://pcstech.in/static/media/billingsoftware.cc4322fa1321295489fe.png",
//       tag: "Popular",
//       title: "Billing Software",
//       description: "Smart and efficient billing system to manage invoices, payments, and reports.",
//       technologies: ["HTML", "CSS", "Bootstrap", "PHP","MySql"]
//     },
//        {
//       id: 5,
//       image: "https://pcstech.in/static/media/car.6613c3edb0420ec8c8cf.jpeg",
//       tag: "Popular",
//       title: "Car Rendal App",
//       description: "A smart car rental solution offering hassle-free booking, flexible options, and doorstep delivery.",
//       technologies: ["Flutter", "NodeJs", "MongoDB"]
//     },
//        {
//       id: 6,
//       image: "https://pcstech.in/static/media/gas1.38d2d0a543811cc66b76.avif",
//       tag: "Popular",
//       title: "Gas Booking App",
//       description: "Easily book and track your gas cylinder anytime, anywhere with just a tap.",
//       technologies: ["React Native",  "MongoDB"]
//     },
//        {
//       id: 7,
//       image: "https://pcstech.in/static/media/lms.548ffa03fce871973cb6.jpeg",
//       tag: "Popular",
//       title: "LMS",
//       description: "This Learning Management System allows students to conveniently enroll in courses and learn online.",
//       technologies: ["React","Tailwind CSS", "NodeJs", "MySql"]
//     },
//        {
//       id: 8,
//       image: "https://pcstech.in/static/media/food.f7dd0d573a52bdd1fff5.png",
//       tag: "Popular",
//       title: "Food Delivery Website",
//       description: "Delicious meals delivered hot and fast to your doorstep.",
//       technologies: ["React","Tailwind CSS", "NodeJs", "MySql"]
//     },
//        {
//       id: 9,
//       image: "https://pcstech.in/static/media/beauty.aa895d02eae408f3eaf4.png",
//       tag: "Popular",
//       title: "Beautician Booking Portal",
//       description: "A simple platform to book beauty services with your preferred beauticians anytime, anywhere.",
//       technologies: ["React","CSS", "NodeJs", "MySql"]
//     },
//        {
//       id: 10,
//       image: "https://pcstech.in/static/media/tailor.9b4c21d9eff7225c47ae.webp",
//       tag: "Popular",
//       title: "Tailoring Mobile App",
//       description: "Your personal tailor in your pocket – stitch, style, and track orders effortlessly.",
//       technologies: ["ReactNative", "PHP", "MySql"]
//     },
//   ];

//   return (
//     <div className='product-page'>
//     <div className="product-page-container">
//       {products.map((product) => (
//         <div key={product.id} className="product-page-card">
//           <div className="product-page-image">
//             <img src={product.image} alt={product.title} />
//           </div>

//           <div className="product-page-content">
//             {/* <span className="product-page-tag">{product.tag}</span> */}

//             <h2 className="product-page-title">{product.title}</h2>

//             <p className="product-page-description">{product.description}</p>
// <CommonButton text='Learn More' />
//             {/* <button className="product-page-learn-btn">Learn More</button> */}

//             <div className="product-page-tech-stack">
//               {product.technologies.map((tech, index) => (
//                 <span key={index} className="product-page-tech-badge">{tech}</span>
//               ))}
//             </div>

//           </div>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default Products;

// src/products/Products.js
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
      <img src={icon} alt="tech-icon" />
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
