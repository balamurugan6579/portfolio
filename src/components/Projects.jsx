import React from 'react';
import { FolderGit2, Activity, Sprout, Check, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="section" aria-label="Projects">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            Portfolio Work
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Practical software applications solving real-world challenges in clinic operations and agriculture.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="glass-card project-card">
              {/* Visual Banner */}
              <div
                className={`project-visual-banner ${
                  project.id === 'clinic-management' ? 'project-visual-clinic' : 'project-visual-crop'
                }`}
              >
                <div className="project-visual-overlay" />
                <div className="project-visual-icon">
                  {project.id === 'clinic-management' ? (
                    <Activity size={56} style={{ color: '#38bdf8' }} />
                  ) : (
                    <Sprout size={56} style={{ color: '#34d399' }} />
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="project-body">
                <div>
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title" style={{ marginTop: '0.35rem' }}>
                    {project.title}
                  </h3>
                </div>

                <p className="project-desc">
                  {project.description}
                </p>

                {/* Key Features from Resume */}
                <div style={{ marginTop: '0.25rem' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                    Key Capabilities
                  </div>
                  <ul className="project-features-list">
                    {project.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="project-feature-item">
                        <Check size={15} className="project-feature-bullet" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Tags */}
                <div className="project-tech-tags">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="project-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions & Verified Links */}
                <div className="project-actions">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ padding: '0.5rem 1.15rem', fontSize: '0.85rem' }}
                    title={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon size={16} />
                    GitHub Profile
                  </a>

                  <div className="badge badge-cyan" style={{ fontSize: '0.78rem', marginLeft: 'auto' }}>
                    <Layers size={13} />
                    {project.statusBadge}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
