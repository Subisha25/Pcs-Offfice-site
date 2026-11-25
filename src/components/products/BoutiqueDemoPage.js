import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  RotateCcw,
  Sparkles,
  ArrowLeft,
  ExternalLink,
  Crown,
  Scissors,
  ShoppingBag,
  ArrowRight,
  Users,
  Receipt,
  ShieldCheck
} from "lucide-react";
import BoutiqueBillingBanner from "./images/boutique/boutique_billing_banner.jpg";
import "./BoutiqueDemoPage.css";

// 🎬 PASTE YOUR CLOUDINARY OR HOSTED AI VIDEO URL HERE ONCE READY:
// Example: const BOUTIQUE_VIDEO_URL = "https://res.cloudinary.com/your-cloud/video/upload/v12345/boutique_demo.mp4";
const BOUTIQUE_VIDEO_URL = "";

const BoutiqueDemoPage = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  // Keep site header crisp, visible and clean on this page
  useEffect(() => {
    document.body.classList.add("billing-demo-active");
    return () => {
      document.body.classList.remove("billing-demo-active");
    };
  }, []);

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const features = [
    {
      icon: <Users size={22} className="boutique-feat-icon" />,
      title: "Super Admin, Admin & Cashier Roles",
      desc: "Strict role-based permissions: Super Admin (profit analytics & settings), Store Admin (inventory & tailor jobs), and Cashier (fast POS counter billing & drawer limits)."
    },
    {
      icon: <Receipt size={22} className="boutique-feat-icon" />,
      title: "High-Speed POS & GST Billing",
      desc: "Instant barcode scanning, automated CGST/SGST/IGST tax splits, 2 & 3-inch thermal POS receipt printing, and multiple payment modes (Cash, UPI, Card)."
    },
    {
      icon: <ShieldCheck size={22} className="boutique-feat-icon" />,
      title: "Advance Booking & Token Ledger",
      desc: "Record advance booking deposits for bridal sets, track outstanding balances, and auto-settle upon final trial or doorstep delivery."
    },
    {
      icon: <Scissors size={22} className="boutique-feat-icon" />,
      title: "Custom Sizing & Tailor Tracking",
      desc: "Store detailed body measurement profiles, custom blouse styling specs, and monitor cutting, stitching, and alteration deadlines."
    },
    {
      icon: <Crown size={22} className="boutique-feat-icon" />,
      title: "Trendy Bridal Lehengas & Couture",
      desc: "Curated collection of regal bridal and festive lehengas with authentic gold zari, stone embroidery, and luxury fabric drape."
    },
    {
      icon: <Sparkles size={22} className="boutique-feat-icon" />,
      title: "1-Click WhatsApp Invoices & Alerts",
      desc: "Automated WhatsApp delivery for PDF tax invoices, deposit vouchers, trial date reminders, and Pan-India & worldwide order tracking."
    }
  ];

  return (
    <div className="boutique-demo-page">
      <div className="boutique-demo-container">

        {/* Top Navigation Bar */}
        <div className="boutique-demo-topbar">
          <button
            type="button"
            className="boutique-back-btn"
            onClick={() => navigate("/products")}
          >
            <ArrowLeft size={18} />
            <span>Back to Products</span>
          </button>

          <div className="boutique-topbar-badge">
            <Sparkles size={14} className="boutique-sparkle-icon" />
            <span>Boutique & Billing Management Software • AI Video Demonstration</span>
          </div>

          <button
            type="button"
            className="boutique-contact-quote-btn"
            onClick={() => navigate("/contact")}
          >
            Order / Enquire Now
          </button>
        </div>

        {/* Hero Header */}
        <div className="boutique-demo-header">
          <h1 className="boutique-demo-title">
            Boutique & Billing <span className="title-italic title-gradient">Management Software</span>
          </h1>
          <p className="boutique-demo-subtitle">
            <em>Wear Elegance... Feel Special...</em> All-in-One Bridal Studio Management & Smart POS Billing Solution. Explore how our enterprise boutique ERP unifies Super Admin governance, Cashier counter billing, tailor tracking, and customer bridal shopping.
          </p>
        </div>

        {/* MAIN VIDEO THEATER */}
        <div className="boutique-theater-section">
          <div className="boutique-theater-card">
            {/* Theater Topbar */}
            <div className="boutique-theater-topbar">
              <div className="boutique-theater-meta">
                <span className="boutique-theater-step-badge">Exclusive Preview</span>
                <span className="boutique-theater-title-text">Boutique & Billing Management Software Showcase</span>
                <span className="boutique-theater-category-pill">Bridal & Couture</span>
              </div>
              <div className="boutique-theater-live-status">
                <span className={`boutique-status-dot ${isPlaying || !BOUTIQUE_VIDEO_URL ? "live" : ""}`}></span>
                <span>{BOUTIQUE_VIDEO_URL ? (isPlaying ? "Playing" : "Ready to Play") : "AI Video Tour In Prep"}</span>
              </div>
            </div>

            {/* Video Player Container */}
            <div className="boutique-theater-video-wrapper">
              {BOUTIQUE_VIDEO_URL ? (
                videoError ? (
                  <div className="boutique-video-error-card">
                    <Sparkles size={40} className="boutique-sparkle-icon" />
                    <h3>Video Stream Loading</h3>
                    <p>Direct video link is accessible via Cloudinary:</p>
                    <a
                      href={BOUTIQUE_VIDEO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="boutique-btn-primary"
                    >
                      Open Video in Cloudinary <ExternalLink size={14} />
                    </a>
                  </div>
                ) : (
                  <video
                    ref={videoRef}
                    controls
                    playsInline
                    autoPlay
                    preload="metadata"
                    poster={BoutiqueBillingBanner}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onError={() => setVideoError(true)}
                    className="boutique-main-theater-video"
                  >
                    <source src={BOUTIQUE_VIDEO_URL} type="video/mp4" />
                    Your browser does not support HTML5 video.
                  </video>
                )
              ) : (
                /* Elegant Coming-Soon / Ready Placeholder View */
                <div className="boutique-placeholder-view">
                  <img
                    src={BoutiqueBillingBanner}
                    alt="Boutique & Billing Management Software"
                    className="boutique-placeholder-bg"
                  />
                  <div className="boutique-placeholder-overlay">
                    <div className="boutique-placeholder-badge">
                      <Sparkles size={14} />
                      <span>AI Video Demo Tour • Ready for Upload</span>
                    </div>
                    <h3>Boutique & Billing Management Software AI Tour</h3>
                    <p>
                      The AI Video Walkthrough for this collection is ready to be linked.
                      Once your video is generated, simply paste the Cloudinary URL into <code>BOUTIQUE_VIDEO_URL</code> to stream it live here!
                    </p>
                    <div className="boutique-placeholder-buttons">
                      <button
                        type="button"
                        className="boutique-btn-primary"
                        onClick={() => navigate("/productdetails/12")}
                      >
                        <ShoppingBag size={16} />
                        <span>View Collection Details</span>
                      </button>
                      <button
                        type="button"
                        className="boutique-btn-secondary"
                        onClick={() => navigate("/contact")}
                      >
                        <span>Book Boutique Consultation</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Theater Bottom Controls Bar */}
            <div className="boutique-theater-controls-bar">
              <div className="boutique-controls-group-left">
                {BOUTIQUE_VIDEO_URL && (
                  <>
                    <button
                      type="button"
                      className="boutique-btn-control boutique-btn-replay"
                      onClick={handleReplay}
                      title="Replay Video"
                    >
                      <RotateCcw size={16} />
                      <span>Replay Video</span>
                    </button>

                    <a
                      href={BOUTIQUE_VIDEO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="boutique-btn-control"
                    >
                      <ExternalLink size={15} />
                      <span>Direct Stream Link</span>
                    </a>
                  </>
                )}
                {!BOUTIQUE_VIDEO_URL && (
                  <span style={{ fontSize: "13px", color: "#6c534e", fontWeight: "500" }}>
                    ✨ AI Video Integration Configured & Ready
                  </span>
                )}
              </div>

              <div className="boutique-controls-group-right">
                <button
                  type="button"
                  className="boutique-btn-control boutique-btn-learn"
                  onClick={() => navigate("/productdetails/12")}
                >
                  <span>View Product Details</span>
                  <ArrowRight size={15} />
                </button>

                <button
                  type="button"
                  className="boutique-btn-control boutique-btn-quote"
                  onClick={() => navigate("/contact")}
                >
                  <span>Contact / Shop Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 6 KEY SIGNATURE HIGHLIGHTS FROM BANNER */}
        <div className="boutique-features-section">
          <div className="boutique-features-header">
            <h2>Luxury Couture Crafted For You</h2>
            <p>Every design in Boutique & Billing Management Software is handcrafted for royalty, elegance, and perfect celebration moments</p>
          </div>

          <div className="boutique-features-grid">
            {features.map((item, index) => (
              <div key={index} className="boutique-feature-card">
                <div className="boutique-feature-icon-wrapper">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BoutiqueDemoPage;
