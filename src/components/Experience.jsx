import React from 'react';
import { Briefcase, Building2, CheckCircle2, MapPin } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section" aria-label="Internship Experience">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            Work History
          </div>
          <h2 className="section-title">
            Internship <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on software development contribution and practical engineering training.
          </p>
        </div>

        <div className="experience-timeline">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker" />

              <div className="glass-card experience-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company">
                      {exp.company}
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div className="badge badge-cyan">
                      <Building2 size={13} />
                      {exp.type}
                    </div>
                    <div className="badge">
                      <MapPin size={13} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.65rem', letterSpacing: '0.05em' }}>
                    Core Responsibilities & Contributions
                  </div>
                  <ul className="exp-list">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="exp-item">
                        <CheckCircle2 size={16} className="exp-bullet" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Exercised */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                  {exp.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="project-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
