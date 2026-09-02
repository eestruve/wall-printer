import { features } from '../data/siteData';
import './Features.css';

export default function Features() {
  return (
    <section className="features-section section section--alt" id="features">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-tag">Технологии</span>
          <h2 className="section-title">{features.title}</h2>
          <p className="section-subtitle">{features.subtitle}</p>
        </div>

        <div className="features-grid">
          {features.items.map((item, idx) => (
            <div key={idx} className="feature-card card fade-in">
              <div className="feature-card__number">0{idx + 1}</div>
              <h3 className="feature-card__title">{item.title}</h3>
              <p className="feature-card__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
