import React from 'react';
import { Star, Quote, CheckCircle, Award, User } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Oliver S.',
    university: 'University of Manchester',
    course: 'MSc International Finance',
    grade: '76% First Class',
    service: 'Full MSc Dissertation (12,000w)',
    comment: 'I was drowning in data analysis for my dissertation while balancing part-time work. ukstudentdesk matched me with an Oxford PhD researcher who completed my SPSS regression models and literature review brilliantly. Scored 76%!',
    rating: 5,
    date: '2 weeks ago'
  },
  {
    name: 'Sophia K.',
    university: 'King’s College London (KCL)',
    course: 'LLM Commercial Law',
    grade: '74% Distinction',
    service: 'OSCOLA Law Dissertation (10,000w)',
    comment: 'OSCOLA legal citations are notoriously strict at KCL. The legal writer assigned to my commercial law dissertation was incredible. Every case citation was spot on and originality report showed 0% AI detection. Highly recommend!',
    rating: 5,
    date: '3 weeks ago'
  },
  {
    name: 'Gareth M.',
    university: 'University of Edinburgh',
    course: 'BSc Computer Science',
    grade: '79% First Class',
    service: 'Machine Learning Project & Report',
    comment: 'Urgent 3-day turnaround needed for my AI methodology paper. Delivered 8 hours before the deadline with fully documented Python code snippets and literature background. Saved my final degree classification!',
    rating: 5,
    date: '1 month ago'
  },
  {
    name: 'Amara N.',
    university: 'University of Birmingham',
    course: 'MSc Adult Nursing',
    grade: '77% Distinction',
    service: 'Nursing Reflective Essay & Audit',
    comment: 'The Gibbs reflective cycle paper was structured according to NMC guidelines. The writer clearly understood NHS clinical governance. 100% confidential and worth every penny.',
    rating: 5,
    date: '1 month ago'
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" style={{ padding: '5.5rem 0', backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-title">
          <div className="badge-gold" style={{ marginBottom: '0.8rem' }}>
            <Star size={16} fill="#f59e0b" color="#f59e0b" /> Verified Student Reviews
          </div>
          <h2>What UK University Students Say About Us</h2>
          <p>
            Read authentic feedback from undergraduate, Master’s, and PhD students who achieved First-Class and 2:1 honours with our help.
          </p>
        </div>

        {/* Aggregate Score Bar */}
        <div style={{
          backgroundColor: 'var(--surface-alt)',
          borderRadius: 'var(--radius-md)',
          padding: '1.5rem 2rem',
          display: 'flex',
          justify: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: '3rem',
          border: '1px solid var(--border)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1 }}>4.9 / 5.0</div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.2rem', margin: '0.3rem 0' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Trustpilot Verified Rating</div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1 }}>99.4%</div>
            <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--emerald)', margin: '0.3rem 0' }}>Pass & Grade Target</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>First-Class & 2:1 Achievement</div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1 }}>18,500+</div>
            <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--blue-accent)', margin: '0.3rem 0' }}>UK Papers Completed</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>120+ UK Universities</div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem'
        }} className="reviews-grid">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <div style={{
                      backgroundColor: 'var(--primary)',
                      color: 'var(--accent-gold)',
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'center',
                      fontWeight: 800,
                      fontSize: '1rem'
                    }}>
                      {rev.name[0]}
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--primary)' }}>{rev.name}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{rev.university} • {rev.course}</div>
                    </div>
                  </div>

                  <span className="badge-emerald" style={{ fontSize: '0.78rem' }}>
                    <Award size={13} /> {rev.grade}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                <p style={{ fontSize: '0.94rem', color: 'var(--text-main)', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "{rev.comment}"
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                <span><strong>Service:</strong> {rev.service}</span>
                <span>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .reviews-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
