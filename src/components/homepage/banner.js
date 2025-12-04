// // // import React from "react";
// // // import "./banner.css";
// // // import Header from "./header";
// // // import Arrow from "../assets/arrow.png";


// // // function Banner() {
// // //   return (
// // //     <>
// // //       {/* 🔥 Sticky hero wrapper */}
// // //       <section className="hero-wrapper">
// // //         <div className="banner">
// // //           {/* Header fixed-a irukum already */}
// // //           <Header />

// // //           {/* 🔥 Background Video */}
// // //           <video className="bg-video" autoPlay loop muted playsInline>
// // //             {/* public/videos/hero-bg.mp4 la file vainga */}
// // //             <source src="/videos/PCS-Headertheme.mp4" type="video/mp4" />
// // //           </video>

// // //           {/* Content on top of video */}
// // //           <div className="banner-content">
// // //             <h1 className="banner-title">
// // //               Let’s <span className="blue">build</span> something
// // //               <br />
// // //               amazing <span className="gradient-text">together.</span>
// // //             </h1>

// // //             <div className="banner-buttons">
// // //               <button className="btn-primary">
// // //                 <div className="icon-circle">
// // //                   <img alt="arrow" src={Arrow} />
// // //                 </div>
// // //                 Let’s Discuss
// // //               </button>

// // //               <button className="btn-link">Learn Something</button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* 🔽 Example next section – just sample */}
// // //       {/* idhu unga real section oda replace pannunga */}
// // //       {/* <section className="next-section">
// // //         <h2>Next section content</h2>
// // //         <p>Scroll aagumbodhu hero mela varum.</p>
// // //       </section> */}
// // //     </>
// // //   );
// // // }

// // // export default Banner;

// // import React, { useEffect, useState } from "react";
// // import "./banner.css";
// // import Header from "./header";
// // import Arrow from "../assets/arrow.png";

// // const rotatingWords = ["build", "learn"]; // 🔁 words cycle aganum

// // function Banner() {
// //   const [currentWordIndex, setCurrentWordIndex] = useState(0);

// //   // 🔁 Change word every 2 seconds
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
// //     }, 2000); // 2 sec
// //     return () => clearInterval(interval);
// //   }, []);

// //   const currentWord = rotatingWords[currentWordIndex];

// //   return (
// //     <>
// //       {/* 🔥 Sticky hero wrapper */}
// //       <section className="hero-wrapper">
// //         <div className="banner">
// //           {/* Header fixed-a irukum already */}
// //           <Header />

// //           {/* 🔥 Background Video */}
// //           <video className="bg-video" autoPlay loop muted playsInline>
// //             <source src="/videos/PCS-Headertheme.mp4" type="video/mp4" />
// //           </video>

// //           {/* Content on top of video */}
// //           <div className="banner-content">
// //             <h1 className="banner-title">
// //               Let’s{" "}
// //               <span className="blue rotating-word">
// //                 {currentWord}
// //               </span>{" "}
// //               something
// //               <br />
// //               amazing <span className="gradient-text">together.</span>
// //             </h1>

// //             <div className="banner-buttons">
// //               <button className="btn-primary">
// //                 <div className="icon-circle">
// //                   <img alt="arrow" src={Arrow} />
// //                 </div>
// //                 Let’s Discuss
// //               </button>

// //               <button className="btn-link">Learn Something</button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // }

// // export default Banner;

// import React, { useEffect, useState } from "react";
// import "./banner.css";
// import Header from "./header";
// import Arrow from "../assets/arrow.png";

// const words = ["build", "learn"]; // 🔁 cycle panna words

// function Banner() {
//   const [wordIndex, setWordIndex] = useState(0);
//   const [displayText, setDisplayText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);

//   // 🔤 Typewriter effect
//   useEffect(() => {
//     const currentWord = words[wordIndex];
//     let timeout;

//     if (!isDeleting && displayText.length < currentWord.length) {
//       // typing
//       timeout = setTimeout(() => {
//         setDisplayText(currentWord.slice(0, displayText.length + 1));
//       }, 120); // speed of typing
//     } else if (!isDeleting && displayText.length === currentWord.length) {
//       // pause full word
//       timeout = setTimeout(() => setIsDeleting(true), 1000);
//     } else if (isDeleting && displayText.length > 0) {
//       // deleting
//       timeout = setTimeout(() => {
//         setDisplayText(currentWord.slice(0, displayText.length - 1));
//       }, 80);
//     } else if (isDeleting && displayText.length === 0) {
//       // move to next word
//       timeout = setTimeout(() => {
//         setIsDeleting(false);
//         setWordIndex((prev) => (prev + 1) % words.length);
//       }, 300);
//     }

//     return () => clearTimeout(timeout);
//   }, [displayText, isDeleting, wordIndex]);

//   return (
//     <>
//       {/* 🔥 Sticky hero wrapper */}
//       <section className="hero-wrapper">
//         <div className="banner">
//           <Header />

//           {/* 🔥 Background Video */}
//           <video className="bg-video" autoPlay loop muted playsInline>
//             <source src="/videos/PCS-Headertheme.mp4" type="video/mp4" />
//           </video>

//           {/* Content on top of video */}
//           <div className="banner-content">
//             <h1 className="banner-title">
//               Let’s{" "}
//               <span className="blue typing-word">
//                 {displayText}
//               </span>{" "}
//               something
//               <br />
//               amazing <span className="gradient-text">together.</span>
//             </h1>

//             <div className="banner-buttons">
//               <button className="btn-primary">
//                 <div className="icon-circle">
//                   <img alt="arrow" src={Arrow} />
//                 </div>
//                 Let’s Discuss
//               </button>

//               <button className="btn-link">Learn Something</button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Banner;


import React, { useEffect, useState } from "react";
import "./banner.css";
import Header from "./header";
import Arrow from "../assets/arrow.png";
import About from "./aboutus";
import Products from "./products";

const words = ["build", "learn"]; // 🔁 cycle panna words

function Banner() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // 🔤 Typewriter effect
  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && displayText.length < currentWord.length) {
      // typing
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      }, 120); // typing speed
    } else if (!isDeleting && displayText.length === currentWord.length) {
      // pause on full word
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayText.length > 0) {
      // deleting
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      }, 80); // deleting speed
    } else if (isDeleting && displayText.length === 0) {
      // move to next word
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <>
      {/* 🔥 Fixed hero wrapper placeholder for scroll spacing */}
      <section className="hero-wrapper">
        <div className="banner">
          <Header />

          {/* 🔥 Background Video */}
          <video className="bg-video" autoPlay loop muted playsInline>
            <source src="/videos/PCS-Headertheme.mp4" type="video/mp4" />
          </video>

          {/* Content on top of video */}
          <div className="banner-content">
            <h1 className="banner-title">
              Let’s{" "}
              <span className="blue typing-word">
                {displayText}
              </span>{" "}
              something
              <br />
              amazing <span className="gradient-text">together.</span>
            </h1>

            <div className="banner-buttons">
              <button className="btn-primary">
                <div className="icon-circle">
                  <img alt="arrow" src={Arrow} />
                </div>
                Let’s Discuss
              </button>

              <button className="btn-link">Learn Something</button>
            </div>
          </div>
        </div>
      </section>
       {/* 🔽 All next sections must have "next-section" class */}
      <section className="next-section">
        <About />
        <Products/>
      </section>
    </>
  );
}

export default Banner;
