import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CTAForm from '../components/CTAForm';
import BackButton from '../components/BackButton';
import './ArticlePages.css';

function TechWallPrepPage() {
  useEffect(() => {
    document.title = "Технические требования и подготовка стен | Солюшн Клаб";
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
          <h1 className="article-title">Как подготовить стену под роботизированную роспись</h1>
          <p className="article-subtitle">
            Технический регламент. Сэкономьте время и бюджет: правильная подготовка стены гарантирует идеальную цветопередачу и отсутствие искажений.
          </p>
          <Link to="/#cta-form" className="article-hero-cta">Заказать настенную печать в Москве</Link>
        </header>

        <article className="article-content">
          <section className="article-section fade-in">
            <h2>Ровность поверхности (Геометрия)</h2>
            <p>
              Принтер перемещается вдоль стены по специальным направляющим рельсам на расстоянии 1-2 см от поверхности. Допустимый перепад высот на погонный метр стены не должен превышать 5 мм. Если стена имеет радиальный изгиб, печать возможна только после индивидуального замера радиуса отступа.
            </p>
          </section>

          <section className="article-section fade-in">
            <h2>Слепые зоны и отступы (Эффект паспарту)</h2>
            <p>
              Конструктивные особенности принтера (колесная база и печатная каретка) имеют технические ограничения по отступам:
            </p>
            <ul>
              <li>Отступ от пола: 30 см (при использовании классической базы).</li>
              <li>Отступ от потолка: 25 см.</li>
              <li>Отступ от боковых стен: 30 см слева и 40 см справа.</li>
            </ul>
            <p>
              Мы превратили этот технический нюанс в дизайн-решение "Эффект паспарту" — технологичные отступы создают эффект студийного холста.
            </p>
          </section>

          <section className="article-section fade-in">
            <h2>Какой краской грунтовать стену?</h2>
            <p>
              Для максимальной адгезии (сцепления) и насыщенности цветов мы рекомендуем окрашивать стены интерьерными матовыми красками на водной основе (акрил, латекс). Идеальный фон для печати — белый, однако наша технология CMYK+W позволяет наносить плотную белую подложку при печати на черных и цветных стенах.
            </p>
          </section>
        </article>
      </main>
      <CTAForm />
    </>
  );
}

export default TechWallPrepPage;
