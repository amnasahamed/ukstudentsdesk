import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

const FAQS = [
  {
    q: 'Is using an assignment or dissertation help service legal in the UK?',
    a: 'Yes, absolutely. Our academic writing services are 100% legal in the United Kingdom. We provide model answers, custom literature reviews, proofreading, and educational research papers designed to serve as model reference guides for students preparing their own dissertations and assignments.'
  },
  {
    q: 'How do you guarantee 0% AI detection and 100% original content?',
    a: 'Every single paper is authored from scratch by a verified human UK academic (PhD or Master’s holder). Before final delivery, we run every document through advanced plagiarism and AI-detection software to verify 0% AI generator footprints and 100% original content. A comprehensive originality check report is included with every order.'
  },
  {
    q: 'Are your writers native UK English speakers and graduates?',
    a: 'Yes. 100% of our writers are UK native English speakers who hold postgraduate degrees (MA, MSc, LLM, PhD) from accredited UK universities, including Russell Group institutions (Oxford, Cambridge, UCL, KCL, Manchester, Edinburgh, Bristol).'
  },
  {
    q: 'How is my privacy and confidentiality protected?',
    a: 'We operate under strict UK Data Protection Act & GDPR protocols. Your identity, email, university name, and contact details are fully encrypted and kept under strict Non-Disclosure Agreements (NDAs). Writers only see an anonymized client ID.'
  },
  {
    q: 'What if my supervisor asks for revisions after reviewing my draft?',
    a: 'We offer 14 days of unlimited free revisions for all assignments and dissertations. Simply upload your supervisor’s comments, and your assigned writer will adjust the document to match their feedback free of charge.'
  },
  {
    q: 'What payment methods do you accept and are installments available?',
    a: 'We accept all major UK credit/debit cards (Visa, Mastercard), Apple Pay, Google Pay, and Klarna / installment plans. For long dissertations (5,000+ words), you can pay in split milestone installments (e.g. 50% upfront, 50% upon final draft completion).'
  }
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" style={{ padding: '5.5rem 0', backgroundColor: 'var(--surface-alt)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="section-title">
          <div className="badge-emerald" style={{ marginBottom: '0.8rem' }}>
            <HelpCircle size={15} /> Frequently Asked Questions
          </div>
          <h2>Got Questions? We Have Answers</h2>
          <p>
            Everything you need to know about our quality guarantees, UK writer qualifications, confidentiality, and revision policies.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border)',
                  overflow: 'hidden',
                  boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  transition: 'var(--transition)'
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: '100%',
                    padding: '1.4rem 1.8rem',
                    display: 'flex',
                    justify: 'space-between',
                    alignItems: 'center',
                    textAlign: 'left',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    color: isOpen ? 'var(--primary)' : 'var(--text-main)',
                    backgroundColor: isOpen ? 'var(--blue-light)' : '#ffffff'
                  }}
                >
                  <span style={{ paddingRight: '1rem' }}>{faq.q}</span>
                  {isOpen ? <ChevronUp size={20} color="var(--primary)" /> : <ChevronDown size={20} color="var(--text-muted)" />}
                </button>

                {isOpen && (
                  <div style={{ padding: '1.4rem 1.8rem', fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, borderTop: '1px solid var(--border)', backgroundColor: '#ffffff' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
