import { comparison } from '../data/siteData';
import './Comparison.css';

export default function Comparison() {
  return (
    <section className="comparison-section section section--alt" id="comparison">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-tag">Сравнение решений</span>
          <h2 className="section-title">{comparison.title}</h2>
          <p className="section-subtitle">{comparison.subtitle}</p>
        </div>

        <div className="comparison-grid">
          {comparison.items.map((item, idx) => (
            <div
              key={idx}
              className={`comparison-card card fade-in ${item.highlighted ? 'comparison-card--highlighted' : ''}`}
            >
              {item.badge && <span className="comparison-badge">{item.badge}</span>}
              <div className="comparison-img-wrap">
                <img src={item.image} alt={item.title} className="comparison-img" loading="lazy" />
              </div>
              <h3 className="comparison-card-title">{item.title}</h3>
              <ul className="comparison-list">
                {(item.pros || item.cons).map((text, i) => (
                  <li
                    key={i}
                    className={`comparison-item ${item.highlighted ? 'comparison-item--pro' : 'comparison-item--con'}`}
                  >
                    <span className="comparison-icon">{item.highlighted ? '✓' : '✗'}</span>
                    <span>{text}</span>
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
