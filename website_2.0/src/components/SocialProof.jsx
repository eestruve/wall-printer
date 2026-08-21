import { useState } from 'react';
import { socialProof } from '../data/siteData';
import './SocialProof.css';

export default function SocialProof() {
  const [playingIdx, setPlayingIdx] = useState(null);

  return (
    <section className="social-proof-section section section--alt" id="social-proof">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-tag">Портфолио и процессы</span>
          <h2 className="section-title">{socialProof.title}</h2>
          <p className="section-subtitle">{socialProof.subtitle}</p>
        </div>

        <div className="social-proof-grid">
          {socialProof.items.map((item, idx) => (
            <div key={idx} className="social-proof-card card fade-in">
              <div
                className="social-proof-video-wrap"
                onClick={() => setPlayingIdx(idx)}
              >
                {playingIdx === idx && item.url ? (
                  <video
                    src={item.url}
                    className="social-proof-video"
                    controls
                    autoPlay
                  />
                ) : (
                  <div className="social-proof-placeholder">
                    {item.poster && (
                      <img src={item.poster} alt={item.title} className="social-proof-poster" />
                    )}
                    <div className="social-proof-play-btn" aria-label="Смотреть видео">
                      <span>▶</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="social-proof-info">
                <h3 className="social-proof-card-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
