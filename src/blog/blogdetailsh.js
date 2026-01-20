import React from "react";
import { useParams, Link } from "react-router-dom";
import "./blogdetailsh.css";
import "./blog.css"; // 👈 same CSS reuse

const blogs = [
  {
    image:
      "https://itbrief.com.au/uploads/story/2021/06/01/GettyImages-1244482898.webp",
    date: "05 Nov",
    category: "SOFTWARE SOLUTIONS",
    readTime: "6 min",
    title:
      "Boost Workplace Productivity with AI‑Powered Enterprise Email Solutions",
    description:
      "Modern enterprises lose countless hours managing emails. Discover how AI‑driven enterprise mail solutions streamline communication, automate routine tasks, and improve team productivity.",
    content: {
      intro:
        "In today’s fast‑paced IT environments, email remains the backbone of business communication. However, overflowing inboxes, repetitive responses, and poor organization often reduce productivity. Modern AI‑powered enterprise email solutions are designed to solve these challenges by automating workflows and enabling smarter communication across teams.",
      sections: [
        {
          title: "Challenges in Traditional Enterprise Email",
          text:
            "Traditional email systems demand significant manual effort. Employees spend hours sorting messages, searching for information, and responding to repetitive queries. This not only slows down daily operations but also increases the risk of miscommunication and missed deadlines, especially in large organizations."
        },
        {
          title: "AI‑Driven Features for Enterprises",
          text:
            "AI‑powered summarization, smart replies, intelligent spam filtering, and automated task creation help employees focus on high‑value work. Advanced analytics also provide insights into communication patterns, enabling managers to optimize workflows and improve collaboration."
        },
        {
          title: "Business Benefits",
          text:
            "By implementing AI‑based email solutions, organizations can significantly reduce response times, improve internal coordination, and enhance data security. The result is higher productivity, better employee satisfaction, and measurable operational efficiency across departments."
        }
      ]
    }
  },
  {
    image:
      "https://augmentify.dev/wp-content/uploads/2024/07/AI-Automation-Strategies-to-Supercharge-Your-Business.png",
    date: "10 Jun",
    category: "DIGITAL TRANSFORMATION",
    readTime: "7 min",
    title:
      "Scaling Business Growth with AI‑Powered Digital Marketing Software",
    description:
      "Explore how AI‑driven digital marketing platforms help IT companies automate campaigns, analyze customer data, and drive consistent business growth.",
    content: {
      intro:
        "Digital transformation has reshaped how IT service providers and software companies connect with customers. AI‑powered digital marketing software enables organizations to plan, execute, and optimize campaigns using real‑time data and intelligent automation.",
      sections: [
        {
          title: "Role of Digital Marketing in IT Businesses",
          text:
            "For IT and software solution providers, digital marketing is essential to build brand visibility, generate qualified leads, and nurture long‑term client relationships. Channels such as SEO, email campaigns, content marketing, and social media play a critical role in reaching decision‑makers globally."
        },
        {
          title: "How AI Enhances Marketing Automation",
          text:
            "AI helps automate audience segmentation, personalize messaging, and predict customer behavior. With machine learning algorithms, marketing teams can deliver the right message to the right audience at the right time, improving engagement and conversion rates."
        },
        {
          title: "Measurable Outcomes for Enterprises",
          text:
            "Organizations using AI‑powered marketing tools experience improved campaign ROI, reduced manual workload, and better decision‑making through detailed analytics. This allows IT companies to scale their outreach efforts efficiently without increasing operational costs."
        }
      ]
    }
  },
  {
    image:
      "https://w3-lab.com/wp-content/uploads/2023/02/will-artificial-intelligence-AI-replace-software-engineering-1024x683.jpg",
    date: "03 Jun",
    category: "TECHNOLOGY NEWS",
    readTime: "6 min",
    title:
      "How AI Development Platforms Are Transforming Software Solutions",
    description:
      "AI‑driven development platforms empower businesses to build scalable software solutions faster, reducing development time and cost.",
    content: {
      intro:
        "AI development platforms are revolutionizing the software industry by enabling faster application development and smarter solutions. These platforms support both beginners and experienced developers in creating robust digital products using automation and intelligent code generation.",
      sections: [
        {
          title: "What Modern AI Platforms Enable",
          text:
            "From web applications and SaaS platforms to enterprise dashboards and automation tools, AI development platforms simplify complex coding tasks. Built‑in integrations, reusable components, and AI assistance help teams deliver solutions quickly."
        },
        {
          title: "Impact on IT Service Providers",
          text:
            "For IT service companies, AI platforms reduce development cycles and improve project delivery timelines. This allows teams to focus more on solution architecture, security, and performance rather than repetitive coding tasks."
        },
        {
          title: "Future of Software Solutions",
          text:
            "As AI continues to evolve, software solutions will become more adaptive, scalable, and intelligent. Businesses that adopt AI‑driven development platforms early gain a competitive advantage by delivering innovative solutions faster and more efficiently."
        }
      ]
    }
  }
];
const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs[id];

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <>
      {/* ================= BLOG DETAILS ================= */}
      <div className="blog-details">
        <div className="blog-image-wrapper">
          <img
            src={blog.image}
            alt={blog.title}
            className="blog-centered-image"
          />
        </div>

        <article className="blog-article">
          <div className="article-header">
            <h1 className="article-title">{blog.title}</h1>
            <div className="details-meta">
              <span>{blog.date}</span>
              <span>•</span>
              <span>{blog.category}</span>
              <span>•</span>
              <span>{blog.readTime}</span>
            </div>
          </div>

          <div className="article-content">
            <p className="intro-paragraph">{blog.content.intro}</p>

            {blog.content.sections.map((section, idx) => (
              <section key={idx} className="content-section">
                <h2 className="section-title">{section.title}</h2>
                <p className="section-text">{section.text}</p>
              </section>
            ))}
          </div>
        </article>
      </div>

      {/* ================= RELATED BLOGS (SAME AS BLOG PAGE) ================= */}
      <section className="blog-section">
        <div className="blog-container">
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "700",
              marginBottom: "32px",
              position: "relative",
              display: "inline-block",
              paddingBottom: "10px",
            }}
          >
            Related Blogs
            <span
              style={{
                position: "absolute",
                left: "0",
                bottom: "0",
                width: "60%",
                height: "4px",
                background:"linear-gradient(90deg, #ff2a8b 0%, #8e44ad 100%)",
                borderRadius: "2px",
              }}
            ></span>
          </h2>

          <div className="blog-row">
            {blogs.map((item, index) => {
              if (index === Number(id)) return null; // 👈 current blog hide

              return (
                <Link
                  to={`/blog/${index}`}
                  className="blog-link"
                  key={index}
                >
                  <div className="blog-card">
                    <div className="blog-image">
                      <img src={item.image} alt={item.title} />
                    </div>

                    <div className="blog-meta">
                      <span>{item.date}</span>
                      <span>•</span>
                      <span>{item.category}</span>
                      <span>•</span>
                      <span>{item.readTime}</span>
                    </div>

                    <h3 className="blog-title">{item.title}</h3>
                  
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
