import CTAForm from '../components/CTAForm';
import BackButton from '../components/BackButton';
import './B2BPages.css';

export default function PartnersPage() {
  return (
    <div className="b2b-page">
      <div className="container">
        <BackButton />

        <div className="b2b-header">
          <span className="section-tag">Партнерская программа</span>
          <h1 className="b2b-title">Партнерская программа «Солюшин Принт»</h1>
          <p className="b2b-subtitle">
            Для генеральных подрядчиков, девелоперов, отделочных компаний и управляющих организаций Москвы и Московской области.
          </p>
        </div>

        <div className="b2b-grid">
          <div className="b2b-card">
            <div className="b2b-card-top">
              <div className="b2b-icon-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <span className="b2b-card-num">01</span>
            </div>
            <h3 className="b2b-card-title">Прозрачные агентские условия</h3>
            <p className="b2b-card-desc">
              Официальное агентское вознаграждение за привлеченные проекты. Выплаты строго по договору без задержек.
            </p>
          </div>

          <div className="b2b-card">
            <div className="b2b-card-top">
              <div className="b2b-icon-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <span className="b2b-card-num">02</span>
            </div>
            <h3 className="b2b-card-title">Быстрый выезд и расчет</h3>
            <p className="b2b-card-desc">
              Оперативный аудит объекта, расчет сметы до рубля и доставка презентационных образцов выкрасов.
            </p>
          </div>

          <div className="b2b-card">
            <div className="b2b-card-top">
              <div className="b2b-icon-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span className="b2b-card-num">03</span>
            </div>
            <h3 className="b2b-card-title">Гарантия и надежность</h3>
            <p className="b2b-card-desc">
              Собственный парк промышленных роботов, резервные мощности и строительная поддержка «Солюшин Билдинг».
            </p>
          </div>

          <div className="b2b-card">
            <div className="b2b-card-top">
              <div className="b2b-icon-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <span className="b2b-card-num">04</span>
            </div>
            <h3 className="b2b-card-title">Защита сделки</h3>
            <p className="b2b-card-desc">
              Фиксация клиента за партнером в CRM, ведение проекта под ключ и персональный инженерный куратор.
            </p>
          </div>
        </div>
      </div>

      <CTAForm />
    </div>
  );
}
