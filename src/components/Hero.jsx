import React, { useState } from 'react';
import { Download, ArrowRight, Mail, Sparkles, UserCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalDetails } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [imageError, setImageError] = useState(false);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section" aria-label="Introduction & Overview">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Text & CTAs */}
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={14} />
              HELLO, I'M
            </div>

            <h1 className="hero-title">
              {personalDetails.name}
            </h1>

            <div className="hero-role">
              Information Technology Student & <span className="hero-role-highlight">Aspiring Software Developer</span>
            </div>

            <p className="hero-bio">
              {personalDetails.heroBio}
            </p>

            {/* Three Required Functional Actions */}
            <div className="hero-actions">
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={(e) => handleScrollTo(e, 'projects')}
              >
                View My Projects
                <ArrowRight size={17} />
              </a>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={onOpenResume}
              >
                <Download size={17} />
                Download Resume
              </button>

              <a
                href="#contact"
                className="btn btn-outline"
                onClick={(e) => handleScrollTo(e, 'contact')}
              >
                Contact Me
              </a>
            </div>

            {/* Social Icons */}
            <div className="hero-socials" aria-label="Social Profiles">
              <a
                href={personalDetails.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
                title="GitHub - balamurugan6579"
              >
                <GithubIcon size={19} />
              </a>

              <a
                href={personalDetails.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn - Balamurugan M."
              >
                <LinkedinIcon size={19} />
              </a>

              <a
                href={`mailto:${personalDetails.contact.email}`}
                className="social-icon-btn"
                aria-label="Send Email"
                title={`Email: ${personalDetails.contact.email}`}
              >
                <Mail size={19} />
              </a>
            </div>
          </div>

          {/* Right Column: Actual Uploaded Profile Photo */}
          <div className="hero-photo-wrapper">
            <div className="profile-card-container">
              <div className="profile-inner-frame">
                {/* Subtle Ambient Backlight Glow */}
                <div className="profile-ambient-glow" />

                {!imageError ? (
                  <img
                    src="/images/profile.png"
                    alt="Balamurugan M — profile photo"
                    className="profile-image"
                    width="1024"
                    height="496"
                    loading="eager"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'var(--profile-frame-bg)',
                      color: 'var(--text-secondary)',
                      padding: '2rem',
                      textAlign: 'center'
                    }}
                  >
                    <UserCheck size={56} style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }} />
                    <div style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                      {personalDetails.name}
                    </div>
                    <div style={{ fontSize: '0.9rem', marginTop: '0.4rem' }}>
                      Profile Photo
                    </div>
                  </div>
                )}

                {/* Floating Status Pill */}
                <div className="profile-status-pill">
                  <span className="status-dot-pulse" />
                  <span className="status-pill-text">Open to Internships & Fresher Roles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
