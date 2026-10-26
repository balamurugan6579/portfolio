import React from 'react';
import { User, GraduationCap, Building2, Code2, Globe2 } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section" aria-label="About Me">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            Background
          </div>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Grounded academic foundation and hands-on full-stack development experience.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Narrative Card */}
          <div className="glass-card about-main-card">
            {personalDetails.aboutBio.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}

            <div style={{ marginTop: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <div className="badge badge-cyan">
                {personalDetails.careerPositioning}
              </div>
              <div className="badge badge-blue">
                Problem Solving & Fast Learner
              </div>
            </div>
          </div>

          {/* Highlights & Verified Metrics Grid */}
          <div className="about-highlights-grid">
            <div className="highlight-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)' }}>
                <GraduationCap size={18} />
                <span className="highlight-title">Degree</span>
              </div>
              <div className="highlight-val">{personalDetails.education.degree}</div>
              <div className="highlight-sub">{personalDetails.education.institution}</div>
            </div>

            <div className="highlight-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)' }}>
                <Building2 size={18} />
                <span className="highlight-title">CGPA & Timeline</span>
              </div>
              <div className="highlight-val">{personalDetails.education.cgpa} CGPA</div>
              <div className="highlight-sub">{personalDetails.education.duration}</div>
            </div>

            <div className="highlight-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)' }}>
                <Code2 size={18} />
                <span className="highlight-title">Internship</span>
              </div>
              <div className="highlight-val">Python Full Stack</div>
              <div className="highlight-sub">IDM Techpark</div>
            </div>

            <div className="highlight-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)' }}>
                <Globe2 size={18} />
                <span className="highlight-title">Languages</span>
              </div>
              <div className="highlight-val">{personalDetails.contact.languages.join(' & ')}</div>
              <div className="highlight-sub">{personalDetails.contact.location}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
