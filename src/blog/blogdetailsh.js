import { useParams } from "react-router-dom";
import "./blogdetailsh.css";

const blogs = [
  {
    image: "https://magai.co/wp-content/uploads/2025/01/magai-250106150152-1536x857.jpeg",
    date: "05 Nov",
    category: "PRODUCT UPDATES",
    readTime: "5min",
    title: "Save 1+ hour a day: The new Hostinger Mail unlocks productivity with AI",
    content: {
      intro: "Email management has long been the silent productivity killer for modern professionals. To help you reclaim your focus, we've completely reinvented Hostinger Mail from the ground up.",
      sections: [
        {
          title: "The Evolution of Communication",
          text: "In today's fast-paced digital landscape, the average professional spends over 28% of their workday just reading and answering emails. We realized that traditional inbox tools weren't solving the problem; they were just hosting it. Our new AI-driven architecture doesn't just store your messages—it understands them, categorizes them, and helps you respond with unprecedented speed. By integrating Large Language Models directly into your webmail client, we are bridging the gap between communication and action."
        },
        {
          title: "Intelligent Feature Suite",
          text: "Our engineers focused on three core pillars: Clarity, Velocity, and Intelligence. The 'AI Summary' tool allows you to grasp the essence of a 50-email thread in seconds, while our 'Contextual Drafting' learns your unique writing style to suggest replies that actually sound like you. No more starting from a blank screen; your inbox now acts as a personal assistant that prepares your drafts before you even click reply.",
          points: [
            "AI-powered email summarization for long threads",
            "Style-matching smart reply suggestions",
            "Automatic priority sorting based on behavior",
            "Zero-inbox optimization tools"
          ]
        },
        {
          title: "Measuring the Impact",
          text: "During our beta testing phase, users reported a staggering 40% reduction in time spent on routine correspondence. This isn't just about saving minutes; it's about reducing the 'cognitive load'—the mental exhaustion that comes from constant task-switching. When you spend less time wrestling with your inbox, you have more creative energy for the projects that truly move the needle for your business."
        }
      ]
    },
  },
  // ... (Other blog items follow the same pattern)
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs[id];

  if (!blog) return <div className="not-found"><h2>Blog post not found.</h2></div>;

  return (
    <div className="blog-details">
      <div className="blog-image-wrapper">
        <img src={blog.image} alt={blog.title} className="blog-centered-image" />
      </div>

      <article className="blog-article">
        <header className="article-header">
          <div className="details-meta">
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.category}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
          <h1 className="article-title">{blog.title}</h1>
        </header>

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