import React from "react";
import { useNavigate } from "react-router-dom";
import { Play, ArrowRight } from "lucide-react";
import CashioBanner from "./images/doc/cashio_billing_banner.png";
import "./BillingBanner.css";

const BillingBanner = () => {
  const navigate = useNavigate();

  const handleWatchDemo = (e) => {
    e.stopPropagation();
    navigate("/billing-software-demo");
  };

  const handleViewDetails = (e) => {
    e.stopPropagation();
    navigate("/productdetails/4");
  };

  return (
    <div className="billing-banner-wrapper">
      <div className="billing-banner-card-image-layout" onClick={handleWatchDemo}>
        {/* Full Cashio Banner Graphic */}
        <div className="billing-banner-img-container">
          <img
            src={CashioBanner}
            alt="Cashio Billing Software Banner"
            className="billing-full-banner-img"
          />

          {/* Top-Right AI Demo Badge */}
          <div className="billing-banner-top-badge">
            <span className="live-dot-pulse"></span>
            <span>28 AI Demo Videos Available</span>
          </div>

          {/* Floating Action Bar at the Bottom */}
          <div className="billing-banner-floating-actions">
            <button
              type="button"
              className="billing-float-btn-demo"
              onClick={handleWatchDemo}
            >
              <div className="billing-btn-play-circle">
                <Play size={16} fill="white" />
              </div>
              <span>Watch AI Demo</span>
            </button>

            <button
              type="button"
              className="billing-float-btn-details"
              onClick={handleViewDetails}
            >
              <span>View Details</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Center Play Overlay on Hover */}
          <div className="billing-banner-center-play">
            <div className="center-play-circle">
              <Play size={26} fill="currentColor" />
            </div>
            <span className="center-play-text">Click to Watch Demo Tour</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingBanner;
