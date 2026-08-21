import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { siteInfo, navigation } from '../data/siteData';
import logoUrl from '../assets/images/logo_solution_print.svg';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  return (
    <header
      className={`header ${scrolled ? 'header--scrolled' : ''}`}
      ref={headerRef}
    >
      <div className="container header__inner">
        <Link to="/" className="header__brand" onClick={() => window.scrollTo(0, 0)} aria-label="Солюшн Принт">
          <img src={logoUrl} alt="Солюшн Принт" className="header__logo-img" />
        </Link>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="header__link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          {/* Mobile-only info inside menu */}
          <div className="header__mobile-extra">
            <a href={`tel:${siteInfo.phone.replace(/[^\d+]/g, '')}`} className="header__mobile-phone">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{siteInfo.phone}</span>
            </a>
            <span className="header__mobile-hours">Ежедневно с 9:00 до 21:00</span>
          </div>
        </nav>

        <div className="header__actions">
          <a
            href={`tel:${siteInfo.phone.replace(/[^\d+]/g, '')}`}
            className="header__phone-pill"
            title="Позвонить нам"
          >
            <svg className="header__phone-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="header__phone-val">{siteInfo.phone}</span>
          </a>

          <a href="#calculator" className="btn btn-primary header__cta" onClick={() => setMenuOpen(false)}>
            Рассчитать смету
          </a>

          <button
            className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
