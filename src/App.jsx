import React, { useState, useEffect } from 'react';
import { MessageCircle, ShieldCheck, Star, Award, CheckCircle2, Zap, Clock, ArrowRight, FileText, ChevronRight, Lock, Sparkles } from 'lucide-react';

// WHATSAPP RECEPTION NUMBER
const WHATSAPP_NUMBER = '917041309554'; 

export default function App() {
  const [selectedLevel, setSelectedLevel] = useState("Master's");
  const [selectedSubject, setSelectedSubject] = useState("Dissertation");
  const [redirectCountdown, setRedirectCountdown] = useState(2);

  // Meta Pixel Tracking & WhatsApp Redirect Helper Function
  const redirectToWhatsApp = (customMsg = '') => {
    // 1. Fire Meta Pixel Conversion Event
    if (window.fbq) {
      try {
        window.fbq('track', 'Lead', {
          content_name: 'WhatsApp Redirect',
          content_category: selectedSubject,
          value: 1.00,
          currency: 'GBP'
        });
        window.fbq('track', 'Contact');
      } catch (err) {
        console.log('Meta Pixel error:', err);
      }
    }

    // 2. Prepare Default or Custom Message
    const defaultText = customMsg || `Hi! I came from ukstudentdesk and need urgent academic help with my UK ${selectedLevel} ${selectedSubject}. Please share pricing and details with me.`;
    const encodedText = encodeURIComponent(defaultText);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

    // 3. Redirect to WhatsApp
    window.location.href = whatsappUrl;
  };

  // Auto Redirect 2 Seconds after someone opens the website
  useEffect(() => {
    const timer = setInterval(() => {
      setRedirectCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          redirectToWhatsApp(`Hi! I came from ukstudentdesk and need urgent academic help with my UK assignment/dissertation. Please share pricing and details with me.`);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh', color: 'var(--text-main)' }}>
      
      {/* Top Urgency Header Bar */}
      <div style={{ backgroundColor: '#070d1d', color: '#ffffff', padding: '0.5rem 0', fontSize: '0.82rem', textAlign: 'center', borderBottom: '1px solid var(--accent-gold)' }}>
        <div className="container-mobile" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontWeight: 600 }}>
          <Sparkles size={14} color="var(--accent-gold)" /> 
          <span><strong>100% Original Content</strong> + Verified UK Academic Support Today</span>
        </div>
      </div>

      {/* Main Header / Brand Navigation */}
      <header style={{ backgroundColor: '#ffffff', padding: '0.9rem 0', borderBottom: '1px solid var(--border)', sticky: 'top', top: 0, zIndex: 100 }}>
        <div className="container-mobile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              backgroundColor: 'var(--primary)',
              color: 'var(--accent-gold)',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              fontWeight: 800,
              fontSize: '1.1rem'
            }}>
              🇬🇧
            </div>
            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1 }}>
                ukstudent<span style={{ color: 'var(--accent-gold)' }}>desk</span>
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                WhatsApp Academic Support
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: '#047857', backgroundColor: '#ecfdf5', padding: '0.3rem 0.6rem', borderRadius: 'var(--radius-full)', border: '1px solid #a7f3d0', fontWeight: 700 }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%', display: 'inline-block' }}></span>
            Online Now
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section style={{ padding: '2rem 0 1.5rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid var(--border)' }}>
        <div className="container-mobile" style={{ textAlign: 'center' }}>
          
          <div className="badge-gold" style={{ marginBottom: '0.8rem' }}>
            <Award size={14} color="#b45309" /> Rated #1 UK Dissertation Assistance
          </div>

          <h1 style={{ fontSize: '1.95rem', fontWeight: 900, lineHeight: 1.2, marginBottom: '0.8rem', color: 'var(--primary)' }}>
            Get First-Class UK Dissertation & Assignment Help
          </h1>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.4rem', lineHeight: 1.5 }}>
            Struggling with deadlines or complex research? Get custom 1st-Class & 2:1 standard papers written by verified UK PhD academics.
          </p>

          {/* Hero Visual Mockup Image */}
          <div style={{ position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.5rem', boxShadow: 'var(--shadow-mobile)', border: '2px solid var(--border)' }}>
            <img src="/images/hero.png" alt="UK Students Studying" style={{ width: '100%', height: 'auto', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: '10px', left: '10px', backgroundColor: 'rgba(11, 19, 41, 0.9)', color: '#ffffff', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={14} color="#10b981" /> 99.4% Pass Rate • 0% AI Detection
            </div>
          </div>

          {/* PRIMARY WHATSAPP CTA BUTTON */}
          <button 
            className="btn-whatsapp-large" 
            onClick={() => redirectToWhatsApp()}
            style={{ marginBottom: '0.8rem' }}
          >
            <MessageCircle size={24} /> Chat on WhatsApp Now
          </button>

          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
            <Lock size={12} color="#10b981" /> 100% Private & Confidential. No registration required.
          </p>

        </div>
      </section>

      {/* Auto-Redirect Notification Banner */}
      {redirectCountdown > 0 && (
        <div style={{ backgroundColor: '#075e54', color: '#ffffff', padding: '1rem', textAlign: 'center', position: 'sticky', top: 0, zIndex: 101, borderBottom: '2px solid #25d366' }}>
          <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#25d366', marginBottom: '0.4rem' }}>
            Opening WhatsApp Chat in {redirectCountdown}s...
          </div>
          <button className="btn-whatsapp-large" onClick={() => redirectToWhatsApp()} style={{ padding: '0.6rem 1.2rem', fontSize: '0.88rem' }}>
            Open WhatsApp Immediately
          </button>
        </div>
      )}

      {/* Quick 1-Tap WhatsApp Quote Builder */}
      <section style={{ padding: '2rem 0', backgroundColor: 'var(--surface-alt)', borderBottom: '1px solid var(--border)' }}>
        <div className="container-mobile">
          
          <div style={{ textAlign: 'center', marginBottom: '1.2rem' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.3rem' }}>
              Instant 1-Tap Price Quote
            </h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Select your specs below to start direct WhatsApp chat:
            </p>
          </div>

          {/* Academic Level Options */}
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--primary)', display: 'block', marginBottom: '0.4rem' }}>
              1. Academic Degree Level:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
              {["Undergrad", "Master's", "PhD"].map(level => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  style={{
                    padding: '0.6rem 0.4rem',
                    borderRadius: 'var(--radius-sm)',
                    border: selectedLevel === level ? '2px solid var(--primary)' : '1px solid var(--border)',
                    backgroundColor: selectedLevel === level ? 'var(--primary)' : '#ffffff',
                    color: selectedLevel === level ? '#ffffff' : 'var(--text-main)',
                    fontWeight: 700,
                    fontSize: '0.85rem'
                  }}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Subject Options */}
          <div style={{ marginBottom: '1.4rem' }}>
            <label style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--primary)', display: 'block', marginBottom: '0.4rem' }}>
              2. Paper / Work Type:
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              {[
                "Full Dissertation",
                "Assignment / Essay",
                "Literature Review",
                "SPSS Data Analysis",
                "OSCOLA Law Essay",
                "Nursing Case Study"
              ].map(subj => (
                <button
                  key={subj}
                  onClick={() => setSelectedSubject(subj)}
                  style={{
                    padding: '0.65rem 0.6rem',
                    borderRadius: 'var(--radius-sm)',
                    border: selectedSubject === subj ? '2px solid var(--whatsapp-dark)' : '1px solid var(--border)',
                    backgroundColor: selectedSubject === subj ? '#ecfdf5' : '#ffffff',
                    color: selectedSubject === subj ? '#047857' : 'var(--text-main)',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    textAlign: 'left'
                  }}
                >
                  {selectedSubject === subj ? '✓ ' : ''}{subj}
                </button>
              ))}
            </div>
          </div>

          {/* Trigger Custom WhatsApp Redirect */}
          <button
            className="btn-whatsapp-large"
            onClick={() => redirectToWhatsApp(`Hi, I need an instant quote for a UK ${selectedLevel} level ${selectedSubject}. Please send price options.`)}
          >
            <Zap size={20} fill="#ffffff" /> Get {selectedSubject} Quote on WhatsApp
          </button>

        </div>
      </section>

      {/* 4 Simple Key Guarantees */}
      <section style={{ padding: '2rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid var(--border)' }}>
        <div className="container-mobile">
          
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary)', textAlign: 'center', marginBottom: '1.2rem' }}>
            Why UK Students Prefer ukstudentdesk
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            {[
              { title: '0% AI & Plagiarism-Free', desc: 'Written 100% from scratch. Detailed quality and originality check included.', icon: <ShieldCheck size={22} color="#10b981" /> },
              { title: 'Verified UK PhD Writers', desc: 'Graduates from Oxford, Cambridge, UCL, KCL, and Manchester.', icon: <Award size={22} color="#f59e0b" /> },
              { title: '100% Secret & Confidential', desc: 'Strict UK NDA. Your university or identity will never be disclosed.', icon: <Lock size={22} color="#2563eb" /> },
              { title: '14-Day Free Revisions', desc: 'Free amendments to match your supervisor’s exact feedback notes.', icon: <CheckCircle2 size={22} color="#8b5cf6" /> }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.8rem', backgroundColor: 'var(--surface-alt)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <div style={{ marginTop: '0.2rem' }}>{item.icon}</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--primary)' }}>{item.title}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Verified Student Testimonials */}
      <section style={{ padding: '2rem 0', backgroundColor: 'var(--surface-alt)', borderBottom: '1px solid var(--border)' }}>
        <div className="container-mobile">
          
          <div style={{ textAlign: 'center', marginBottom: '1.2rem' }}>
            <div className="badge-green" style={{ marginBottom: '0.4rem' }}>
              <Star size={14} fill="#10b981" /> 4.9/5 Trustpilot Rating
            </div>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary)' }}>
              Recent Student Success Stories
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { name: 'Oliver S. (Univ of Manchester)', grade: '76% First Class', text: 'Struggling with SPSS data analysis for my MSc dissertation. Got it done in 2 days. Passed with 76%!' },
              { name: 'Sophia K. (KCL Law)', grade: '74% Distinction', text: 'OSCOLA law essay was written flawlessly. Originality report showed 0% AI detection. Amazing service!' },
              { name: 'Gareth M. (Univ of Edinburgh)', grade: '79% First Class', text: 'Urgent 3-day turnaround for my AI research paper. Delivered early with full code comments.' }
            ].map((rev, i) => (
              <div key={i} style={{ backgroundColor: '#ffffff', padding: '1.1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <div style={{ fontWeight: 800, fontSize: '0.88rem', color: 'var(--primary)' }}>{rev.name}</div>
                  <span className="badge-green" style={{ fontSize: '0.72rem' }}>{rev.grade}</span>
                </div>
                <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '0.5rem' }}>
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  "{rev.text}"
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '2rem 0', backgroundColor: '#ffffff' }}>
        <div className="container-mobile">
          
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)', textAlign: 'center', marginBottom: '1rem' }}>
            Frequently Asked Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.88rem' }}>
            <div style={{ backgroundColor: 'var(--surface-alt)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
              <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '0.3rem' }}>Q: How fast can I get my paper?</strong>
              <span style={{ color: 'var(--text-muted)' }}>We offer urgent 12-hour, 24-hour, and 3-day delivery options.</span>
            </div>
            <div style={{ backgroundColor: 'var(--surface-alt)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
              <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '0.3rem' }}>Q: Is it 100% confidential?</strong>
              <span style={{ color: 'var(--text-muted)' }}>Yes. Your details are encrypted under strict UK NDA laws. No university will ever know.</span>
            </div>
          </div>

          <div style={{ marginTop: '1.8rem', textAlign: 'center' }}>
            <button 
              className="btn-whatsapp-large" 
              onClick={() => redirectToWhatsApp('Hi! I have a question about my assignment deadline.')}
            >
              <MessageCircle size={22} /> Have Questions? Ask Us on WhatsApp
            </button>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#070d1d', color: '#94a3b8', padding: '2rem 0 1rem 0', textAlign: 'center', fontSize: '0.78rem' }}>
        <div className="container-mobile">
          <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.4rem' }}>
            ukstudentdesk 🇬🇧
          </div>
          <p style={{ color: '#64748b', fontSize: '0.72rem' }}>
            © {new Date().getFullYear()} ukstudentdesk. All rights reserved. Meta Pixel enabled for conversion tracking.
          </p>
        </div>
      </footer>

      {/* STICKY BOTTOM MOBILE CTA BAR */}
      <div className="sticky-bottom-bar">
        <div className="container-mobile" style={{ padding: 0 }}>
          <button 
            className="btn-whatsapp-large" 
            onClick={() => redirectToWhatsApp()}
            style={{ padding: '0.85rem 1.2rem', fontSize: '1.02rem', borderRadius: 'var(--radius-md)' }}
          >
            <MessageCircle size={22} /> Chat on WhatsApp Now
          </button>
        </div>
      </div>

    </div>
  );
}
