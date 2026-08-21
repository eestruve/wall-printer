import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IMaskInput } from 'react-imask';
import { ctaForm } from '../data/siteData';
import './CTAForm.css';

export default function CTAForm() {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [files, setFiles] = useState({ wall: null, sketch: null });
  const [submitted, setSubmitted] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    
    const BOT_TOKEN = import.meta.env.VITE_TG_BOT_TOKEN;
    const CHAT_ID = import.meta.env.VITE_TG_CHAT_ID;
    
    if (!BOT_TOKEN || !CHAT_ID) {
      console.warn('Telegram API credentials missing. Form submission simulated.');
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '' });
        setFiles({ wall: null, sketch: null });
      }, 3000);
      return;
    }

    try {
      const text = `🔔 *Новая заявка (Солюшн Клаб)*\n\n👤 *Имя:* ${formData.name}\n📞 *Телефон:* ${formData.phone}`;
      
      const hasWall = !!files.wall;
      const hasSketch = !!files.sketch;

      if (hasWall || hasSketch) {
        // Отправляем как документы
        const sendFile = async (file, typeLabel) => {
          const payload = new FormData();
          payload.append('chat_id', CHAT_ID);
          payload.append('caption', `${text}\n\nТип: ${typeLabel}`);
          payload.append('document', file);
          const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`, {
            method: 'POST',
            body: payload,
          });
          if (!response.ok) throw new Error(`Ошибка Telegram API (Document): HTTP ${response.status}`);
          return response.json();
        };

        if (hasWall) await sendFile(files.wall, "Фотография стены");
        if (hasSketch) await sendFile(files.sketch, "Эскиз/Рисунок");
      } else {
        // Прямой POST запрос (как в Yasno), без прокси
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text,
            parse_mode: 'Markdown'
          })
        });
        if (!response.ok) throw new Error(`Ошибка Telegram API (Message): HTTP ${response.status}`);
      }

      setSubmitted(true);
      setFiles({ wall: null, sketch: null });
    } catch (err) {
      console.error('Ошибка отправки формы в Telegram:', err);
      setTimeout(() => {
        alert('Ошибка при отправке заявки. Пожалуйста, попробуйте позже.');
      }, 100);
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (!file) {
      setFiles(prev => ({ ...prev, [field]: null }));
      return;
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif'];
    if (!allowedTypes.includes(file.type) && !file.name.toLowerCase().endsWith('.heic')) {
      alert('Пожалуйста, выберите изображение (JPG, PNG, WEBP или HEIC)');
      e.target.value = '';
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert('Файл слишком большой. Максимальный размер — 10 МБ');
      e.target.value = '';
      return;
    }

    setFiles(prev => ({ ...prev, [field]: file }));
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
              <IMaskInput
                id="cta-phone"
                type="tel"
                className="cta-form__input"
                placeholder={ctaForm.fields.phonePlaceholder}
                mask="+{7} (000) 000-00-00"
                value={formData.phone}
                unmask={false}
                onAccept={(value) => setFormData({ ...formData, phone: value })}
                required
              />
            </div>

            <div className="cta-form__files-grid">
              <div className="cta-form__field">
                <label htmlFor="cta-file-wall" className="cta-form__label">{ctaForm.fields.fileWall}</label>
                <div className="cta-form__upload">
                  <input
                    id="cta-file-wall"
                    type="file"
                    accept=".jpg,.jpeg,.png,.webp,.heic"
                    className="cta-form__file-input"
                    onChange={(e) => handleFileChange(e, 'wall')}
                  />
                  <div className="cta-form__upload-area">
                    <span className="cta-form__upload-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4.5A2.5 2.5 0 0 0 2 9.5v9A2.5 2.5 0 0 0 4.5 21h15a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 19.5 7H17l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
                    </span>
                    <span className="cta-form__upload-text">
                      {files.wall?.name || ctaForm.fields.fileWallHint}
                    </span>
                  </div>
                </div>
              </div>

              <div className="cta-form__field">
                <label htmlFor="cta-file-sketch" className="cta-form__label">{ctaForm.fields.fileSketch}</label>
                <div className="cta-form__upload">
                  <input
                    id="cta-file-sketch"
                    type="file"
                    accept=".jpg,.jpeg,.png,.webp,.heic"
                    className="cta-form__file-input"
                    onChange={(e) => handleFileChange(e, 'sketch')}
                  />
                  <div className="cta-form__upload-area">
                    <span className="cta-form__upload-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.607-.482 1.926-1.074.317-.59.472-1.323.472-2.077 0-1.611 1.389-2.849 3-2.849h1.602c2.76 0 4.998-2.24 4.998-5 0-5.5-4.5-10-10-10Z"/></svg>
                    </span>
                    <span className="cta-form__upload-text">
                      {files.sketch?.name || ctaForm.fields.fileSketchHint}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="cta-form__optional-note">{ctaForm.fields.optionalNote}</p>

            <button 
              type="submit" 
              className={`btn btn-primary cta-form__submit ${isUploading ? 'loading' : ''}`}
              disabled={isUploading}
            >
              {isUploading ? (
                <span className="spinner-container">
                  <span className="spinner"></span>
                  Отправка...
                </span>
              ) : ctaForm.submitText}
            </button>
            
            <p className="cta-form__privacy">
              Нажимая кнопку, вы соглашаетесь с <Link to="/privacy">Политикой конфиденциальности</Link>.
            </p>

            <p className="cta-form__price">{ctaForm.priceAnchor}</p>
          </form>
        )}
      </div>
    </section>
  );
}
