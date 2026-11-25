import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  RotateCcw,
  Sparkles,
  ArrowLeft,
  Radio,
  ExternalLink,
  MapPin,
  Car,
  Users,
  FileText,
  Layers,
  Headphones,
  ArrowRight
} from "lucide-react";
import CabzBannerImg from "./images/cabs/cabz_banner.png";
import "./CabsDemoPage.css";

const CABZ_VIDEO_URL = "https://res.cloudinary.com/bwdzdpcn/video/upload/v1795165986/CABZ_z5uxxd.mp4";

const CabsDemoPage = () => {
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
      icon: <MapPin size={22} className="cab-feat-icon" />,
      title: "Real-Time GPS",
      desc: "Live turn-by-turn fleet tracking on Google Maps with route replay & geo-fencing safety alerts."
    },
    {
      icon: <Car size={22} className="cab-feat-icon" />,
      title: "Track Bookings",
      desc: "Instant passenger hailing and scheduled rides with live status updates and OTP verification."
    },
    {
      icon: <Users size={22} className="cab-feat-icon" />,
      title: "Driver Management",
      desc: "Driver KYC onboarding, duty shift logs, rating tracking and automated daily trip payouts."
    },
    {
      icon: <FileText size={22} className="cab-feat-icon" />,
      title: "Corporate Billing",
      desc: "Monthly consolidated invoicing, GST tax compliance, corporate credit limits & trip expense logs."
    },
    {
      icon: <Layers size={22} className="cab-feat-icon" />,
      title: "Multi-Fleet Support",
      desc: "Hatchback, Sedan, SUV, and Luxury CABZ categorization with customized tariff rates."
    },
    {
      icon: <Headphones size={22} className="cab-feat-icon" />,
      title: "Dedicated Support",
      desc: "24/7 passenger emergency hotline, SOS alerts, ride sharing safety and instant dispatcher support."
    }
  ];

  return (
    <div className="cabs-demo-page">
      <div className="cabs-demo-container">

        {/* Top Navigation Bar */}
        <div className="cabs-demo-topbar">
          <button
            type="button"
            className="cabs-back-btn"
            onClick={() => navigate("/products")}
          >
            <ArrowLeft size={18} />
            <span>Back to Products</span>
          </button>

          <div className="cabs-topbar-badge">
            <Sparkles size={14} className="cabs-sparkle-icon" />
            <span>CABZ Management • AI Video Demonstration</span>
          </div>

          <button
            type="button"
            className="cabs-contact-quote-btn"
            onClick={() => navigate("/contact")}
          >
            Get Custom Quote
          </button>
        </div>

        {/* Hero Header */}
        <div className="cabs-demo-header">
          <h1 className="cabs-demo-title">
            CABZ Management <span className="title-gradient">AI Video Demo Tour</span>
          </h1>
          <p className="cabs-demo-subtitle">
            Smart Fleet. Better Bookings. Watch how our enterprise CABZ Management platform streamlines fleet tracking, driver dispatch, and corporate billing.
          </p>
        </div>

        {/* MAIN VIDEO THEATER */}
        <div className="cabs-theater-section">
          <div className="cabs-theater-card">
            {/* Theater Topbar */}
            <div className="cabs-theater-topbar">
              <div className="cabs-theater-meta">
                <span className="cabs-theater-step-badge">Live Demo</span>
                <span className="cabs-theater-title-text">CABZ Management Platform Overview</span>
                <span className="cabs-theater-category-pill">Fleet & Dispatch</span>
              </div>
              <div className="cabs-theater-live-status">
                <span className={`cabs-status-dot ${isPlaying ? "live" : ""}`}></span>
                <span>{isPlaying ? "Playing" : "Ready to Play"}</span>
              </div>
            </div>

            {/* Video Player Container */}
            <div className="cabs-theater-video-wrapper">
              {videoError ? (
                <div className="cabs-video-error-card">
                  <Radio size={40} className="error-icon" />
                  <h3>Video Stream Loading</h3>
                  <p>Direct video link is accessible via Cloudinary:</p>
                  <a
                    href={CABZ_VIDEO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cabs-direct-video-link"
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
                  poster={CabzBannerImg}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onError={() => setVideoError(true)}
                  className="cabs-main-theater-video"
                >
                  <source src={CABZ_VIDEO_URL} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              )}
            </div>

            {/* Theater Bottom Controls Bar */}
            <div className="cabs-theater-controls-bar">
              <div className="cabs-controls-group-left">
                <button
                  type="button"
                  className="cabs-btn-control cabs-btn-replay"
                  onClick={handleReplay}
                  title="Replay Video"
                >
                  <RotateCcw size={16} />
                  <span>Replay Video</span>
                </button>

                <a
                  href={CABZ_VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cabs-btn-control cabs-btn-direct"
                >
                  <ExternalLink size={15} />
                  <span>Open in Cloudinary</span>
                </a>
              </div>

              <div className="cabs-controls-group-right">
                <button
                  type="button"
                  className="cabs-btn-control cabs-btn-learn"
                  onClick={() => navigate("/productdetails/11")}
                >
                  <span>View Product Details</span>
                  <ArrowRight size={15} />
                </button>

                <button
                  type="button"
                  className="cabs-btn-control cabs-btn-quote"
                  onClick={() => navigate("/contact")}
                >
                  <span>Contact Sales</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 6 KEY FEATURES FROM BANNER */}
        <div className="cabs-features-section">
          <div className="cabs-features-header">
            <h2>Key Capabilities Built for Modern Fleets</h2>
            <p>Your complete end-to-end CABZ dispatch and fleet booking software solution</p>
          </div>

          <div className="cabs-features-grid">
            {features.map((item, index) => (
              <div key={index} className="cabs-feature-card">
                <div className="cabs-feature-icon-wrapper">
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

export default CabsDemoPage;
