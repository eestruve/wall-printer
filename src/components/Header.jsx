import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { siteInfo, navigation } from '../data/siteData';
import logoUrl from '../assets/images/logo_solution.svg';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // BUG-009 fix: close menu on outside click
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
        <Link to="/" className="header__logo" onClick={() => window.scrollTo(0, 0)}>
          <img src={logoUrl} alt="Солюшн Клаб" className="header__logo-img" />
        </Link>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="header__link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header__actions">
          <a href={`tel:${siteInfo.phone}`} className="header__phone">
            {siteInfo.phone}
          </a>
          <a href="#cta-form" className="btn btn-primary header__cta" onClick={() => setMenuOpen(false)}>
            Заказать расчет
          </a>
        </div>

        <button
          className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
