import React from 'react';
import { GraduationCap, Calendar, Award, MapPin, BookOpen } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Education() {
  const edu = personalDetails.education;

  return (
    <section id="education" className="section" aria-label="Education">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            Academics
          </div>
          <h2 className="section-title">
            Education <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            Formal undergraduate engineering degree in Information Technology.
          </p>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div className="glass-card education-card">
            <div className="edu-header">
              <div className="edu-icon-box">
                <GraduationCap size={28} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <div className="badge badge-cyan">{edu.status}</div>
                </div>
                <div className="edu-institution">{edu.institution}</div>
              </div>
            </div>

            <div className="edu-meta-grid">
              <div className="edu-meta-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-cyan)' }}>
                  <Calendar size={15} />
                  <span className="edu-meta-label">Duration</span>
                </div>
                <div className="edu-meta-value">{edu.duration}</div>
              </div>

              <div className="edu-meta-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-cyan)' }}>
                  <Award size={15} />
                  <span className="edu-meta-label">Cumulative GPA</span>
                </div>
                <div className="edu-meta-value">{edu.cgpa} / 10.0</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              <MapPin size={16} />
              <span>{edu.location}</span>
            </div>

            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', marginTop: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                <BookOpen size={16} style={{ color: 'var(--accent-cyan)' }} />
                Core Information Technology Foundations
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Undergraduate coursework covering software engineering principles, object-oriented programming, data structures, relational database management systems, computer networks, and modern web application development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
