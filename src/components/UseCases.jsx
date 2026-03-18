import { useCases } from '../data/siteData';
import './UseCases.css';

export default function UseCases() {
  return (
    <section className="use-cases section" id="use-cases">
      <div className="container">
        <h2 className="section-title fade-in">{useCases.title}</h2>
        <p className="use-cases__subtitle fade-in">{useCases.subtitle}</p>

        <div className="use-cases__grid">
          {useCases.items.map((item, idx) => (
            <div key={idx} className="use-cases__card fade-in">
              <div className="use-cases__img-wrap">
                <img src={item.image} alt={item.title} className="use-cases__img" />
                <div className="use-cases__card-overlay" />
                <div className="use-cases__card-content">
                  <span className="use-cases__card-subtitle">{item.subtitle}</span>
                  <h3 className="use-cases__card-title">{item.title}</h3>
                  <p className="use-cases__card-desc">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
