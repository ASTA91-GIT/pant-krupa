import React from 'react';
import { motion } from 'framer-motion';
import { CalendarRange, ArrowUpRight } from 'lucide-react';
import hillsClouds from '../assets/hills-clouds.jpg';

const BookCTA = () => {
  const googleFormUrl = "https://docs.google.com/forms/d/1-1NKqQxnCqwomadDW8rEeTCWMWEZK8VZllZjSVZlyd4/viewform";

  return (
    <section
      id="booking"
      style={{
        position: 'relative',
        padding: '120px 0',
        width: '100%',
        backgroundImage: `url(${hillsClouds})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Muted Deep Green Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(15, 31, 21, 0.75) 0%, rgba(15, 31, 21, 0.85) 100%)',
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel-dark"
            style={{
              padding: '60px 40px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: 'var(--shadow-premium)',
            }}
          >
            {/* Calendar Icon Badge */}
            <div
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                backgroundColor: 'rgba(197, 160, 89, 0.15)',
                color: 'var(--gold-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 28px auto',
                border: '1px solid rgba(197, 160, 89, 0.25)',
              }}
            >
              <CalendarRange size={32} />
            </div>

            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--gold-accent)',
                marginBottom: '16px',
                display: 'inline-block',
              }}
            >
              Reservations Open
            </span>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                color: 'var(--white)',
                marginBottom: '20px',
                fontWeight: '400',
              }}
            >
              Book Your Dream Event
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.95rem, 1.1vw, 1.1rem)',
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '40px',
                maxWidth: '680px',
                margin: '0 auto 40px auto',
              }}
            >
              Celebrate weddings, birthdays, anniversaries, corporate events, family gatherings, and special occasions at Pant Krupa Farmhouse. Submit your booking request through our booking form, and our team will contact you shortly to confirm availability and discuss your event.
            </p>

            {/* Redirection link primary CTA button */}
            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{
                padding: '16px 44px',
                fontSize: '1.05rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 8px 30px rgba(197, 160, 89, 0.4)',
              }}
            >
              Book Your Event <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookCTA;
