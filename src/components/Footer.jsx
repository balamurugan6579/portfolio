import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalDetails } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const currentYear = CURRENT_YEAR;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          {/* Left Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
              <div className="brand-badge" style={{ width: '2rem', height: '2rem', fontSize: '0.9rem' }}>
                {personalDetails.shortName}
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                {personalDetails.name}
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', maxWidth: '380px' }}>
              {personalDetails.careerPositioning} at Kumaraguru College of Technology.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer Navigation">
            <ul className="footer-nav">
              <li><a href="#home" className="nav-link">Home</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#skills" className="nav-link">Skills</a></li>
              <li><a href="#projects" className="nav-link">Projects</a></li>
              <li><a href="#experience" className="nav-link">Experience</a></li>
              <li><a href="#education" className="nav-link">Education</a></li>
              <li><a href="#certifications" className="nav-link">Certifications</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>

          {/* Socials & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href={personalDetails.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              style={{ width: '2.4rem', height: '2.4rem' }}
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon size={17} />
            </a>

            <a
              href={personalDetails.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              style={{ width: '2.4rem', height: '2.4rem' }}
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon size={17} />
            </a>

            <a
              href={`mailto:${personalDetails.contact.email}`}
              className="social-icon-btn"
              style={{ width: '2.4rem', height: '2.4rem' }}
              aria-label="Email"
              title="Email"
            >
              <Mail size={17} />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="social-icon-btn"
              style={{ width: '2.4rem', height: '2.4rem' }}
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp size={17} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            &copy; {currentYear} {personalDetails.name}. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>Built with React & Vite</span>
            <span>&bull;</span>
            <span>Crafted with precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
