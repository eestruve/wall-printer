import { guarantee } from '../data/siteData';
import './Guarantee.css';

export default function Guarantee() {
  return (
    <section className="guarantee section" id="guarantee">
      <div className="container">
        <div className="guarantee__inner fade-in">
          <div className="guarantee__content">
            <h2 className="guarantee__title">
              {guarantee.title} <span className="guarantee__accent">{guarantee.titleAccent}</span>
            </h2>
            <p className="guarantee__desc">{guarantee.description}</p>

            <div className="guarantee__stats">
              {guarantee.stats.map((stat, idx) => (
                <div key={idx} className="guarantee__stat">
                  <span className="guarantee__stat-value">{stat.value}</span>
                  <span className="guarantee__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <ul className="guarantee__list">
            {guarantee.items.map((item, idx) => (
              <li key={idx} className="guarantee__list-item">
                <span className="guarantee__check">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
