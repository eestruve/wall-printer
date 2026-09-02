import CTAForm from '../components/CTAForm';
import BackButton from '../components/BackButton';
import './B2BPages.css';

export default function ArchitectsPage() {
  return (
    <div className="b2b-page">
      <div className="container">
        <BackButton />

        <div className="b2b-header">
          <span className="section-tag">Архитектурным бюро</span>
          <h1 className="b2b-title">Инженерная вертикальная УФ-печать для архитектурных бюро</h1>
          <p className="b2b-subtitle">
            Масштабный декор, брендинг и навигация для девелоперских проектов, офисных кластеров, ТЦ и жилых комплексов Москвы и МО.
          </p>
        </div>

        <div className="b2b-grid">
          <div className="b2b-card">
            <div className="b2b-card-top">
              <div className="b2b-icon-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.3 15.3l-9.6-9.6a2.4 2.4 0 0 0-3.4 0L2.7 11.3a2.4 2.4 0 0 0 0 3.4l9.6 9.6a2.4 2.4 0 0 0 3.4 0l5.6-5.6a2.4 2.4 0 0 0 0-3.4z" />
                  <path d="m14.5 12.5 2-2" />
                  <path d="m11.5 9.5 2-2" />
                  <path d="m8.5 6.5 2-2" />
                </svg>
              </div>
              <span className="b2b-card-num">01</span>
            </div>
            <h3 className="b2b-card-title">Любые сложные поверхности</h3>
            <p className="b2b-card-desc">
              Прямая печать на монолитном бетоне, кирпичной кладке, стекле, панелях HPL, дереве и металле с адаптацией к микрорельефу.
            </p>
          </div>

          <div className="b2b-card">
            <div className="b2b-card-top">
              <div className="b2b-icon-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                  <line x1="9" y1="22" x2="9" y2="22.01" />
                  <line x1="15" y1="22" x2="15" y2="22.01" />
                  <line x1="8" y1="6" x2="8.01" y2="6" />
                  <line x1="12" y1="6" x2="12.01" y2="6" />
                  <line x1="16" y1="6" x2="16.01" y2="6" />
                  <line x1="8" y1="10" x2="8.01" y2="10" />
                  <line x1="12" y1="10" x2="12.01" y2="10" />
                  <line x1="16" y1="10" x2="16.01" y2="10" />
                  <line x1="8" y1="14" x2="8.01" y2="14" />
                  <line x1="12" y1="14" x2="12.01" y2="14" />
                  <line x1="16" y1="14" x2="16.01" y2="14" />
                </svg>
              </div>
              <span className="b2b-card-num">02</span>
            </div>
            <h3 className="b2b-card-title">Высота более 5 метров и масштабные площади</h3>
            <p className="b2b-card-desc">
              Модульные направляющие и возможность интеграции со строительными лесами позволяют оформлять атриумы, холлы и фасадные зоны любой высоты.
            </p>
          </div>

          <div className="b2b-card">
            <div className="b2b-card-top">
              <div className="b2b-icon-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <span className="b2b-card-num">03</span>
            </div>
            <h3 className="b2b-card-title">Безопасность и СанПиН</h3>
            <p className="b2b-card-desc">
              UV-чернила мгновенного отверждения сертифицированы по экологическим нормам, негорючие, не имеют запаха и разрешены в общественных зданиях.
            </p>
          </div>

          <div className="b2b-card">
            <div className="b2b-card-top">
              <div className="b2b-icon-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <span className="b2b-card-num">04</span>
            </div>
            <h3 className="b2b-card-title">Генеральный подряд под ключ</h3>
            <p className="b2b-card-desc">
              Строительное подразделение «Солюшин Билдинг» выполнит выравнивание, подготовку оснований и сдачу объекта по СНиП.
            </p>
          </div>
        </div>
      </div>

      <CTAForm />
    </div>
  );
}
