import React from 'react';
import { ShieldCheck, Award, FileText, CheckCircle2, Clock, ArrowRight, Zap, Star } from 'lucide-react';

export default function Hero({ onOpenOrderModal, onScrollToCalculator }) {
  return (
    <section style={{ 
      background: 'linear-gradient(180deg, #0b1329 0%, #162447 100%)', 
      color: '#ffffff', 
      padding: '4.5rem 0 5rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Glow Orbs background effect */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: '3.5rem',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Left Column Content */}
          <div>
            <div className="badge-gold" style={{ marginBottom: '1.2rem' }}>
              <Award size={16} color="#d4af37" /> UK's #1 Rated Dissertation & Assignment Help
            </div>

            <h1 style={{ 
              fontSize: '3.2rem', 
              fontWeight: 800, 
              lineHeight: 1.15, 
              marginBottom: '1.2rem',
              color: '#ffffff'
            }} className="hero-title">
              Achieve Top <span style={{ 
                background: 'linear-gradient(135deg, #fef08a 0%, #d4af37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>First-Class & 2:1 Grades</span> With UK PhD Academics
            </h1>

            <p style={{ 
              fontSize: '1.15rem', 
              color: '#cbd5e1', 
              marginBottom: '2rem', 
              lineHeight: 1.6,
              maxWidth: '620px'
            }}>
              Struggling with tight deadlines or complex dissertation methodologies? Get custom-written, plagiarism-free assignments and dissertations crafted by native UK subject experts from Oxford, Cambridge, UCL & Russell Group universities.
            </p>

            {/* Quick Benefits Bullet List */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '0.8rem 1.5rem', 
              marginBottom: '2.5rem' 
            }} className="hero-benefits">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', color: '#e2e8f0' }}>
                <CheckCircle2 size={18} color="#10b981" /> <strong>0% AI & 100% Plagiarism-Free</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', color: '#e2e8f0' }}>
                <CheckCircle2 size={18} color="#10b981" /> <strong>Comprehensive Quality Check</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', color: '#e2e8f0' }}>
                <CheckCircle2 size={18} color="#10b981" /> <strong>Strict UK Privacy (NDA Guarded)</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', color: '#e2e8f0' }}>
                <CheckCircle2 size={18} color="#10b981" /> <strong>14-Day Free Revisions Included</strong>
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={onScrollToCalculator} style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}>
                <Zap size={20} fill="#000000" /> Calculate Price & Order
              </button>
              <button className="btn btn-outline" onClick={onOpenOrderModal} style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)', padding: '1rem 1.8rem', fontSize: '1.05rem' }}>
                <FileText size={18} /> Request Free Consultation
              </button>
            </div>

            {/* Rating Footer in Hero */}
            <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.2rem' }}>
              <div style={{ display: 'flex', gap: '0.2rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                Trusted by <strong>18,500+ UK Students</strong> across 120+ UK Universities
              </span>
            </div>
          </div>

          {/* Right Column Visual Graphic */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              border: '2px solid rgba(212, 175, 55, 0.3)',
              position: 'relative'
            }}>
              <img 
                src="/images/hero.png" 
                alt="UK Students in University Library" 
                style={{ width: '100%', height: 'auto', display: 'block', transform: 'scale(1.02)' }} 
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(11, 19, 41, 0) 60%, rgba(11, 19, 41, 0.85) 100%)'
              }} />
            </div>

            {/* Floating Achievement Card 1 */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              left: '-20px',
              backgroundColor: '#ffffff',
              color: 'var(--text-main)',
              padding: '1rem 1.2rem',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-xl)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              border: '1px solid var(--border)',
              maxWidth: '260px'
            }}>
              <img src="/images/seal.png" alt="1st Class Honours Seal" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
              <div>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--primary)' }}>99.4% Pass Rate</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Guaranteed 1st Class & 2:1 Quality Standard</div>
              </div>
            </div>

            {/* Floating Writer Card 2 */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '-15px',
              backgroundColor: 'rgba(15, 23, 42, 0.95)',
              backdropFilter: 'blur(10px)',
              color: '#ffffff',
              padding: '0.8rem 1rem',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-xl)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              border: '1px solid rgba(255,255,255,0.15)'
            }}>
              <div style={{ backgroundColor: '#10b981', width: '10px', height: '10px', borderRadius: '50%' }}></div>
              <div style={{ fontSize: '0.85rem' }}>
                <strong style={{ color: '#fde047' }}>500+ Active UK PhD Writers</strong>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Oxbridge, KCL & Manchester Faculty</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .hero-title {
            font-size: 2.3rem !important;
          }
        }
        @media (max-width: 576px) {
          .hero-benefits {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
