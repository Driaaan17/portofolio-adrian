'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'b64f6235-85d4-4daa-a8ca-2ee7101c55bd',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'adriananggarafaturrahman@gmail.com',
      href: 'mailto:adriananggarafaturrahman@gmail.com',
      icon: FaEnvelope,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/adrian-anggara-faturrahman',
      href: 'https://linkedin.com/in/adrian-anggara-faturrahman',
      icon: FaLinkedin,
    },
    {
      label: 'GitHub',
      value: 'github.com/Driaaan17',
      href: 'https://github.com/Driaaan17',
      icon: FaGithub,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <span className="section-label">GET IN TOUCH</span>
          <h2 className="section-title">Let&apos;s Work Together</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <ScrollReveal direction="left" delay={100}>
            <div>
              <p
                className="text-lg leading-relaxed mb-10"
                style={{ color: 'var(--text-tertiary)' }}
              >
                I&apos;m currently looking for new opportunities. Whether you have a
                question or just want to say hi, I&apos;ll try my best to get back
                to you!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 group">
                      <div
                        className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: 'var(--bg-tertiary)' }}
                      >
                        <Icon style={{ color: 'var(--text-muted)' }} />
                      </div>
                      <div>
                        <p className="text-xs font-mono uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-muted)' }}>
                          {info.label}
                        </p>
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="font-medium transition-colors duration-200"
                          style={{ color: 'var(--text-secondary)' }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={200}>
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-6">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-mono mb-2"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border outline-none transition-all duration-200"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-primary)',
                    color: 'var(--text-primary)',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--text-primary)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-primary)')}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-mono mb-2"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border outline-none transition-all duration-200"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-primary)',
                    color: 'var(--text-primary)',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--text-primary)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-primary)')}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-mono mb-2"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border outline-none resize-none transition-all duration-200"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-primary)',
                    color: 'var(--text-primary)',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--text-primary)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-primary)')}
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3.5 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  backgroundColor: status === 'success' ? '#22c55e' : status === 'error' ? '#ef4444' : 'var(--text-primary)',
                  color: 'var(--bg-primary)',
                  opacity: status === 'sending' ? 0.7 : 1,
                }}
              >
                {status === 'idle' && 'Send Message'}
                {status === 'sending' && (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                )}
                {status === 'success' && '✓ Message Sent!'}
                {status === 'error' && 'Failed to send. Try again.'}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
