import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { personalDetails } from '../data/portfolioData';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const sectionId = item.href.substring(1);
        const sectionEl = document.getElementById(sectionId);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          const height = sectionEl.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
    }
  };

  return (
    <>
      <header className="navbar" role="banner">
        <div className="container navbar-container">
          {/* Brand Logo */}
          <a
            href="#home"
            className="nav-brand"
            onClick={(e) => handleNavClick(e, '#home')}
            aria-label="Balamurugan M. Portfolio Home"
          >
            <div className="brand-badge">
              {personalDetails.shortName}
            </div>
            <span className="brand-name">
              Balamurugan<span className="brand-dot">.</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="nav-links" aria-label="Primary Navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Navbar Actions */}
          <div className="nav-actions">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            <a
              href="#contact"
              className="btn btn-primary nav-cta-desktop"
              style={{ padding: '0.55rem 1.25rem', fontSize: '0.88rem' }}
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Get In Touch
              <ArrowUpRight size={16} />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              type="button"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-nav-links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`mobile-nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              <span>{item.label}</span>
              <ArrowUpRight size={18} style={{ opacity: 0.5 }} />
            </a>
          ))}
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Get In Touch
          </a>
          <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            {personalDetails.email}
          </p>
        </div>
      </div>
    </>
  );
}
