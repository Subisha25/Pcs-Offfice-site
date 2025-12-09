import React, { useState } from 'react';
// These imports are assumed to be correctly linked to your asset files
import Second from "../assets/services/2.png";
import Third from "../assets/services/3.png";
import Four from "../assets/services/4.png";
import BackgroundImg from "../assets/services/backgroundImgae.webp";
import ArrowImg from "../assets/services/arrow.png";
import ServiceBtnImg from "../assets/services/tool.png";
import { useNavigate } from "react-router-dom";
import CommonButton from '../common/button';
import CommonTopTag from '../common/toptag';

const ServicesSection = () => {
  // State to track which card is currently being hovered over (active)
  const [activeCard, setActiveCard] = useState(null);
const navigate = useNavigate();

  // Service data array - All cards now use the light gradient by default
  const services = [
    {
      title: 'Web Design',
      subtitle: '& Development',
      path: '/webdesign',
      description: 'Your website is like your digital handshake—it\'s the first thing people notice about you online. Our Web Design & Development services take all about making that handshake firm, friendly, and unforgettable.',
      gradient: 'radial-gradient(circle at 0% 100%, rgba(255, 0, 110, 0.05) 0%, rgba(255, 255, 255, 1) 30%, rgba(107, 76, 154, 0.05) 100%)',
      image: Second,
      light: true
    },
    {
      title: 'App Design',
      subtitle: '& Development',
      path: '/appdesign',
      description: 'Got a brilliant app idea? Let\'s make it a reality! Whether it\'s a mobile game, a productivity tool, or the next big social platform, we\'ll build something that\'s smooth, sleek, and downright addictive.',
      gradient: 'radial-gradient(circle at 0% 100%, rgba(255, 0, 110, 0.05) 0%, rgba(255, 255, 255, 1) 30%, rgba(107, 76, 154, 0.05) 100%)',
      image: Second,
      light: true
    },
    {
      title: 'Branding &',
      subtitle: 'Creative Services',
      path: '/branding',
      description: 'Your website is like your digital handshake—it\'s the first thing people notice about you online. Our Web Design & Development services take all about making that handshake firm, friendly, and unforgettable.',
      gradient: 'radial-gradient(circle at 100% 0%, rgba(255, 0, 110, 0.05) 0%, rgba(255, 255, 255, 1) 30%, rgba(107, 76, 154, 0.05) 100%)',
      image: Third,
      light: true
    },
    {
      title: 'Digital',
      subtitle: 'Marketing',
      path: '/digitalmarketing',
      description: 'Got a brilliant app idea? Let\'s make it a reality! Whether it\'s a mobile game, a productivity tool, or the next big social platform, we\'ll build something that\'s smooth, sleek, and downright addictive.',
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
      padding: '60px 40px',
      backgroundAttachment: 'fixed'
    }}>
      {/* Background overlay - adjusted for a softer look */}
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

      <CommonTopTag text="Services" icon={ServiceBtnImg} />

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
        gap: '70px',
        maxWidth: '1500px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {services.map((service, index) => {
          const isHovered = activeCard === index;
          const textColor = isHovered ? 'white' : '#1a1a2e';

          return (
            <div
              key={index}
              className={`service-card ${isHovered ? 'active' : ''}`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              style={{
                width: '100%',
                borderRadius: '30px',
                padding: '40px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: isHovered ? '0 10px 40px rgba(0, 0, 0, 0.3)' : '0px 8px 20px rgba(0, 0, 0, 0.15)',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                background: service.gradient,
                color: textColor,
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                isolation: 'isolate',
                transform: isHovered ? 'translateY(-10px)' : 'translateY(0)'
              }}
            >
              {/* Image that grows to fill background on hover - only shows when hovered */}
              {isHovered && (
                <div className="card-image-expanded" style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: '1',
                  animation: 'expandImage 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards'
                }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image-expanded"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '30px',
                      filter: 'brightness(0.6)'
                    }}
                  />
                  {/* Dark overlay on hover */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(255, 0, 110, 0.4) 0%, rgba(3, 4, 94, 0.4) 100%)',
                    borderRadius: '30px',
                    zIndex: 1
                  }}></div>
                </div>
              )}

              <div className="card-content" style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative',
                zIndex: 2,
                color: 'inherit',
                transition: 'color 0.4s ease',
                alignItems: 'flex-start',
                justifyContent: 'space-between'
              }}>
                <div className="card-top-content">
                  <div className="card-header" style={{ marginBottom: '20px' }}>
                    <h3 className="card-title" style={{
                      fontSize: '38px',
                      fontWeight: '400',
                      marginBottom: '4px',
                      fontFamily: '"WF Visual Sans", sans-serif',
                      color: 'inherit',
                      transition: 'color 0.4s ease'
                    }}>
                      {service.title}
                    </h3>
                    <h4 className="card-subtitle" style={{
                      fontFamily: '"WF Visual Sans", sans-serif',
                      fontSize: '38px',
                      fontWeight: '400',
                      opacity: '1',
                      color: 'inherit',
                      transition: 'all 0.4s ease'
                    }}>
                      {service.subtitle}
                    </h4>
                  </div>

                  {/* Small image - only visible when NOT hovered */}
                  {!isHovered && (
                    <div className="card-image-small" style={{
                      marginBottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-start'
                    }}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="service-image-small"
                        style={{
                          width: '150px',
                          height: '80px',
                          objectFit: 'cover',
                          borderRadius: '100px'
                        }}
                      />
                    </div>
                  )}
                </div>

                <p className="card-description" style={{
                  fontFamily: '"WF Visual Sans"',
                  fontWeight: '500',
                  fontSize: '16px',
                  lineHeight: '1.4',
                  letterSpacing: '1%',
                  color: isHovered ? 'white' : '#7D7D7D'
                }}>
                  {service.description}
                </p>

             <button
  className="card-arrow"
  onClick={(e) => {
    e.stopPropagation(); 
    navigate(service.path);
  }}
  style={{
    position: 'absolute',
    right: '30px',
    top: '30px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '10px',
    borderRadius: '50%',
    transition: 'all 0.4s ease'
  }}
>
  <img
    src={ArrowImg}
    alt="arrow"
    style={{
      width: '24px',
      height: '24px',
      filter: isHovered ? 'invert(1)' : 'invert(0)',
      transition: 'all 0.4s ease',
      transform: isHovered ? 'translateX(5px)' : 'translateX(0)'
    }}
  />
</button>

              </div>
            </div>
          );
        })}
      </div>

      {/* Media Queries (CSS-in-JS style block) */}
      <style jsx>{`
        /* Keyframe animation for image expansion */
        @keyframes expandImage {
          from {
            transform: scale(0.2);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        /* --- 0px – 768px : Mobile & Small Tablet --- */
        @media (max-width: 768px) {
          /* Section container */
          .services-container {
            padding: 32px 16px !important;
            min-height: auto !important;
            background-attachment: scroll !important; /* mobile background fixed issue fix */
          }

          /* Header & title */
          .services-header {
            margin-bottom: 32px !important;
          }

          .services-title {
            font-size: 24px !important;
            line-height: 32px !important;
            max-width: 100% !important;
            padding: 0 8px !important;
            text-align: center !important;
          }

          /* "Services" button – center it */
          .btn-primary {
            display: inline-flex !important;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px auto !important;
            width: 150px !important;
            height: 42px !important;
            font-size: 14px !important;
          }

          /* Grid -> single column */
          .services-grid {
            grid-template-columns: 1fr !important;
            max-width: 100% !important;
            gap: 24px !important;
          }

          /* Card */
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

        /* --- Extra small phones 300px – 480px --- */
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
            font-size: 13px !important;
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

export default ServicesSection;