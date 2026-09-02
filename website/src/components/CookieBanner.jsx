import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieBanner.css';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('solution_cookie_consent');
      if (!consent) {
        // Small timeout so it smoothly slides in after initial page render
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage may be disabled in private mode
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('solution_cookie_consent', 'accepted');
    } catch {
      // ignore
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside aria-label="Уведомление об использовании файлов cookie" className="cookie-banner fade-in visible">
      <div className="cookie-banner__inner">
        <div className="cookie-banner__icon">🍪</div>
        <div className="cookie-banner__content">
          <p className="cookie-banner__text">
            Мы используем файлы <strong>cookie</strong> и сервисы веб-аналитики для корректной работы сайта, персонализации сервисов и анализа посещаемости. 
            Оставаясь на сайте, вы соглашаетесь с условиями обработки данных в соответствии с{' '}
            <Link to="/privacy#cookies" className="cookie-banner__link">
              Политикой конфиденциальности (152-ФЗ)
            </Link>.
          </p>
        </div>
        <div className="cookie-banner__actions">
          <button
            type="button"
            className="btn btn-primary cookie-banner__btn"
            onClick={handleAccept}
          >
            Принять и продолжить
          </button>
        </div>
      </div>
    </aside>
  );
}
