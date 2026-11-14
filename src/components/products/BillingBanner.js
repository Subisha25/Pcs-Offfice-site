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

  const handleLearnMore = (e) => {
    e.stopPropagation();
    navigate("/productdetails/4");
  };

  return (
    <div className="billing-banner-wrapper">
      <div className="billing-banner-card-image-layout" onClick={handleLearnMore}>
        {/* Full Cashio Banner Graphic */}
        <div className="billing-banner-img-container">
          <img
            src={CashioBanner}
            alt="Billing Software Banner"
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
                <Play size={15} fill="white" />
              </div>
              <span>Watch AI Demo</span>
            </button>

            <button
              type="button"
              className="billing-float-btn-learn"
              onClick={handleLearnMore}
            >
              <span>Learn More</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingBanner;
