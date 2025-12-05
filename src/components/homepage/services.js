import React from 'react';
import Second from "../../assets/2.png";
import Third from "../../assets/3.png";
import Four from "../../assets/4.png";
import BackgroundImg from "../../assets/backgroundImgae.webp";

const ServicesSection = () => {
    const services = [
        {
            title: 'Web Design',
            subtitle: '& Development',
            description: 'Your website is the soul digital handshake—so the first thing people notice about you online. Our Web Design & Development services help shape brand experiences that translate into loyal, long-term clients.',
            gradient: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
            image: Second,
            light: true
        },
        {
            title: 'App Design',
            subtitle: '& Development',
            description: 'Got a brilliant app idea? Let\'s craft it together! Whether it\'s a mobile game, a productivity tool, or the next big social platform, we\'ll turn something both stylish, sleek, and downright addictive.',
            gradient: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
            image: Second,
            light: true
        },
        {
            title: 'Branding &',
            subtitle: 'Creative Services',
            description: 'Your website is the soul digital handshake—so the first thing people notice about you online. Our Web Design & Development services help shape brand experiences that translate into loyal, long-term clients.',
            gradient: 'linear-gradient(135deg, #e8d4f2 0%, #f0e4f7 100%)',
            image: Third,
            light: true
        },
        {
            title: 'Digital',
            subtitle: 'Marketing',
            description: 'Got a brilliant app idea? Let\'s craft it together! Whether it\'s a mobile game, a productivity tool, or the next big social platform, we\'ll turn something both stylish, sleek, and downright addictive.',
            gradient: 'linear-gradient(135deg, #f0e4f7 0%, #fef0ff 100%)',
            image: Four,
            light: true
        }
    ];

    return (
        <div className="services-container" style={{
            backgroundImage: `url(${BackgroundImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="services-header">
                <div className="services-badge">
                    <span className="badge-icon">⚙️</span>
                    <span className="badge-text">Services</span>
                </div>
                <h1 className="services-title">
                    From idea to <span className="execution-text">execution</span> we've got you covered
                </h1>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`service-card ${service.light ? 'light' : 'dark'}`}
                        style={{ background: service.gradient }}
                    >
                        <div className="card-content">
                            <div className="card-header">
                                <h3 className="card-title">{service.title}</h3>
                                <h4 className="card-subtitle">{service.subtitle}</h4>
                            </div>

                            <div className="card-image">
                                <img src={service.image} alt={service.title} className="service-image" />
                            </div>

                            <p className="card-description">{service.description}</p>

                            <button className="card-arrow">→</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// CSS Styles
const styles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.services-container {
  min-height: 100vh;
  padding: 60px 40px;
  position: relative;
}

.services-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.3);
  pointer-events: none;
  z-index: 0;
}

.services-header {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  z-index: 1;
}

.services-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #1a1a2e;
  color: white;
  padding: 8px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
}

.badge-icon {
  font-size: 16px;
}

.services-title {
  font-size: 48px;
  font-weight: 400;
  color: #1a1a2e;
  line-height: 1.3;
  max-width: 600px;
  margin: 0 auto;
}

.execution-text {
  font-style: italic;
  font-weight: 500;
  color: #6b4c9a;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.service-card {
  border-radius: 20px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.service-card.dark {
  color: white;
}

.service-card.light {
  color: #1a1a2e;
}

.card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}

.card-header {
  margin-bottom: 20px;
}

.card-title {
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 4px;
}

.card-subtitle {
  font-size: 28px;
  font-weight: 500;
  opacity: 0.95;
}

.card-image {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.service-image {
  width: 150px;
  height: 100px;
  object-fit: cover;
  border-radius: 100px;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2));
}

.card-description {
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 20px;
  flex-grow: 1;
}

.card-arrow {
  position: absolute;
  top: 30px;
  right: 30px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.3s ease;
  color: inherit;
}

.service-card:hover .card-arrow {
  transform: translateX(5px);
}

@media (max-width: 968px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .services-title {
    font-size: 36px;
  }
  
  .services-container {
    padding: 40px 20px;
  }
}

@media (max-width: 640px) {
  .services-title {
    font-size: 28px;
  }
  
  .card-title,
  .card-subtitle {
    font-size: 24px;
  }
  
  .service-card {
    padding: 30px;
    min-height: 300px;
  }
  
  .service-image {
    width: 120px;
    height: 80px;
  }
}
`;

// Inject styles
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default ServicesSection;