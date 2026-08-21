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
          <div className="b2b-card card">
            <div className="b2b-icon">📐</div>
            <h3 className="b2b-card-title">Любые сложные поверхности</h3>
            <p className="b2b-card-desc">
              Прямая печать на монолитном бетоне, кирпичной кладке, стекле, панелях HPL, дереве и металле с адаптацией к микрорельефу.
            </p>
          </div>

          <div className="b2b-card card">
            <div className="b2b-icon">🏢</div>
            <h3 className="b2b-card-title">Высота до 5м+ и масштабные площади</h3>
            <p className="b2b-card-desc">
              Модульные направляющие и возможность интеграции со строительными лесами позволяют оформлять атриумы, холлы и фасадные зоны любой высоты.
            </p>
          </div>

          <div className="b2b-card card">
            <div className="b2b-icon">📜</div>
            <h3 className="b2b-card-title">Безопасность и СанПиН</h3>
            <p className="b2b-card-desc">
              UV-чернила мгновенного отверждения сертифицированы по экологическим нормам, негорючие, не имеют запаха и разрешены в общественных зданиях.
            </p>
          </div>

          <div className="b2b-card card">
            <div className="b2b-icon">🏗️</div>
            <h3 className="b2b-card-title">Генеральный подряд под ключ</h3>
            <p className="b2b-card-desc">
              Строительное подразделение «Солюшн Билдинг» выполнит выравнивание, подготовку оснований и сдачу объекта по СНиП.
            </p>
          </div>
        </div>
      </div>

      <CTAForm />
    </div>
  );
}
