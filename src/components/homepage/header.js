
import React, { useState, useEffect } from "react";
import "./header.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
const navigate = useNavigate();
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle scroll: shrink header + auto close menu
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      // Close menu when scrolling
      if (scrolled && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.header-container')) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen, isMobile]);

  // Toggle menu
  const handleMenuClick = (e) => {
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  // Close menu when link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`header ${isScrolled ? "scrolled" : ""} ${
        isScrolled && !menuOpen ? "small" : ""
      }`}
    >
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo" onClick={() => navigate("/")}>
          <img src={logo} alt="PCS Logo" />
        </div>

        {/* Desktop Menu - show when NOT scrolled OR when menu is open */}
        {!isMobile && (!isScrolled || menuOpen) && (
          <nav className={`header-menu ${menuOpen ? "show-menu" : ""}`}>
            <a href="/aboutbanner" onClick={handleLinkClick}>About</a>
            <a href="/servicespage" onClick={handleLinkClick}>Services</a>
            <a href="/works" onClick={handleLinkClick}>Works</a>
            <a href="/products" onClick={handleLinkClick}>Products</a>
            <a href="/blog" onClick={handleLinkClick}>Blog</a>
          </nav>
        )}

        {/* Mobile Menu - separate positioning */}
        {isMobile && menuOpen && (
          <nav className="header-menu show-menu">
            <a href="#about" onClick={handleLinkClick}>About</a>
            <a href="#services" onClick={handleLinkClick}>Services</a>
            <a href="#works" onClick={handleLinkClick}>Works</a>
            <a href="#products" onClick={handleLinkClick}>Products</a>
            <a href="#blog" onClick={handleLinkClick}>Blog</a>
            <button className="header-btn" onClick={handleLinkClick}>
              Let's Discuss
            </button>
          </nav>
        )}

        {/* Right side */}
        <div className="header-right">
          {/* Desktop: "Let's Discuss" visible at top OR when menu is open */}
          {!isMobile && (!isScrolled || menuOpen) && (
            <button className="header-btn">Let's Discuss</button>
          )}
<button className="menu-togglemobile-btn" onClick={handleMenuClick}>
              Menu
            </button>
       {/* Small header → show Menu button */}
          {isScrolled && !menuOpen && (
            <button className="menu-toggle-btn" onClick={handleMenuClick}>
              Menu
            </button>
          )}

          {/* Full header opened while scrolled → show Close button (optional) */}
          {menuOpen && isScrolled && (
            <button
              className="menu-toggleclose-btn"
              onClick={handleMenuClick}
              style={{ marginLeft: "8px" }}
            >
              Close
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;