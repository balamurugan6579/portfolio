import React from 'react';
import { Heart, Activity, Music, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { softSkillsData, personalInterestsData } from '../data/portfolioData';

export default function Interests() {
  const getInterestIcon = (iconName) => {
    switch (iconName) {
      case 'activity':
        return <Activity size={22} />;
      case 'music':
        return <Music size={22} />;
      case 'cpu':
        return <Cpu size={22} />;
      default:
        return <Sparkles size={22} />;
    }
  };

  return (
    <section className="section" aria-label="Soft Skills and Interests">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Heart size={14} />
            Professional Character
          </div>
          <h2 className="section-title">
            Soft Skills & <span className="gradient-text">Interests</span>
          </h2>
          <p className="section-subtitle">
            Interpersonal strengths, teamwork discipline, and personal pursuits that foster focus and continuous growth.
          </p>
        </div>

        <div className="skills-interests-grid">
          {/* Soft Skills Column */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <span className="skill-chip-dot" style={{ width: '8px', height: '8px' }} />
              Key Interpersonal Skills
            </h3>

            <div>
              {softSkillsData.map((item, idx) => (
                <div key={idx} className="soft-skill-row">
                  <CheckCircle2 size={18} className="soft-skill-icon" />
                  <div>
                    <div className="soft-skill-name">{item.name}</div>
                    <div className="soft-skill-desc">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests Column */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <span className="skill-chip-dot" style={{ width: '8px', height: '8px' }} />
              Personal Interests & Passions
            </h3>

            <div>
              {personalInterestsData.map((item, idx) => (
                <div key={idx} className="interest-card">
                  <div className="interest-icon-box">
                    {getInterestIcon(item.icon)}
                  </div>
                  <div>
                    <div className="soft-skill-name">{item.name}</div>
                    <div className="soft-skill-desc">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
