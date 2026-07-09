import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

const Contact = () => {
  // Configured contact variables
  const contactDetails = {
    phone: '+91 74998 89392',
    whatsapp: '+91 74998 89392',
    email: 'bookings@pantkrupafarmhouse.com',
    address: 'Pant Krupa Farmhouse, Bopoli, Post - Tadwagale, Taluka - Alibag, Raigad, Maharashtra 402203, India',
    hours: 'Monday – Sunday: 9:00 AM – 9:00 PM',
  };

  // Google Maps embed URL pointing to Alibag Bopoli area
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.0308051754024!2d72.99636629999999!3d18.6255089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8730055303da7%3A0x442951b7edf1b80b!2sPant+Krupa+Farmhouse%2C+Bopoli%2C+Maharashtra+402203!5e0!3m2!1sen!2sin!4v1719280000000!5m2!1sen!2sin";

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--cream-bg)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Directions & Contact</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
            We would love to help you plan your event. Reach out to schedule a site tour or request a booking details discussion.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '50px',
            alignItems: 'stretch',
          }}
          className="contact-grid"
        >
          {/* Left Column: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '24px',
            }}
          >
            <div
              className="glass-panel"
              style={{
                backgroundColor: 'var(--white)',
                borderRadius: 'var(--radius-lg)',
                padding: '40px 32px',
                border: '1px solid var(--cream-mid)',
                boxShadow: 'var(--shadow-soft)',
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '28px',
              }}
            >
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-sans)', fontWeight: '600', marginBottom: '10px' }}>
                Contact Information
              </h3>

              {/* Phone */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ color: 'var(--gold-accent)', flexShrink: 0 }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em', fontWeight: '600' }}>
                    Phone Number
                  </h4>
                  <a href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`} style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--forest-dark)' }}>
                    {contactDetails.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ color: '#25D366', flexShrink: 0 }}>
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em', fontWeight: '600' }}>
                    WhatsApp Chat
                  </h4>
                  <a
                    href={`https://wa.me/${contactDetails.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--forest-dark)', display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    {contactDetails.whatsapp} <ExternalLink size={14} style={{ color: 'var(--text-muted)' }} />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ color: 'var(--gold-accent)', flexShrink: 0 }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em', fontWeight: '600' }}>
                    Email Address
                  </h4>
                  <a href={`mailto:${contactDetails.email}`} style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--forest-dark)' }}>
                    {contactDetails.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--gold-accent)', flexShrink: 0, marginTop: '4px' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em', fontWeight: '600', marginBottom: '4px' }}>
                    Location Address
                  </h4>
                  <p style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--forest-dark)', lineHeight: 1.5 }}>
                    Pant Krupa Farmhouse<br />
                    Bopoli, Post - Tadwagale<br />
                    Taluka - Alibag<br />
                    Raigad, Maharashtra 402203<br />
                    India
                  </p>
                  <a
                    href="https://maps.app.goo.gl/1VmrxJkFnA7CvpQG9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{
                      marginTop: '14px',
                      padding: '8px 18px',
                      fontSize: '0.82rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    Get Directions <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ color: 'var(--gold-accent)', flexShrink: 0 }}>
                  <Clock size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em', fontWeight: '600' }}>
                    Business Hours
                  </h4>
                  <p style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--forest-dark)' }}>
                    {contactDetails.hours}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{
              width: '100%',
              minHeight: '400px',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-premium)',
              border: '1px solid var(--cream-mid)',
              position: 'relative',
            }}
          >
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pant Krupa Farmhouse Location Map"
            />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
