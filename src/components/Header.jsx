import { useState, useEffect, useRef } from 'react';
import { siteInfo, navigation } from '../data/siteData';
import LogoIcon from './LogoIcon';
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
        <a href="#" className="header__logo">
          <LogoIcon size={28} color="var(--color-neon-cyan)" />
          <span className="header__logo-text">SOLUTION</span>
        </a>

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
        </nav>

        <div className="header__actions">
          <a href="tel:${siteInfo.phone}" className="header__phone">
            {siteInfo.phone}
          </a>
          <a href="#cta-form" className="btn btn-primary header__cta">
            Заказать расчёт
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
