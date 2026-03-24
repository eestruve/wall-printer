import { useEffect } from 'react';
import CTAForm from '../components/CTAForm';
import BackButton from '../components/BackButton';
import './B2BPages.css';

function PartnersPage() {
  useEffect(() => {
    const timerId = requestAnimationFrame(() => {
      document.querySelectorAll('.fade-in').forEach((el) => el.classList.add('visible'));
    });
    return () => cancelAnimationFrame(timerId);
  }, []);

  return (
    <div className="b2b-page">
      <BackButton />
      <div className="container">
        <div className="b2b-hero fade-in">
          <h1 className="b2b-title">Зарабатывайте на инновациях в декоре вместе с Солюшн Клаб</h1>
          <p className="b2b-subtitle">Рекомендуйте нас своим клиентам и получайте до 15% агентского вознаграждения с каждого заказа в Москве.</p>
          <a href="#cta-form" className="b2b-hero-cta">Стать партнером</a>
        </div>
        
        <div className="b2b-content fade-in">
          <div className="b2b-solution">
            <h3>Прозрачная система сотрудничества</h3>
            <p>Мы предлагаем полную поддержку на всех этапах работы с клиентом.</p>
            <ul>
              <li><strong>Персональный менеджер:</strong> оперативный просчет смет и выезд на объект.</li>
              <li><strong>Премиальный маркетинг:</strong> материалы и образцы печати (выкрасы) для презентации вашим клиентам.</li>
              <li><strong>Гарантия выплат:</strong> регулярные агентские переводы строго по договору и без задержек.</li>
            </ul>
          </div>
        </div>
      </div>
      <CTAForm />
    </div>
  );
}

export default PartnersPage;
