import { useState } from 'react';
import { socialProof } from '../data/siteData';
import './SocialProof.css';

export default function SocialProof() {
  const [playingIdx, setPlayingIdx] = useState(null);

  return (
    <section className="social-proof section" id="social-proof">
      <div className="container">
        <h2 className="section-title fade-in">{socialProof.title}</h2>
        <div className="social-proof__grid">
          {socialProof.items.map((item, idx) => (
            <div key={idx} className="social-proof__card glass-card fade-in">
              <div 
                className="social-proof__video-container"
                onClick={() => !playingIdx === idx && setPlayingIdx(idx)}
              >
                {playingIdx === idx && item.url ? (
                  <video 
                    src={item.url} 
                    className="social-proof__video" 
                    controls 
                    autoPlay 
                  />
                ) : (
                  <div className="social-proof__video-placeholder" onClick={() => setPlayingIdx(idx)}>
                    {item.poster && (
                      <img src={item.poster} alt={item.title} className="social-proof__poster" />
                    )}
                    <div className="social-proof__play-btn">▶</div>
                  </div>
                )}
              </div>
              <p className="social-proof__card-title">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
