import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IMaskInput } from 'react-imask';
import { siteInfo } from '../data/siteData';
import BackButton from '../components/BackButton';
import './B2BPages.css';

export default function DesignersPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [studio, setStudio] = useState('');
  const [requestType, setRequestType] = useState('box');
  const [comment, setComment] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !agreed) return;
    setSubmitted(true);
  };

  return (
    <div className="b2b-page">
      <div className="container">
        <BackButton />

        <div className="b2b-header">
          <span className="section-tag">Партнерство B2B</span>
          <h1 className="b2b-title">Дизайнерам интерьера и студиям</h1>
          <p className="b2b-subtitle">
            Реализуем ваши смелые концепции и 3D-рендеры на стенах с точностью до пикселя. 
            Предоставляем физические образцы выкрасов и гарантируем премиальное качество нанесения.
          </p>
        </div>

        <div className="b2b-grid">
          <div className="b2b-card card">
            <div className="b2b-icon">🎨</div>
            <h3 className="b2b-card-title">100% совпадение с рендером</h3>
            <p className="b2b-card-desc">
              Заказчик получает именно то изображение, которое утвердил на визуализации. 
              Никакого человеческого фактора и субъективного видения художника.
            </p>
          </div>

          <div className="b2b-card card">
            <div className="b2b-icon">📦</div>
            <h3 className="b2b-card-title">Презентационный Box образцов</h3>
            <p className="b2b-card-desc">
              Доставим в вашу студию фирменный бокс с реальными образцами печати на бетоне, кирпиче, 
              дереве, металле и стекле для демонстрации клиентам.
            </p>
          </div>

          <div className="b2b-card card">
            <div className="b2b-icon">🤝</div>
            <h3 className="b2b-card-title">Партнерская программа</h3>
            <p className="b2b-card-desc">
              Официальный договор, защита авторского проекта, прозрачные агентские условия и 
              сопровождение личного инженерного куратора.
            </p>
          </div>

          <div className="b2b-card card">
            <div className="b2b-icon">🏗️</div>
            <h3 className="b2b-card-title">Стены под ключ</h3>
            <p className="b2b-card-desc">
              Если стена на объекте требует выравнивания или подготовки — бригада «Солюшин Билдинг» 
              возьмет на себя всю черновую и финишную малярку.
            </p>
          </div>
        </div>

        {/* Notice on Samples */}
        <div className="b2b-notice card">
          <div className="b2b-notice-badge">Информация об образцах</div>
          <p>
            В связи со сложностью транспортировки и калибровки промышленного робота-принтера, мы не осуществляем выездную бесплатную печать тестовых фрагментов на объекте. 
            Вместо этого мы бесплатно предоставляем <strong>физический Box-набор реальных выкрасов</strong> на различных материалах в вашу студию, а также приглашаем на наши действующие объекты.
          </p>
        </div>

        {/* Cooperation Form */}
        <div className="b2b-form-section card">
          <div className="b2b-form-info">
            <h2 className="b2b-form-title">Форма для предложений и запроса образцов</h2>
            <p className="b2b-form-desc">
              Оставьте контакты вашей студии — мы привезем образцы выкрасов или оперативно рассчитаем проект по вашему дизайн-макету.
            </p>
            <div className="b2b-direct-contacts">
              <div><strong>Телефон для партнеров:</strong> <a href={`tel:${siteInfo.phone.replace(/[^\d+]/g, '')}`}>{siteInfo.phone}</a></div>
              <div><strong>Email для ТЗ и макетов:</strong> <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a></div>
            </div>
          </div>

          <div className="b2b-form-wrap">
            {submitted ? (
              <div className="b2b-form-success">
                <div className="cta-success-icon">✓</div>
                <h3>Заявка принята!</h3>
                <p>Менеджер по работе с дизайнерами «Солюшин Принт» свяжется с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="b2b-form">
                <div className="form-group">
                  <label className="form-label">Ваше имя *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Имя и фамилия"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Телефон *</label>
                  <IMaskInput
                    mask="+{7} (000) 000-00-00"
                    value={phone}
                    onAccept={(val) => setPhone(val)}
                    placeholder="+7 (___) ___-__-__"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Название студии / портфолио</label>
                  <input
                    type="text"
                    value={studio}
                    onChange={(e) => setStudio(e.target.value)}
                    placeholder="Название студии или ссылка на сайт/Telegram"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Цель обращения</label>
                  <select
                    value={requestType}
                    onChange={(e) => setRequestType(e.target.value)}
                    className="form-input form-select"
                  >
                    <option value="box">Заказать Box-набор образцов выкрасов</option>
                    <option value="project">Рассчитать стоимость проекта для клиента</option>
                    <option value="partner">Обсудить партнерскую программу</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Комментарий к проекту</label>
                  <textarea
                    rows="2"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Размеры стены, адрес объекта или пожелания..."
                    className="form-input form-textarea"
                  />
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
                    Я подтверждаю согласие на обработку персональных данных и получение информационных сообщений в соответствии с{' '}
                    <Link to="/privacy" target="_blank">Политикой конфиденциальности (152-ФЗ)</Link>
                  </span>
                </label>

                <button type="submit" className="btn btn-primary btn-submit">
                  Отправить заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
