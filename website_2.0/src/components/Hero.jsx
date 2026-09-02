import { hero } from '../data/siteData';
import videoUrl from '../assets/videos/0324.mp4';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content fade-in">
            <div className="hero__header-text">
              <h1 className="hero__title">{hero.title}</h1>
              <p className="hero__subtitle">{hero.subtitle}</p>
            </div>

            <div className="hero__cta-group">
              <a href="#calculator" className="btn btn-primary hero__btn-main">
                {hero.ctaPrimary}
              </a>
              <a href="#social-proof" className="btn btn-outline hero__btn-secondary">
                {hero.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="hero__media fade-in">
            <div className="hero__video-wrapper">
              <video
                className="hero__video"
                autoPlay
                loop
                muted
                playsInline
                src={videoUrl}
                poster={hero.image}
              />
              <div className="hero__media-badge">
                <span className="hero__pulse"></span>
                Прямая печать на вертикальной стене
              </div>
            </div>
          </div>
        </div>

        {/* Горизонтальный блок 3 преимуществ под видео и контентом */}
        <div className="hero__badges-bar card fade-in">
          {hero.badges.map((badge, idx) => (
            <div key={idx} className="hero__badge-item">
              <span className="hero__badge-icon">✓</span>
              <span className="hero__badge-text">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
