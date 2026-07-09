import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sunrise, ShieldCheck } from 'lucide-react';
import whiteFlower from '../assets/white-flower.jpg';
import hillsClouds from '../assets/hills-clouds.jpg';

const About = () => {
  const highlights = [
    {
      icon: <Sunrise className="about-icon" size={24} style={{ color: 'var(--gold-accent)' }} />,
      title: 'Panoramic Hill Views',
      desc: 'Immerse yourself in spectacular sunrise views and beautiful mountain ranges surrounding the entire estate.',
    },
    {
      icon: <Compass className="about-icon" size={24} style={{ color: 'var(--gold-accent)' }} />,
      title: 'Lush Green Spaces',
      desc: 'Featuring spacious, manicured open lawns and gorgeous flowers, perfect for outdoor ceremonies and picnics.',
    },
    {
      icon: <ShieldCheck className="about-icon" size={24} style={{ color: 'var(--gold-accent)' }} />,
      title: 'Secluded & Private',
      desc: 'Enjoy complete privacy with your friends and family in a peaceful resort environment away from city noise.',
    },
  ];

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--cream-bg)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '60px',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Left Column: Premium Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-tag">Welcome to Serenity</span>
            <h2 className="section-title">A Peaceful Sanctuary for Memorable Celebrations</h2>
            
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.05rem',
                color: 'var(--text-muted)',
                marginBottom: '28px',
                lineHeight: 1.8,
              }}
            >
              Nestled at the foot of lush green mountains, <strong>Pant Krupa Farmhouse</strong> is a premium luxury resort destination crafted for those seeking a harmonious blend of natural beauty and refined comfort. Surrounded by towering hills, fresh breeze, and colorful blossoms, our estate offers a perfect getaway for both grand celebrations and quiet family retreats.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.05rem',
                color: 'var(--text-muted)',
                marginBottom: '40px',
                lineHeight: 1.8,
              }}
            >
              Whether you are planning a dream destination wedding under the sky, celebrating a birthday, holding corporate seminars, or organizing a pre-wedding photoshoot, our spacious open lawns and scenic mountain backdrops turn every occasion into a lifelong memory.
            </p>

            {/* Highlights list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {highlights.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      background: 'var(--white)',
                      padding: '12px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'var(--shadow-soft)',
                      border: '1px solid var(--cream-mid)',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: 'var(--forest-dark)',
                        marginBottom: '6px',
                      }}
                    >
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual Collages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {/* Main background offset frame */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                left: '20px',
                width: '90%',
                height: '100%',
                border: '1.5px solid var(--gold-accent)',
                borderRadius: 'var(--radius-lg)',
                zIndex: 0,
                pointerEvents: 'none',
              }}
              className="about-offset-border"
            />

            {/* Image Composition */}
            <div
              style={{
                position: 'relative',
                width: '90%',
                zIndex: 1,
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '16px',
              }}
            >
              {/* Image 1: White flower hand & mountains */}
              <div
                style={{
                  gridColumn: '1 / span 8',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-medium)',
                  height: '420px',
                }}
              >
                <img
                  src={whiteFlower}
                  alt="Lush green garden at Pant Krupa Farmhouse"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'var(--transition-smooth)',
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                />
              </div>

              {/* Image 2: Cloud mountain views */}
              <div
                style={{
                  gridColumn: '7 / span 6',
                  gridRow: '1',
                  marginTop: '120px',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-premium)',
                  height: '320px',
                  border: '4px solid var(--cream-bg)',
                }}
              >
                <img
                  src={hillsClouds}
                  alt="Mountain views from Pant Krupa Farmhouse"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'var(--transition-smooth)',
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                />
              </div>

              {/* Glassmorphism Stat Panel */}
              <div
                className="glass-panel"
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  padding: '20px 24px',
                  borderRadius: 'var(--radius-md)',
                  zIndex: 2,
                  maxWidth: '220px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2.2rem',
                    color: 'var(--forest-dark)',
                    lineHeight: 1,
                    fontWeight: '700',
                  }}
                >
                  100%
                </span>
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    color: 'var(--gold-accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Natural Scenery
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.3 }}>
                  Surrounded by majestic green hills
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1.1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
