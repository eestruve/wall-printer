import { siteInfo, navigation } from '../data/siteData';
import LogoIcon from './LogoIcon';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#" className="footer__logo">
            <LogoIcon size={24} color="var(--color-neon-cyan)" />
            <span className="footer__logo-text">SOLUTION</span>
          </a>
          <p className="footer__slogan">
            Роботизированная интерьерная печать нового поколения. Мы объединяем искусство и точные технологии.
          </p>
          <div className="footer__social">
            <a href={siteInfo.telegram} className="footer__social-link" aria-label="Telegram">💬</a>
            <a href={siteInfo.whatsapp} className="footer__social-link" aria-label="WhatsApp">📱</a>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Навигация</h4>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="footer__link">{item.label}</a>
          ))}
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Для партнёров</h4>
          <a href="#" className="footer__link">Дизайнерам</a>
          <a href="#" className="footer__link">Архитекторам</a>
          <a href="#" className="footer__link">Партнёрская программа</a>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Контакты</h4>
          <a href={`tel:${siteInfo.phone}`} className="footer__link">{siteInfo.phone}</a>
          <a href={`mailto:${siteInfo.email}`} className="footer__link">{siteInfo.email}</a>
          <span className="footer__link footer__address">{siteInfo.address}</span>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} {siteInfo.brand}. Все права защищены.</p>
      </div>
    </footer>
  );
}
