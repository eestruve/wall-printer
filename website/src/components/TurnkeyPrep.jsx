import { turnkeyPrep } from '../data/siteData';
import './TurnkeyPrep.css';

export default function TurnkeyPrep() {
  return (
    <section className="turnkey-section section" id="turnkey">
      <div className="container">
        <div className="turnkey-card fade-in">
          <div className="turnkey-grid">
            <div className="turnkey-content">
              <span className="section-tag">Строительный сервис</span>
              <h2 className="turnkey-title">
                {turnkeyPrep.title} <span className="turnkey-accent">{turnkeyPrep.titleAccent}</span>
              </h2>
              <p className="turnkey-desc">{turnkeyPrep.description}</p>

              <div className="turnkey-stats">
                {turnkeyPrep.stats.map((stat, idx) => (
                  <div key={idx} className="turnkey-stat">
                    <span className="turnkey-stat-value">{stat.value}</span>
                    <span className="turnkey-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="turnkey-features">
              <h3 className="turnkey-features-title">Что входит в подготовку:</h3>
              <ul className="turnkey-list">
                {turnkeyPrep.items.map((item, idx) => (
                  <li key={idx} className="turnkey-item">
                    <span className="turnkey-check">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
