// // import React from "react";
// // import "./servicebanner.css";
// // import Mockup from '../assets/servicebanner.png';
// // import Team from '../assets/service1.png';
// // import Result from '../assets/service2.png';
// // import Purpose from "./purpose";

// // export default function ServicesWebsite() {
// //   return (

// //     <>
// //     <div className="sw-container">

// //       {/* Top Heading */}
// //       <div className="sw-header">
// //         <p className="sw-small-title">Website Design & Development</p>
// //         <h1 className="sw-main-title">
// //           Launch a seamless,<br /> conversion-focused website
// //         </h1>
// //       </div>

// //       {/* Banner Image */}
// //       <div className="sw-banner">
// //         <img
// //           src={Mockup}
// //           alt="Website Mockup"
// //           className="sw-banner-img"
// //         />
// //       </div>

// //       {/* Description */}
// //       <p className="sw-description">
// //         We craft responsive, visually stunning websites tailored to your brand’s needs.From concept to deployment, our team ensures every website is optimized forperformance, usability, and conversions for a website—like the text content thatappears on a single service page in a CMS. Here’s a clean, professional exampleyou can use or adapt.
// //       </p>

// //       {/* What We Offer Section */}
// //       <div className="sw-offer-section">
// //         <div className="sw-offer-img-box">
// //           <img src={Team} alt="Team" className="sw-offer-img" />
// //         </div>

// //         <div className="sw-offer-content">
// //           <h2 className="sw-offer-title">What We Offer:</h2>

// //           <ul className="sw-offer-list">
// //             <li>Custom website design</li>
// //             <li>Mobile-friendly responsive layouts</li>
// //             <li>E-commerce and CMS integration</li>
// //             <li>SEO-optimized structure</li>
// //             <li>Ongoing maintenance and support</li>
// //           </ul>
// //         </div>
// //       </div>

// //       {/* Result Section */}
// //       <div className="sw-result">
// //          <ul className="sw-result-text">
// //             <h2 className="sw-result-title">Result:</h2>

// //             <li>We combine user research, wireframing,</li>
// //             <li>prototyping, and visual design to deliver</li>
// //             <li>solutions that not only look great but also</li>
// //             <li>solve real user problems.</li>
// //           </ul>
       

// //         <div className="sw-result-img-box">
// //           <img src={Result} alt="Results" className="sw-result-img" />
// //         </div>
// //       </div>
// //     </div>
// // <Purpose />
// //     </>
// //   );
// // }


// import React, { useEffect } from "react";
// import "./servicebanner.css";
// import Mockup from "../assets/servicebanner.png";
// import Team from "../assets/service1.png";
// import Result from "../assets/service2.png";
// import Purpose from "./purpose";

// export default function ServicesWebsite() {
//   useEffect(() => {
//     // ==== 1) Generic fade/slide/zoom for [data-animate] (both scroll down & up) ====
//     const animatedEls = document.querySelectorAll("[data-animate]");

//     const scrollIO = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("is-visible");
//           } else {
//             entry.target.classList.remove("is-visible");
//           }
//         });
//       },
//       {
//         threshold: 0.35,
//       }
//     );

//     animatedEls.forEach((el) => scrollIO.observe(el));

//     // ==== 2) Typewriter per word for [data-typewriter] ====
//     const typeEls = document.querySelectorAll("[data-typewriter]");
//     const typeMap = new WeakMap();

//     function startTypewriter(el) {
//       if (typeMap.has(el)) return;

//       const fullText = el.dataset.typewriter || el.textContent.trim();
//       const words = fullText.split(" ");
//       el.textContent = ""; // clear existing text

//       let index = 0;

//       const interval = setInterval(() => {
//         if (index >= words.length) {
//           clearInterval(interval);
//           return;
//         }

//         const span = document.createElement("span");
//         span.className = "sw-type-word";
//         span.textContent = words[index];

//         if (index > 0) {
//           el.appendChild(document.createTextNode(" "));
//         }
//         el.appendChild(span);

//         index++;
//       }, 110); // word speed

//       typeMap.set(el, interval);
//     }

//     const typeIO = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             startTypewriter(entry.target);
//             typeIO.unobserve(entry.target); // description type only once
//           }
//         });
//       },
//       {
//         threshold: 0.5,
//       }
//     );

//     typeEls.forEach((el) => typeIO.observe(el));

//     // ==== 3) Scroll-driven zoom for banner mockup ====
//     const bannerImg = document.querySelector(".sw-banner-img");
//     let ticking = false;

//     function updateBannerZoom() {
//       if (!bannerImg) return;

//       const viewportH = window.innerHeight || 1;
//       const scrollY = window.scrollY || window.pageYOffset;

//       // we use first part of scroll (0px → ~0.8 * viewportH)
//       const startScroll = 10; // start after 10px scroll
//       const endScroll = viewportH * 0.8; // finish zoom around 80% viewport

//       let progress;
//       if (scrollY <= startScroll) {
//         progress = 0;
//       } else if (scrollY >= endScroll) {
//         progress = 1;
//       } else {
//         progress = (scrollY - startScroll) / (endScroll - startScroll);
//       }

//       // clamp
//       if (progress < 0) progress = 0;
//       if (progress > 1) progress = 1;

//       // map progress 0→1 to transform / opacity / blur
//       const minScale = 0.1;  // ~10% size
//       const maxScale = 1;
//       const minOpacity = 0;
//       const maxOpacity = 1;
//       const minBlur = 14;
//       const maxBlur = 0;
//       const minTranslate = 80;
//       const maxTranslate = 0;

//       const scale = minScale + (maxScale - minScale) * progress;
//       const opacity = minOpacity + (maxOpacity - minOpacity) * progress;
//       const blur = minBlur + (maxBlur - minBlur) * progress;
//       const translateY = minTranslate + (maxTranslate - minTranslate) * progress;

//       bannerImg.style.transform = `scale(${scale}) translateY(${translateY}px)`;
//       bannerImg.style.opacity = opacity;
//       bannerImg.style.filter = `blur(${blur}px)`;
//     }

//     function onScrollOrResize() {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           updateBannerZoom();
//           ticking = false;
//         });
//         ticking = true;
//       }
//     }

//     // initial state
//     updateBannerZoom();

//     window.addEventListener("scroll", onScrollOrResize);
//     window.addEventListener("resize", onScrollOrResize);

//     // cleanup
//     return () => {
//       scrollIO.disconnect();
//       typeIO.disconnect();
//       window.removeEventListener("scroll", onScrollOrResize);
//       window.removeEventListener("resize", onScrollOrResize);
//     };
//   }, []);

//   return (
//     <>
//       <div className="sw-container">
//         {/* HERO + BANNER (sticky area) */}
//         <div className="sw-hero-wrap">
//           {/* Top Heading */}
//           <div
//             className="sw-header"
//             data-animate="fade-up"
//             style={{ "--delay": "0s" }}
//           >
//             <p className="sw-small-title">Website Design &amp; Development</p>
//             <h1 className="sw-main-title">
//               Launch a seamless,
//               <br />
//               conversion-focused website
//             </h1>
//           </div>

//           {/* Banner Image sticky + scroll zoom */}
//           <div className="sw-banner-wrapper">
//             <div className="sw-banner">
//               <img
//                 src={Mockup}
//                 alt="Website Mockup"
//                 className="sw-banner-img"
//               />
//             </div>
//           </div>
//         </div>

//         {/* STEP 1: Description with typewriter words */}
//         <p
//           className="sw-description"
//           data-typewriter="We craft responsive, visually stunning websites tailored to your brand’s needs. From concept to deployment, our team ensures every website is optimized for performance, usability, and conversions."
//         >
//           We craft responsive, visually stunning websites tailored to your
//           brand’s needs. From concept to deployment, our team ensures every
//           website is optimized for performance, usability, and conversions.
//         </p>

//         {/* STEP 2: What We Offer Section */}
//         <div className="sw-offer-section">
//           <div
//             className="sw-offer-img-box"
//             data-animate="fade-right"
//             style={{ "--delay": "0s" }}
//           >
//             <img src={Team} alt="Team" className="sw-offer-img" />
//           </div>

//           <div
//             className="sw-offer-content"
//             data-animate="fade-left"
//             style={{ "--delay": "0.15s" }}
//           >
//             <h2 className="sw-offer-title">What We Offer:</h2>

//             <ul className="sw-offer-list">
//               <li>Custom website design</li>
//               <li>Mobile-friendly responsive layouts</li>
//               <li>E-commerce and CMS integration</li>
//               <li>SEO-optimized structure</li>
//               <li>Ongoing maintenance and support</li>
//             </ul>
//           </div>
//         </div>

//         {/* STEP 3: Result Section */}
//         <div className="sw-result">
//           <ul
//             className="sw-result-text"
//             data-animate="fade-up"
//             style={{ "--delay": "0s" }}
//           >
//             <h2 className="sw-result-title">Result:</h2>
//             <li>We combine user research, wireframing,</li>
//             <li>prototyping, and visual design to deliver</li>
//             <li>solutions that not only look great but also</li>
//             <li>solve real user problems.</li>
//           </ul>

//           <div
//             className="sw-result-img-box"
//             data-animate="zoom-in"
//             style={{ "--delay": "0.15s" }}
//           >
//             <img src={Result} alt="Results" className="sw-result-img" />
//           </div>
//         </div>
//       </div>

//       <Purpose />
//     </>
//   );
// }
import React, { useEffect } from "react";
import "./servicebanner.css";
import Mockup from "../assets/servicebanner.png";
import Team from "../assets/service1.png";
import Result from "../assets/service2.png";
import Purpose from "./purpose";

export default function ServicesWebsite() {
  useEffect(() => {
    // ==== 1) Generic fade/slide/zoom for [data-animate] (works on scroll down & up) ====
    const animatedEls = document.querySelectorAll("[data-animate]");

    const scrollIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    animatedEls.forEach((el) => scrollIO.observe(el));

    // ==== 2) Typewriter per word for [data-typewriter] (runs once when visible) ====
    const typeEls = document.querySelectorAll("[data-typewriter]");
    const typeMap = new WeakMap();

    function startTypewriter(el) {
      if (typeMap.has(el)) return;

      const fullText = el.dataset.typewriter || el.textContent.trim();
      const words = fullText.split(" ");
      el.textContent = ""; // clear existing text

      let index = 0;

      const interval = setInterval(() => {
        if (index >= words.length) {
          clearInterval(interval);
          return;
        }

        const span = document.createElement("span");
        span.className = "sw-type-word";
        span.textContent = words[index];

        if (index > 0) {
          el.appendChild(document.createTextNode(" "));
        }
        el.appendChild(span);

        index++;
      }, 110); // speed per word

      typeMap.set(el, interval);
    }

    const typeIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startTypewriter(entry.target);
            typeIO.unobserve(entry.target); // only once
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    typeEls.forEach((el) => typeIO.observe(el));

    // ==== 3) Scroll-driven zoom for banner mockup (clear, no blur) ====
    const bannerImg = document.querySelector(".sw-banner-img");
    const bannerWrap = document.querySelector(".sw-banner-wrapper");
    let ticking = false;

    function updateBannerZoom() {
      if (!bannerImg || !bannerWrap) return;

      const rect = bannerWrap.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;

      // When wrapper top is near bottom -> start
      const start = viewportH * 0.95;
      // When wrapper top is around middle/upper -> end (where you want final position)
      const end = viewportH * 0.35;

      let progress = (start - rect.top) / (start - end);
      // clamp 0–1
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      // progress 0 -> 1  => scale 0.1 -> 1, opacity 0 -> 1
      const minScale = 0.1;
      const maxScale = 1;
      const minOpacity = 0;
      const maxOpacity = 1;
      const minTranslate = 80;
      const maxTranslate = 0;

      const scale = minScale + (maxScale - minScale) * progress;
      const opacity = minOpacity + (maxOpacity - minOpacity) * progress;
      const translateY = minTranslate + (maxTranslate - minTranslate) * progress;

      bannerImg.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      bannerImg.style.opacity = opacity;
      // no blur here → always clear
    }

    function onScrollOrResize() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateBannerZoom();
          ticking = false;
        });
        ticking = true;
      }
    }

    // initial state (in case page already scrolled)
    updateBannerZoom();

    window.addEventListener("scroll", onScrollOrResize);
    window.addEventListener("resize", onScrollOrResize);

    // cleanup
    return () => {
      scrollIO.disconnect();
      typeIO.disconnect();
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <>
      <div className="sw-container">
        {/* HERO + BANNER (sticky area) */}
        <div className="sw-hero-wrap">
          {/* Top Heading */}
          <div
            className="sw-header"
            data-animate="fade-up"
            style={{ "--delay": "0s" }}
          >
            <p className="sw-small-title">Website Design &amp; Development</p>
            <h1 className="sw-main-title">
              Launch a seamless,
              <br />
              conversion-focused website
            </h1>
          </div>

          {/* Banner Image sticky + scroll zoom */}
          <div className="sw-banner-wrapper">
            <div className="sw-banner">
              <img
                src={Mockup}
                alt="Website Mockup"
                className="sw-banner-img"
              />
            </div>
          </div>
        </div>

        {/* STEP 1: Description with typewriter words */}
        <p
          className="sw-description"
          data-typewriter="We craft responsive, visually stunning websites tailored to your brand’s needs. From concept to deployment, our team ensures every website is optimized for performance, usability, and conversions."
        >
          We craft responsive, visually stunning websites tailored to your
          brand’s needs. From concept to deployment, our team ensures every
          website is optimized for performance, usability, and conversions.
        </p>

        {/* STEP 2: What We Offer Section */}
        <div className="sw-offer-section">
          <div
            className="sw-offer-img-box"
            data-animate="fade-right"
            style={{ "--delay": "0s" }}
          >
            <img src={Team} alt="Team" className="sw-offer-img" />
          </div>

          <div
            className="sw-offer-content"
            data-animate="fade-left"
            style={{ "--delay": "0.15s" }}
          >
            <h2 className="sw-offer-title">What We Offer:</h2>

            <ul className="sw-offer-list">
              <li>Custom website design</li>
              <li>Mobile-friendly responsive layouts</li>
              <li>E-commerce and CMS integration</li>
              <li>SEO-optimized structure</li>
              <li>Ongoing maintenance and support</li>
            </ul>
          </div>
        </div>

        {/* STEP 3: Result Section */}
        <div className="sw-result">
          <ul
            className="sw-result-text"
            data-animate="fade-up"
            style={{ "--delay": "0s" }}
          >
            <h2 className="sw-result-title">Result:</h2>
            <li>We combine user research, wireframing,</li>
            <li>prototyping, and visual design to deliver</li>
            <li>solutions that not only look great but also</li>
            <li>solve real user problems.</li>
          </ul>

          <div
            className="sw-result-img-box"
            data-animate="zoom-in"
            style={{ "--delay": "0.15s" }}
          >
            <img src={Result} alt="Results" className="sw-result-img" />
          </div>
        </div>
      </div>

      <Purpose />
    </>
  );
}
