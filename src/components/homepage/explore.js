import React, { useState, useEffect, useRef } from 'react';
import img1 from '../assets/explore/1.jpg';
import img2 from '../assets/explore/2.jpg';
import img3 from '../assets/explore/3.jpg';
import img4 from '../assets/explore/4.jpg';

// Project data with images
const projects = [
  {
    id: 1,
    title: "Lhome",
    tags: ["Web Design", "UI/UX Design"],
    image: img1,
  },
  {
    id: 2,
    title: "Grace Cabs",
    tags: ["Web Design", "UI/UX Design"],
    image: img2,
  },
  {
    id: 3,
    title: "Nibras",
    tags: ["Web Design", "UI/UX Design"],
    image: img3,
  },
  {
    id: 4,
    title: "World Tamil Siragam",
    tags: ["Web Design", "UI/UX Design"],
    image: img4,
  },
];

export default function ProjectSlider() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(
    projects.map(() => ({ imageProgress: 0, titleProgress: 0, progressBar: 0 }))
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the container is visible
      const scrollStart = containerTop;
      const scrollEnd = containerTop - windowHeight + containerHeight;

      const newProgress = projects.map((_, index) => {
        // Each project takes up equal portion of scroll
        const projectScrollHeight = containerHeight / projects.length;
        const projectStart = scrollStart + (index * projectScrollHeight);
        const projectEnd = projectStart - projectScrollHeight;

        // Calculate progress for this project (0 to 1)
        let progress = 0;
        if (scrollStart > 0) {
          progress = 0;
        } else if (projectStart <= 0 && projectEnd > -windowHeight) {
          progress = Math.min(Math.max((0 - projectStart) / projectScrollHeight, 0), 1);
        } else if (projectEnd <= -windowHeight) {
          progress = 1;
        }

        // Image comes in from 100% (right) to 0% during first 50% of scroll (slow and smooth)
        const imageProgress = Math.min(progress / 0.5, 1);
        
        // Title comes in from 100% (right) to 0% during 30%-60% of scroll
        const titleProgress = Math.min(Math.max((progress - 0.3) / 0.3, 0), 1);
        
        // Progress bar fills slowly during first 50% (while image comes), then fills rest during 50%-100%
        const progressBar = imageProgress < 1 ? progress * 0.5 : 0.5 + ((progress - 0.5) / 0.5) * 0.5;

        return { imageProgress, titleProgress, progressBar };
      });

      setScrollProgress(newProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={styles.container} ref={containerRef}>
      {/* Progress Indicators */}
      <div style={styles.progressContainer}>
        {projects.map((_, index) => {
          const progress = scrollProgress[index].progressBar;
          const isActive = progress > 0 && progress < 1;
          const isCompleted = progress >= 1;

          return (
            <div key={index} style={styles.progressWrapper}>
              <div style={styles.progressLineWrapper}>
                {/* Circle with Number for Active Slide */}
                {isActive && (
                  <div style={styles.activeCircle}>
                    <span style={styles.circleNumber}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                )}
                
                {/* Progress Line */}
                <div style={styles.progressLine}>
                  <div 
                    style={{
                      ...styles.progressFill,
                      width: `${progress * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Dot between lines */}
              {index < projects.length - 1 && (
                <div 
                  style={{
                    ...styles.progressDot,
                    backgroundColor: isCompleted ? '#1e3a8a' : '#d1d5db',
                  }} 
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Projects Stack */}
      {projects.map((project, index) => {
        const { imageProgress, titleProgress } = scrollProgress[index];
        
        return (
          <div key={project.id} style={styles.projectSection}>
            <div style={styles.imageContainer}>
              {/* Image sliding from right */}
              <div
                style={{
                  ...styles.imageWrapper,
                  transform: `translateX(${(1 - imageProgress) * 100}%)`,
                  opacity: imageProgress,
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={styles.image}
                />
                {/* Overlay */}
                <div style={styles.overlay} />
              </div>

              {/* Text Content sliding from right */}
              <div style={styles.textContainer}>
                <div
                  style={{
                    ...styles.textWrapper,
                    transform: `translateX(${(1 - titleProgress) * 100}%)`,
                    opacity: titleProgress,
                  }}
                >
                  <h2 style={styles.title}>{project.title}</h2>
                  {project.subtitle && (
                    <p style={styles.subtitle}>{project.subtitle}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    minHeight: '400vh', // Tall enough for scroll effect
    backgroundColor: '#ffffff',
    position: 'relative',
  },
  progressContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    padding: '24px',
    position: 'sticky',
    top: '0',
    backgroundColor: '#ffffff',
    zIndex: 100,
  },
  progressWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  progressLineWrapper: {
    position: 'relative',
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
    backgroundColor: '#d1d5db',
    borderRadius: '9999px',
    position: 'relative',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#1e3a8a',
    transition: 'width 0.1s linear',
    borderRadius: '9999px',
  },
  progressDot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    marginLeft: '4px',
    marginRight: '4px',
    transition: 'background-color 0.3s',
  },
  projectSection: {
    height: '100vh',
    width: '100%',
    position: 'sticky',
    top: '0',
  },
  imageContainer: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
  },
  imageWrapper: {
    position: 'absolute',
    inset: 0,
    transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: '32px',
    textAlign: 'center',
    pointerEvents: 'none',
  },
  textWrapper: {
    maxWidth: '900px',
    width: '100%',
    margin: '0 auto',
    marginTop: '150px',
    transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
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
};