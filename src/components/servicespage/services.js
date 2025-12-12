// import React from "react";
// import tagicon from "../assets/Union.png"; // adjust path if needed
// import '../homepage/aboutus.css';
// import ServicesSection from "../homepage/services";
// export default function Services() {
//   return (
//     <div>
//     <ServicesSection />
//     </div>
//   );
// }


import React, { useState } from 'react';
import first from "../assets/services/1.png";
import Second from "../assets/services/2.png";
import Third from "../assets/services/3.png";
import Four from "../assets/services/4.png";
import BackgroundImg from "../assets/services/backgroundImgae.webp";
import ArrowImg from "../assets/services/arrow.png";
import ServiceBtnImg from "../assets/services/tool.png";
import CommonTopTag from '../common/toptag';
import { useNavigate } from "react-router-dom";

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);
  const navigate = useNavigate();

  const services = [
    {
      title: 'Web Design',
      subtitle: '& Development',
      route: "/webdesign",
      description: 'We build high-performance, scalable and visually stunning websites tailored to your business goals. From corporate websites to advanced web applications, our development approach ensures speed, security, clean UI and a seamless user experience across all devices.',
      gradient: 'radial-gradient(circle at 0% 100%, rgba(255, 0, 110, 0.05) 0%, rgba(255, 255, 255, 1) 30%, rgba(107, 76, 154, 0.05) 100%)',
      image: first,
      light: true
    },
    {
      title: 'App Design',
      subtitle: '& Development',
      route: "/appdesign",
      description: 'We create intuitive, fast and robust mobile applications for Android, iOS and cross-platform environments. Our team handles everything—from UX planning and interface design to backend development and cloud deployment—ensuring your app performs flawlessly from day one.',
      gradient: 'radial-gradient(circle at 0% 100%, rgba(255, 0, 110, 0.05) 0%, rgba(255, 255, 255, 1) 30%, rgba(107, 76, 154, 0.05) 100%)',
      image: Second,
      light: true
    },
    {
      title: 'Branding &',
      subtitle: 'Creative Services',
      route: "/branding",
      description: 'We craft strong brand identities that communicate who you are and what you stand for. Our creative services include brand strategy, logo design, UI/UX guidelines, visual systems and complete digital branding solutions that help your business look polished and professional.',
      gradient: 'radial-gradient(circle at 100% 0%, rgba(255, 0, 110, 0.05) 0%, rgba(255, 255, 255, 1) 30%, rgba(107, 76, 154, 0.05) 100%)',
      image: Third,
      light: true
    },
    {
      title: 'Digital',
      subtitle: 'Marketing',
      route: "/digitalmarketing",
      description: 'We help your business grow online through data-driven digital marketing strategies. From SEO and social media management to paid campaigns and content marketing, we ensure your brand reaches the right audience and converts effectively.',
      gradient: 'radial-gradient(circle at 0% 100%, rgba(255, 0, 110, 0.05) 0%, rgba(255, 255, 255, 1) 30%, rgba(107, 76, 154, 0.05) 100%)',
      image: Four,
      light: true
    }
  ];

  return (
    <div className="services-container" style={{
      backgroundImage: `url(${BackgroundImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      minHeight: '100vh',
      padding: '100px 40px',
      backgroundAttachment: 'fixed'
    }}>
      {/* Background overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(240, 240, 245, 0.7)',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>

      <div className="services-header" style={{
        textAlign: 'center',
        marginBottom: '60px',
        position: 'relative',
        zIndex: 1
      }}>
        {/* <CommonTopTag text='Services' icon={ServiceBtnImg} /> */}

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
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
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
                  fontSize: '32px',
                  fontWeight: '400',
                  marginBottom: '2px',
                  fontFamily: '"WF Visual Sans", sans-serif',
                  color: titleColor,
                  transition: 'color 0.4s ease'
                }}>
                  {service.title}
                </h3>
                <h4 className="card-subtitle" style={{
                  fontFamily: '"WF Visual Sans", sans-serif',
                  fontSize: '32px',
                  fontWeight: '400',
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
                  top: isHovered ? '0' : '140px',
                  left: isHovered ? '0' : '30px',
                  width: isHovered ? '100%' : '130px',
                  height: isHovered ? '100%' : '70px',
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
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
                    borderRadius: isHovered ? '25px' : '100px',
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />

                {/* ✅ FIRST CARD COLOR OVERLAY ONLY */}
                {isHovered && index === 0 && (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '25px',
                      background:
                        'linear-gradient(180deg, rgba(255,0,110,0.45) 0%, rgba(3,4,94,0.65) 100%)',
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
                  fontWeight: '500',
                  fontSize: '16px',
                  lineHeight: '1.5',
                  letterSpacing: '1%',
                  color: descriptionColor, // WHITE on hover
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
          .services-container {
            padding: 32px 16px !important;
            min-height: auto !important;
            background-attachment: scroll !important;
          }
          .services-header {
            margin-bottom: 32px !important;
          }
          .services-title {
            font-size: 24px !important;
            line-height: 32px !important;
            max-width: 100% !important;
            padding: 0 8px !important;
          }
          .btn-primary {
            display: inline-flex !important;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px auto !important;
            width: 150px !important;
            height: 42px !important;
            font-size: 14px !important;
          }
          .services-grid {
            grid-template-columns: 1fr !important;
            max-width: 100% !important;
            gap: 24px !important;
          }
          .service-card {
            padding: 22px !important;
            min-height: auto !important;
            border-radius: 22px !important;
          }
          .card-title,
          .card-subtitle {
            font-size: 22px !important;
            line-height: 28px !important;
          }
          .card-description {
            font-size: 14px !important;
            line-height: 1.5 !important;
          }
          .card-image {
            margin-bottom: 12px !important;
          }
          .card-image img {
            width: 120px !important;
            height: 60px !important;
            border-radius: 999px !important;
          }
          .card-arrow {
            right: 16px !important;
            top: 16px !important;
          }
        }

        @media (max-width: 480px) {
          .services-container {
            padding: 24px 12px !important;
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
            font-size: 20px !important;
          }
          .card-description {
            fontSize: 13px !important;
          }
          .card-arrow {
            right: 12px !important;
            top: 12px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;