// // productdetails.js
// import React, { useState } from "react";
// import "../products/productdetails.css";

// const Feature = ({ icon, title, desc }) => (
//   <div className="pd-feature">
//     <div
//       className="pd-feature-icon"
//       dangerouslySetInnerHTML={{ __html: icon }}
//     />
//     <div>
//       <h4>{title}</h4>
//       <p>{desc}</p>
//     </div>
//   </div>
// );

// export default function ProductDetails({
//   product = {
//     title: "Doctors Appointment Booking Website",
//     subtitle: "Modern platform to schedule doctor appointments seamlessly.",
//     short:
//       "An online appointment booking system that simplifies scheduling, improves hospital efficiency and enhances patient convenience.",
//     tech: ["React", "Node.js", "MongoDB", "MySQL", "HTML", "CSS"],
//     features: [
//       {
//         title: "Online Booking",
//         desc: "Patients can book appointments 24/7.",
//         icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 22H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
//       },
//       {
//         title: "Doctor Calendar",
//         desc: "See availability & slots in real-time.",
//         icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/><path d="M16 2V6M8 2V6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
//       },
//       {
//         title: "Notifications",
//         desc: "Email & SMS reminders for patients.",
//         icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 17H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 3V6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
//       },
//       {
//         title: "Admin Dashboard",
//         desc: "Manage bookings, doctors & reports.",
//         icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 11V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
//       },
//     ],
//     gallery: ["/images/mock-1.png", "/images/mock-2.png", "/images/mock-3.png"],
//   },
// }) {
//   const [activeShot, setActiveShot] = useState(0);

//   const faqs = [
//     {
//       q: "Is the product customizable?",
//       a: "Yes — we customize workflows, branding, patient forms and integrations based on your hospital or clinic’s process.",
//     },
//     {
//       q: "Do you offer maintenance & support?",
//       a: "We offer SLA-based support, bug fixes, enhancements and yearly maintenance plans.",
//     },
//     {
//       q: "Can I integrate online payments?",
//       a: "Yes — we support major payment gateways and can also work with your existing billing system.",
//     },
//   ];

//   const hasGallery = product.gallery && product.gallery.length > 0;

//   const handlePrev = () => {
//     setActiveShot((prev) =>
//       prev === 0 ? product.gallery.length - 1 : prev - 1
//     );
//   };

//   const handleNext = () => {
//     setActiveShot((prev) =>
//       prev === product.gallery.length - 1 ? 0 : prev + 1
//     );
//   };

//   return (
//     <div className="pd-page">
//       <div className="pd-container">
//         {/* HERO */}
//         <section className="pd-hero">
        

//           <div className="pd-hero-content">
//             <h1 className="pd-title">{product.title}</h1>

//             <p className="pd-short">{product.short}</p>

//             {product.subtitle && (
//               <p className="pd-sub">{product.subtitle}</p>
//             )}

//             <div className="pd-tech">
//               {product.tech.map((t) => (
//                 <span key={t} className="pd-badge">
//                   {t}
//                 </span>
//               ))}
//             </div>

//             <div className="pd-actions">
//               <button className="btn-primary">Request Demo</button>
//             </div>
//           </div>
//         </section>

//         {/* SCREENSHOT CAROUSEL */}
//         {hasGallery && (
//           <section className="pd-section pd-screens">
//             <div className="pd-section-header">
//               <h3 className="pd-section-title">Screenshots</h3>
//               <p className="pd-section-subtitle">
//                 Preview how patients, doctors and admins experience the platform
//                 across different screens.
//               </p>
//             </div>

//             <div className="pd-carousel">
//               <button
//                 className="pd-carousel-arrow"
//                 onClick={handlePrev}
//                 aria-label="Previous screenshot"
//               >
//                 ‹
//               </button>

//               <div className="pd-carousel-main">
//                 <img
//                   src={product.gallery[activeShot]}
//                   alt={`Screenshot ${activeShot + 1}`}
//                   onError={(e) => {
//                     e.target.style.opacity = 0.04;
//                   }}
//                 />
//               </div>

//               <button
//                 className="pd-carousel-arrow"
//                 onClick={handleNext}
//                 aria-label="Next screenshot"
//               >
//                 ›
//               </button>
//             </div>

//             <div className="pd-carousel-dots">
//               {product.gallery.map((_, idx) => (
//                 <button
//                   key={idx}
//                   className={`pd-dot ${idx === activeShot ? "active" : ""}`}
//                   onClick={() => setActiveShot(idx)}
//                   aria-label={`Go to screenshot ${idx + 1}`}
//                 />
//               ))}
//             </div>
//           </section>
//         )}

//         {/* KEY FEATURES + BENEFITS */}
//         <section className="pd-section pd-kb">
//           <div className="pd-kb-grid">
//             <div className="pd-kb-block">
//               <h3 className="pd-section-title">Key Features</h3>
//               <p className="pd-kb-sub">
//                 Everything you need to manage appointments end-to-end.
//               </p>

//               <div className="pd-feature-list">
//                 {product.features.map((f) => (
//                   <Feature key={f.title} {...f} />
//                 ))}
//               </div>
//             </div>

//             <div className="pd-kb-block">
//               <h3 className="pd-section-title">Business Benefits</h3>
//               <p className="pd-kb-sub">
//                 Designed for hospitals, clinics and diagnostic centers.
//               </p>

//               <ul className="pd-benefit-list">
//                 <li>Reduce manual scheduling work at the front desk.</li>
//                 <li>Increase patient satisfaction and repeat visits.</li>
//                 <li>Real-time availability, fewer clashes and no-shows.</li>
//                 <li>Audit trails for every booking, reschedule and cancel.</li>
//                 <li>
//                   Configurable flows for in-person, tele-consult and follow-ups.
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* FAQ */}
//         <section className="pd-section pd-faq">
//           <h3 className="pd-section-title">FAQ</h3>
//           <div className="pd-faq-list">
//             {faqs.map((item, idx) => (
//               <details className="pd-faq-item" key={idx}>
//                 <summary>{item.q}</summary>
//                 <p>{item.a}</p>
//               </details>
//             ))}
//           </div>
//         </section>

//         {/* CTA FOOTER */}
//         <section className="pd-cta">
//           <div>
//             <h3>Want to see it live?</h3>
//             <p>
//               Book a demo with our team — we’ll do a 15-minute walkthrough
//               tailored to your hospital or clinic.
//             </p>
//           </div>
//           <div className="pd-cta-actions">
//             <button className="btn-primary large">Schedule Demo</button>
//             <button className="btn-outline">Contact Us</button>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// src/products/ProductDetails.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../products/productdetails.css";
import productsData from "../products/productsData";
import CommonButton from "../common/button";

export default function ProductDetails() {
  const { id } = useParams();
  const productId = Number(id);

  // find product by id, fallback to first if not found
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

  return (
    <div className="pd-page">
      <div className="pd-container">
        {/* HERO */}
        <section className="pd-hero">
          <div className="pd-hero-content">
            <h1 className="pd-title">{product.title}</h1>

            {/* short description */}
            <p className="pd-short">{product.description}</p>

            {/* overview as sub text */}
            {product.overview && (
              <p className="pd-sub">{product.overview}</p>
            )}

            {/* tech stack */}
            <div className="pd-tech">
              {product.technology_stack?.map((t) => (
                <span key={t} className="pd-badge">
                  {t}
                </span>
              ))}
            </div>

            <div className="pd-actions">
                <CommonButton />
              {/* <button className="btn-primary">Request Demo</button> */}
            </div>
          </div>
        </section>

        {/* SCREENSHOT CAROUSEL */}
        {hasScreens && (
          <section className="pd-section pd-screens">
            <div className="pd-section-header">
              <h3 className="pd-section-title">Screenshots</h3>
              <p className="pd-section-subtitle">
                Preview how users experience this product across different
                screens.
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

              <div className="pd-carousel-main">
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
                  className={`pd-dot ${
                    idx === activeShot ? "active" : ""
                  }`}
                  onClick={() => setActiveShot(idx)}
                  aria-label={`Go to screenshot ${idx + 1}`}
                />
              ))}
            </div>
          </section>
        )}

        {/* KEY FEATURES + BENEFITS */}
        <section className="pd-section pd-kb">
          <div className="pd-kb-grid">
            {/* Key Features */}
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

            {/* Business Benefits */}
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
          </div>
        </section>

        {/* FAQ */}
        <section className="pd-section pd-faq">
          <h3 className="pd-section-title">FAQ</h3>
          <div className="pd-faq-list">
            {product.faq?.map((item, idx) => (
              <details className="pd-faq-item" key={idx}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA FOOTER */}
        <section className="pd-cta">
          <div>
            <h3>Want to see it live?</h3>
            <p>
              Book a demo with our team — we’ll do a 15-minute walkthrough
              tailored to your needs.
            </p>
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
