// import React, { useState, useEffect, useRef } from "react";
// import "./header.css";
// import logo from "../assets/logo.png";
// import logoSmall from "../assets/bluelogo.png";
// import { useNavigate } from "react-router-dom";

// function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);      // container open/close
//   const [menuReveal, setMenuReveal] = useState(false);  // menu items stagger reveal
//   const [isMobile, setIsMobile] = useState(false);

//   const openTimer = useRef(null);
//   const closeTimer = useRef(null);

//   const navigate = useNavigate();

//   const clearTimers = () => {
//     if (openTimer.current) clearTimeout(openTimer.current);
//     if (closeTimer.current) clearTimeout(closeTimer.current);
//   };

//   const openMenu = () => {
//     clearTimers();
//     setMenuOpen(true);
//     setMenuReveal(false);

//     // ✅ background expand finish ஆன பிறகு தான் menu show
//     const bgDelay = isMobile ? 120 : 260; // mobile faster, desktop smoother
//     openTimer.current = setTimeout(() => setMenuReveal(true), bgDelay);
//   };

//   const closeMenu = () => {
//     clearTimers();
//     setMenuReveal(false);

//     // ✅ menu hide ஆகிட்டுப் பிறகு container close
//     closeTimer.current = setTimeout(() => {
//       setMenuOpen(false);
//     }, 10);
//   };

//   const handleToggleButtonClick = (e) => {
//     e.stopPropagation();
//     if (menuOpen) closeMenu();
//     else openMenu();
//   };

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth <= 768);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrolled = window.scrollY > 50;
//       setIsScrolled(scrolled);

//       // scroll panna open menu close
//       if (scrolled && menuOpen) closeMenu();
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [menuOpen, isMobile]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuOpen && !event.target.closest(".header-container")) {
//         closeMenu();
//       }
//     };

//     if (menuOpen) document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [menuOpen]);

//   useEffect(() => {
//     if (menuOpen && isMobile) document.body.style.overflow = "hidden";
//     else document.body.style.overflow = "unset";
//   }, [menuOpen, isMobile]);

//   const handleMenuClick = (e) => {
//     e.stopPropagation();
//     // ✅ only open when scrolled + closed
//     if (isScrolled && !menuOpen) openMenu();
//   };

//   const handleLinkClick = () => {
//     closeMenu();
//   };

//   useEffect(() => {
//     return () => clearTimers();
//   }, []);

//   return (
//     <header
//       className={`header ${isScrolled ? "scrolled" : ""} ${
//         isScrolled && !menuOpen ? "small" : ""
//       } ${menuOpen ? "menu-open" : ""} ${menuReveal ? "menu-reveal" : ""}`}
//     >
//       <div
//         className="header-container"
//         onClick={isScrolled ? handleMenuClick : undefined}
//       >
//         {/* Logo */}
//         <div
//           className="header-logo"
//           onClick={(e) => {
//             e.stopPropagation();
//             navigate("/");
//           }}
//         >
//           <img
//             src={isScrolled && !menuOpen ? logoSmall : logo}
//             alt="PCS Logo"
//           />
//         </div>

//         {/* Desktop Menu */}
//         {!isMobile && (!isScrolled || menuOpen) && (
//           <nav className={`header-menu ${menuOpen ? "show-menu" : ""}`}>
//             <a href="/aboutbanner" onClick={handleLinkClick}>About</a>
//             <a href="/servicespage" onClick={handleLinkClick}>Services</a>
//             <a href="/products" onClick={handleLinkClick}>Products</a>
//             <a href="/pcstrainingsite" onClick={handleLinkClick}>Training</a>
//           </nav>
//         )}

//         {/* Mobile Menu */}
//         {isMobile && menuOpen && (
//           <nav className="header-menu show-menu">
//             <a href="/aboutbanner" onClick={handleLinkClick}>About</a>
//             <a href="/servicespage" onClick={handleLinkClick}>Services</a>
//             <a href="/products" onClick={handleLinkClick}>Products</a>
//             <a href="/pcstrainingsite" onClick={handleLinkClick}>Training</a>
//             <button className="header-btn" onClick={() => { closeMenu(); navigate("/contact"); }}>
//               Let's Discuss
//             </button>
//           </nav>
//         )}

//         {/* Right side */}
//         <div className="header-right">
//           {!isMobile && (!isScrolled || menuOpen) && (
//             <button className="header-btn" onClick={() => navigate("/contact")}>
//               Let's Discuss
//             </button>
//           )}

//           {/* Hamburger (mobile OR scrolled compact) */}
//           {(isMobile || (isScrolled && !menuOpen)) && (
//             <button
//               className={`menu-togglemobile-btn ${menuOpen ? "close" : ""}`}
//               onClick={handleToggleButtonClick}
//             >
//               {menuOpen ? (
//                 <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
//                   <path d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" />
//                 </svg>
//               ) : (
//                 <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
//                   <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                 </svg>
//               )}
//             </button>
//           )}

//           {/* Desktop "Menu" button (when compact) */}
//           {isScrolled && !menuOpen && !isMobile && (
//             <button className="menu-toggle-btn" onClick={handleMenuClick}>
//               Menu
//             </button>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import logo from "../assets/logo.png";
import logoSmall from "../assets/bluelogo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);      // manual open/close
  const [menuReveal, setMenuReveal] = useState(false);  // stagger reveal
  const [isMobile, setIsMobile] = useState(false);

  // ✅ NEW: top-scroll animation helper
  const [autoOpenAnim, setAutoOpenAnim] = useState(false);
  const prevScrolledRef = useRef(false);

  const openTimer = useRef(null);
  const closeTimer = useRef(null);

  const navigate = useNavigate();

  const clearTimers = () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const openMenu = () => {
    clearTimers();
    setAutoOpenAnim(false);   // ✅ stop auto mode if any
    setMenuOpen(true);
    setMenuReveal(false);

    const bgDelay = isMobile ? 120 : 260;
    openTimer.current = setTimeout(() => setMenuReveal(true), bgDelay);
  };

  const closeMenu = () => {
    clearTimers();
    setAutoOpenAnim(false);   // ✅ stop auto mode if any
    setMenuReveal(false);

    closeTimer.current = setTimeout(() => {
      setMenuOpen(false);
    }, 10);
  };

  const handleToggleButtonClick = (e) => {
    e.stopPropagation();
    if (menuOpen) closeMenu();
    else openMenu();
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ✅ UPDATED scroll handler: top-ku varumbothu same animation trigger
  useEffect(() => {
    prevScrolledRef.current = window.scrollY > 50;

    const handleScroll = () => {
      const scrolledNow = window.scrollY > 50;

      // If scrolling down while manual menu open → close it
      if (scrolledNow && menuOpen) closeMenu();

      // Detect change only
      if (scrolledNow !== prevScrolledRef.current) {
        setIsScrolled(scrolledNow);

        // ✅ when coming back to TOP (true -> false) trigger sequence animation
        if (prevScrolledRef.current === true && scrolledNow === false && !menuOpen) {
          clearTimers();

          // temporary open class to hide menu first (bg expand), then reveal
          setAutoOpenAnim(true);
          setMenuReveal(false);

          const bgDelay = isMobile ? 120 : 260;
          openTimer.current = setTimeout(() => {
            setMenuReveal(true);

            // after animation starts, remove autoOpenAnim (menu stays visible normally)
            setTimeout(() => setAutoOpenAnim(false), 30);
          }, bgDelay);
        } else {
          // reset auto state when scrolling down
          if (scrolledNow) {
            setAutoOpenAnim(false);
            setMenuReveal(false);
          }
        }

        prevScrolledRef.current = scrolledNow;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuOpen, isMobile]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(".header-container")) {
        closeMenu();
      }
    };

    if (menuOpen) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen && isMobile) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [menuOpen, isMobile]);

  const handleMenuClick = (e) => {
    e.stopPropagation();
    if (isScrolled && !menuOpen) openMenu();
  };

  const handleLinkClick = () => closeMenu();

  useEffect(() => {
    return () => clearTimers();
  }, []);

  // ✅ IMPORTANT: use menuOpen OR autoOpenAnim for the animation CSS
  const isAnimOpen = menuOpen || autoOpenAnim;

  return (
  <header
  className={`header 
    ${isScrolled ? "scrolled" : ""} 
    ${isScrolled && !menuOpen && !isMobile ? "small" : ""}
    ${isAnimOpen ? "menu-open" : ""} 
    ${menuReveal ? "menu-reveal" : ""}
  `}
>

      <div
        className="header-container"
        onClick={isScrolled ? handleMenuClick : undefined}
      >
        {/* Logo */}
        <div
          className="header-logo"
          onClick={(e) => {
            e.stopPropagation();
            navigate("/");
          }}
        >
          <img src={isScrolled && !menuOpen && !isMobile? logoSmall : logo} alt="PCS Logo" />
        </div>

        {/* Desktop Menu */}
        {!isMobile && (!isScrolled || menuOpen) && (
          <nav className={`header-menu ${menuOpen ? "show-menu" : ""}`}>
            <a href="/aboutbanner" onClick={handleLinkClick}>About</a>
            <a href="/servicespage" onClick={handleLinkClick}>Services</a>
            <a href="/products" onClick={handleLinkClick}>Products</a>
            <a href="/pcstrainingsite" onClick={handleLinkClick}>Training</a>
          </nav>
        )}

        {/* Mobile Menu */}
        {isMobile && menuOpen && (
          <nav className="header-menu show-menu">
            <a href="/aboutbanner" onClick={handleLinkClick}>About</a>
            <a href="/servicespage" onClick={handleLinkClick}>Services</a>
            <a href="/products" onClick={handleLinkClick}>Products</a>
            <a href="/pcstrainingsite" onClick={handleLinkClick}>Training</a>
            <button
              className="header-btn"
              onClick={() => {
                closeMenu();
                navigate("/contact");
              }}
            >
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

          {(isMobile || (isScrolled && !menuOpen)) && (
            <button
              className={`menu-togglemobile-btn ${menuOpen ? "close" : ""}`}
              onClick={handleToggleButtonClick}
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
