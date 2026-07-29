import React, { useState } from 'react';
import { FileText, Download, CheckCircle, Award, Star, Quote } from 'lucide-react';

const SAMPLES = [
  {
    id: 'business',
    subject: 'MSc International Business',
    title: 'The Strategic Impact of FinTech Innovation on Legacy Retail Banks in the UK',
    grade: '78% First Class',
    university: 'University of Manchester',
    pages: '45 Pages / 12,500 Words',
    references: ' Harvard Style (84 Citations)',
    excerpt: `Executive Summary: This research investigates the competitive disintermediation of traditional UK retail banks by neo-banks (Revolut, Monzo). Utilizing a mixed-methodology approach combining quantitative customer retention metrics (n=450) and qualitative interviews with senior banking risk managers...`,
    feedback: 'Outstanding empirical methodology and critical analysis of regulatory frameworks under PSD2.'
  },
  {
    id: 'law',
    subject: 'LLM Corporate Law',
    title: 'An Analysis of Director Fiduciary Duties under Section 172 of the Companies Act 2006',
    grade: '75% First Class',
    university: 'King’s College London (KCL)',
    pages: '38 Pages / 10,000 Words',
    references: 'OSCOLA Citation Style',
    excerpt: `Chapter 3: Statutory Interpretation & Environmental Stakeholders: The tension between enlightened shareholder value (ESV) and corporate social responsibility remains acute. This chapter examines recent landmark Chancery Division decisions concerning corporate climate litigation...`,
    feedback: 'Flawless OSCOLA referencing and rigorous synthesis of recent Chancery judgments.'
  },
  {
    id: 'nursing',
    subject: 'BSc Adult Nursing (Honours)',
    title: 'Reflective Evaluation of Clinical Governance and Sepsis Screening in NHS Emergency Departments',
    grade: '76% First Class',
    university: 'University of Edinburgh',
    pages: '25 Pages / 6,500 Words',
    references: 'APA 7th Edition',
    excerpt: `Section 2: Gibbs Reflective Cycle Application: Utilizing Gibbs (1988), this paper critically evaluates a emergency triage scenario involving suspected neutropenic sepsis. Clinical risk escalation protocols were benchmarked against NICE Guideline NG51...`,
    feedback: 'Exceptional integration of reflective practice models with current NHS clinical governance guidelines.'
  },
  {
    id: 'cs',
    subject: 'MSc Artificial Intelligence',
    title: 'Machine Learning Models for Real-time Credit Risk Prediction in UK Peer-to-Peer Lending',
    grade: '82% High Distinction',
    university: 'University College London (UCL)',
    pages: '50 Pages / 14,000 Words',
    references: 'IEEE Citation Format',
    excerpt: `Abstract: We present an optimized XGBoost algorithm combined with SHAP (SHapley Additive exPlanations) for transparent credit scoring. Evaluated on 120,000 anonymized UK loan records, the model achieved an AUC-ROC of 0.942...`,
    feedback: 'Exceptional code implementation and robust mathematical derivation of SHAP explainability values.'
  }
];

export default function SampleShowcase({ onOpenOrderModal }) {
  const [activeTab, setActiveTab] = useState('business');

  const currentSample = SAMPLES.find(s => s.id === activeTab);

  return (
    <section id="samples" style={{ padding: '5.5rem 0', backgroundColor: 'var(--surface-alt)' }}>
      <div className="container">
        <div className="section-title">
          <div className="badge-gold" style={{ marginBottom: '0.8rem' }}>
            <Award size={16} /> Verified Quality Proof
          </div>
          <h2>Explore 1st-Class Scored Sample Dissertations</h2>
          <p>
            Preview real academic work produced by our expert UK writers. Every paper adheres strictly to UK mark schemes and grading criteria.
          </p>
        </div>

        {/* Tab Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {SAMPLES.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              style={{
                padding: '0.8rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 700,
                fontSize: '0.92rem',
                border: activeTab === s.id ? '2px solid var(--accent-gold)' : '1px solid var(--border)',
                backgroundColor: activeTab === s.id ? 'var(--primary)' : '#ffffff',
                color: activeTab === s.id ? '#ffffff' : 'var(--text-main)',
                boxShadow: activeTab === s.id ? 'var(--shadow-md)' : 'none',
                transition: 'var(--transition)'
              }}
            >
              {s.subject}
            </button>
          ))}
        </div>

        {/* Active Sample Card Showcase */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--border)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '0.85fr 1.15fr'
        }} className="sample-container">

          {/* Left Column: Visual Mockup & Metadata */}
          <div style={{
            backgroundColor: '#0f172a',
            color: '#ffffff',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justify: 'space-between',
            position: 'relative'
          }}>
            <div>
              <div className="badge-emerald" style={{ marginBottom: '1.5rem', fontSize: '0.85rem' }}>
                <CheckCircle size={14} /> Verified UK Grade Stamp
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, lineHeight: 1.3, color: '#ffffff', marginBottom: '1rem' }}>
                {currentSample.title}
              </h3>

              <div style={{ fontSize: '0.9rem', color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                <div><strong>University:</strong> {currentSample.university}</div>
                <div><strong>Length:</strong> {currentSample.pages}</div>
                <div><strong>Referencing:</strong> {currentSample.references}</div>
              </div>
            </div>

            {/* Examiner Grade Stamp Badge */}
            <div style={{
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              border: '2px solid #10b981',
              borderRadius: 'var(--radius-md)',
              padding: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{
                backgroundColor: '#10b981',
                color: '#ffffff',
                fontWeight: 900,
                fontSize: '1.2rem',
                padding: '0.6rem 0.9rem',
                borderRadius: '8px'
              }}>
                78%
              </div>
              <div>
                <div style={{ color: '#10b981', fontWeight: 800, fontSize: '1rem' }}>
                  {currentSample.grade}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>
                  Verified Quality: 100% Original Content
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Text Excerpt & Feedback */}
          <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem' }}>
                <FileText size={18} color="var(--accent-gold)" /> Paper Snippet & Excerpt Preview
              </div>

              <div style={{
                backgroundColor: 'var(--surface-alt)',
                padding: '1.2rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                fontFamily: 'serif',
                fontSize: '0.95rem',
                lineHeight: 1.7,
                color: 'var(--text-main)',
                marginBottom: '1.8rem',
                borderLeft: '4px solid var(--accent-gold)'
              }}>
                "{currentSample.excerpt}"
              </div>

              {/* Examiner Feedback */}
              <div style={{
                backgroundColor: '#fffbeb',
                border: '1px solid #fde68a',
                borderRadius: 'var(--radius-md)',
                padding: '1rem 1.2rem',
                marginBottom: '2rem'
              }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#92400e', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Quote size={14} /> Professor Feedback & Assessment Note
                </div>
                <p style={{ fontSize: '0.88rem', color: '#78350f', fontStyle: 'italic' }}>
                  "{currentSample.feedback}"
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={onOpenOrderModal}>
                Order A Similar 1st-Class Paper
              </button>
              <button className="btn btn-outline" onClick={() => alert(`Full ${currentSample.subject} sample document PDF download standard sample.`)}>
                <Download size={16} /> Download Full Sample PDF
              </button>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .sample-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
