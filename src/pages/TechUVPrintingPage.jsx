import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CTAForm from '../components/CTAForm';
import BackButton from '../components/BackButton';
import './ArticlePages.css';

function TechUVPrintingPage() {
  useEffect(() => {
    document.title = "Вертикальная UV-печать на стенах в Москве | Солюшн Клаб";
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
          <h1 className="article-title">Вертикальная UV-печать на стенах в Москве</h1>
          <p className="article-subtitle">
            100% совпадение с вашим 3D-рендером за 1 день. Без грязи, запаха краски и срыва сроков художником.
          </p>
          <Link to="/#cta-form" className="article-hero-cta">Заказать вертикальную печать в Москве</Link>
        </header>

        <article className="article-content">
          <section className="article-section fade-in">
            <h2>В чем отличие UV-печати от классической аэрографии?</h2>
            <p>
              Вертикальная печать исключает человеческий фактор. Наш принтер наносит изображение по координатам с точностью до миллиметра, гарантируя, что утвержденный на экране компьютера дизайн будет выглядеть абсолютно так же на вашей стене. Скорость работы оборудования достигает 3 кв.м в час.
            </p>
          </section>

          <section className="article-section fade-in">
            <h2>На каких поверхностях работает технология?</h2>
            <p>
              UV-краски полимеризуются (застывают) за доли секунды под воздействием мощной ультрафиолетовой лампы прямо в процессе печати. Благодаря этому чернила не впитываются в материал, а остаются на поверхности. Мы печатаем на:
            </p>
            <ul>
              <li>Бетоне и кирпиче</li>
              <li>Дереве и фанере</li>
              <li>Стекле и металле</li>
              <li>Декоративной штукатурке</li>
            </ul>
          </section>

          <section className="article-section fade-in">
            <h2>Безопасно ли это для жилых помещений?</h2>
            <p>
              UV-печать на 100% экологична. Отвержденные чернила не выделяют летучих органических веществ (VOC-free) и абсолютно не имеют запаха. Комнату можно эксплуатировать (спать, работать) сразу после завершения печати. Это идеальное решение для детских комнат, ресторанов сегмента HoReCa и медицинских учреждений.
            </p>
          </section>
        </article>
      </main>
      <CTAForm />
    </>
  );
}

export default TechUVPrintingPage;
