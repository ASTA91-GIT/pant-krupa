import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';


const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    
    // Show a welcoming WhatsApp tooltip after 5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
      // Hide tooltip after 6 seconds
      setTimeout(() => setShowTooltip(false), 6000);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const whatsappUrl = "https://wa.me/919920102030?text=Hi!%20I'm%20interested%20in%20booking%20Pant%20Krupa%20Farmhouse%20for%20an%20event.%20Could%20you%20please%20share%20availability%3F";

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        alignItems: 'center',
      }}
    >
      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top of the page"
          style={{
            backgroundColor: 'var(--white)',
            border: '1px solid var(--cream-mid)',
            color: 'var(--forest-dark)',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-medium)',
            transition: 'var(--transition-fast)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--forest-mid)';
            e.currentTarget.style.color = 'var(--white)';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--white)';
            e.currentTarget.style.color = 'var(--forest-dark)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Floating WhatsApp Button */}
      <div style={{ position: 'relative' }}>
        {/* Tooltip Message */}
        {showTooltip && (
          <div
            style={{
              position: 'absolute',
              right: '64px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'var(--forest-dark)',
              color: 'var(--white)',
              padding: '10px 18px',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.85rem',
              fontWeight: '500',
              whiteSpace: 'nowrap',
              boxShadow: 'var(--shadow-premium)',
              border: '1px solid rgba(255,255,255,0.1)',
              animation: 'tooltipFade 0.5s ease forwards',
            }}
          >
            Chat with our team! 👋
            {/* Tooltip triangle indicator */}
            <div
              style={{
                position: 'absolute',
                right: '-6px',
                top: '50%',
                transform: 'translateY(-50%) rotate(45deg)',
                width: '12px',
                height: '12px',
                backgroundColor: 'var(--forest-dark)',
                borderRight: '1px solid rgba(255,255,255,0.1)',
                borderTop: '1px solid rgba(255,255,255,0.1)',
              }}
            />
          </div>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Pant Krupa Farmhouse on WhatsApp"
          style={{
            backgroundColor: '#25D366',
            color: 'var(--white)',
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
            transition: 'var(--transition-fast)',
            border: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.08) translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(37, 211, 102, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1) translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 211, 102, 0.4)';
          }}
        >
          <MessageCircle size={28} fill="currentColor" />
        </a>
      </div>

      <style>{`
        @keyframes tooltipFade {
          from {
            opacity: 0;
            transform: translateY(-50%) translateX(15px);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingActions;
