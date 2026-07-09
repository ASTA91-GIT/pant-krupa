import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

import pinkFlower from '../assets/pink-flower.jpg';
import sunsetCar from '../assets/sunset-car.jpg';
import whiteFlower from '../assets/white-flower.jpg';
import entranceGate from '../assets/entrance-gate.jpg';
import hillsClouds from '../assets/hills-clouds.jpg';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Nature', 'Events', 'Sunset Views', 'Garden', 'Hills', 'Farmhouse'];

  const images = [
    {
      id: 0,
      src: entranceGate,
      title: 'Resort Entrance Setup',
      desc: 'Elegant drape decorations under blue skies welcoming guests for celebrations.',
      categories: ['Events', 'Farmhouse'],
      aspect: 'horizontal',
    },
    {
      id: 1,
      src: sunsetCar,
      title: 'Golden Sunset Vista',
      desc: 'Breathtaking view of the setting sun directly behind the mountain ranges.',
      categories: ['Sunset Views', 'Hills', 'Farmhouse'],
      aspect: 'vertical',
    },
    {
      id: 2,
      src: whiteFlower,
      title: 'Plumeria & Lawns',
      desc: 'Fresh white blooms in front of our vast green lawns and mist-covered mountains.',
      categories: ['Nature', 'Garden', 'Hills', 'Farmhouse'],
      aspect: 'vertical',
    },
    {
      id: 3,
      src: pinkFlower,
      title: 'Nature’s Detail',
      desc: 'Delicate pink rose held in front of the peaceful mountains during dusk.',
      categories: ['Nature', 'Garden', 'Sunset Views', 'Hills'],
      aspect: 'vertical',
    },
    {
      id: 4,
      src: hillsClouds,
      title: 'Sunbeams & Palm Trees',
      desc: 'Sunrays bursting through morning clouds over local coconut trees and ridges.',
      categories: ['Nature', 'Hills', 'Farmhouse'],
      aspect: 'vertical',
    },
  ];

  // Filter images based on active category
  const filteredImages = activeCategory === 'All'
    ? images
    : images.filter(img => img.categories.includes(activeCategory));

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '50px' }}>
          <span className="section-tag">Visual Journey</span>
          <h2 className="section-title">Captured Moments at Pant Krupa</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
            Take a look at the real-life scenic beauty, entrance decorations, sunset vistas, and green grounds that surround our farmhouse.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '40px',
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              style={{
                padding: '10px 24px',
                fontSize: '0.88rem',
                fontWeight: '500',
                borderRadius: 'var(--radius-full)',
                border: '1px solid',
                borderColor: activeCategory === category ? 'var(--forest-mid)' : 'var(--cream-mid)',
                backgroundColor: activeCategory === category ? 'var(--forest-mid)' : 'transparent',
                color: activeCategory === category ? 'var(--white)' : 'var(--text-dark)',
                cursor: 'pointer',
                transition: 'var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== category) {
                  e.target.style.borderColor = 'var(--forest-light)';
                  e.target.style.backgroundColor = 'rgba(24, 46, 33, 0.04)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category) {
                  e.target.style.borderColor = 'var(--cream-mid)';
                  e.target.style.backgroundColor = 'transparent';
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Modern Masonry Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gridAutoRows: '240px',
            gap: '24px',
          }}
          className="gallery-masonry"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setLightboxIndex(img.id)}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-soft)',
                  cursor: 'pointer',
                  // Span 2 rows if vertical aspect to create masonry effect
                  gridRowEnd: img.aspect === 'vertical' ? 'span 2' : 'span 1',
                  gridColumnEnd: img.aspect === 'horizontal' ? 'span 2' : 'span 1',
                }}
                className="gallery-item-card"
              >
                {/* Image */}
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="gallery-image"
                />

                {/* Hover Glass Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to top, rgba(15, 31, 21, 0.85) 0%, rgba(15, 31, 21, 0.2) 100%)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '24px',
                    zIndex: 2,
                  }}
                  className="gallery-overlay"
                >
                  <div
                    style={{
                      transform: 'translateY(20px)',
                      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      color: 'var(--white)',
                    }}
                    className="gallery-overlay-content"
                  >
                    <span
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--gold-accent)',
                        fontWeight: '600',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '4px',
                      }}
                    >
                      {img.categories.join(' • ')}
                    </span>
                    <h4
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        color: 'var(--white)',
                        marginBottom: '6px',
                      }}
                    >
                      {img.title}
                    </h4>
                    <p
                      style={{
                        fontSize: '0.82rem',
                        color: 'rgba(255,255,255,0.7)',
                        lineHeight: 1.4,
                        marginBottom: '16px',
                      }}
                    >
                      {img.desc}
                    </p>
                    <button
                      className="btn btn-gold"
                      style={{
                        padding: '6px 14px',
                        fontSize: '0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <Maximize2 size={12} /> View Image
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(15, 31, 21, 0.95)',
              backdropFilter: 'blur(20px)',
              zIndex: 2000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
          >
            {/* Header / Top controls */}
            <div
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                zIndex: 2010,
              }}
            >
              <button
                onClick={() => setLightboxIndex(null)}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  color: 'var(--white)',
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-full)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-fast)',
                }}
                onMouseEnter={(e) => (e.target.style.background = 'rgba(255,255,255,0.2)')}
                onMouseLeave={(e) => (e.target.style.background = 'rgba(255,255,255,0.1)')}
              >
                <X size={20} />
              </button>
            </div>

            {/* Previous Button */}
            <button
              onClick={handlePrev}
              style={{
                position: 'absolute',
                left: '24px',
                background: 'rgba(255,255,255,0.06)',
                border: 'none',
                color: 'var(--white)',
                width: '50px',
                height: '50px',
                borderRadius: 'var(--radius-full)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2010,
              }}
              onMouseEnter={(e) => (e.target.style.background = 'rgba(255,255,255,0.15)')}
              onMouseLeave={(e) => (e.target.style.background = 'rgba(255,255,255,0.06)')}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              style={{
                position: 'absolute',
                right: '24px',
                background: 'rgba(255,255,255,0.06)',
                border: 'none',
                color: 'var(--white)',
                width: '50px',
                height: '50px',
                borderRadius: 'var(--radius-full)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2010,
              }}
              onMouseEnter={(e) => (e.target.style.background = 'rgba(255,255,255,0.15)')}
              onMouseLeave={(e) => (e.target.style.background = 'rgba(255,255,255,0.06)')}
            >
              <ChevronRight size={24} />
            </button>

            {/* Main Lightbox Content */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '90%',
                maxHeight: '75vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              />

              {/* Caption details below image */}
              <div
                style={{
                  color: 'var(--white)',
                  textAlign: 'center',
                  marginTop: '20px',
                  maxWidth: '600px',
                }}
              >
                <h3 style={{ color: 'var(--white)', marginBottom: '8px', fontSize: '1.4rem' }}>
                  {images[lightboxIndex].title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                  {images[lightboxIndex].desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Styled styles for Hover transitions */}
      <style>{`
        .gallery-item-card:hover .gallery-image {
          transform: scale(1.06);
        }
        .gallery-item-card:hover .gallery-overlay {
          opacity: 1 !important;
        }
        .gallery-item-card:hover .gallery-overlay-content {
          transform: translateY(0) !important;
        }
        
        @media (max-width: 768px) {
          .gallery-masonry {
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)) !important;
            grid-auto-rows: 200px !important;
          }
          .gallery-item-card {
            grid-row-end: span 1 !important;
            grid-column-end: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
