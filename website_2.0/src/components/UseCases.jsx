import { useCases } from '../data/siteData';
import './UseCases.css';

export default function UseCases() {
  return (
    <section className="use-cases-section section" id="use-cases">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-tag">Сферы применения</span>
          <h2 className="section-title">{useCases.title}</h2>
          <p className="section-subtitle">{useCases.subtitle}</p>
        </div>

        <div className="use-cases-grid">
          {useCases.items.map((item, idx) => (
            <div key={idx} className="use-case-card card fade-in">
              <div className="use-case-img-wrap">
                <img src={item.image} alt={item.title} className="use-case-img" loading="lazy" />
                <span className="use-case-badge">{item.subtitle}</span>
              </div>
              <div className="use-case-content">
                <h3 className="use-case-title">{item.title}</h3>
                <p className="use-case-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
