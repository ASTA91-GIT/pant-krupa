import React from 'react';
import { motion } from 'framer-motion';
import {
  Trees,
  Mountain,
  Flower2,
  Heart,
  Cake,
  Car,
  Utensils,
  Music,
  Smile,
  Sparkles,
  Armchair,
  Zap,
} from 'lucide-react';

const Amenities = () => {
  const amenitiesList = [
    {
      icon: <Trees size={28} />,
      title: 'Spacious Lawn',
      desc: 'Vast, manicured green open lawns that accommodate over 800+ guests for any occasion.',
    },
    {
      icon: <Mountain size={28} />,
      title: 'Scenic Mountain View',
      desc: 'Panoramic, unobstructed views of lush mountain ridges that create a perfect nature backdrop.',
    },
    {
      icon: <Flower2 size={28} />,
      title: 'Beautiful Garden',
      desc: 'Blooming local flora, roses, and flowers that provide a vibrant setting for captures.',
    },
    {
      icon: <Heart size={28} />,
      title: 'Wedding Decorations',
      desc: 'Luxury canopy and gate setups designed for beautiful open-air destination marriages.',
    },
    {
      icon: <Cake size={28} />,
      title: 'Birthday Events',
      desc: 'Specialized arrangements for birthday events, family reunions, and children assemblies.',
    },
    {
      icon: <Car size={28} />,
      title: 'Ample Parking',
      desc: 'Safe and spacious dedicated parking spaces within the property boundary for guest convenience.',
    },
    {
      icon: <Utensils size={28} />,
      title: 'Catering Support',
      desc: 'Spacious kitchen counters and setups tailored for fine-dining hot caterers.',
    },
    {
      icon: <Music size={28} />,
      title: 'Professional DJ Setup',
      desc: 'Equipped setups for premium acoustic sound configurations and late-evening dance gatherings.',
    },
    {
      icon: <Smile size={28} />,
      title: 'Family Picnic Area',
      desc: 'Cosy shaded spots surrounded by palms, perfect for long afternoon conversations.',
    },
    {
      icon: <Sparkles size={28} />,
      title: 'Grand Event Stage',
      desc: 'Elevated structural staging ready for couple seating, ceremonies, or corporate speeches.',
    },
    {
      icon: <Armchair size={28} />,
      title: 'Comfortable Seating',
      desc: 'Plush sofa lounges and premium dining seating arrays provided on request.',
    },
    {
      icon: <Zap size={28} />,
      title: 'Full Power Backup',
      desc: 'Uninterrupted event operations with silent auto-switch power generators.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="amenities" className="section-padding" style={{ backgroundColor: 'var(--cream-bg)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <span className="section-tag">Premium Conveniences</span>
          <h2 className="section-title">Designed For Seamless Celebrations</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
            We provide everything needed to host premium events in complete comfort, combining modern facilities with natural elegance.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}
          className="amenities-grid"
        >
          {amenitiesList.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              style={{
                backgroundColor: 'var(--white)',
                borderRadius: 'var(--radius-md)',
                padding: '30px 24px',
                border: '1px solid var(--cream-mid)',
                boxShadow: 'var(--shadow-soft)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              className="amenity-card"
            >
              {/* Corner golden dot accent */}
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  width: '4px',
                  height: '40px',
                  backgroundColor: 'var(--gold-accent)',
                  borderBottomLeftRadius: '4px',
                }}
              />

              {/* Icon Circle */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(36, 71, 50, 0.06)',
                  color: 'var(--forest-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-fast)',
                }}
                className="amenity-icon-container"
              >
                {item.icon}
              </div>

              {/* Text details */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.15rem',
                    fontWeight: '600',
                    color: 'var(--forest-dark)',
                    marginBottom: '8px',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .amenity-card:hover {
          border-color: rgba(197, 160, 89, 0.4) !important;
          box-shadow: var(--shadow-medium) !important;
        }
        .amenity-card:hover .amenity-icon-container {
          background-color: var(--forest-mid) !important;
          color: var(--white) !important;
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Amenities;
