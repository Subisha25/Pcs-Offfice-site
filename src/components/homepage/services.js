import React, { useState, useEffect, useRef } from "react";

import first from "../assets/services/1.png";
import Second from "../assets/services/2.png";
import Third from "../assets/services/3.png";
import Four from "../assets/services/4.png";
import BackgroundImg from "../assets/services/backgroundImgae.webp";
import ArrowImg from "../assets/services/arrow.png";
import ServiceBtnImg from "../assets/allheadingicon/servicesicon.png";
import CommonTopTag from '../common/toptag';
import { useNavigate } from "react-router-dom";
// import "./workprocess.css";


const ServicesSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const [filledWords, setFilledWords] = useState(0);

  const paragraph = [
    "From idea to execution we've got you covered"
  ].join(" ").split(" ");

  const maxWords = paragraph.length;
  const lastScrollY = useRef(window.scrollY);

  /* ================= TEXT SCROLL FILL ================= */
  useEffect(() => {
    function onScroll() {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const centerY = viewportH / 2;

      const currentScroll = window.scrollY;
      const scrollingDown = currentScroll > lastScrollY.current;
      const scrollingUp = currentScroll < lastScrollY.current;
      lastScrollY.current = currentScroll;

      const distanceFromCenter = centerY - rect.top;
      const fillWindow = viewportH * 0.35;

      let progress = distanceFromCenter / fillWindow;
      progress = Math.max(0, Math.min(1, progress));

      const targetWords = Math.floor(progress * maxWords);

      if (scrollingDown && targetWords > filledWords) {
        setFilledWords(targetWords);
      }

      if (scrollingUp && targetWords < filledWords) {
        setFilledWords(targetWords);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [filledWords, maxWords]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const services = [
    {
      title: 'Web Design',
      subtitle: '& Development',
      route: "/webdesign",
      description: 'We build high-performance, scalable and visually stunning websites tailored to your business goals. From corporate websites to advanced web applications, our development approach ensures speed, security, clean UI and a seamless user experience across all devices.',
      gradient: 'radial-gradient(circle at 0% 100%, rgba(255, 0, 110, 0.05) 0%, rgba(255, 255, 255, 1) 30%, rgba(107, 76, 154, 0.05) 100%)',
      image: first,
      overlay:
        'linear-gradient(180deg, rgba(255,0,110,0.55) 0%, rgba(3,4,94,0.75) 100%)'
    },
    {
      title: 'App Design',
      subtitle: '& Development',
      route: "/appdesign",
      description: 'We create intuitive, fast and robust mobile applications for Android, iOS and cross-platform environments. Our team handles everything—from UX planning and interface design to backend development and cloud deployment—ensuring your app performs flawlessly from day one.',
      gradient: 'radial-gradient(circle at 0% 100%, rgba(255, 0, 110, 0.05) 0%, rgba(255, 255, 255, 1) 30%, rgba(107, 76, 154, 0.05) 100%)',
      image: Second,
      overlay:
        'linear-gradient(180deg, rgba(131,56,236,0.55) 0%, rgba(58,12,163,0.75) 100%)'
    },
    {
      title: 'Branding &',
      subtitle: 'Creative Services',
      route: "/branding",
      description: 'We craft strong brand identities that communicate who you are and what you stand for. Our creative services include brand strategy, logo design, UI/UX guidelines, visual systems and complete digital branding solutions that help your business look polished and professional.',
      gradient: 'radial-gradient(circle at 100% 0%, rgba(255, 0, 110, 0.05) 0%, rgba(255, 255, 255, 1) 30%, rgba(107, 76, 154, 0.05) 100%)',
      image: Third,
      overlay:
        'linear-gradient(180deg, rgba(131,56,236,0.55) 0%, rgba(58,12,163,0.75) 100%)'
    },
    {
      title: 'Digital',
      subtitle: 'Marketing',
      route: "/digitalmarketing",
      description: 'We help your business grow online through data-driven digital marketing strategies. From SEO and social media management to paid campaigns and content marketing, we ensure your brand reaches the right audience and converts effectively.',
      gradient: 'radial-gradient(circle at 0% 100%, rgba(255, 0, 110, 0.05) 0%, rgba(255, 255, 255, 1) 30%, rgba(107, 76, 154, 0.05) 100%)',
      image: Four,
      overlay:
        'linear-gradient(180deg, rgba(131,56,236,0.55) 0%, rgba(58,12,163,0.75) 100%)'
    }
  ];

  return (
    <>
    <div className="services-container" style={{
      backgroundImage: `url(${BackgroundImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      minHeight: '100vh',
      padding: ' 40px 20px',
      backgroundAttachment: 'scroll'
    }}>


      {/* <div className="services-header" style={{
        textAlign: 'center',
        marginBottom: '60px',
        position: 'relative',
        zIndex: 1
      }}>
        <CommonTopTag text='Services' icon={ServiceBtnImg} />

        <h1
          className="services-title"
          style={{
            fontFamily: "WF Visual Sans",
            fontSize: '48px',
            fontWeight: '500',
            fontStyle: 'Medium',
            color: '#1a1a2e',
            lineHeight: '60px',
            letterSpacing: "1%",
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: "center"
          }}
        >
          From idea to{" "}
          <span
            style={{
              fontFamily: "Playfair Display",
              fontWeight: '600',
              fontStyle: 'italic',
              fontSize: '54px',
              lineHeight: '60px',
              letterSpacing: "1%",
              background: "linear-gradient(90deg, #03045E 0%, #FF006E 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            execution
          </span>{" "}
          we've
          <br />
          got you covered
        </h1>
      </div> */}
      <div className="workprocess-section" ref={sectionRef} style={{ padding: '20px 20px 60px 20px' }}> {/* Section padding-ah koraichuten */}
        <div className="container" style={{ marginTop: '-40px', position: 'relative', zIndex: '10' }}> {/* Negative margin mela thallum */}

          <CommonTopTag text="Services" icon={ServiceBtnImg} />

          {/* <p className="animated-text">
            {paragraph.map((word, index) => (
              <span
                key={index}
                className={`word ${index < filledWords ? "filled" : ""
                  } ${word === "execution" ? "gradient-word" : ""}`}
              >
                {word + " "}
              </span>
            ))}
          </p> */}
            <p className="animated-text2">
            {paragraph.map((word, index) => (
              <span
                key={index}
                className={`word 
                  ${index < filledWords ? "filled" : ""} 
                  ${word ===  "execution" ? "gradient-word" : ""}
                `}
              >
                {word + " "}
              </span>
            ))}
          </p>


        </div>
      </div>
      <div className="services-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '40px',
        maxWidth: '1300px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
        alignItems: 'stretch'
      }}>
        {services.map((service, index) => {
          const isHovered = activeCard === index;

          // Text colors: WHITE when hovered, black/dark gray when not hovered
          const titleColor = isHovered ? '#ffffff' : '#1a1a2e';
          const subtitleColor = isHovered ? '#ffffff' : '#1a1a2e';
          const descriptionColor = isHovered ? '#ffffff' : '#7D7D7D';

          return (
            <div
              key={index}
              className={`service-card ${isHovered ? 'active' : ''}`}
              onMouseEnter={() => !isMobile && setActiveCard(index)}
              onMouseLeave={() => !isMobile && setActiveCard(null)}

              style={{
                width: '100%',
                borderRadius: '25px',
                padding: '35px 30px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: isHovered
                  ? '0 10px 40px rgba(255, 255, 255, 0.3)'
                  : '0px 8px 20px rgba(0, 0, 0, 0.15)',
                minHeight: '350px',
                display: 'flex',
                flexDirection: 'column',
                background: isHovered
                  ? '#ffffff'  // Hover → White
                  : service.gradient,

                color: isHovered ? '#ffffff' : '#1a1a2e',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                isolation: 'isolate',
                transform: isHovered ? 'translateY(-10px)' : 'translateY(0)'
              }}
            >

              <div className="card-header" style={{
                marginBottom: '15px',
                position: 'relative',
                zIndex: 6   // ⭐ MAIN FIX
              }}>
                <h3 className="card-title" style={{
                  fontSize: '38px',
                  fontWeight: '300',
                  marginBottom: '2px',
                  fontFamily: '"WF Visual Sans", sans-serif',
                  color: titleColor,
                  transition: 'color 0.4s ease'
                }}>
                  {service.title} 
                </h3>
                <h4 className="card-subtitle" style={{
                  fontFamily: '"WF Visual Sans", sans-serif',
                  fontSize: '38px',
                  fontWeight: '300',
                  opacity: '1',
                  color: subtitleColor,
                  transition: 'all 0.4s ease',
                  marginBottom: '20px'
                }}>
                  {service.subtitle}
                </h4>


                <button
                  className="card-arrow"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(service.route);
                  }}
                  style={{
                    position: 'absolute',
                    right: '25px',
                    top: '25px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '10px',
                    borderRadius: '50%',
                    transition: 'all 0.4s ease',
                    zIndex: 3
                  }}
                >
                  <img
                    src={ArrowImg}
                    alt="arrow"
                    style={{
                      width: '22px',
                      height: '22px',
                      filter: isHovered ? 'invert(1)' : 'invert(0)',
                      transition: 'all 0.4s ease',
                      transform: isHovered ? 'translateX(5px)' : 'translateX(0)'
                    }}
                  />
                </button>

              </div>
              {/* Image section */}
              <div
                className="card-image"
                style={{
                  position: 'absolute',
                  borderRadius: '25px',
                  overflow: 'hidden',

                  top: isMobile ? '0' : isHovered ? '0' : '170px',
                  left: isMobile ? '0' : isHovered ? '0' : '30px',

                  width: isMobile ? '100%' : isHovered ? '100%' : '130px',
                  height: isMobile ? '100%' : isHovered ? '100%' : '70px',

                  transition: isMobile
                    ? 'none'
                    : 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',

                  zIndex: 1,
                  pointerEvents: 'none'
                }}
              >

                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',

                    // borderRadius: isMobile ? '25px' : isHovered ? '25px' : '100px',

                    transition: isMobile
                      ? 'none'
                      : 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />


                {/* ✅ FIRST CARD COLOR OVERLAY ONLY */}
                {(isHovered || isMobile) && (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: service.overlay,
                      zIndex: 2
                    }}
                  />
                )}

              </div>




              <div className="card-content" style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative',
                zIndex: 5,
                color: isHovered ? '#ffffff' : '#1a1a2e',
                transition: 'color 0.4s ease',
                alignItems: 'flex-start',
                justifyContent: 'space-between'
              }}>
                <div className="card-top-content">


                </div>


                <p className="card-description" style={{
                  fontFamily: '"WF Visual Sans"',
                  fontWeight: '300',
                  fontSize: '16px',
                  lineHeight: '1.5',
                  letterSpacing: '1px',
                  color: descriptionColor, // WHITE on hover
                  marginTop: isMobile || isHovered ? '0' : '80px',
                  marginBottom: '10px',
                  position: 'relative',
                  zIndex: 2,
                  transition: 'color 0.4s ease'
                }}>
                  {service.description}
                </p>

              </div>
            </div>
          );
        })}
      </div>

      {/* Media Queries - unchanged */}
      <style jsx>{`

@media (max-width: 768px) {
 /* ✅ FORCE WHITE TEXT ON MOBILE */
  .service-card .card-title,
  .service-card .card-subtitle,
  .service-card .card-description {
    color: #ffffff !important;
  }
    

  /* Optional – description konjam clear aa irukka */
  .service-card .card-description {
    opacity: 0.95;
  }
  .services-grid {
    grid-template-columns: 1fr !important;
    gap: 20px !important;
  }


  .card-description {
    font-size: 18px !important;     /* 🔽 size reduced */
    line-height: 1.4 !important;
    margin-bottom: 30px !important;

    display: block !important;
    overflow: visible !important;
    white-space: normal !important; /* ✅ full content shows */
  }
      .card-arrow img {
    filter: invert(1) !important;
  }
  .service-card {
    width: 100% !important;
    min-height: 340px !important;   /* 🔽 height reduced */
    padding: 20px !important;
    border-radius: 22px !important;
    padding: 22px !important;
  }
}

@media (max-width: 768px) {

  .card-image {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 0 !important;
    z-index: 1 !important;
  }

  .card-image img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    border-radius: 0 !important;
  }

  .service-card {
    position: relative !important;
    overflow: hidden !important;
  }

  /* Make sure text stays above image */
  .card-content,
  .card-header {
    position: relative !important;
    z-index: 5 !important;
    padding-top:20px
  }
}
@media (max-width: 768px) {
 

      @media (max-width: 768px) {
  .card-title,
  .card-subtitle {
    line-height: 1.1 !important;   /* 🔽 kammi */
    margin-bottom: 4px !important;
  }
  .card-description {
    margin-top: 16px !important;   /* ⬇️ title-kku keela gap */
    line-height: 1.45 !important;
  }
}


        @media (max-width: 480px) {
          .services-container {
            padding:65px 12px 45px 12px !important;
          }
          .services-title {
            font-size: 20px !important;
            line-height: 28px !important;
          }
          .service-card {
            padding: 18px !important;
            border-radius: 18px !important;
          }
          .card-title,
          .card-subtitle {
          mrgin-bottom:0px !important;
            font-size: 30px !important;
          }
          .card-description {
            fontSize: 13px !important;
          }
          .card-arrow {
            right: 12px !important;
            top: 12px !important;
          }
  .services-grid {
    margin-top: -40px !important;   /* 👈 cards mela thallum */
        }

  .service-card .card-description {
    margin-top: -12px !important;   /* 👈 description mela varum */
}

/* ================= MOBILE VIEW CARD SPACING FIX ================= */
@media (max-width: 768px) {

  /* 1️⃣ SAME TOP & BOTTOM DISTANCE INSIDE CARD */
  .service-card {
    padding-top: 26px !important;
    padding-bottom: 26px !important;
  }

  /* 2️⃣ HEADING – LITTLE DOWN (LINE HEIGHT + SPACING) */
  .card-title,
  .card-subtitle {
    line-height: 1.15 !important;   /* konjam relaxed */
    margin-top: 6px !important;     /* 👇 little down */
    margin-bottom: 6px !important;
  }

  /* 3️⃣ PARAGRAPH – LITTLE UP */
  .card-description {
    margin-top: 4px !important;     /* 👆 paragraph mela varum */
  }
    /* ================= EXTRA COMPACT CARD – MOBILE ONLY ================= */
@media (max-width: 768px) {

  /* 🔽 Card overall height */
  .service-card {
    min-height: 240px !important;   /* 🔥 more reduced */
    padding: 14px !important;       /* 🔥 tight padding */
  }

  /* 🔽 Header spacing reduce */
  .card-header {
    margin-bottom: 4px !important;

  }

  /* 🔽 Title & subtitle tight */
  .card-title,
  .card-subtitle {
    margin-top: 2px !important;
    margin-bottom: 2px !important;
    line-height: 1.1 !important;
  }

  /* 🔽 Description space reduce */
  .card-description {
    margin-top: 2px !important;
    margin-bottom: 4px !important;
    line-height: 1.35 !important;
  }

  /* 🔽 Stop vertical stretch */
  .card-content {
    justify-content: flex-start !important;
  }
}
  /* ================= MOVE CARD HEADER UP – MOBILE ONLY ================= */
@media (max-width: 768px) {

  .card-header {
    padding-top: 6px !important;   /* 👆 mela thallum */
    margin-top: -6px !important;   /* 👆 extra lift */
  }
}


}

    
      `}</style>
      
    </div>
{/* Bottom Services Strip - Carousel */}
<div className="services-strip">
  <div className="strip-track">
    <span>HTML5</span>
    <span className="dot">•</span>
    <span>CSS3</span>
    <span className="dot">•</span>
    <span>JavaScript</span>
    <span className="dot">•</span>
    <span>React.js</span>
    <span className="dot">•</span>

    <span>Node.js</span>
    <span className="dot">•</span>
    <span>Java</span>
    <span className="dot">•</span>
    <span>REST APIs</span>
    <span className="dot">•</span>
    <span>Databases</span>
    <span className="dot">•</span>

    <span>React Native</span>
    <span className="dot">•</span>
    <span>Android</span>
    <span className="dot">•</span>
    <span>iOS</span>
    <span className="dot">•</span>

    <span>Python</span>
    <span className="dot">•</span>
    <span>Django</span>
    <span className="dot">•</span>
    <span>Flask</span>
    <span className="dot">•</span>

    <span>Machine Learning</span>
    <span className="dot">•</span>
    <span>AI Models</span>
    <span className="dot">•</span>

    <span>SEO</span>
    <span className="dot">•</span>
    <span>Google Ads</span>
    <span className="dot">•</span>
    <span>Social Media Marketing</span>

    {/* Duplicate for infinite loop */}
    <span className="dot">•</span>

    <span>HTML5</span>
    <span className="dot">•</span>
    <span>CSS3</span>
    <span className="dot">•</span>
    <span>JavaScript</span>
    <span className="dot">•</span>
    <span>React.js</span>
    <span className="dot">•</span>
    <span>Node.js</span>
    <span className="dot">•</span>
    <span>Python</span>
    <span className="dot">•</span>
    <span>SEO</span>
  </div>
</div>


    </>
  );
};

export default ServicesSection;