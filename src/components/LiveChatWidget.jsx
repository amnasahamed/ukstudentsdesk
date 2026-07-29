import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, User, ShieldCheck } from 'lucide-react';

export default function LiveChatWidget({ onOpenOrderModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'support', text: 'Hi there! 🇬🇧 Need help with your dissertation, assignment, or SPSS data analysis?' },
    { sender: 'support', text: 'Our UK PhD consultants are online 24/7. Ask us anything!' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { 
          sender: 'support', 
          text: `Thanks for asking! We can definitely help you achieve a 1st Class or 2:1 on "${userMsg}". Would you like an instant price quote?` 
        }
      ]);
    }, 1000);
  };

  return (
    <div style={{ position: 'fixed', bottom: '25px', right: '25px', zIndex: 999 }}>
      {isOpen ? (
        <div style={{
          width: '350px',
          height: '460px',
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }} className="animate-fade-in">
          
          {/* Header */}
          <div style={{
            backgroundColor: 'var(--primary)',
            color: '#ffffff',
            padding: '1rem',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ position: 'relative' }}>
                <div style={{
                  backgroundColor: 'var(--accent-gold)',
                  color: '#000000',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  fontWeight: 800
                }}>
                  🇬🇧
                </div>
                <div style={{ position: 'absolute', bottom: 0, right: 0, width: '10px', height: '10px', backgroundColor: '#10b981', borderRadius: '50%', border: '2px solid var(--primary)' }} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>UK Academic Support</div>
                <div style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 600 }}>Online • Instant Response</div>
              </div>
            </div>

            <button onClick={() => setIsOpen(false)} style={{ color: '#ffffff', opacity: 0.8 }}>
              <X size={20} />
            </button>
          </div>

          {/* Messages Feed */}
          <div style={{
            flex: 1,
            padding: '1rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
            backgroundColor: 'var(--surface-alt)'
          }}>
            {messages.map((m, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  backgroundColor: m.sender === 'user' ? 'var(--primary)' : '#ffffff',
                  color: m.sender === 'user' ? '#ffffff' : 'var(--text-main)',
                  padding: '0.7rem 0.9rem',
                  borderRadius: '12px',
                  fontSize: '0.85rem',
                  maxWidth: '85%',
                  boxShadow: 'var(--shadow-sm)',
                  border: m.sender === 'support' ? '1px solid var(--border)' : 'none'
                }}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* CTA Banner inside chat */}
          <div style={{ padding: '0.6rem 1rem', backgroundColor: '#fffbeb', borderTop: '1px solid #fde68a', textAlign: 'center' }}>
            <button
              onClick={() => { setIsOpen(false); onOpenOrderModal(); }}
              style={{ fontSize: '0.78rem', fontWeight: 700, color: '#92400e', textDecoration: 'underline' }}
            >
              ⚡ Click here for instant quote
            </button>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} style={{ display: 'flex', borderTop: '1px solid var(--border)', padding: '0.6rem', backgroundColor: '#ffffff' }}>
            <input
              type="text"
              placeholder="Ask about your paper..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                padding: '0.5rem',
                fontSize: '0.88rem'
              }}
            />
            <button type="submit" style={{ backgroundColor: 'var(--primary)', color: 'var(--accent-gold)', padding: '0.5rem 0.8rem', borderRadius: '6px' }}>
              <Send size={16} />
            </button>
          </form>

        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            backgroundColor: 'var(--primary)',
            color: 'var(--accent-gold)',
            padding: '0.9rem 1.4rem',
            borderRadius: 'var(--radius-full)',
            boxShadow: '0 8px 25px rgba(11, 19, 41, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.7rem',
            fontWeight: 700,
            fontSize: '0.95rem',
            border: '2px solid var(--accent-gold)',
            transition: 'var(--transition)'
          }}
        >
          <MessageCircle size={22} color="#4ade80" />
          <span>Need Help? Chat Live</span>
        </button>
      )}
    </div>
  );
}
