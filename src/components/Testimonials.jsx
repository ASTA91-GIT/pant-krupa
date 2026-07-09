import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Sneha Patil',
      role: 'Bride’s Sister (Wedding Celebration)',
      text: 'Pant Krupa was the perfect choice for my brother’s wedding. The view of the hills during sunset was absolutely breathtaking, and our guests loved the spacious lawn layout and facilities.',
      rating: 5,
    },
    {
      name: 'Purvesh Rane',
      role: 'Photographer (Pre-Wedding Shoot)',
      text: 'We booked the farmhouse for a pre-wedding photoshoot and a small family picnic. The scenic mountain backdrops and the garden flowers make for great photographic frames.',
      rating: 5,
    },
    {
      name: 'Rajesh Shinde',
      role: 'HR Manager (Corporate Retreat)',
      text: 'Exceptional destination. We held our annual corporate retreat here. Being surrounded by nature instead of concrete walls was incredibly refreshing and engaging for the whole team.',
      rating: 5,
    },
    {
      name: 'Priya Mehta',
      role: 'Host (1st Birthday Party)',
      text: 'Superb catering support, clean changing rooms, and a massive parking space. Our family birthday event went flawlessly, and the children had a wonderful time playing on the lawns.',
      rating: 5,
    },
    {
      name: 'Amit Deshmukh',
      role: 'Organizer (Silver Anniversary)',
      text: 'The event stage structure, DJ setup support, and silent power generator backup are top notch. Excellent hosting coordination. Highly recommended for premium family parties.',
      rating: 5,
    },
    {
      name: 'Sonal Shah',
      role: 'Guest (Family Day Picnic)',
      text: 'Perfect place to relax and unwind. The kids ran freely on the lawns, and the sunset behind the hills was magical. The hospitality team was very supportive throughout our day stay.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding" style={{ backgroundColor: 'var(--cream-bg)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <span className="section-tag">Guest Experiences</span>
          <h2 className="section-title">What Our Visitors Say</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
            We take pride in providing a beautiful, well-maintained nature escape for your celebrations. Read about our guests' experiences.
          </p>
        </div>

        {/* Testimonials Masonry Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '30px',
          }}
          className="testimonials-grid"
        >
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
              style={{
                backgroundColor: 'var(--white)',
                borderRadius: 'var(--radius-md)',
                padding: '36px 30px',
                border: '1px solid var(--cream-mid)',
                boxShadow: 'var(--shadow-soft)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
              className="testimonial-card"
            >
              {/* Quote Icon Background */}
              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  color: 'rgba(197, 160, 89, 0.08)',
                  pointerEvents: 'none',
                }}
              >
                <Quote size={56} />
              </div>

              <div>
                {/* Stars */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--gold-accent)" color="var(--gold-accent)" />
                  ))}
                </div>

                {/* Review Text */}
                <p
                  style={{
                    fontSize: '0.94rem',
                    lineHeight: 1.6,
                    color: 'var(--text-dark)',
                    fontStyle: 'italic',
                    marginBottom: '24px',
                  }}
                >
                  "{rev.text}"
                </p>
              </div>

              {/* Author Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                {/* Avatar initial circle */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--forest-mid)',
                    color: 'var(--white)',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  {rev.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--forest-dark)' }}>
                    {rev.name}
                  </h4>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block' }}>
                    {rev.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonial-card {
          transition: var(--transition-smooth);
        }
        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-medium) !important;
          border-color: rgba(197, 160, 89, 0.25) !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
