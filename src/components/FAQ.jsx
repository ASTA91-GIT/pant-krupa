import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: 'Can I book for weddings?',
      answer: 'Yes, Pant Krupa Farmhouse is highly suitable for weddings. Our spacious open lawns can comfortably accommodate between 300 to 1,000 guests. We provide changing rooms, stage areas, dressing villas, catering spaces, and generator backup systems specifically configured for grand destination marriages.',
    },
    {
      question: 'Is catering available?',
      answer: 'We provide comprehensive catering support. While you are free to bring your own preferred caterers, we offer a fully equipped, spacious kitchen area for caterers to prepare hot food. We can also recommend premium catering partners who specialize in local and multi-cuisine banquets.',
    },
    {
      question: 'Can I visit before booking?',
      answer: 'Absolutely. We encourage all prospective clients to visit the property in person. Site visits are arranged by appointment. Please submit a request via our booking inquiry form or contact us directly on WhatsApp to schedule a suitable date and time for a guided tour.',
    },
    {
      question: 'Is parking available?',
      answer: 'Yes, secure and spacious parking is available on-site inside our property boundaries. We can easily accommodate up to 40+ cars and multiple buses, ensuring safety and convenience for your guests.',
    },
    {
      question: 'Can I customize decorations?',
      answer: 'Yes, customization is fully supported. We have our own trusted panel of creative event decorators who can configure custom arches, stage drapes, lighting arrays, floral canopy designs, and themed birthday backdrops according to your preferences. Alternatively, you may hire outside decorators upon obtaining approval.',
    },
    {
      question: 'How do I confirm my booking?',
      answer: 'To confirm your booking, first submit your preferred date and requirements through our online inquiry form. Once availability is verified, a booking coordinator will contact you to discuss details. The reservation is finalized upon signing the venue lease and submitting a refundable token deposit.',
    },
  ];

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-padding" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="text-center" style={{ marginBottom: '50px' }}>
          <span className="section-tag">Common Queries</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Find quick answers about venue bookings, amenities, catering, and customization services.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  border: '1px solid var(--cream-mid)',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--cream-bg)',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease',
                }}
                className={`faq-item ${isOpen ? 'active' : ''}`}
              >
                {/* Header Button */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  style={{
                    width: '100%',
                    padding: '24px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <HelpCircle
                      size={20}
                      style={{
                        color: isOpen ? 'var(--gold-accent)' : 'var(--text-muted)',
                        flexShrink: 0,
                        transition: 'color 0.3s ease',
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.05rem',
                        fontWeight: '600',
                        color: isOpen ? 'var(--forest-dark)' : 'var(--text-dark)',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {item.question}
                    </span>
                  </div>
                  <div
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.3s ease',
                      color: isOpen ? 'var(--gold-accent)' : 'var(--text-muted)',
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div
                        style={{
                          padding: '0 28px 28px 64px',
                          fontSize: '0.94rem',
                          lineHeight: 1.6,
                          color: 'var(--text-muted)',
                        }}
                      >
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .faq-item:hover {
          border-color: rgba(197, 160, 89, 0.4);
        }
        .faq-item.active {
          border-color: var(--gold-accent);
          background-color: var(--white);
        }
      `}</style>
    </section>
  );
};

export default FAQ;
