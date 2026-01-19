import React from "react";
import "./blog.css";
import { Link } from "react-router-dom";


const BlogPage = () => {
  const blogs = [
  {
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200&auto=format&fit=crop",
    date: "05 Nov",
    category: "PRODUCT UPDATES",
    readTime: "2min",
    title:
      "Save 1+ hour a day: The new Hostinger Mail unlocks productivity with AI",
    description:
      "Email takes time – often too much of it. To help you reclaim your day, we built Hostinger Mail from the ground up, shifting inbox overload onto AI.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1200&auto=format&fit=crop",
    date: "10 Jun",
    category: "PRODUCT UPDATES",
    readTime: "3min",
    title:
      "Prompt, send, grow: Email marketing just got a Hostinger makeover",
    description:
      "Meet Hostinger Reach, our AI-powered email marketing tool built for creators, solo entrepreneurs, and small business owners.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop",
    date: "03 Jun",
    category: "NEWS",
    readTime: "3min",
    title:
      "Hundreds of thousands have already tried Hostinger Horizons: what did they build?",
    description:
      "Since its release in March, hundreds of thousands of people have already tried to vibe code with the help of Hostinger Horizons.",
  },
];
  return (
    <>
      <div className="about-banner">
        <h1 className="about-title">
          BLOG&nbsp;&nbsp;
        </h1>
      </div>

     

 {/* Blog Cards Section */}
  <section className="blog-section">
      <div className="blog-container">
        <div className="blog-row">
         {blogs.map((blog, index) => (
  <Link to={`/blog/${index}`} className="blog-link" key={index}>
    <div className="blog-card">
      <div className="blog-image">
        <img src={blog.image} alt={blog.title} />
      </div>

      <div className="blog-meta">
        <span>{blog.date}</span>
        <span>•</span>
        <span>{blog.category}</span>
        <span>•</span>
        <span>{blog.readTime}</span>
      </div>

      <h3 className="blog-title">{blog.title}</h3>
      <p className="blog-description">{blog.description}</p>
    </div>
  </Link>
))}

        </div>
      </div>
    </section>

    </>
  );
};

export default BlogPage;










// import React from "react";
// import "./blog.css";
// import CommonButton from "../components/common/button";
// import Arrow from "../components/assets/arrow.png"; // adjust path if needed
// import { useNavigate } from "react-router-dom";


// const blogs = [
//   {
//     date: "JAN, 2026",
//     title: "Tech Insights: Building Scalable Software Solutions",
//     desc: "Scalable software solutions help businesses grow without performance issues. Here’s how modern architecture makes it possible.",
//     image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
//   },
//   {
//     date: "DEC, 2025",
//     title: "Knowledge Hub: Why Clean Code Matters",
//     desc: "Clean code improves readability, maintainability, and long-term success of any software product.",
//     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
//   },
//   {
//     date: "NOV, 2025",
//     title: "Tech Talks: Latest Trends in Web Development",
//     desc: "From React to modern frameworks, web development is evolving faster than ever.",
//     image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
//   },
//   {
//     date: "OCT, 2025",
//     title: "Company Updates: Inside Our Development Process",
//     desc: "A behind-the-scenes look at how our team plans, builds, and delivers software solutions.",
//     image: "https://images.unsplash.com/photo-1497366216548-37526070297c"
//   },
//   {
//     date: "SEP, 2025",
//     title: "Innovation Stories: Turning Ideas into Products",
//     desc: "Every successful product starts with a simple idea. Here’s how innovation drives our work.",
//     image: "https://images.unsplash.com/photo-1552664730-d307ca884978"
//   },
//   {
//     date: "AUG, 2025",
//     title: "Digital Diaries: A Day in a Software Company",
//     desc: "From morning standups to deployments, this is what a typical day looks like in our office.",
//     image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
//   },
//   {
//     date: "JUL, 2025",
//     title: "Our Tech Journey: Growing with Technology",
//     desc: "Technology evolves, and so do we. A look at our growth journey over the years.",
//     image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
//   },
//   {
//     date: "JUN, 2025",
//     title: "Smart Solutions Blog: Solving Real Business Problems",
//     desc: "We design software solutions that address real-world challenges faced by businesses.",
//     image: "https://images.unsplash.com/photo-1557804506-669a67965ba0"
//   },
//   {
//     date: "MAY, 2025",
//     title: "Insights & Ideas: Shaping the Future of Software",
//     desc: "Our thoughts on how innovation and technology will define the future.",
//     image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
//   },
//   {
//     date: "APR, 2025",
//     title: "Future Ready: Preparing for Next-Gen Technology",
//     desc: "AI, automation, and cloud computing are shaping the next generation of software.",
//     image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769"
//   }
// ];


// function BlogPage() {
//   const navigate = useNavigate();

//   return (
//     <div className="layout">
//       {/* LEFT SIDE - FREEZE */}
//       <div className="left">
//         <h1 className="big-text">
//           BLOG-<br />NEWS
//         </h1>
//         <p className="sub-text">Latest News<br />and updates</p>
//       </div>

//       {/* RIGHT SIDE - SCROLL */}
//       <div className="right">
//         {blogs.map((blog, index) => (
//           <div className="blog-card" key={index}>
//             <img src={blog.image} alt="blog" />
//             <div className="content">
//               <span className="date">{blog.date}</span>
//               <h2>{blog.title}</h2>
//               <p>{blog.desc}</p>


// <div
//   className="blog-custom-btn"
//   onClick={() => navigate(`/blog/${index}`)}
// >
//   <span className="blog-btn-icon">➜</span>
//   <span className="blog-btn-text">Discover</span>
// </div>
// </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default BlogPage;
