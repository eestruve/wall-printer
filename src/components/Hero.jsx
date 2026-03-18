import { hero } from '../data/siteData';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img src={hero.image} alt="Wall Printer в работе" className="hero__bg-img" />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
        <span className="hero__tagline">{hero.tagline}</span>
        <h1 className="hero__title">{hero.title}</h1>
        <p className="hero__subtitle">{hero.subtitle}</p>

        <div className="hero__actions">
          <a href="#cta-form" className="btn btn-primary hero__cta-primary">
            {hero.ctaPrimary}
          </a>
          <a href="#features" className="btn btn-outline hero__cta-secondary">
            ▶ {hero.ctaSecondary}
          </a>
        </div>

        <div className="hero__badge">
          <span className="hero__badge-dot" />
          {hero.badge}
        </div>
      </div>
    </section>
  );
}
