import React from 'react';
import { Terminal, Layout, Server, Database, Sparkles } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Terminal,
      skills: skillsData.programming,
      accent: 'cyan'
    },
    {
      title: 'Frontend Development',
      icon: Layout,
      skills: skillsData.frontend,
      accent: 'blue'
    },
    {
      title: 'Backend Frameworks',
      icon: Server,
      skills: skillsData.backend,
      accent: 'cyan'
    },
    {
      title: 'Databases & Storage',
      icon: Database,
      skills: skillsData.database,
      accent: 'blue'
    }
  ];

  return (
    <section id="skills" className="section" aria-label="Technical Skills">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            Capabilities
          </div>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Core competencies and frameworks verified from coursework, practical projects, and internship training.
          </p>
        </div>

        <div className="skills-categories-grid">
          {skillCategories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <div key={idx} className="glass-card skill-category-card">
                <div className="skill-cat-header">
                  <div className="skill-cat-icon">
                    <IconComponent size={22} />
                  </div>
                  <div>
                    <h3 className="skill-cat-title">{cat.title}</h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {cat.skills.length} verified technologies
                    </span>
                  </div>
                </div>

                <div className="skills-pill-group">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-chip">
                      <span className="skill-chip-dot" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
