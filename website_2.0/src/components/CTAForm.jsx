import { useState, useRef } from 'react';
import { IMaskInput } from 'react-imask';
import { Link } from 'react-router-dom';
import { ctaForm, siteInfo, calculatorData } from '../data/siteData';
import './CTAForm.css';

export default function CTAForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [objectType, setObjectType] = useState(calculatorData.objectTypes[0].label);
  const [comment, setComment] = useState('');
  const [fileWall, setFileWall] = useState(null);
  const [fileSketch, setFileSketch] = useState(null);
  const [agreed, setAgreed] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const fileWallRef = useRef(null);
  const fileSketchRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || phone.replace(/[^\d]/g, '').length < 11 || !agreed) return;

    setIsSubmitting(true);

    // Simulate async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName('');
      setPhone('');
      setComment('');
      setFileWall(null);
      setFileSketch(null);
      if (fileWallRef.current) fileWallRef.current.value = '';
      if (fileSketchRef.current) fileSketchRef.current.value = '';
    }, 800);
  };

  return (
    <section className="cta-section section section--alt" id="cta-form">
      <div className="container">
        <div className="cta-wrapper card fade-in">
          <div className="cta-info">
            <span className="section-tag">Заявка на расчет</span>
            <h2 className="cta-title">{ctaForm.title}</h2>
            <p className="cta-desc">{ctaForm.description}</p>

            <div className="cta-price-anchor">
              <span className="cta-price-icon">🏷️</span>
              <span className="cta-price-text">{ctaForm.priceAnchor}</span>
            </div>

            <div className="cta-contacts-box">
              <div className="cta-contacts-label">Или свяжитесь напрямую:</div>
              <a href={`tel:${siteInfo.phone.replace(/[^\d+]/g, '')}`} className="cta-direct-phone">
                {siteInfo.phone}
              </a>
              <div className="cta-direct-links">
                <a href={siteInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="cta-social-badge">
                  WhatsApp
                </a>
                <a href={siteInfo.telegram} target="_blank" rel="noopener noreferrer" className="cta-social-badge">
                  Telegram
                </a>
              </div>
            </div>
          </div>

          <div className="cta-form-container">
            {submitted ? (
              <div className="cta-success">
                <div className="cta-success-icon">✓</div>
                <h3 className="cta-success-title">Спасибо за заявку!</h3>
                <p className="cta-success-desc">
                  Инженер «Солюшн Принт» свяжется с вами в течение рабочего времени для согласования деталей и расчета сметы.
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setSubmitted(false)}
                >
                  Отправить еще одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="cta-form">
                <div className="form-group">
                  <label htmlFor="form-name" className="form-label">{ctaForm.fields.name} *</label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={ctaForm.fields.namePlaceholder}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-phone" className="form-label">{ctaForm.fields.phone} *</label>
                  <IMaskInput
                    id="form-phone"
                    mask="+{7} (000) 000-00-00"
                    radix="."
                    value={phone}
                    unmask={false}
                    onAccept={(val) => setPhone(val)}
                    placeholder={ctaForm.fields.phonePlaceholder}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="form-type" className="form-label">{ctaForm.fields.objectType}</label>
                  <select
                    id="form-type"
                    value={objectType}
                    onChange={(e) => setObjectType(e.target.value)}
                    className="form-input form-select"
                  >
                    {calculatorData.objectTypes.map((type) => (
                      <option key={type.id} value={type.label}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="form-comment" className="form-label">{ctaForm.fields.comment}</label>
                  <textarea
                    id="form-comment"
                    rows="3"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder={ctaForm.fields.commentPlaceholder}
                    className="form-input form-textarea"
                  />
                </div>

                <div className="form-files-row">
                  <div className="form-file-box">
                    <label className="form-file-label">
                      <span className="form-file-title">📷 {ctaForm.fields.fileWall}</span>
                      <span className="form-file-hint">{fileWall ? fileWall.name : ctaForm.fields.fileWallHint}</span>
                      <input
                        type="file"
                        accept="image/*"
                        ref={fileWallRef}
                        onChange={(e) => setFileWall(e.target.files[0] || null)}
                        className="form-file-input"
                      />
                    </label>
                  </div>

                  <div className="form-file-box">
                    <label className="form-file-label">
                      <span className="form-file-title">🎨 {ctaForm.fields.fileSketch}</span>
                      <span className="form-file-hint">{fileSketch ? fileSketch.name : ctaForm.fields.fileSketchHint}</span>
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        ref={fileSketchRef}
                        onChange={(e) => setFileSketch(e.target.files[0] || null)}
                        className="form-file-input"
                      />
                    </label>
                  </div>
                </div>

                <label className="form-agreement">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    required
                    className="form-checkbox"
                  />
                  <span>
                    Я согласен на обработку персональных данных в соответствии с{' '}
                    <Link to="/privacy" target="_blank">Политикой конфиденциальности</Link>
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-submit"
                >
                  {isSubmitting ? 'Отправка...' : ctaForm.submitText}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
