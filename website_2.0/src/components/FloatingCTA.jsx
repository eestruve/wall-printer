import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './FloatingCTA.css';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isPrivacyPage = location.pathname === '/privacy';

  useEffect(() => {
    if (isPrivacyPage) {
      setVisible(false);
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Find active form/calculator on the current page
      const calcElem = document.getElementById('calculator');
      const ctaFormElem = document.getElementById('cta-form');
      const designerFormElem = document.getElementById('designer-form');
      const targetForm = designerFormElem || ctaFormElem || calcElem;

      let inForm = false;
      if (targetForm) {
        const rect = targetForm.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
          inForm = true;
        }
      }

      // Show floating CTA after scrolling past 300px and hide when inside form
      setVisible(scrollY > 300 && !inForm);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, isPrivacyPage]);

  if (isPrivacyPage || !visible) return null;

  const getButtonConfig = () => {
    const path = location.pathname;
    if (path === '/designers') {
      return { text: 'Обсудить сотрудничество', targetId: 'designer-form' };
    }
    if (path === '/architects' || path === '/partners') {
      return { text: 'Оставить заявку на сотрудничество', targetId: 'cta-form' };
    }
    // Default for home and technology knowledge base
    return { text: 'Рассчитать смету проекта', targetId: 'calculator' };
  };

  const { text, targetId } = getButtonConfig();

  const handleClick = (e) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);

    if (elem) {
      const headerOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', `#${targetId}`);
    } else {
      // Navigate to homepage with target hash
      navigate(`/#${targetId}`);
    }
  };

  return (
    <div className="floating-cta">
      <a href={`#${targetId}`} onClick={handleClick} className="btn btn-accent floating-cta__btn">
        <span>{text}</span>
      </a>
    </div>
  );
}
