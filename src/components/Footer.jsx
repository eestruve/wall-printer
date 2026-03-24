import { Link } from 'react-router-dom';
import { siteInfo, navigation } from '../data/siteData';
import logoUrl from '../assets/images/logo_solution.svg';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo" onClick={() => window.scrollTo(0, 0)}>
            <img src={logoUrl} alt="Солюшн Клаб" className="footer__logo-img" />
          </Link>
          <p className="footer__slogan">
            Роботизированная интерьерная печать нового поколения. Мы объединяем искусство и точные технологии.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Навигация</h4>
          {navigation.map((item) => (
            <Link key={item.href} to={item.href} className="footer__link">{item.label}</Link>
          ))}
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Для партнёров</h4>
          <Link to="/designers" className="footer__link">Дизайнерам</Link>
          <Link to="/architects" className="footer__link">Архитекторам</Link>
          <Link to="/partners" className="footer__link">Партнёрская программа</Link>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">База знаний</h4>
          <Link to="/technology/uv-printing" className="footer__link">Технология UV-печати</Link>
          <Link to="/technology/wall-preparation" className="footer__link">Подготовка стен</Link>
          <Link to="/technology/printer-specs" className="footer__link">Оборудование</Link>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Контакты</h4>
          <a href={`tel:${siteInfo.phone}`} className="footer__link">{siteInfo.phone}</a>
          <a href={`mailto:${siteInfo.email}`} className="footer__link">{siteInfo.email}</a>
          <span className="footer__link footer__address">{siteInfo.address}</span>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {new Date().getFullYear()} {siteInfo.brand}. Все права защищены.{' '}
          <Link to="/privacy" style={{ color: 'var(--color-text-secondary)', textDecoration: 'underline' }}>
            Политика конфиденциальности
          </Link>
        </p>
      </div>
    </footer>
  );
}
