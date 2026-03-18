import { useState } from 'react';
import { ctaForm } from '../data/siteData';
import './CTAForm.css';

export default function CTAForm() {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [fileName, setFileName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Telegram bot integration
    setSubmitted(true);
    // Reset form after brief delay
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '' });
      setFileName('');
    }, 3000);
  };

  return (
    <section className="cta-form section" id="cta-form">
      <div className="container cta-form__layout">
        <div className="cta-form__text fade-in">
          <h2 className="cta-form__title">
            {ctaForm.title.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h2>
          <p className="cta-form__desc">{ctaForm.description}</p>
        </div>

        {submitted ? (
          <div className="cta-form__card glass-card fade-in visible cta-form__success">
            <div className="cta-form__success-icon">✓</div>
            <h3>Спасибо, {formData.name}!</h3>
            <p>Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <form className="cta-form__card glass-card fade-in" onSubmit={handleSubmit}>
            <div className="cta-form__field">
              <label htmlFor="cta-name" className="cta-form__label">{ctaForm.fields.name}</label>
              <input
                id="cta-name"
                type="text"
                className="cta-form__input"
                placeholder={ctaForm.fields.namePlaceholder}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="cta-form__field">
              <label htmlFor="cta-phone" className="cta-form__label">{ctaForm.fields.phone}</label>
              <input
                id="cta-phone"
                type="tel"
                className="cta-form__input"
                placeholder={ctaForm.fields.phonePlaceholder}
                pattern="[\+]?[0-9\s\-\(\)]{10,18}"
                title="Введите номер телефона в формате +7 (XXX) XXX-XX-XX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div className="cta-form__field">
              <label htmlFor="cta-file" className="cta-form__label">{ctaForm.fields.file}</label>
              <div className="cta-form__upload">
                <input
                  id="cta-file"
                  type="file"
                  accept="image/*"
                  className="cta-form__file-input"
                  onChange={(e) => setFileName(e.target.files[0]?.name || '')}
                />
                <div className="cta-form__upload-area">
                  <span className="cta-form__upload-icon">📎</span>
                  <span className="cta-form__upload-text">
                    {fileName || ctaForm.fields.fileHint}
                  </span>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary cta-form__submit">
              {ctaForm.submitText}
            </button>

            <p className="cta-form__price">{ctaForm.priceAnchor}</p>
          </form>
        )}
      </div>
    </section>
  );
}
