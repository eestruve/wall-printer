import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CTAForm from '../components/CTAForm';
import BackButton from '../components/BackButton';
import './ArticlePages.css';

function TechPrinterSpecsPage() {
  useEffect(() => {
    document.title = "Характеристики вертикального принтера | Солюшн Клаб";
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="article-page">
        <BackButton />
        <header className="article-header fade-in">
          <h1 className="article-title">Характеристики принтера Солюшн Клаб</h1>
          <p className="article-subtitle">
            Цифровая точность 1440 DPI и цветовая схема CMYK+White для проектов премиум-класса.
          </p>
          <Link to="/#cta-form" className="article-hero-cta">Услуги печати на стенах в Москве</Link>
        </header>

        <article className="article-content">
          <section className="article-section fade-in">
            <h2>Разрешение и качество печати</h2>
            <p>
              Оборудование оснащено пьезоэлектрическими печатающими головками промышленного класса, обеспечивающими оптическое разрешение до 1440 DPI. Это позволяет четко пропечатывать микротекст высотой 2 мм и фотографические градиенты без эффекта «зерна».
            </p>
          </section>

          <section className="article-section fade-in">
            <h2>Максимальные размеры изображения</h2>
            <ul>
              <li><strong>Высота:</strong> до 3 метров без стыков. Для помещений выше 3 метров используется технология бесшовного наращивания направляющих вдоль лесов.</li>
              <li><strong>Ширина:</strong> не ограничена (аппарат передвигается по рельсам).</li>
            </ul>
          </section>

          <section className="article-section fade-in">
            <h2>Преодоление препятствий</h2>
            <p>
              Оптические лазерные датчики сканируют поверхность стены со скоростью 50 раз в секунду. Если на стене есть выступающий элемент (например, шляпка самореза или розетка до 10 мм толщиной), каретка автоматически отдалится от стены, чтобы избежать повреждения головок, сохранив при этом фокус печати.
            </p>
            <p>
              <strong>Наши гарантии:</strong> Мы уверены в своей технологии. Если вас не устроит качество цветопробы на объекте, мы вернем предоплату в полном объеме.
            </p>
          </section>
        </article>
      </main>
      <CTAForm />
    </>
  );
}

export default TechPrinterSpecsPage;
