import { useState, useEffect } from 'react';
import './FloatingCTA.css';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling past Hero (300px)
      setVisible(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="floating-cta">
      <a href="#calculator" className="btn btn-accent floating-cta__btn">
        <span className="floating-cta__icon">⚡</span>
        <span>Рассчитать смету проекта</span>
      </a>
    </div>
  );
}
