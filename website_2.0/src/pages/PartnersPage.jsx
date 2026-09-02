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
          <div className="b2b-card card">
            <div className="b2b-icon">💼</div>
            <h3 className="b2b-card-title">Прозрачные агентские условия</h3>
            <p className="b2b-card-desc">
              Официальное агентское вознаграждение за привлеченные проекты. Выплаты строго по договору без задержек.
            </p>
          </div>

          <div className="b2b-card card">
            <div className="b2b-icon">⚡</div>
            <h3 className="b2b-card-title">Быстрый выезд и расчет</h3>
            <p className="b2b-card-desc">
              Оперативный аудит объекта, расчет сметы до рубля и доставка презентационных образцов выкрасов.
            </p>
          </div>

          <div className="b2b-card card">
            <div className="b2b-icon">🛡️</div>
            <h3 className="b2b-card-title">Гарантия и надежность</h3>
            <p className="b2b-card-desc">
              Собственный парк промышленных роботов, резервные мощности и строительная поддержка «Солюшин Билдинг».
            </p>
          </div>

          <div className="b2b-card card">
            <div className="b2b-icon">🤝</div>
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
