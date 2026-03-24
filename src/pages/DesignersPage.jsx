import { useEffect } from 'react';
import CTAForm from '../components/CTAForm';
import BackButton from '../components/BackButton';
import './B2BPages.css';

function DesignersPage() {
  return (
    <div className="b2b-page">
      <BackButton />
      <div className="container">
        <div className="b2b-hero fade-in">
          <h1 className="b2b-title">Реализуйте самые смелые идеи интерьерной печати в Москве</h1>
          <p className="b2b-subtitle">Солюшн Клаб — ваш надежный партнер в мире широкоформатной печати на стенах. Мы превращаем рендеры в реальность с точностью до миллиметра.</p>
          <a href="#cta-form" className="b2b-hero-cta">Обсудить сотрудничество</a>
        </div>
        
        <div className="b2b-content fade-in">
          <div className="b2b-problem">
            <h3>Знакомая проблема?</h3>
            <p>Надоело, что подрядчики искажают цвета, опаздывают со сроками или оставляют после себя грязь на объекте? Мы понимаем, как важна репутация дизайнера перед заказчиком.</p>
          </div>
          
          <div className="b2b-solution">
            <h3>Наше решение</h3>
            <p>Мы берем на себя всю техническую часть, чтобы вы могли сфокусироваться на творчестве.</p>
            <ul>
              <li><strong>100% попадание в цвет</strong> по вашему руководству по стилю или выкрасу.</li>
              <li><strong>Чистота на объекте:</strong> работаем без пыли и строительного мусора.</li>
              <li><strong>Собственный отдел:</strong> берем на себя финишную подготовку стен.</li>
            </ul>
          </div>
          
          <div className="b2b-steps">
            <h3>Как мы работаем</h3>
            <ol>
              <li>Вы присылаете макет или ТЗ в любом виде.</li>
              <li>Мы делаем бесплатный тестовый фрагмент на вашей поверхности.</li>
              <li>Выполняем чистовую печать и сдаем объект в срок.</li>
            </ol>
          </div>
        </div>
      </div>
      <CTAForm />
    </div>
  );
}

export default DesignersPage;
