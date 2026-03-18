import { useState } from 'react';
import { faq } from '../data/siteData';
import './FAQ.css';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(-1);

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <h2 className="section-title">{faq.title}</h2>
        <div className="faq__list">
          {faq.items.map((item, idx) => (
            <div
              key={idx}
              className={`faq__item glass-card ${openIdx === idx ? 'faq__item--open' : ''}`}
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
            >
              <div className="faq__question">
                <h3 className="faq__q-text">{item.question}</h3>
                <span className="faq__toggle">+</span>
              </div>
              <div className="faq__answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
