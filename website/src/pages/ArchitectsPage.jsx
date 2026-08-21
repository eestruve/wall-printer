import { useEffect } from 'react';
import CTAForm from '../components/CTAForm';
import BackButton from '../components/BackButton';
import './B2BPages.css';

function ArchitectsPage() {
  return (
    <div className="b2b-page">
      <BackButton />
      <div className="container">
        <div className="b2b-hero fade-in">
          <h1 className="b2b-title">Цифровая печать на любых поверхностях для архитектурных бюро</h1>
          <p className="b2b-subtitle">Быстрая навигация, брендирование и масштабный декор стен на крупных объектах Москвы и МО под ключ.</p>
          <a href="#cta-form" className="b2b-hero-cta">Обсудить сотрудничество</a>
        </div>
        
        <div className="b2b-content fade-in">
          <div className="b2b-solution">
            <h3>Промышленное решение</h3>
            <p>Солюшн Клаб — это надежный партнер для оформления офисов, ТЦ и жилых комплексов.</p>
            <ul>
              <li><strong>Высокая скорость:</strong> печать до 20 м² в день без потери качества и четкости.</li>
              <li><strong>Универсальность:</strong> прямая печать на бетоне, кирпиче, стекле, дереве и металле.</li>
              <li><strong>Безопасность:</strong> краски соответствуют всем нормам пожарной и экологической безопасности (УФ-отверждение).</li>
            </ul>
          </div>
        </div>
      </div>
      <CTAForm />
    </div>
  );
}

export default ArchitectsPage;
