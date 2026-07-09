import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Image as ImageIcon } from 'lucide-react';
import sunsetCar from '../assets/sunset-car.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${sunsetCar})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Luxury Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(15, 31, 21, 0.45) 0%, rgba(15, 31, 21, 0.75) 100%)',
          zIndex: 1,
        }}
      />

      {/* Decorative Golden Light Ray (Subtle glow) */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle, rgba(197, 160, 89, 0.1) 0%, rgba(0,0,0,0) 70%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Content Container */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          color: 'var(--white)',
          paddingTop: '60px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Tagline */}
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              color: 'var(--gold-accent)',
              marginBottom: '20px',
              display: 'inline-block',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            }}
          >
            A Scenic Luxury Escape
          </span>

          {/* Main Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: '400',
              letterSpacing: '0.01em',
              lineHeight: 1.15,
              marginBottom: '24px',
              color: 'var(--white)',
              textShadow: '0 4px 20px rgba(0,0,0,0.4)',
            }}
          >
            Celebrate Every Occasion <br />
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: '400' }}>
              Amidst Nature
            </span>
          </h1>

          {/* Subheading */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 1.25vw, 1.2rem)',
              fontWeight: '300',
              maxWidth: '800px',
              margin: '0 auto 40px auto',
              lineHeight: 1.7,
              color: 'rgba(255, 255, 255, 0.85)',
              textShadow: '0 2px 10px rgba(0,0,0,0.2)',
            }}
          >
            Pant Krupa Farmhouse offers a peaceful destination for weddings, birthdays, corporate events, family gatherings, pre-wedding shoots and memorable celebrations surrounded by scenic hills.
          </p>

          {/* Buttons CTA */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <a
              href="https://docs.google.com/forms/d/1-1NKqQxnCqwomadDW8rEeTCWMWEZK8VZlyd4/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{
                gap: '10px',
                fontSize: '1rem',
                padding: '16px 36px',
              }}
            >
              <Calendar size={18} /> Book Your Event
            </a>
            <a
              href="#gallery"
              className="btn btn-secondary"
              style={{
                gap: '10px',
                fontSize: '1rem',
                padding: '16px 36px',
              }}
            >
              <ImageIcon size={18} /> Explore Gallery
            </a>
          </div>
        </motion.div>
      </div>

      {/* Elegant Bottom Curve/Fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(to top, var(--cream-bg) 0%, rgba(251, 249, 245, 0) 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
    </section>
  );
};

export default Hero;
