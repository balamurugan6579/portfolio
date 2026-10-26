import React from 'react';
import { X, FileText, Download, ExternalLink, CheckCircle2 } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="resume-modal-title">
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={22} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div className="skill-cat-icon">
            <FileText size={24} />
          </div>
          <div>
            <h3 id="resume-modal-title" style={{ fontSize: '1.25rem', fontWeight: 800 }}>
              Resume / Curriculum Vitae
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              {personalDetails.name} — B.Tech Information Technology
            </p>
          </div>
        </div>

        <div style={{ background: 'var(--bg-surface-elevated)', borderRadius: 'var(--radius-md)', padding: '1.25rem', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem', color: 'var(--accent-cyan)', fontWeight: 700, fontSize: '0.92rem' }}>
            <CheckCircle2 size={18} />
            Verified Resume File Available
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            The verified ATS resume file for <strong>Balamurugan M.</strong> is ready for direct download. It details his academic coursework at Kumaraguru College of Technology, internship at IDM Techpark, verified technical skills, and academic project work.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
          <a
            href="/resume.pdf"
            download="Balamurugan_M_Resume.pdf"
            className="btn btn-primary"
            style={{ flex: 1 }}
            onClick={onClose}
          >
            <Download size={18} />
            Download PDF
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ flex: 1 }}
          >
            <ExternalLink size={18} />
            Open in New Tab
          </a>
        </div>
      </div>
    </div>
  );
}
