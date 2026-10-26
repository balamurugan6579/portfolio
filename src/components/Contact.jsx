import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, MessageSquare, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalDetails } from '../data/portfolioData';

export default function Contact({ showToast }) {
  const [copiedType, setCopiedType] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    showToast(`Copied ${type}: ${text}`);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(formData.subject || `Message from ${formData.name || 'Portfolio Visitor'}`);
    const mailBody = encodeURIComponent(
      `Hello Balamurugan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${personalDetails.contact.email}?subject=${mailSubject}&body=${mailBody}`;
    showToast('Opening your default email client to send message...');
  };

  return (
    <section id="contact" className="section" aria-label="Contact Section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            Get In Touch
          </div>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Open for software developer internships, fresher roles, technical discussions, and collaborative projects.
          </p>
        </div>

        <div className="contact-grid">
          {/* Verified Contact Details Cards */}
          <div className="contact-info-cards">
            {/* Email Card */}
            <div className="contact-info-card">
              <div className="contact-info-left">
                <div className="contact-icon-box">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="contact-label">Email Address</div>
                  <a
                    href={`mailto:${personalDetails.contact.email}`}
                    className="contact-value"
                    style={{ textDecoration: 'none' }}
                  >
                    {personalDetails.contact.email}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <button
                  type="button"
                  className="social-icon-btn"
                  style={{ width: '2.4rem', height: '2.4rem' }}
                  onClick={() => handleCopy(personalDetails.contact.email, 'Email')}
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedType === 'Email' ? <Check size={16} style={{ color: '#10b981' }} /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="contact-info-card">
              <div className="contact-info-left">
                <div className="contact-icon-box">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="contact-label">Direct Phone / WhatsApp</div>
                  <a
                    href={`tel:${personalDetails.contact.phone}`}
                    className="contact-value"
                    style={{ textDecoration: 'none' }}
                  >
                    {personalDetails.contact.phoneFormatted}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <button
                  type="button"
                  className="social-icon-btn"
                  style={{ width: '2.4rem', height: '2.4rem' }}
                  onClick={() => handleCopy(personalDetails.contact.phone, 'Phone number')}
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedType === 'Phone number' ? <Check size={16} style={{ color: '#10b981' }} /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="contact-info-card">
              <div className="contact-info-left">
                <div className="contact-icon-box">
                  <GithubIcon size={22} />
                </div>
                <div>
                  <div className="contact-label">GitHub Profile</div>
                  <div className="contact-value">github.com/balamurugan6579</div>
                </div>
              </div>

              <a
                href={personalDetails.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                style={{ width: '2.4rem', height: '2.4rem' }}
                title="Visit GitHub profile"
                aria-label="Open GitHub in new tab"
              >
                <ExternalLink size={16} />
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="contact-info-card">
              <div className="contact-info-left">
                <div className="contact-icon-box">
                  <LinkedinIcon size={22} />
                </div>
                <div>
                  <div className="contact-label">LinkedIn Profile</div>
                  <div className="contact-value">linkedin.com/in/balamurugan-m</div>
                </div>
              </div>

              <a
                href={personalDetails.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                style={{ width: '2.4rem', height: '2.4rem' }}
                title="Visit LinkedIn profile"
                aria-label="Open LinkedIn in new tab"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Interactive Honest Contact Form */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MessageSquare size={20} style={{ color: 'var(--accent-cyan)' }} />
              Send a Direct Message
            </h3>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Fill out this form to quickly draft and launch an email directly to <strong>{personalDetails.contact.email}</strong>.
            </p>

            <form onSubmit={handleFormSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. John Doe / Tech Recruiter"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="e.g. recruiter@company.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="e.g. Internship Opportunity / Developer Role"
                  className="form-input"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  required
                  placeholder="Write your message here..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="form-notice">
                Notice: This form operates directly via standard <code>mailto:</code> without third-party email logging, respecting your privacy and sending your note straight to Balamurugan's inbox.
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.25rem' }}>
                <Send size={18} />
                Send Message via Email Client
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
