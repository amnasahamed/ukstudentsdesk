import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, CheckCircle2, UploadCloud, ArrowRight, Sparkles } from 'lucide-react';

export default function OrderModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    university: '',
    subject: '',
    level: "Master's (MSc/MA/MBA)",
    service: 'Full Dissertation Writing',
    grade: 'First Class (70%+)',
    words: 3000,
    deadline: '7 Days',
    topic: '',
    notes: '',
    fileUploaded: false
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        ...initialData
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      backgroundColor: 'rgba(11, 19, 41, 0.75)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      padding: '1rem'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: 'var(--radius-lg)',
        width: '100%',
        maxWidth: '680px',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: 'var(--shadow-xl)',
        position: 'relative',
        border: '1px solid var(--border)'
      }} className="animate-fade-in">
        
        {/* Modal Header */}
        <div style={{
          backgroundColor: 'var(--primary)',
          color: '#ffffff',
          padding: '1.5rem 2rem',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 10
        }}>
          <div>
            <div className="badge-gold" style={{ fontSize: '0.78rem', marginBottom: '0.3rem' }}>
              <Sparkles size={13} /> 100% Confidential Order Request
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800 }}>
              {submitted ? 'Order Confirmation' : 'Request Free Instant Quote'}
            </h3>
          </div>
          <button onClick={onClose} style={{ color: '#ffffff', opacity: 0.8, padding: '0.4rem', borderRadius: '50%' }}>
            <X size={24} />
          </button>
        </div>

        {submitted ? (
          <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
            <div style={{
              backgroundColor: 'var(--emerald-light)',
              color: 'var(--emerald)',
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              margin: '0 auto 1.5rem auto'
            }}>
              <CheckCircle2 size={40} />
            </div>

            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.8rem' }}>
              Order Request Received!
            </h3>

            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.8rem', maxWidth: '480px', margin: '0 auto 1.8rem auto' }}>
              Thank you, <strong>{formData.name || 'Student'}</strong>! We have matched your paper brief with an available UK PhD academic in your field. Check your email (<strong>{formData.email}</strong>) or WhatsApp for your final price quote.
            </p>

            <div style={{
              backgroundColor: 'var(--surface-alt)',
              padding: '1.2rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.9rem',
              color: 'var(--text-main)',
              marginBottom: '2rem',
              textAlign: 'left'
            }}>
              <div><strong>Selected Service:</strong> {formData.service}</div>
              <div><strong>Word Count:</strong> {formData.words} words</div>
              <div><strong>Target Grade:</strong> {formData.grade}</div>
              <div><strong>Deadline:</strong> {formData.deadline}</div>
            </div>

            <button className="btn btn-primary" onClick={handleReset}>
              Done & Return to Site
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--primary)' }}>
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border)', fontSize: '0.9rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--primary)' }}>
                  UK Student Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@university.ac.uk"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border)', fontSize: '0.9rem' }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--primary)' }}>
                  WhatsApp / UK Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+44 7123 456789"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border)', fontSize: '0.9rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--primary)' }}>
                  UK University Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. UCL / KCL / Manchester"
                  value={formData.university}
                  onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border)', fontSize: '0.9rem' }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem', marginBottom: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--primary)' }}>
                  Academic Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border)', fontSize: '0.9rem', backgroundColor: '#ffffff' }}
                >
                  <option>Full Dissertation Writing</option>
                  <option>Dissertation Proposal</option>
                  <option>Assignment / Essay</option>
                  <option>Literature Review</option>
                  <option>SPSS / Data Analysis</option>
                  <option>Proofreading & Editing</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--primary)' }}>
                  Target Grade
                </label>
                <select
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border)', fontSize: '0.9rem', backgroundColor: '#ffffff' }}
                >
                  <option>First Class (70%+)</option>
                  <option>Upper Second 2:1 (60-69%)</option>
                  <option>Standard Pass (50-59%)</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '1.2rem' }}>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--primary)' }}>
                Dissertation / Paper Topic Title & Brief
              </label>
              <textarea
                rows="3"
                placeholder="Enter your exact dissertation title, research questions, or key instructions..."
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--border)', fontSize: '0.9rem' }}
              />
            </div>

            {/* File Upload Simulation */}
            <div style={{
              border: '2px dashed var(--border)',
              borderRadius: 'var(--radius-md)',
              padding: '1.2rem',
              textAlign: 'center',
              backgroundColor: 'var(--surface-alt)',
              marginBottom: '1.8rem',
              cursor: 'pointer'
            }} onClick={() => setFormData({ ...formData, fileUploaded: true })}>
              <UploadCloud size={28} color="var(--blue-accent)" style={{ marginBottom: '0.3rem' }} />
              <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--primary)' }}>
                {formData.fileUploaded ? '✓ Brief File Attached Successfully (PDF/DOCX)' : 'Click to Upload Assignment Brief or Handbook (Optional)'}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Supports PDF, DOCX, PPTX up to 25MB</div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.05rem' }}>
              Submit Order Brief & Get Instant Writer Match <ArrowRight size={18} />
            </button>

            <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={14} color="#10b981" /> 100% Confidential. No university will ever know you ordered.
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
