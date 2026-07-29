import React from 'react';
import { FileUp, UserCheck, Eye, FileCheck, ArrowRight, HelpCircle } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    icon: <FileUp size={28} color="#2563eb" />,
    title: 'Submit Paper Details & Guidelines',
    desc: 'Fill out our quick order form specifying your academic level, topic, word count, referencing style (Harvard, APA, OSCOLA), and deadline.'
  },
  {
    step: '02',
    icon: <UserCheck size={28} color="#d4af37" />,
    title: 'Matched with UK PhD Specialist',
    desc: 'We assign your paper to a verified native UK academic holding a Master’s/PhD in your exact field (Law, Business, Nursing, Engineering, CS).'
  },
  {
    step: '03',
    icon: <Eye size={28} color="#10b981" />,
    title: 'Track Draft Progress & Provide Feedback',
    desc: 'Receive chapter-by-chapter progress drafts for long dissertations. Request any adjustments or supervisor feedback inclusions along the way.'
  },
  {
    step: '04',
    icon: <FileCheck size={28} color="#8b5cf6" />,
    title: 'Download Final Paper & Quality Report',
    desc: 'Receive your fully polished, formatted paper along with a comprehensive Plagiarism & AI-Detection Quality report ready for submission.'
  }
];

export default function HowItWorks({ onOpenOrderModal }) {
  return (
    <section style={{ padding: '5.5rem 0', backgroundColor: 'var(--surface-alt)' }}>
      <div className="container">
        <div className="section-title">
          <div className="badge-emerald" style={{ marginBottom: '0.8rem' }}>
            <HelpCircle size={15} /> Simple 4-Step Process
          </div>
          <h2>How Our UK Dissertation & Assignment Service Works</h2>
          <p>
            Get expert academic support in just 4 simple steps with complete transparency and real-time updates.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }} className="steps-grid">
          {STEPS.map((s, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem 1.5rem',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <div style={{
                    backgroundColor: 'var(--surface-alt)',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-md)'
                  }}>
                    {s.icon}
                  </div>
                  <span style={{
                    fontSize: '1.8rem',
                    fontWeight: 900,
                    color: 'var(--accent-gold)',
                    opacity: 0.8,
                    fontFamily: 'Plus Jakarta Sans'
                  }}>
                    {s.step}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.6rem', lineHeight: 1.3 }}>
                  {s.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button className="btn btn-navy" onClick={onOpenOrderModal} style={{ padding: '1rem 2.2rem', fontSize: '1.05rem' }}>
            Ready to Begin? Order Your Paper Today <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .steps-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 576px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
