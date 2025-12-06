import React, { useState } from 'react';
// These imports are assumed to be correctly linked to your asset files
import Second from "../assets/services/2.png";
import Third from "../assets/services/3.png";
import Four from "../assets/services/4.png";
import BackgroundImg from "../assets/services/backgroundImgae.webp";
import ArrowImg from "../assets/services/arrow.png";
// import ServiceBtnImg from "../assets/services/servicebtn.png";
import ServiceBtnImg from "../assets/services/tool.png";
const ServicesSection = () => {
  // State to track which card is currently being hovered over (active)
  const [activeCard, setActiveCard] = useState(null);

  // Service data array - All cards now use the light gradient by default
  const services = [
    {
      title: 'Web Design',
      subtitle: '& Development',
      description: 'Your website is like your digital handshake—it\'s the first thing people notice about you online. Our Web Design & Development services take all about making that handshake firm, friendly, and unforgettable.',
      // UPDATED: Changed the gradient to match the light cards
      gradient: 'radial-gradient(circle at 0% 100%, rgba(255, 0, 110, 0.05) 0%, rgba(255, 255, 255, 1) 30%, rgba(107, 76, 154, 0.05) 100%)',
      image: Second,
      light: true // Set to true for light background
    },
    {
      title: 'App Design',
      subtitle: '& Development',
      description: 'Got a brilliant app idea? Let\'s make it a reality! Whether it\'s a mobile game, a productivity tool, or the next big social platform, we\'ll build something that\'s smooth, sleek, and downright addictive.',
      gradient: 'radial-gradient(circle at 0% 100%, rgba(255, 0, 110, 0.05) 0%, rgba(255, 255, 255, 1) 30%, rgba(107, 76, 154, 0.05) 100%)',
      image: Second,
      light: true
    },
    {
      title: 'Branding &',
      subtitle: 'Creative Services',
      description: 'Your website is like your digital handshake—it\'s the first thing people notice about you online. Our Web Design & Development services take all about making that handshake firm, friendly, and unforgettable.',
      gradient: 'radial-gradient(circle at 100% 0%, rgba(255, 0, 110, 0.05) 0%, rgba(255, 255, 255, 1) 30%, rgba(107, 76, 154, 0.05) 100%)',
      image: Third,
      light: true
    },
    {
      title: 'Digital',
      subtitle: 'Marketing',
      description: 'Got a brilliant app idea? Let\'s make it a reality! Whether it\'s a mobile game, a productivity tool, or the next big social platform, we\'ll build something that\'s smooth, sleek, and downright addictive.',
      gradient: 'radial-gradient(circle at 0% 100%, rgba(255, 0, 110, 0.05) 0%, rgba(255, 255, 255, 1) 30%, rgba(107, 76, 154, 0.05) 100%)',
      image: Four,
      light: true
    }
  ];

  // Helper function to get the hover background style
  const getHoverBackgroundStyle = (image) => ({
    background: `linear-gradient(135deg, rgba(255, 0, 110, 0.4) 0%, rgba(3, 4, 94, 0.4) 100%), url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
  });

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

        <button
          className="btn-primary"
          style={{ marginLeft: "500px" ,width:"180px",height:"50px",fontSize: "17px"}}
        >
          <div className="icon-circle">
            <img
              alt="arrow"
              src={ServiceBtnImg}
              style={{ width: "20px", height: "20px" }} // 👈 size increase here
            />
          </div>
          Services
        </button>


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
          we’ve
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

          const cardStyle = isHovered
            ? getHoverBackgroundStyle(service.image)
            : { background: service.gradient, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)' };

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
                overflow: 'visible',
                cursor: 'pointer',
                boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                ...cardStyle,
                color: textColor,
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                isolation: 'isolate',
                transform: isHovered ? 'translateY(-10px)' : 'translateY(0)'
              }}
            >
              <div className="card-content" style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative',
                zIndex: 2,
                color: 'inherit',
                transition: 'color 0.4s ease',
                alignItems: 'flex-start',
                // Keep this for bottom positioning on hover
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

                  {/* The small image is now visible on ALL non-hovered cards, and hidden on hover */}
                  <div className="card-image" style={{
                    marginBottom: isHovered ? '0' : '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    transition: 'all 0.4s ease',
                    opacity: isHovered ? '0' : '1',
                    height: isHovered ? '0' : '80px',
                    transform: isHovered ? 'translateY(-20px)' : 'translateY(0)',
                    overflow: 'hidden'
                  }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-image"
                      style={{
                        width: '150px',
                        height: '80px',
                        objectFit: 'cover',
                        borderRadius: '100px',
                        transition: 'all 0.5s ease'
                      }}
                    />
                  </div>
                </div>

                {/* KEY CHANGE: Removed the opacity condition for non-hovered state.
                                   Now, the description is visible in both states.
                                   It stays at the bottom due to `justifyContent: 'space-between'`.
                                */}
                <p className="card-description" style={{
                  fontFamily: '"WF Visual Sans"',
                  fontWeight: '500',
                  fontSize: '16px',
                  lineHeight: '1.4',
                  letterSpacing: '1%',
                  color: isHovered ? 'white' : '#7D7D7D'
                  // background: #7D7D7D;

                  // *** REMOVED: opacity: isHovered ? '1' : '0' ***
                  // Use a fixed opacity for better readability on light/dark.
                  // opacity: isHovered ? '1' : '0.9',
                  // transition: 'opacity 0.5s ease',
                  // color: 'inherit',
                  // maxWidth: '90%'
                }}>
                  {service.description}
                </p>

                <button className="card-arrow" style={{
                  position: 'absolute',
                  right: '30px',
                  top: '30px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '10px',
                  borderRadius: '50%',
                  transition: 'all 0.4s ease'
                }}>
                  <img
                    src={ArrowImg}
                    alt="arrow"
                    style={{
                      width: '24px',
                      height: '24px',
                      // Arrow is always dark on light background, and white on hover (dark background)
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
                @media (max-width: 968px) {
                    .services-grid {
                        grid-template-columns: 1fr !important;
                        max-width: 600px !important;
                    }

                    .services-title {
                        font-size: 36px !important;
                    }

                    .services-container {
                        padding: 40px 20px !important;
                    }
                }

                @media (max-width: 640px) {
                    .services-title {
                        font-size: 28px !important;
                    }

                    .card-title,
                    .card-subtitle {
                        font-size: 28px !important;
                    }

                    .service-card {
                        padding: 30px !important;
                        min-height: 320px !important;
                        border-radius: 25px !important;
                    }

                    .card-arrow {
                        right: 20px !important;
                        top: 20px !important;
                    }
                }
            `}</style>
    </div>
  );
};

export default ServicesSection;