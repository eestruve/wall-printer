import { useEffect } from 'react';
import CTAForm from '../components/CTAForm';
import BackButton from '../components/BackButton';
import './ArticlePages.css';

export default function TechWallPrepPage() {
  useEffect(() => {
    document.title = "Какое покрытие стены лучше всего подходит для печати | Солюшин Принт";
  }, []);

  return (
    <>
      <main className="article-page">
        <div className="container">
          <BackButton />
          <header className="article-header fade-in">
            <span className="section-tag">База знаний</span>
            <h1 className="article-title">Какое покрытие стены лучше всего подходит для УФ-печати</h1>
            <p className="article-subtitle">
              Подробный инженерный гид по материалам, адгезии и подготовке строго вертикальных оснований для идеального результата.
            </p>
          </header>

          <article className="article-content fade-in">
            <section className="article-section card">
              <h2>1. Рейтинг поверхностей: на чем держится лучше всего</h2>
              <div className="article-surface-grid">
                <div className="surface-item">
                  <div className="surface-item__icon">🧱</div>
                  <div className="surface-item__info">
                    <h4>Матовые окрашенные стены и гипсокартон</h4>
                    <p>Идеальная база. Матовая водоэмульсионная, латексная или акриловая краска обеспечивает 100% адгезию и сочность цвета без бликов.</p>
                  </div>
                </div>

                <div className="surface-item">
                  <div className="surface-item__icon">🏛️</div>
                  <div className="surface-item__info">
                    <h4>Кирпич и монолитный бетон</h4>
                    <p>УФ-печать отлично ложится на фактурный кирпич и бетон. Встроенный 3D лазерный сканер отслеживает рельеф и нивелирует перепады до 15 мм.</p>
                  </div>
                </div>

                <div className="surface-item">
                  <div className="surface-item__icon">🪵</div>
                  <div className="surface-item__info">
                    <h4>Дерево, фанера и МДФ</h4>
                    <p>Отличная впитываемость и сцепление чернил. Печать подчеркивает древесную текстуру либо перекрывает ее белой подложкой.</p>
                  </div>
                </div>

                <div className="surface-item">
                  <div className="surface-item__icon">🪟</div>
                  <div className="surface-item__info">
                    <h4>Стекло, зеркала, металл и керамика</h4>
                    <p>Глянцевые непористые материалы предварительно обрабатываются праймером для адгезии. Чернила держатся надежно и не смываются водой.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="article-section card">
              <h2>2. Требования к геометрии стены</h2>
              <p>
                Оборудование работает на <strong>строго вертикальных поверхностях</strong>. Направляющие рельсы выставляются по лазерному уровню.
              </p>
              <ul>
                <li>Допустимый локальный перепад плоскости: до 15 мм (автоматически компенсируется датчиками вылета сопел).</li>
                <li>Поверхность должна быть сухой, обеспыленной и очищенной от отслаивающихся слоев старой краски.</li>
              </ul>
            </section>

            <section className="article-section card">
              <h2>3. Технологические отступы</h2>
              <p>
                Конструктивные особенности рамы робота-принтера и направляющих требуют технологических отступов:
              </p>
              <ul>
                <li>Отступ от пола: около 15–20 см (в зависимости от ровности пола и типа базы).</li>
                <li>Отступ от потолка: около 20–25 см.</li>
                <li>Отступ от примыкающих углов: 15–25 см.</li>
              </ul>
              <p>
                Наш дизайнер заранее адаптирует масштаб и композицию макета с учетом этих параметров, чтобы арт-объект гармонично вписывался в архитектуру комнаты.
              </p>
            </section>

            <section className="article-section card">
              <h2>4. Подготовка оснований строительной бригадой «Солюшин Билдинг»</h2>
              <p>
                Если стена на вашем объекте имеет неровности, трещины, следы демонтажа или требует малярных работ — наша строительная бригада «Солюшин Билдинг» профессионально подготовит поверхность:
              </p>
              <ul>
                <li>Выравнивание плоскости по маякам;</li>
                <li>Шпаклевание, шлифовка и обеспыливание;</li>
                <li>Нанесение качественного грунтовочного состава.</li>
              </ul>
            </section>
          </article>
        </div>
      </main>
      <CTAForm />
    </>
  );
}
