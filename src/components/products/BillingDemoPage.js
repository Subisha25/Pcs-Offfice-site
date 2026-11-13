import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Play,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
  ArrowLeft,
  Settings,
  Layers,
  Radio,
  ExternalLink
} from "lucide-react";
import billingVideosData from "./billingVideosData";
import "./BillingDemoPage.css";

const BillingDemoPage = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoAdvance, setAutoAdvance] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);
  const buttonsContainerRef = useRef(null);

  const currentVideo = billingVideosData[currentIndex];
  const totalVideos = billingVideosData.length;
  const progressPercent = Math.round(((currentIndex + 1) / totalVideos) * 100);

  // Ensure header is crisp, clear, and visible on this page
  useEffect(() => {
    document.body.classList.add("billing-demo-active");
    return () => {
      document.body.classList.remove("billing-demo-active");
    };
  }, []);

  // Switch to specific video by index
  const handleSelectVideo = (index) => {
    if (index === currentIndex) return;
    setVideoError(false);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < totalVideos - 1) {
      handleSelectVideo(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      handleSelectVideo(currentIndex - 1);
    }
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  // When currentIndex changes, load and play the video
  useEffect(() => {
    if (videoRef.current) {
      setVideoError(false);
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            setIsPlaying(false);
          });
      }
    }
  }, [currentIndex]);

  // Video event handlers
  const handleVideoEnded = () => {
    setIsPlaying(false);
    if (autoAdvance && currentIndex < totalVideos - 1) {
      setTimeout(() => {
        handleNext();
      }, 700);
    }
  };

  // Keyboard navigation (Left / Right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  // Filter videos by category
  const filteredVideos = billingVideosData.filter((video) => {
    if (activeCategory === "Core Operations") return video.category === "Core Operations";
    if (activeCategory === "Settings") return video.category === "Settings";
    return true;
  });

  return (
    <div className="billing-demo-page">
      <div className="billing-demo-container">

        {/* Top Navigation Bar */}
        <div className="billing-demo-topbar">
          <button
            type="button"
            className="billing-back-btn"
            onClick={() => navigate("/products")}
          >
            <ArrowLeft size={18} />
            <span>Back to Products</span>
          </button>

          <div className="billing-topbar-badge">
            <Sparkles size={14} className="sparkle-icon" />
            <span>Cashio Billing Software • {totalVideos} AI Interactive Demos</span>
          </div>

          <button
            type="button"
            className="billing-contact-quote-btn"
            onClick={() => navigate("/contact")}
          >
            Get Custom Quote
          </button>
        </div>

        {/* Hero Header */}
        <div className="billing-demo-header">
          <h1 className="billing-demo-title">
            Cashio Billing Software <span className="title-gradient">AI Video Demo Tour</span>
          </h1>
          <p className="billing-demo-subtitle">
            Keezhe irukura ovoru button-ayum click panni antha specific video va paakalam, illana "Next" / "Previous" kuduthu step-by-step sequential-ah explore pannalam.
          </p>

          {/* Progress Strip */}
          <div className="billing-tour-progress">
            <div className="progress-info-row">
              <span className="current-playing-title">
                Now Playing ({currentIndex + 1}/{totalVideos}): <strong>{currentVideo.name}</strong>
              </span>
              <span className="progress-percentage-pill">{progressPercent}% Completed</span>
            </div>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* MAIN VIDEO THEATER */}
        <div className="billing-theater-section">
          <div className="billing-theater-card">
            {/* Theater Top bar */}
            <div className="theater-topbar">
              <div className="theater-meta">
                <span className="theater-step-badge">Video {currentVideo.step}</span>
                <span className="theater-title-text">{currentVideo.name}</span>
                <span className="theater-category-pill">{currentVideo.category}</span>
              </div>
              <div className="theater-live-status">
                <span className={`status-dot ${isPlaying ? "live" : ""}`}></span>
                <span>{isPlaying ? "Playing" : "Paused"}</span>
              </div>
            </div>

            {/* Video Player Container */}
            <div className="theater-video-wrapper">
              {videoError ? (
                <div className="video-error-card">
                  <Radio size={40} className="error-icon" />
                  <h3>Video Stream Loading</h3>
                  <p>Direct video link is accessible via Cloudinary:</p>
                  <a
                    href={currentVideo.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="direct-video-link"
                  >
                    Open Video in Cloudinary <ExternalLink size={14} />
                  </a>
                </div>
              ) : (
                <video
                  ref={videoRef}
                  key={currentVideo.videoUrl}
                  controls
                  playsInline
                  preload="metadata"
                  poster={currentVideo.poster}
                  onEnded={handleVideoEnded}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onError={() => setVideoError(true)}
                  className="main-theater-video"
                >
                  <source src={currentVideo.videoUrl} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              )}
            </div>

            {/* Theater Bottom Controls Bar */}
            <div className="theater-controls-bar">
              <div className="controls-group-left">
                <button
                  type="button"
                  className="btn-theater-nav btn-prev"
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                >
                  <ChevronLeft size={18} />
                  <span>Previous</span>
                </button>

                <button
                  type="button"
                  className="btn-theater-nav btn-replay"
                  onClick={handleReplay}
                  title="Replay Video"
                >
                  <RotateCcw size={16} />
                  <span>Replay</span>
                </button>
              </div>

              <div className="controls-group-center">
                <label className="auto-next-label">
                  <input
                    type="checkbox"
                    checked={autoAdvance}
                    onChange={(e) => setAutoAdvance(e.target.checked)}
                  />
                  <span>Auto-play next video</span>
                </label>
              </div>

              <div className="controls-group-right">
                <button
                  type="button"
                  className="btn-theater-nav btn-next"
                  onClick={handleNext}
                  disabled={currentIndex === totalVideos - 1}
                >
                  <span>Next Video</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BUTTONS NAVIGATION SECTION ("antha name la button vachiko") */}
        <div className="billing-buttons-section" ref={buttonsContainerRef}>
          <div className="buttons-section-header">
            <div className="section-header-left">
              <Layers size={22} className="header-icon" />
              <div>
                <h2>Select Any Video to Watch ({totalVideos} Videos)</h2>
                <p>Click any button below to instantly load and play that video:</p>
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="category-filter-tabs">
              <button
                type="button"
                className={`category-tab ${activeCategory === "All" ? "active" : ""}`}
                onClick={() => setActiveCategory("All")}
              >
                All Videos ({totalVideos})
              </button>
              <button
                type="button"
                className={`category-tab ${activeCategory === "Core Operations" ? "active" : ""}`}
                onClick={() => setActiveCategory("Core Operations")}
              >
                Core Operations (17)
              </button>
              <button
                type="button"
                className={`category-tab ${activeCategory === "Settings" ? "active" : ""}`}
                onClick={() => setActiveCategory("Settings")}
              >
                <Settings size={14} style={{ marginRight: "4px" }} />
                Settings Videos (11)
              </button>
            </div>
          </div>

          {/* 28 Dynamic Video Buttons Grid */}
          <div className="video-buttons-grid">
            {filteredVideos.map((video) => {
              const originalIndex = billingVideosData.findIndex((v) => v.id === video.id);
              const isActive = originalIndex === currentIndex;

              return (
                <button
                  key={video.id}
                  type="button"
                  className={`video-select-btn ${isActive ? "active" : ""}`}
                  onClick={() => handleSelectVideo(originalIndex)}
                  title={`Play: ${video.name}`}
                >
                  <div className="btn-index-badge">{video.step}</div>
                  <div className="btn-label-group">
                    <span className="btn-name-text">{video.name}</span>
                    <span className="btn-category-subtext">{video.category}</span>
                  </div>
                  <div className="btn-play-indicator">
                    {isActive ? (
                      <span className="now-playing-tag">Playing</span>
                    ) : (
                      <Play size={14} fill="currentColor" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Video Description & Feature Summary Box */}
        <div className="billing-info-box">
          <div className="info-box-header">
            <div>
              <span className="info-step-pill">Chapter {currentVideo.step} of {totalVideos}</span>
              <h3 className="info-video-title">{currentVideo.name}</h3>
            </div>
            <a
              href={currentVideo.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="info-direct-link"
            >
              Open Direct Cloudinary Link <ExternalLink size={14} />
            </a>
          </div>
          <p className="info-description">{currentVideo.description}</p>
        </div>

      </div>
    </div>
  );
};

export default BillingDemoPage;
