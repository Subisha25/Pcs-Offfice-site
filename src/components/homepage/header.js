
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
const handleMenuClick = () => {
  setMenuOpen(true);   // Always open only
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
      <div className="header-container"  onClick={handleMenuClick}>
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
            <a href="/pcstrainingsite" onClick={handleLinkClick}>Training</a>
          </nav>
        )}

        {/* Mobile Menu - separate positioning */}
        {isMobile && menuOpen && (
          <nav className="header-menu show-menu">
            <a href="/aboutbanner" onClick={handleLinkClick}>About</a>
            <a href="/servicespage" onClick={handleLinkClick}>Services</a>
            <a href="/works" onClick={handleLinkClick}>Works</a>
            <a href="/products" onClick={handleLinkClick}>Products</a>
            <a href="/pcstraningsite" onClick={handleLinkClick}>Training</a>
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
<button
  className={`menu-togglemobile-btn ${menuOpen ? "close" : ""}`}
  onClick={handleMenuClick}
>
  {menuOpen ? (
    // Close Icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="24"
      height="24"
    >
      <path
        fillRule="evenodd"
        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  ) : (
    // Menu Icon (Hamburger)
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )}
</button>


              {/* <button
      className={`menu-togglemobile-btn ${menuOpen ? "close" : ""}`}
      onClick={handleMenuClick}
    >
      {menuOpen ? "Close" : "Menu"}
    </button> */}
       {/* Small header → show Menu button */}
          {isScrolled && !menuOpen && (
            <button className="menu-toggle-btn">
              Menu
            </button>
          )}

          {/* Full header opened while scrolled → show Close button (optional) */}
          {/* {menuOpen && isScrolled && (
            <button
              className="menu-toggleclose-btn"
              onClick={handleMenuClick}
              style={{ marginLeft: "8px" }}
            >
              Close
            </button>
          )} */}
        </div>
      </div>
    </header>
  );
}

export default Header;