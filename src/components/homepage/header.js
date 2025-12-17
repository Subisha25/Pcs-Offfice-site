import React, { useState, useEffect } from "react";
import "./header.css";
import logo from "../assets/logo.png"; 
import logoSmall from "../assets/bluelogo.png"; // 🔥 Puthiya logo inga import pannunga
import { useNavigate } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      if (scrolled && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

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

  useEffect(() => {
    if (menuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen, isMobile]);

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setMenuOpen(prev => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`header ${isScrolled ? "scrolled" : ""} ${
        isScrolled && !menuOpen ? "small" : ""
      }`}
    >
      {/* Click seiyum pothu expand aaga handleMenuClick inga irukkum */}
      <div className="header-container" onClick={isScrolled ? handleMenuClick : undefined}>
        
        {/* Logo Logic: Scroll-il matum chinna logo, click seithal full logo */}
        <div className="header-logo" onClick={(e) => {
          if(!isScrolled) navigate("/");
        }}>
          <img 
            src={(isScrolled && !menuOpen) ? logoSmall : logo} 
            alt="PCS Logo" 
          />
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

        {/* Mobile Menu */}
        {isMobile && menuOpen && (
          <nav className="header-menu show-menu">
            <a href="/aboutbanner" onClick={handleLinkClick}>About</a>
            <a href="/servicespage" onClick={handleLinkClick}>Services</a>
            <a href="/works" onClick={handleLinkClick}>Works</a>
            <a href="/products" onClick={handleLinkClick}>Products</a>
            <a href="/pcstrainingsite" onClick={handleLinkClick}>Training</a>
            <button className="header-btn" onClick={handleLinkClick}>
              Let's Discuss
            </button>
          </nav>
        )}

        {/* Right side */}
        <div className="header-right">
          {!isMobile && (!isScrolled || menuOpen) && (
            <button className="header-btn" onClick={() => navigate("/contact")}>
              Let's Discuss
            </button>
          )}

          {/* Hamburger button for mobile or when scrolled */}
          {(isMobile || (isScrolled && !menuOpen)) && (
            <button
              className={`menu-togglemobile-btn ${menuOpen ? "close" : ""}`}
              onClick={handleMenuClick}
            >
              {menuOpen ? (
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" />
                </svg>
              ) : (
                <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          )}

          {isScrolled && !menuOpen && !isMobile && (
            <button className="menu-toggle-btn" onClick={handleMenuClick}>
              Menu
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;