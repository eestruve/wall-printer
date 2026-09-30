import { useState, useEffect } from 'react';
import { socialProof } from '../data/siteData';
import './SocialProof.css';

export default function SocialProof() {
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveVideo(null);
      }
    };

    if (activeVideo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeVideo]);

  const handleCloseModal = () => {
    setActiveVideo(null);
  };

  return (
    <section className="social-proof-section section section--alt" id="social-proof">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-tag">Портфолио</span>
          <h2 className="section-title">{socialProof.title}</h2>
          <p className="section-subtitle">{socialProof.subtitle}</p>
        </div>

        <div className="social-proof-grid">
          {socialProof.items.map((item, idx) => (
            <div key={idx} className="social-proof-card card fade-in">
              <div
                className="social-proof-video-wrap"
                onClick={() => setActiveVideo(item)}
                role="button"
                tabIndex={0}
                aria-label={`Смотреть видео: ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveVideo(item);
                  }
                }}
              >
                <div className="social-proof-placeholder">
                  {item.poster && (
                    <img src={item.poster} alt={item.title} className="social-proof-poster" />
                  )}
                  <div className="social-proof-play-btn" aria-label="Смотреть видео">
                    <span>▶</span>
                  </div>
                </div>
              </div>
              <div className="social-proof-info">
                <h3 className="social-proof-card-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Полноэкранный модальный плеер для 100% корректного отображения на Apple и мобильных */}
      {activeVideo && (
        <div className="video-modal-backdrop" onClick={handleCloseModal}>
          <div className="video-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="video-modal-header">
              <h3 className="video-modal-title">{activeVideo.title}</h3>
              <button
                type="button"
                className="video-modal-close"
                onClick={handleCloseModal}
                aria-label="Закрыть видео"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="video-modal-body">
              <video
                key={activeVideo.url}
                src={activeVideo.url}
                className="video-modal-video"
                controls
                autoPlay
                playsInline
                webkit-playsinline="true"
                x5-playsinline="true"
                preload="auto"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
