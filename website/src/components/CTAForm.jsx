import { useState, useRef, useEffect } from 'react';
import { IMaskInput } from 'react-imask';
import { Link } from 'react-router-dom';
import { ctaForm, siteInfo } from '../data/siteData';
import { submitLead } from '../utils/telegram';
import './CTAForm.css';

export default function CTAForm() {
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [fileWall, setFileWall] = useState(null);
  const [fileSketch, setFileSketch] = useState(null);
  const [agreed, setAgreed] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    const handleFillCalc = (e) => {
      if (e.detail) {
        setComment(e.detail);
      }
    };
    window.addEventListener('fill-calculator-data', handleFillCalc);
    return () => window.removeEventListener('fill-calculator-data', handleFillCalc);
  }, []);

  const [fileError, setFileError] = useState('');
  const fileWallRef = useRef(null);
  const fileSketchRef = useRef(null);

  const validateAndSetFile = (file, setter, ref) => {
    setFileError('');
    if (!file) {
      setter(null);
      return;
    }

    const MAX_SIZE = 10 * 1024 * 1024; // 10 MB
    const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
    const ALLOWED_EXTS = ['.jpg', '.jpeg', '.png', '.webp', '.pdf'];

    const ext = '.' + file.name.split('.').pop().toLowerCase();

    if (!ALLOWED_TYPES.includes(file.type) && !ALLOWED_EXTS.includes(ext)) {
      setFileError('Недопустимый формат файла. Разрешены только JPG, PNG, WEBP и PDF.');
      setter(null);
      if (ref && ref.current) ref.current.value = '';
      return;
    }

    if (file.size > MAX_SIZE) {
      setFileError('Размер файла превышает 10 МБ. Пожалуйста, прикрепите файл меньшего размера.');
      setter(null);
      if (ref && ref.current) ref.current.value = '';
      return;
    }

    setter(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phone || phone.replace(/[^\d]/g, '').length < 11 || !agreed) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      await submitLead({
        phone,
        comment,
        fileWall,
        fileSketch,
        source: 'Главная форма сайта (Калькулятор / Заявка)',
      });

      setSubmitted(true);
      setPhone('');
      setComment('');
      setFileWall(null);
      setFileSketch(null);
      setFileError('');
      if (fileWallRef.current) fileWallRef.current.value = '';
      if (fileSketchRef.current) fileSketchRef.current.value = '';
    } catch (err) {
      console.error('Ошибка отправки заявки в Telegram:', err);
      setSubmitError('Не удалось отправить заявку. Пожалуйста, проверьте интернет-соединение или свяжитесь с нами напрямую по телефону.');
    } finally {
      setIsSubmitting(false);
    }
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
              <span className="cta-price-icon-badge">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                  <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>
              </span>
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
                  Инженер «Солюшин Принт» свяжется с вами в течение рабочего времени для согласования деталей и расчета сметы.
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
              <>
                <div className="cta-form-header">
                  <h3 className="cta-form-heading">Параметры для расчета</h3>
                  <p className="cta-form-subheading">Заполните поля ниже — инженер подготовит точную смету проекта</p>
                </div>
                <form onSubmit={handleSubmit} className="cta-form">
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
                      <div className="form-file-title">
                        <span className="form-file-icon-badge">
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                            <circle cx="12" cy="13" r="4" />
                          </svg>
                        </span>
                        <span>{ctaForm.fields.fileWall}</span>
                      </div>
                      <span className="form-file-hint">{fileWall ? fileWall.name : ctaForm.fields.fileWallHint}</span>
                      <input
                        type="file"
                        accept=".jpg,.jpeg,.png,.webp,.pdf,image/jpeg,image/png,image/webp,application/pdf"
                        ref={fileWallRef}
                        onChange={(e) => validateAndSetFile(e.target.files[0] || null, setFileWall, fileWallRef)}
                        className="form-file-input"
                      />
                    </label>
                  </div>

                  <div className="form-file-box">
                    <label className="form-file-label">
                      <div className="form-file-title">
                        <span className="form-file-icon-badge">
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2C6.5 2 2 6.5 2 12a10 10 0 0 0 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H16c3.3 0 6-2.7 6-6 0-5.5-4.5-9.6-10-9.6z" />
                            <circle cx="7.5" cy="10.5" r="1" fill="currentColor" />
                            <circle cx="12" cy="7.5" r="1" fill="currentColor" />
                            <circle cx="16.5" cy="10.5" r="1" fill="currentColor" />
                          </svg>
                        </span>
                        <span>{ctaForm.fields.fileSketch}</span>
                      </div>
                      <span className="form-file-hint">{fileSketch ? fileSketch.name : ctaForm.fields.fileSketchHint}</span>
                      <input
                        type="file"
                        accept=".jpg,.jpeg,.png,.webp,.pdf,image/jpeg,image/png,image/webp,application/pdf"
                        ref={fileSketchRef}
                        onChange={(e) => validateAndSetFile(e.target.files[0] || null, setFileSketch, fileSketchRef)}
                        className="form-file-input"
                      />
                    </label>
                  </div>
                </div>

                {fileError && (
                  <div className="form-error-banner" style={{ color: 'var(--color-error)', fontSize: '0.85rem', marginBottom: '0.75rem', fontWeight: 500 }}>
                    ⚠️ {fileError}
                  </div>
                )}

                <label className="form-agreement">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    required
                    className="form-checkbox"
                  />
                  <span>
                    Я подтверждаю согласие на обработку персональных данных и получение информационных сообщений в соответствии с{' '}
                    <Link to="/privacy" target="_blank">Политикой конфиденциальности (152-ФЗ)</Link>
                  </span>
                </label>

                {submitError && (
                  <div className="form-error-banner" style={{ color: 'var(--color-error)', fontSize: '0.85rem', marginBottom: '0.75rem', fontWeight: 500 }}>
                    ⚠️ {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-submit"
                >
                  {isSubmitting ? 'Отправка...' : ctaForm.submitText}
                </button>
              </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
