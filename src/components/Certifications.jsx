import React from 'react';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="section" aria-label="Certifications">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            Credentials
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Formal technical certifications validating database querying, full-stack programming, and software engineering skills.
          </p>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div className="cert-cards-list">
            {certificationsData.map((cert, idx) => (
              <div key={idx} className="glass-card cert-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div className="skill-cat-icon">
                      <ShieldCheck size={22} />
                    </div>
                    <div>
                      <h3 className="cert-title">{cert.title}</h3>
                      <div className="cert-issuer">Issued by: {cert.issuer}</div>
                    </div>
                  </div>

                  <div className="badge badge-cyan">
                    <CheckCircle2 size={13} />
                    {cert.highlight}
                  </div>
                </div>

                <p className="cert-desc" style={{ marginTop: '0.5rem', lineHeight: 1.6 }}>
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
