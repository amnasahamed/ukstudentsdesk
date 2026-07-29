import React, { useState } from 'react';
import { Calculator, Tag, ShieldCheck, Check, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';

const ACADEMIC_LEVELS = [
  { id: 'undergrad_early', label: 'Undergraduate (Yr 1-2)', rate: 26 },
  { id: 'undergrad_final', label: 'Undergraduate (Final Yr)', rate: 29 },
  { id: 'masters', label: "Master's (MSc/MA/MBA)", rate: 34 },
  { id: 'phd', label: 'PhD / Doctoral', rate: 42 }
];

const SERVICE_TYPES = [
  { id: 'dissertation', label: 'Full Dissertation Writing', multiplier: 1.0 },
  { id: 'proposal', label: 'Dissertation Proposal', multiplier: 0.95 },
  { id: 'essay', label: 'Assignment / Essay', multiplier: 0.90 },
  { id: 'lit_review', label: 'Literature Review', multiplier: 0.95 },
  { id: 'spss', label: 'Data Analysis (SPSS / R / Python)', multiplier: 1.15 },
  { id: 'proofreading', label: 'Proofreading & Formatting', multiplier: 0.45 }
];

const TARGET_GRADES = [
  { id: 'first_class', label: 'First Class (70%+)', factor: 1.15, badge: 'Recommended for Honors' },
  { id: 'upper_second', label: 'Upper Second 2:1 (60-69%)', factor: 1.0, badge: 'Popular Choice' },
  { id: 'pass', label: '2:2 Standard Pass (50-59%)', factor: 0.88, badge: 'Standard' }
];

const DEADLINES = [
  { id: '24h', label: '24 Hours (Urgent)', factor: 1.6 },
  { id: '3d', label: '3 Days', factor: 1.35 },
  { id: '7d', label: '7 Days', factor: 1.15 },
  { id: '14d', label: '14 Days (Standard)', factor: 1.0 },
  { id: '30d', label: '30+ Days (Saver)', factor: 0.9 }
];

export default function PriceCalculator({ onProceedToOrder }) {
  const [level, setLevel] = useState('masters');
  const [service, setService] = useState('dissertation');
  const [grade, setGrade] = useState('first_class');
  const [words, setWords] = useState(3000);
  const [deadline, setDeadline] = useState('7d');
  const [promoCode, setPromoCode] = useState('UKFIRST15');
  const [discountApplied, setDiscountApplied] = useState(true);

  // Price Calculation Logic
  const selectedLevelObj = ACADEMIC_LEVELS.find(l => l.id === level);
  const selectedServiceObj = SERVICE_TYPES.find(s => s.id === service);
  const selectedGradeObj = TARGET_GRADES.find(g => g.id === grade);
  const selectedDeadlineObj = DEADLINES.find(d => d.id === deadline);

  const pages = Math.max(1, Math.round(words / 250));
  const baseRatePer250Words = selectedLevelObj.rate;
  
  let finalPrice = (words / 250) * baseRatePer250Words * selectedServiceObj.multiplier * selectedGradeObj.factor * selectedDeadlineObj.factor;
  finalPrice = Math.round(finalPrice);

  const handleOrder = () => {
    onProceedToOrder({
      level: selectedLevelObj.label,
      service: selectedServiceObj.label,
      grade: selectedGradeObj.label,
      words,
      deadline: selectedDeadlineObj.label,
      price: finalPrice
    });
  };

  return (
    <section id="calculator" style={{ padding: '5rem 0', backgroundColor: 'var(--surface-alt)' }}>
      <div className="container">
        <div className="section-title">
          <div className="badge-gold" style={{ marginBottom: '0.8rem' }}>
            <Calculator size={16} /> Instant Transparent Pricing
          </div>
          <h2>Interactive UK Price & Deadline Estimator</h2>
          <p>No hidden fees. Select your exact paper specifications below for an instant quote with quality report & free revisions included.</p>
        </div>

        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--border)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr'
        }} className="calc-container">

          {/* Controls Column */}
          <div style={{ padding: '2.5rem' }}>
            
            {/* 1. Academic Level */}
            <div style={{ marginBottom: '1.8rem' }}>
              <label style={{ fontWeight: 700, fontSize: '0.95rem', display: 'block', marginBottom: '0.6rem', color: 'var(--primary)' }}>
                1. Select Academic Level
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                {ACADEMIC_LEVELS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setLevel(item.id)}
                    style={{
                      padding: '0.75rem 0.9rem',
                      borderRadius: 'var(--radius-sm)',
                      border: level === item.id ? '2px solid var(--primary)' : '1px solid var(--border)',
                      backgroundColor: level === item.id ? 'var(--blue-light)' : '#ffffff',
                      color: level === item.id ? 'var(--primary)' : 'var(--text-main)',
                      fontWeight: level === item.id ? 700 : 500,
                      fontSize: '0.88rem',
                      textAlign: 'left',
                      transition: 'var(--transition)'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Type of Service */}
            <div style={{ marginBottom: '1.8rem' }}>
              <label style={{ fontWeight: 700, fontSize: '0.95rem', display: 'block', marginBottom: '0.6rem', color: 'var(--primary)' }}>
                2. Select Service Type
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  backgroundColor: '#ffffff',
                  outline: 'none'
                }}
              >
                {SERVICE_TYPES.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Target Grade */}
            <div style={{ marginBottom: '1.8rem' }}>
              <label style={{ fontWeight: 700, fontSize: '0.95rem', display: 'block', marginBottom: '0.6rem', color: 'var(--primary)' }}>
                3. Target Academic Grade
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.6rem' }}>
                {TARGET_GRADES.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setGrade(item.id)}
                    style={{
                      padding: '0.75rem 0.5rem',
                      borderRadius: 'var(--radius-sm)',
                      border: grade === item.id ? '2px solid var(--accent-gold)' : '1px solid var(--border)',
                      backgroundColor: grade === item.id ? '#fffbeb' : '#ffffff',
                      color: grade === item.id ? '#92400e' : 'var(--text-main)',
                      fontWeight: grade === item.id ? 700 : 500,
                      fontSize: '0.82rem',
                      textAlign: 'center',
                      transition: 'var(--transition)'
                    }}
                  >
                    <div>{item.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Word Count Slider */}
            <div style={{ marginBottom: '1.8rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <label style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary)' }}>
                  4. Word Count: <span style={{ color: 'var(--blue-accent)', fontSize: '1.1rem' }}>{words.toLocaleString()} words</span>
                </label>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  ~ {pages} Pages (250 w/pg)
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="15000"
                step="500"
                value={words}
                onChange={(e) => setWords(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--primary)', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.6rem', flexWrap: 'wrap' }}>
                {[1000, 2500, 4000, 8000, 12000].map(val => (
                  <button
                    key={val}
                    onClick={() => setWords(val)}
                    style={{
                      padding: '0.25rem 0.6rem',
                      fontSize: '0.78rem',
                      borderRadius: '4px',
                      border: '1px solid var(--border)',
                      backgroundColor: words === val ? 'var(--primary)' : '#ffffff',
                      color: words === val ? '#ffffff' : 'var(--text-muted)'
                    }}
                  >
                    {val.toLocaleString()}w
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Deadline */}
            <div>
              <label style={{ fontWeight: 700, fontSize: '0.95rem', display: 'block', marginBottom: '0.6rem', color: 'var(--primary)' }}>
                5. Desired Deadline
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem' }}>
                {DEADLINES.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setDeadline(item.id)}
                    style={{
                      padding: '0.65rem',
                      borderRadius: 'var(--radius-sm)',
                      border: deadline === item.id ? '2px solid var(--primary)' : '1px solid var(--border)',
                      backgroundColor: deadline === item.id ? 'var(--primary)' : '#ffffff',
                      color: deadline === item.id ? '#ffffff' : 'var(--text-main)',
                      fontWeight: deadline === item.id ? 700 : 500,
                      fontSize: '0.85rem'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Pricing Summary Side Card */}
          <div style={{ 
            backgroundColor: 'var(--primary)', 
            color: '#ffffff', 
            padding: '2.5rem', 
            display: 'flex', 
            flexDirection: 'column', 
            justify: 'space-between',
            position: 'relative' 
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.15)', pb: '1rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>Summary Quote</h3>
                <span className="badge-gold" style={{ fontSize: '0.78rem' }}>
                  <Sparkles size={14} /> Instant Best Value
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Academic Level:</span>
                  <strong style={{ color: '#ffffff' }}>{selectedLevelObj.label}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Service Type:</span>
                  <strong style={{ color: '#ffffff' }}>{selectedServiceObj.label}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Target Grade:</span>
                  <strong style={{ color: '#fde047' }}>{selectedGradeObj.label}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Length:</span>
                  <strong style={{ color: '#ffffff' }}>{words.toLocaleString()} words ({pages} pgs)</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Deadline:</span>
                  <strong style={{ color: '#ffffff' }}>{selectedDeadlineObj.label}</strong>
                </div>
              </div>

              {/* Value Feature Highlight */}
              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '2rem' }}>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ShieldCheck size={16} color="#10b981" /> Verified 1st Class & 2:1 Quality Standard
                </div>
              </div>
            </div>

            {/* Total Price Display & Action */}
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--accent-gold)', lineHeight: 1 }}>
                  £{finalPrice}
                </span>
                <span style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>GBP (All Incl.)</span>
              </div>

              <p style={{ fontSize: '0.8rem', color: '#10b981', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Check size={16} /> Free Plagiarism Check & Outline included
              </p>

              <button className="btn btn-primary" onClick={handleOrder} style={{ width: '100%', padding: '1rem', fontSize: '1.05rem' }}>
                Proceed to Order <ArrowRight size={18} />
              </button>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .calc-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
