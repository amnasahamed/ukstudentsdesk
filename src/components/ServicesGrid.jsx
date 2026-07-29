import React from 'react';
import { BookOpen, FileCheck, BarChart3, Scale, Stethoscope, Sparkles, Code, CheckCircle, ArrowUpRight } from 'lucide-react';

const SERVICES = [
  {
    icon: <BookOpen size={28} color="#2563eb" />,
    title: 'Full Master’s & PhD Dissertations',
    desc: 'End-to-end dissertation writing support covering proposal, literature review, methodology, data collection, SPSS analysis, and conclusion.',
    features: ['Custom Methodology Design', '1st Class & 2:1 Standards', 'Chapter-by-Chapter Draft Delivery'],
    tag: 'Most Popular'
  },
  {
    icon: <FileCheck size={28} color="#d4af37" />,
    title: 'Coursework & Essay Assistance',
    desc: 'In-depth researched essays, case studies, and lab reports tailored specifically to UK university criteria & mark schemes.',
    features: ['Oxbridge Reference Formatting', 'Critical Argumentation', '100% Originality Guarantee'],
    tag: 'Fast Turnaround'
  },
  {
    icon: <BarChart3 size={28} color="#10b981" />,
    title: 'SPSS & Quantitative Data Analysis',
    desc: 'Expert data analysis using SPSS, R Studio, Python, Stata, and NVivo with complete visual charts and interpretation chapters.',
    features: ['Regression & ANOVA Models', 'Hypothesis Testing', 'Raw Dataset Provided'],
    tag: 'Specialist'
  },
  {
    icon: <Scale size={28} color="#8b5cf6" />,
    title: 'Law Essays & OSCOLA Citation',
    desc: 'Specialized legal research papers, moot court problem questions, and dissertations using exact UK OSCOLA citation standards.',
    features: ['UK Case Law Citation', 'Statutory Analysis', 'LLM & GDL Qualified Writers'],
    tag: 'Law Focus'
  },
  {
    icon: <Stethoscope size={28} color="#ec4899" />,
    title: 'Nursing, Midwifery & Healthcare',
    desc: 'Reflective practice accounts, NMC reflective models (Gibbs, Driscoll), systematic literature reviews, and clinical audit papers.',
    features: ['NMC Code of Conduct Compliant', 'Systematic Reviews', 'PICO Framework Usage'],
    tag: 'Healthcare'
  },
  {
    icon: <Sparkles size={28} color="#f59e0b" />,
    title: 'Proofreading & Structural Editing',
    desc: 'Comprehensive academic proofreading by native English editors to correct grammar, flow, terminology, and reference lists.',
    features: ['Track Changes Document', 'Oxford/Harvard Style Check', 'Originality & Similarity Check'],
    tag: 'Express 12h'
  }
];

export default function ServicesGrid({ onSelectService }) {
  return (
    <section id="services" style={{ padding: '5.5rem 0', backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="section-title">
          <div className="badge-emerald" style={{ marginBottom: '0.8rem' }}>
            <CheckCircle size={15} /> Comprehensive Academic Services
          </div>
          <h2>Specialized Assistance Across Every Field</h2>
          <p>
            Whether you need a full 15,000-word MSc dissertation or an urgent 2,000-word essay, our native UK PhD writers deliver tailored 1st-Class standard work.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem'
        }} className="services-grid">
          {SERVICES.map((srv, idx) => (
            <div
              key={idx}
              style={{
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                backgroundColor: 'var(--surface)',
                transition: 'var(--transition)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="service-card"
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
                  <div style={{
                    backgroundColor: 'var(--surface-alt)',
                    padding: '0.8rem',
                    borderRadius: 'var(--radius-md)',
                    display: 'inline-flex'
                  }}>
                    {srv.icon}
                  </div>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    backgroundColor: 'var(--surface-alt)',
                    color: 'var(--text-muted)',
                    padding: '0.3rem 0.6rem',
                    borderRadius: '4px',
                    textTransform: 'uppercase'
                  }}>
                    {srv.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.8rem' }}>
                  {srv.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  {srv.desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                      <CheckCircle size={15} color="#10b981" /> {feat}
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectService(srv.title)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: 'var(--blue-accent)',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border)'
                }}
              >
                Request Quote For This Service <ArrowUpRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
          border-color: var(--blue-accent);
        }
        @media (max-width: 992px) {
          .services-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
