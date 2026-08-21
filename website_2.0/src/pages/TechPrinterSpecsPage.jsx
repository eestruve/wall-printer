import { useEffect } from 'react';
import CTAForm from '../components/CTAForm';
import BackButton from '../components/BackButton';
import './ArticlePages.css';

export default function TechPrinterSpecsPage() {
  useEffect(() => {
    document.title = "Характеристики робота-принтера | Солюшн Принт";
  }, []);

  return (
    <>
      <main className="article-page">
        <div className="container">
          <BackButton />
          <header className="article-header fade-in">
            <span className="section-tag">База знаний</span>
            <h1 className="article-title">Характеристики промышленного робота-принтера</h1>
            <p className="article-subtitle">
              Инженерные параметры оборудования «Солюшн Принт»: высота до 5м+, скорость, 3D-датчики и цветовая схема CMYK+W.
            </p>
          </header>

          <article className="article-content fade-in">
            <section className="article-section card">
              <h2>1. Разрешение и точность нанесения</h2>
              <p>
                Оборудование использует японские пьезоэлектрические печатающие головки промышленного класса, обеспечивающие разрешение <strong>720×1440 DPI</strong>. Это дает плавные фотореалистичные градиенты и четкость шрифтов высотой от 1.5 мм.
              </p>
            </section>

            <section className="article-section card">
              <h2>2. Габариты и высота печати</h2>
              <ul>
                <li><strong>Высота печати:</strong> до <strong>5 метров</strong> со стандартным комплектом жестких направляющих.</li>
                <li><strong>Высота от 5 метров и выше:</strong> возможность печати на любой высоте при использовании строительных лесов и модульного бесшовного наращивания направляющих.</li>
                <li><strong>Длина нанесения:</strong> не ограничена (рельсы наращиваются на любую длину стены).</li>
              </ul>
            </section>

            <section className="article-section card">
              <h2>3. Скорость нанесения</h2>
              <p>
                Скорость печати составляет от <strong>1 до 3 м²/час</strong> в зависимости от разрешения и сложности рельефа. 
                Такая скорость обеспечивает идеальное послойное нанесение и полную мгновенную UV-полимеризацию каждого микрослоя.
              </p>
            </section>

            <section className="article-section card">
              <h2>4. Лазерные 3D-датчики слежения за рельефом</h2>
              <p>
                Два ультразвуковых и лазерных сенсора непрерывно сканируют рельеф стены с частотой 50 раз в секунду. 
                Печатающая каретка в реальном времени корректирует расстояние до стены (от 2 до 15 мм), сохраняя четкий фокус на кирпичной кладке, фактурной штукатурке или бетоне.
              </p>
            </section>
          </article>
        </div>
      </main>
      <CTAForm />
    </>
  );
}
