import React from 'react';
import { ShieldCheck, GraduationCap, Clock, Lock, RefreshCw, Award, CheckCircle2 } from 'lucide-react';

const FEATURES = [
  {
    icon: <GraduationCap size={32} color="#d4af37" />,
    title: 'Oxbridge & Russell Group PhD Experts',
    desc: 'Every writer holds a Master’s or PhD degree from top UK institutions (Oxford, Cambridge, Imperial, KCL, Manchester) with minimum 5 years academic consulting experience.'
  },
  {
    icon: <ShieldCheck size={32} color="#10b981" />,
    title: '0% AI & Guaranteed Plagiarism-Free',
    desc: 'All papers are written 100% from scratch. We provide a comprehensive similarity & AI-detection report with every order for total peace of mind.'
  },
  {
    icon: <Lock size={32} color="#2563eb" />,
    title: '100% Confidential & Secure NDA',
    desc: 'Your personal identity, university, and project details are encrypted under strict UK data protection standards. We never share or resell any work.'
  },
  {
    icon: <RefreshCw size={32} color="#8b5cf6" />,
    title: '14-Day Unlimited Free Revisions',
    desc: 'Need tweaks after your supervisor review? Enjoy 14 days of free amendments to align perfectly with your supervisor feedback.'
  },
  {
    icon: <Clock size={32} color="#ec4899" />,
    title: 'Strict On-Time Delivery Guarantee',
    desc: 'Never miss a deadline. We deliver papers well ahead of your specified submission time, even for urgent 12-hour or 24-hour requests.'
  },
  {
    icon: <Award size={32} color="#f59e0b" />,
    title: 'First-Class & 2:1 Standard Refund Policy',
    desc: 'We stand by our quality. If the paper fails to meet your selected academic standard or criteria, we provide a full money-back refund guarantee.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" style={{ padding: '5.5rem 0', backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-title">
          <div className="badge-gold" style={{ marginBottom: '0.8rem' }}>
            <ShieldCheck size={16} /> Unmatched Academic Standards
          </div>
          <h2>Why 18,500+ UK Students Trust Us</h2>
          <p>
            We combine rigorous academic research, native UK English expertise, and transparent ethical policies to ensure your academic success.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem'
        }} className="why-grid">
          {FEATURES.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--surface-alt)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                transition: 'var(--transition)'
              }}
              className="why-card"
            >
              <div style={{
                backgroundColor: '#ffffff',
                width: '60px',
                height: '60px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.2rem',
                boxShadow: 'var(--shadow-sm)'
              }}>
                {item.icon}
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.6rem' }}>
                {item.title}
              </h3>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* University Coverage Bar */}
        <div style={{
          marginTop: '4rem',
          backgroundColor: 'var(--primary)',
          color: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
          textAlign: 'center'
        }}>
          <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--accent-gold)', marginBottom: '1rem' }}>
            Tailored Assistance for All UK Universities & Mark Schemes
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.2rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
            {['University of Oxford', 'University of Cambridge', 'UCL', 'Imperial College London', 'King’s College London', 'University of Manchester', 'University of Edinburgh', 'University of Bristol', 'University of Warwick', 'University of Birmingham', 'University of Leeds', 'University of Glasgow'].map((uni, idx) => (
              <span key={idx} style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '0.4rem 0.9rem', borderRadius: 'var(--radius-full)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={14} color="#10b981" /> {uni}
              </span>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .why-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--accent-gold);
        }
        @media (max-width: 992px) {
          .why-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .why-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
