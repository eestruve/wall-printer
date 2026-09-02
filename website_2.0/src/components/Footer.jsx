import { Link } from 'react-router-dom';
import { siteInfo, navigation } from '../data/siteData';
import logoUrl from '../assets/images/logo_solution_print_white.svg';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo" onClick={() => window.scrollTo(0, 0)}>
            <img src={logoUrl} alt="Солюшин Принт" className="footer__logo-img" />
          </Link>
          <p className="footer__slogan">
            Инженерная вертикальная УФ-печать на стенах от подразделения <strong>{siteInfo.brand}</strong>. 
            Профессиональная подготовка поверхностей от <strong>{siteInfo.buildingBrand}</strong>.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Навигация</h4>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="footer__link">{item.label}</a>
          ))}
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Сотрудничество</h4>
          <Link to="/designers" className="footer__link">Дизайнерам интерьера</Link>
          <Link to="/architects" className="footer__link">Архитекторам</Link>
          <Link to="/partners" className="footer__link">Партнерская программа</Link>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">База знаний</h4>
          <Link to="/technology/uv-printing" className="footer__link">Технология УФ-печати</Link>
          <Link to="/technology/wall-preparation" className="footer__link">Подготовка стен</Link>
          <Link to="/technology/printer-specs" className="footer__link">Спецификации робота</Link>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Контакты</h4>
          <a href={`tel:${siteInfo.phone.replace(/[^\d+]/g, '')}`} className="footer__link footer__phone-link">{siteInfo.phone}</a>
          <a href={`tel:${siteInfo.phoneSecondary.replace(/[^\d+]/g, '')}`} className="footer__link footer__phone-link">{siteInfo.phoneSecondary}</a>
          <a href={`mailto:${siteInfo.email}`} className="footer__link footer__email-link">{siteInfo.email}</a>
          <span className="footer__address">{siteInfo.address}</span>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {new Date().getFullYear()} {siteInfo.brand}.{' '}
          <Link to="/privacy" className="footer__privacy-link">
            Политика конфиденциальности (152-ФЗ)
          </Link>
        </p>
      </div>
    </footer>
  );
}
