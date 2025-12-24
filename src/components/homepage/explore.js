import React, { useState, useEffect } from 'react';
import CommonButton from '../common/button';
import img1 from '../assets/explore/1.jpg';
import img2 from '../assets/explore/2.jpg';
import img3 from '../assets/explore/3.jpg';
import img4 from '../assets/explore/4.jpg';
// Project data with images
const projects = [
  {
    id: 1,
    title: "Lhome",
    // subtitle: "Interior Design Platform",
    tags: ["Web Design", "UI/UX Design"],
    image: img1,
  },
  {
    id: 2,
    title: "Grace Cabs",
    // subtitle: "Transportation Service",
    tags: ["Web Design", "UI/UX Design"],
    image:  img2 ,
  },
  {
    id: 3,
    title: "Nibras",
    // subtitle: "Fashion E-commerce",
    tags: ["Web Design", "UI/UX Design"],
    image: img3,
  },
  {
    id: 4,
    title: "World Tamil Siragam",
    // subtitle: "Cultural Platform",
    tags: ["Web Design", "UI/UX Design"],
    image: img4,
  },
  
];

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <div style={styles.container}>
      {/* Progress Indicators */}
      <div style={styles.progressContainer}>
        {projects.map((_, index) => (
          <div key={index} style={styles.progressWrapper}>
            <div
              style={styles.progressLineWrapper}
              onClick={() => goToSlide(index)}
            >
              {/* Circle with Number for Current Slide */}
              {index === currentIndex && (
                <div style={styles.activeCircle}>
                  <span style={styles.circleNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              )}

              <div
                style={{
                  ...styles.progressLine,
                  backgroundColor: index < currentIndex ? '#1e40af' : '#d1d5db',
                }}
              >
                {index === currentIndex && (
                  <div style={styles.progressAnimation} />
                )}
              </div>
            </div>

            {index < projects.length - 1 && (
              <div
                style={{
                  ...styles.progressDot,
                  backgroundColor: index < currentIndex ? '#1e40af' : '#e5e7eb',
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Slider */}
      <div style={styles.sliderContainer}>
        <div style={styles.sliderOverflow}>
          <div
            style={{
              ...styles.sliderTrack,
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {projects.map((project) => (
              <div key={project.id} style={styles.slide}>
                <div style={styles.imageContainer}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={styles.image}
                  />

                  {/* Overlay */}
                  <div style={styles.overlay} />

                  {/* Text Content */}
                  <div style={styles.textContainer}>
                    <div style={styles.textWrapper}>
                      <h3 className="project-title">{project.title}</h3>

                      <p style={styles.subtitle}>{project.subtitle}</p>
                      <CommonButton text='View Project' />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
       .project-title {
    font-size: 48px;   
    font-weight: 500;
    color: #ffffff;
    margin-bottom: 12px;
    font-family: WF Visual Sans;
    letter-spacing: 1%;
    style: medium;
  


  }

  /* Large screen (laptop) */
  @media (min-width: 1024px) {
    .project-title {
      font-size: 2.5rem;
    }
  }
        @keyframes progress-line {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        button:hover {
          background-color: #f1f5f9;
        }

        button:hover span:last-child {
          transform: translateX(4px);
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    Height: '70vh',
    backgroundColor: '#ffffff',
  },
  progressContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '32px',
    paddingTop: '24px',
  },
  progressWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  progressLineWrapper: {
    position: 'relative',
    cursor: 'pointer',
  },
  activeCircle: {
    position: 'absolute',
    top: '-24px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#1e40af',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 10,
  },
  circleNumber: {
    color: '#ffffff',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  progressLine: {
    height: '2px',
    width: '80px',
    borderRadius: '9999px',
    transition: 'all 0.5s',
    position: 'relative',
    overflow: 'hidden',
  },
  progressAnimation: {
    height: '100%',
    backgroundColor: '#1e3a8a',
    animation: 'progress-line 5s linear',
    transformOrigin: 'left',
  },
  progressDot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    marginLeft: '4px',
    marginRight: '4px',
    transition: 'background-color 0.5s',
  },
  sliderContainer: {
    position: 'relative',
    width: '100%',
  },
  sliderOverflow: {
    overflow: 'hidden',
    width: '100%',
  },
  sliderTrack: {
    display: 'flex',
    transition: 'transform 0.7s ease-in-out',
  },
  slide: {
    minWidth: '100%',
    flexShrink: 0,
  },
  imageContainer: {
    position: 'relative',
    height: '80vh',
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent)',
  },
  textContainer: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: '32px',
    textAlign: 'center',
    marginTop:'250px'
  },
  textWrapper: {
    maxWidth: '900px',
    width: '100%',
    margin: '0 auto',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '12px',
  },
  subtitle: {
    fontSize: '1.125rem',
    color: 'rgba(255,255,255,0.9)',
    marginBottom: '16px',
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    marginTop: '16px',
    backgroundColor: '#ffffff',
    color: '#0f172a',
    borderRadius: '9999px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  arrow: {
    display: 'inline-block',
    transition: 'transform 0.3s',
  },
};

// Media Query for larger screens
if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
  styles.textContainer.padding = '64px';
  styles.title.fontSize = '3.75rem';
}