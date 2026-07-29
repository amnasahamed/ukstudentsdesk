import React, { useState } from 'react';
import { Phone, MessageCircle, Star, ShieldCheck, Menu, X, Clock, Award, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenOrderModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#ffffff', boxShadow: 'var(--shadow-md)' }}>
      {/* Top Banner Announcement */}
      <div style={{ backgroundColor: 'var(--primary)', color: '#ffffff', fontSize: '0.82rem', padding: '0.4rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#fde047' }}>
              <Star size={14} fill="#fde047" /> <strong>4.9/5 Trustpilot Rating</strong> (2,450+ Verified Reviews)
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', opacity: 0.9 }} className="hide-mobile">
              <ShieldCheck size={14} color="#10b981" /> 100% Plagiarism-Free Guarantee
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href="https://wa.me/917041309554" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#4ade80', fontWeight: 600 }}>
              <MessageCircle size={14} /> WhatsApp: +91 7041309554
            </a>
            <a href="tel:+442079460921" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#ffffff', opacity: 0.9 }} className="hide-mobile">
              <Phone size={14} /> UK Hotline: 020 7946 0921
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.9rem 1.5rem' }}>
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-glow) 100%)',
            color: 'var(--accent-gold)',
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            boxShadow: '0 4px 10px rgba(11, 19, 41, 0.2)'
          }}>
            🇬🇧
          </div>
          <div>
            <span style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.03em', display: 'block', lineHeight: 1 }}>
              ukstudent<span style={{ color: 'var(--accent-gold)' }}>desk</span>
            </span>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Dissertation & Assignment Help
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.8rem' }} className="hide-mobile">
          <a href="#services" style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem', transition: 'var(--transition)' }}>Services</a>
          <a href="#calculator" style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>Price Estimator</a>
          <a href="#samples" style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>Sample Papers</a>
          <a href="#why-us" style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>Why Us</a>
          <a href="#reviews" style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>Reviews</a>
          <a href="#faq" style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>FAQ</a>
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <button className="btn btn-primary" onClick={onOpenOrderModal} style={{ padding: '0.65rem 1.2rem', fontSize: '0.9rem' }}>
            Get Free Quote <ArrowRight size={16} />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button 
            style={{ display: 'none', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border)' }} 
            className="show-mobile-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--border)', padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, padding: '0.5rem 0' }}>Services</a>
          <a href="#calculator" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, padding: '0.5rem 0' }}>Price Estimator</a>
          <a href="#samples" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, padding: '0.5rem 0' }}>Sample Papers</a>
          <a href="#why-us" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, padding: '0.5rem 0' }}>Why Us</a>
          <a href="#reviews" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, padding: '0.5rem 0' }}>Reviews</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, padding: '0.5rem 0' }}>FAQ</a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hide-mobile { display: none !important; }
          .show-mobile-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
