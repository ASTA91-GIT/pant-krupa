import React from 'react';
import { MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Photo Gallery', href: '#gallery' },
    { name: 'Event Packages', href: '#events' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const socialLinks = [
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      ), 
      href: 'https://instagram.com', 
      name: 'Instagram' 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ), 
      href: 'https://facebook.com', 
      name: 'Facebook' 
    },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
          <path d="m10 15 5-3-5-3z"/>
        </svg>
      ), 
      href: 'https://youtube.com', 
      name: 'YouTube' 
    },
    { 
      icon: <MessageCircle size={20} />, 
      href: 'https://wa.me/919920102030', 
      name: 'WhatsApp' 
    },
  ];


  return (
    <footer
      style={{
        backgroundColor: 'var(--forest-dark)',
        color: 'rgba(255,255,255,0.75)',
        padding: '80px 0 30px 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '50px',
            marginBottom: '60px',
          }}
          className="footer-grid"
        >
          {/* Column 1: Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <a
              href="#home"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.6rem',
                fontWeight: '700',
                color: 'var(--white)',
                letterSpacing: '0.05em',
                lineHeight: 1,
              }}
            >
              <span>PANT KRUPA</span>
              <span
                style={{
                  fontSize: '0.65rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: '600',
                  letterSpacing: '0.25em',
                  color: 'var(--gold-accent)',
                  display: 'block',
                  marginTop: '4px',
                }}
              >
                FARMHOUSE
              </span>
            </a>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.6)' }}>
              A premium luxury destination surrounded by rolling hills and lush green scenery. Built for weddings, birthday gatherings, photoshoots, and quiet weekend family retreats.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h4
              style={{
                color: 'var(--white)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Quick Links
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px 20px',
              }}
            >
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    fontSize: '0.88rem',
                    color: 'rgba(255,255,255,0.65)',
                    transition: 'var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'var(--gold-accent)';
                    e.target.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'rgba(255,255,255,0.65)';
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Follow Us */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h4
              style={{
                color: 'var(--white)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Follow Our Journey
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
              Follow us on social media for regular updates, decor layout photos, and seasonal discounts.
            </p>
            <div style={{ display: 'flex', gap: '14px' }}>
              {socialLinks.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Pant Krupa Farmhouse on ${soc.name}`}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    color: 'var(--white)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'var(--transition-fast)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--gold-accent)';
                    e.currentTarget.style.borderColor = 'var(--gold-accent)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Divider */}
        <div
          style={{
            height: '1px',
            backgroundColor: 'rgba(255,255,255,0.07)',
            marginBottom: '30px',
          }}
        />

        {/* Footer Bottom info */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            alignItems: 'center',
            fontSize: '0.82rem',
            color: 'rgba(255,255,255,0.5)',
          }}
          className="footer-bottom-flex"
        >
          {/* Legal Links */}
          <div style={{ display: 'flex', gap: '24px' }}>
            <a
              href="#privacy"
              style={{ transition: 'var(--transition-fast)' }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--gold-accent)')}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.5)')}
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              style={{ transition: 'var(--transition-fast)' }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--gold-accent)')}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.5)')}
            >
              Terms & Conditions
            </a>
          </div>

          {/* Copyright & Made with love */}
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span>
              &copy; {currentYear} Pant Krupa Farmhouse. All Rights Reserved.
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
              Crafted with <Heart size={10} fill="var(--gold-accent)" color="var(--gold-accent)" /> for premium outdoor events.
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-bottom-flex {
            flex-direction: row !important;
            justify-content: space-between !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
