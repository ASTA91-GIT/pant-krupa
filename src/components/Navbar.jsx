import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Events', href: '#events' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          transition: 'var(--transition-smooth)',
          padding: '0 24px',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          boxShadow: isScrolled ? 'var(--shadow-soft)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.05)' : 'none',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.6rem',
              fontWeight: '700',
              letterSpacing: '0.05em',
              color: isScrolled ? 'var(--forest-dark)' : 'var(--white)',
              display: 'flex',
              flexDirection: 'column',
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
                color: isScrolled ? 'var(--gold-accent)' : 'rgba(255,255,255,0.7)',
                marginTop: '4px',
              }}
            >
              FARMHOUSE
            </span>
          </a>

          {/* Desktop Menu */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '32px',
            }}
            className="desktop-menu-container"
          >
            <div style={{ display: 'flex', gap: '28px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    color: isScrolled ? 'var(--text-dark)' : 'var(--white)',
                    opacity: 0.9,
                    letterSpacing: '0.02em',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--gold-accent)')}
                  onMouseLeave={(e) =>
                    (e.target.style.color = isScrolled ? 'var(--text-dark)' : 'var(--white)')
                  }
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a
              href="https://docs.google.com/forms/d/1-1NKqQxnCqwomadDW8rEeTCWMWEZK8VZllZjSVZlyd4/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{
                padding: '10px 22px',
                fontSize: '0.85rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Book Now <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: isScrolled ? 'var(--forest-dark)' : 'var(--white)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 31, 21, 0.4)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            zIndex: 998,
          }}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '300px',
          height: '100%',
          backgroundColor: 'var(--cream-bg)',
          zIndex: 999,
          padding: '40px 24px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--forest-dark)',
            }}
          >
            <X size={24} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'var(--forest-dark)',
                borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                paddingBottom: '8px',
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://docs.google.com/forms/d/1-1NKqQxnCqwomadDW8rEeTCWMWEZK8VZllZjSVZlyd4/viewform"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn btn-primary"
            style={{
              marginTop: '16px',
              padding: '14px',
              fontSize: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            Book Now <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Inject Media Queries for Navbar responsive display via styled JSX tag */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-menu-container {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
