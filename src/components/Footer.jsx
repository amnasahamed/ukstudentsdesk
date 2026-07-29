import React from 'react';
import { Phone, Mail, MessageCircle, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onOpenOrderModal }) {
  return (
    <footer style={{ backgroundColor: '#070d1d', color: '#94a3b8', paddingTop: '4.5rem', paddingBottom: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
          gap: '2.5rem',
          marginBottom: '3.5rem'
        }} className="footer-grid">
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-glow) 100%)',
                color: 'var(--accent-gold)',
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                fontSize: '1.2rem',
                fontWeight: 'bold'
              }}>
                🇬🇧
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em' }}>
                ukstudent<span style={{ color: 'var(--accent-gold)' }}>desk</span>
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem', color: '#cbd5e1' }}>
              The UK's leading academic consultancy delivering custom 1st-Class & 2:1 dissertations, essays, literature reviews, and statistical analysis for undergraduate, Master’s, and PhD students.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#e2e8f0' }}>
                <Phone size={16} color="var(--accent-gold)" /> 020 7946 0921 (UK Helpline)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#e2e8f0' }}>
                <Mail size={16} color="var(--accent-gold)" /> support@ukstudentdesk.co.uk
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.2rem' }}>Our Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.9rem' }}>
              <li><a href="#services" style={{ color: '#cbd5e1' }}>Master’s Dissertation Writing</a></li>
              <li><a href="#services" style={{ color: '#cbd5e1' }}>PhD Thesis Proposal</a></li>
              <li><a href="#services" style={{ color: '#cbd5e1' }}>Literature Review Chapter</a></li>
              <li><a href="#services" style={{ color: '#cbd5e1' }}>SPSS & Data Analysis</a></li>
              <li><a href="#services" style={{ color: '#cbd5e1' }}>OSCOLA Law Essay Help</a></li>
              <li><a href="#services" style={{ color: '#cbd5e1' }}>Nursing & Healthcare Audit</a></li>
            </ul>
          </div>

          {/* Guarantees */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.2rem' }}>Guarantees</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.9rem' }}>
              <li><a href="#why-us" style={{ color: '#cbd5e1' }}>0% AI & Originality Guarantee</a></li>
              <li><a href="#why-us" style={{ color: '#cbd5e1' }}>100% Privacy & Confidentiality</a></li>
              <li><a href="#why-us" style={{ color: '#cbd5e1' }}>14-Day Free Revisions</a></li>
              <li><a href="#why-us" style={{ color: '#cbd5e1' }}>Money-Back Refund Policy</a></li>
              <li><a href="#why-us" style={{ color: '#cbd5e1' }}>Oxbridge PhD Writers</a></li>
            </ul>
          </div>

          {/* Payment & Security */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.2rem' }}>Secure Payment & Trust</h4>
            <p style={{ fontSize: '0.85rem', marginBottom: '1.2rem', color: '#cbd5e1' }}>
              We accept all UK bank cards, Apple Pay, and Klarna split payments under 256-bit SSL encryption.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {['VISA', 'Mastercard', 'Apple Pay', 'Google Pay', 'Klarna'].map((pay, i) => (
                <span key={i} style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#ffffff', fontSize: '0.78rem', fontWeight: 700, padding: '0.4rem 0.7rem', borderRadius: '4px' }}>
                  {pay}
                </span>
              ))}
            </div>
            <button className="btn btn-primary" onClick={onOpenOrderModal} style={{ width: '100%', fontSize: '0.88rem', padding: '0.7rem' }}>
              Get Instant Price Quote
            </button>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '1.8rem',
          paddingBottom: '1.8rem',
          fontSize: '0.8rem',
          color: '#64748b',
          lineHeight: 1.6
        }}>
          <p style={{ marginBottom: '0.5rem' }}>
            <strong>Academic Disclaimer:</strong> ukstudentdesk provides model papers, research consultancy, and proofreading services designed to assist students in completing their own academic coursework. All materials delivered should be used as model answers or reference sources in accordance with university academic integrity rules.
          </p>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '1.5rem',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.85rem',
          color: '#64748b'
        }}>
          <div>© {new Date().getFullYear()} ukstudentdesk. All rights reserved. Registered in England & Wales.</div>
          <div style={{ display: 'flex', gap: '1.2rem' }}>
            <a href="#" style={{ color: '#94a3b8' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#94a3b8' }}>Terms & Conditions</a>
            <a href="#" style={{ color: '#94a3b8' }}>Revision Policy</a>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
