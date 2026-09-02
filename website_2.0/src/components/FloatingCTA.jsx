import { useState, useEffect } from 'react';
import './FloatingCTA.css';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const calcElem = document.getElementById('calculator');
      const formElem = document.getElementById('cta-form');

      let inFormOrCalc = false;
      if (calcElem) {
        const rect = calcElem.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.7 && rect.bottom >= window.innerHeight * 0.2) {
          inFormOrCalc = true;
        }
      }
      if (formElem) {
        const rect = formElem.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
          inFormOrCalc = true;
        }
      }

      // Show floating CTA after scrolling past Hero (350px) and hide when inside calculator or CTA form
      setVisible(scrollY > 350 && !inFormOrCalc);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const calcElem = document.getElementById('calculator');
    if (calcElem) {
      const headerOffset = 80;
      const elementPosition = calcElem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', '#calculator');
    }
  };

  if (!visible) return null;

  return (
    <div className="floating-cta">
      <a href="#calculator" onClick={handleClick} className="btn btn-accent floating-cta__btn">
        <span>Рассчитать смету проекта</span>
      </a>
    </div>
  );
}
