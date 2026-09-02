import { useState } from 'react';
import { faq } from '../data/siteData';
import './FAQ.css';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleItem = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="faq-section section" id="faq">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-tag">База знаний</span>
          <h2 className="section-title">{faq.title}</h2>
          <p className="section-subtitle">Отвечаем на главные технические и финансовые вопросы</p>
        </div>

        <div className="faq-accordion fade-in">
          {faq.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`faq-item card ${isOpen ? 'faq-item--open' : ''}`}
                onClick={() => toggleItem(idx)}
              >
                <div className="faq-question">
                  <h3 className="faq-question-title">{item.question}</h3>
                  <span className="faq-toggle-icon" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 1.5V12.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="faq-icon-v" />
                      <path d="M1.5 7H12.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="faq-icon-h" />
                    </svg>
                  </span>
                </div>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
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
