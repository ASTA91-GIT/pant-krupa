import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, Clock, Users, ArrowRight, X } from 'lucide-react';

import entranceGate from '../assets/entrance-gate.jpg';
import pinkFlower from '../assets/pink-flower.jpg';
import hillsClouds from '../assets/hills-clouds.jpg';
import sunsetCar from '../assets/sunset-car.jpg';
import whiteFlower from '../assets/white-flower.jpg';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const eventList = [
    {
      id: 0,
      title: 'Wedding Celebration',
      image: entranceGate,
      desc: 'Host your dream destination wedding under the sky, surrounded by dramatic hills and premium decorations.',
      details: 'Our spacious manicured lawns can host up to 1,000 guests, offering customizable layout options for mandaps, seating, stage setups, and buffet structures. We provide complete setup flexibility, high-end dressing villas, parking, and catering support to ensure a seamless marriage experience.',
      capacity: '300 - 1000 guests',
      duration: 'Full Day / Multi-Day',
      includes: ['Main Lawn Access', 'Premium Entrance Setup', 'Dressing Suite', 'Silent Gen-Set backup', 'Catering Station Setups'],
    },
    {
      id: 1,
      title: 'Birthday Party',
      image: pinkFlower,
      desc: 'Celebrate birthdays and milestone years amidst beautiful gardens and quiet scenic settings.',
      details: 'Make birthdays truly special for your children or elders with open-air games, colorful outdoor flower decorations, specialized catering spaces, and premium sound facilities. Our secure green boundaries ensure a safe and enjoyable environment for guests of all ages.',
      capacity: '50 - 300 guests',
      duration: '5 Hours / Full Day',
      includes: ['Picnic lawn spaces', 'DJ Console setup area', 'Custom theme decorators list', 'Secure perimeter parking', 'Kids activity zone'],
    },
    {
      id: 2,
      title: 'Corporate Event',
      image: hillsClouds,
      desc: 'Inspire your team with high-impact seminars, team building activities, and corporate dinners.',
      details: 'Break away from rigid conference halls. Our green hillside fields and open lawns encourage collaboration, fresh perspectives, and deep relaxation. Ideal for weekend workshops, brainstorming, product launches, and celebratory gala dinners.',
      capacity: '100 - 400 guests',
      duration: 'Single / Multi-day retreat',
      includes: ['Exclusive resort booking', 'Stage setup arrangements', 'Professional sound routing', 'Lounge seating options', 'Interactive team games space'],
    },
    {
      id: 3,
      title: 'Pre-Wedding Shoot',
      image: sunsetCar,
      desc: 'Capture beautiful frames with our sunset vistas, palm rows, and mountain backdrops.',
      details: 'Pant Krupa is a pre-wedding photographers dream. Positioned perfectly to catch the golden light, you get unlimited options: vertical sunset hill views, palm trees under glowing skies, and rich floral setups. Comes with a private air-conditioned change suite.',
      capacity: '10 guests max',
      duration: '8 Hours (Day shift)',
      includes: ['Access to all scenic backdrops', 'Private air-conditioned cabin', 'Charging stations for gear', 'Refreshment support', 'Flexible time slots'],
    },
    {
      id: 4,
      title: 'Family Picnic',
      image: whiteFlower,
      desc: 'Reconnect with your loved ones in a peaceful countryside lawn under shade trees.',
      details: 'Plan an unforgettable weekend picnic with your extended family. Kids can run freely on our spacious lawns, while elders relax in the shade of palm trees. Enjoy home-cooked catering support and outdoor board games under the clear mountain air.',
      capacity: '30 - 150 guests',
      duration: '8 Hours (Day picnic)',
      includes: ['Exclusive lawn seating', 'Comfortable canopy options', 'Kitchen support counters', 'Traditional games setup', 'Family photo corners'],
    },
    {
      id: 5,
      title: 'Anniversary Celebration',
      image: entranceGate, // Reuse entrance for elegant ceremonies
      desc: 'Mark years of love with a premium candlelit banquet or evening dance party under the stars.',
      details: 'Celebrate your milestones with high-end glassmorphism decors, fairy lights, live acoustic music setups, and custom catering. Gather your closest friends and relatives for a luxurious dining banquet framed by the quiet evening silhouettes of the hills.',
      capacity: '100 - 500 guests',
      duration: '6 Hours / Full Day',
      includes: ['Illuminated tree setup', 'Stage for couple seating', 'Premium dining table setups', 'DJ setup & dance zone', 'Cocktail bar counters'],
    },
  ];

  return (
    <section id="events" className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <span className="section-tag">Memorable Occasions</span>
          <h2 className="section-title">Host Your Celebrations</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
            From grand destination weddings to intimate family gatherings, we provide a breathtaking natural setting tailored for every milestone.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '30px',
          }}
          className="events-grid"
        >
          {eventList.map((evt) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: evt.id * 0.05 }}
              style={{
                backgroundColor: 'var(--cream-bg)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-soft)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                border: '1px solid var(--cream-mid)',
                transition: 'var(--transition-smooth)',
              }}
              className="event-card-container"
            >
              {/* Event Image */}
              <div
                style={{
                  position: 'relative',
                  height: '240px',
                  width: '100%',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={evt.image}
                  alt={evt.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'var(--transition-smooth)',
                  }}
                  className="event-card-img"
                />
                {/* Visual Accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: 'rgba(15, 31, 21, 0.7)',
                    backdropFilter: 'blur(8px)',
                    color: 'var(--white)',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.78rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {evt.capacity.split(' ')[0]} Max
                </div>
              </div>

              {/* Event Details */}
              <div
                style={{
                  padding: '30px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flexGrow: 1,
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.4rem',
                      fontWeight: '600',
                      color: 'var(--forest-dark)',
                      marginBottom: '12px',
                    }}
                  >
                    {evt.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                      marginBottom: '24px',
                    }}
                  >
                    {evt.desc}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedEvent(evt)}
                  className="btn btn-outline"
                  style={{
                    padding: '10px 20px',
                    fontSize: '0.85rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    width: '100%',
                  }}
                >
                  Learn More <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Learn More Details Modal */}
      <AnimatePresence>
        {selectedEvent !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(15, 31, 21, 0.65)',
              backdropFilter: 'blur(8px)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel"
              style={{
                width: '100%',
                maxWidth: '680px',
                backgroundColor: 'var(--white)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: 'var(--shadow-premium)',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedEvent(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(15, 31, 21, 0.05)',
                  border: 'none',
                  color: 'var(--forest-dark)',
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-full)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  transition: 'var(--transition-fast)',
                }}
                onMouseEnter={(e) => (e.target.style.background = 'rgba(15, 31, 21, 0.1)')}
                onMouseLeave={(e) => (e.target.style.background = 'rgba(15, 31, 21, 0.05)')}
              >
                <X size={18} />
              </button>

              {/* Modal Banner */}
              <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(15, 31, 21, 0.8) 100%)',
                  }}
                />
                <h3
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '24px',
                    color: 'var(--white)',
                    fontSize: '1.8rem',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: '400',
                  }}
                >
                  {selectedEvent.title}
                </h3>
              </div>

              {/* Modal Body */}
              <div style={{ padding: '30px 24px', maxHeight: '60vh', overflowY: 'auto' }}>
                {/* Quick Info Grid */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '24px',
                    marginBottom: '24px',
                    paddingBottom: '20px',
                    borderBottom: '1px solid var(--cream-mid)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Users size={16} style={{ color: 'var(--gold-accent)' }} />
                    <span style={{ fontSize: '0.88rem', fontWeight: '500' }}>{selectedEvent.capacity}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Clock size={16} style={{ color: 'var(--gold-accent)' }} />
                    <span style={{ fontSize: '0.88rem', fontWeight: '500' }}>{selectedEvent.duration}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Sparkles size={16} style={{ color: 'var(--gold-accent)' }} />
                    <span style={{ fontSize: '0.88rem', fontWeight: '500' }}>Premium Event Location</span>
                  </div>
                </div>

                {/* Narrative Details */}
                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: '600', marginBottom: '8px' }}>
                    About the Setup
                  </h4>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {selectedEvent.details}
                  </p>
                </div>

                {/* Package Inclusions */}
                <div>
                  <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: '600', marginBottom: '12px' }}>
                    Location Package Includes:
                  </h4>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '10px 20px',
                    }}
                    className="modal-inclusions-grid"
                  >
                    {selectedEvent.includes.map((inc, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--gold-accent)',
                          }}
                        />
                        <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div style={{ marginTop: '36px', display: 'flex', gap: '16px' }}>
                  <a
                    href="https://docs.google.com/forms/d/1-1NKqQxnCqwomadDW8rEeTCWMWEZK8VZllZjSVZlyd4/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setSelectedEvent(null)}
                    className="btn btn-gold"
                    style={{ flexGrow: 1, padding: '12px' }}
                  >
                    Enquire Availability
                  </a>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="btn btn-outline"
                    style={{ padding: '12px 24px' }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .event-card-container:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-medium) !important;
          border-color: rgba(197, 160, 89, 0.3) !important;
        }
        .event-card-container:hover .event-card-img {
          transform: scale(1.04);
        }
        
        @media (max-width: 576px) {
          .modal-inclusions-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Events;
