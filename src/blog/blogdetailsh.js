import { useParams } from "react-router-dom";
import "./blogdetailsh.css";

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
    content: {
      intro: "Email takes time – often too much of it. To help you reclaim your day, we built Hostinger Mail from the ground up, shifting inbox overload onto AI. Our latest update brings powerful AI features that transform how you work.",
      sections: [
        {
          title: "Key Features",
          points: [
            "AI-powered email summarization",
            "Smart reply suggestions",
            "Advanced filtering & organization",
            "Seamless integration with existing workflows"
          ]
        },
        {
          title: "How It Works",
          text: "The new AI engine analyzes your emails in real-time, providing intelligent summaries and responses. This means less time reading and more time doing what matters."
        },
        {
          title: "Benefits",
          points: [
            "Save 1+ hour per day",
            "Reduce email overload",
            "Improve productivity",
            "Better email management"
          ]
        }
      ]
    },
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
      "Meet Hostinger Reach, our AI-powered email marketing tool built for creators.",
    content: {
      intro: "Email marketing is evolving. Hostinger Reach brings AI-powered capabilities designed for creators, solo entrepreneurs, and small business owners who want to grow faster.",
      sections: [
        {
          title: "What's New",
          text: "Hostinger Reach combines intuitive email campaign building with AI-powered personalization and automation."
        },
        {
          title: "Features",
          points: [
            "AI-powered email content creation",
            "Smart scheduling & send optimization",
            "Detailed analytics & insights",
            "Segmentation & targeting tools"
          ]
        },
        {
          title: "Perfect For",
          points: [
            "Content creators",
            "Solo entrepreneurs",
            "Small business owners",
            "Marketing teams"
          ]
        }
      ]
    },
  },
  {
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop",
    date: "03 Jun",
    category: "NEWS",
    readTime: "3min",
    title:
      "Hundreds of thousands have already tried Hostinger Horizons",
    description:
      "Since its release in March, many people already tried this product.",
    content: {
      intro: "Since the launch of Hostinger Horizons in March, hundreds of thousands of users have jumped into coding with AI assistance. The response has been overwhelming.",
      sections: [
        {
          title: "The Impact",
          text: "From beginners learning their first lines of code to experienced developers building complex applications, Horizons is democratizing web development."
        },
        {
          title: "What Users Are Building",
          points: [
            "Personal portfolio websites",
            "E-commerce platforms",
            "SaaS applications",
            "Content management systems"
          ]
        },
        {
          title: "What's Next",
          text: "We're continuously improving Horizons based on community feedback and emerging development trends. More features are coming soon!"
        }
      ]
    },
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs[id];

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <div className="blog-details">
      <div className="blog-hero">
        <img src={blog.image} alt={blog.title} className="blog-featured-image" />
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

          {blog.content.sections?.map((section, idx) => (
            <section key={idx} className="content-section">
              <h2 className="section-title">{section.title}</h2>
              {section.text && <p className="section-text">{section.text}</p>}
              {section.points && (
                <ul className="section-list">
                  {section.points.map((point, pidx) => (
                    <li key={pidx}>{point}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>
    </div>
  );
};

export default BlogDetails;
