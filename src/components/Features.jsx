import { features } from '../data/siteData';
import './Features.css';

export default function Features() {
  return (
    <section className="features section" id="features">
      <div className="container">
        <h2 className="section-title fade-in">{features.title}</h2>
        <div className="features__grid">
          {features.items.map((item, idx) => (
            <div key={idx} className="features__item fade-in">
              <div className="features__icon" dangerouslySetInnerHTML={{ __html: item.icon }} />
              <h3 className="features__item-title">{item.title}</h3>
              <p className="features__item-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
