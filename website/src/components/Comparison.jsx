import { comparison } from '../data/siteData';
import './Comparison.css';

export default function Comparison() {
  return (
    <section className="comparison section" id="comparison">
      <div className="container">
        <h2 className="section-title fade-in">{comparison.title}</h2>
        <p className="comparison__subtitle fade-in">{comparison.subtitle}</p>

        <div className="comparison__grid">
          {comparison.items.map((item, idx) => (
            <div
              key={idx}
              className={`comparison__card glass-card fade-in ${item.highlighted ? 'comparison__card--highlighted' : ''}`}
            >
              {item.badge && <span className="comparison__badge">{item.badge}</span>}
              <div className="comparison__img-wrap">
                <img src={item.image} alt={item.title} className="comparison__img" loading="lazy" />
              </div>
              <h3 className="comparison__card-title">{item.title}</h3>
              <ul className="comparison__list">
                {(item.pros || item.cons).map((text, i) => (
                  <li key={i} className={`comparison__item ${item.highlighted ? 'comparison__item--pro' : 'comparison__item--con'}`}>
                    <span className="comparison__icon">{item.highlighted ? '✓' : '✗'}</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
