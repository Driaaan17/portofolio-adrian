'use client';

import ScrollReveal from '@/components/ScrollReveal';
import { useState } from 'react';
import { FaAward, FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  type: string;
  description: string;
  technologies: string[];
}

interface CertificationItem {
  title: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId?: string;
}

export default function Experience() {
  const [showAll, setShowAll] = useState(false);

  const experiences: ExperienceItem[] = [
    {
      title: 'Junior Web Developer (VSGA)',
      company: 'Digital Talent Scholarship x BNSP',
      duration: 'Mei 2023',
      type: 'Apprenticeship / Certification',
      description:
        'Selected participant in the Vocational School Graduate Academy (VSGA). Developed, tested, and deployed web applications following industry standards. Successfully passed the competency assessment and achieved a National Certification from BNSP (Badan Nasional Sertifikasi Profesi).',
      technologies: ['PHP', 'MySQL', 'Bootstrap'],
    },
    {
      title: 'IT Support',
      company: 'Kantor Imigrasi Kelas I Khusus TPI Makassar',
      duration: 'March 2025 – April 2025',
      type: 'Internship',
      description:
        'Managed passport application data entry with high accuracy into the immigration system. Controlled and validated official documents through stamping and verification processes, and provided direct front-desk customer service by securely handling the issuance of passports to applicants.',
      technologies: ['Data Entry', 'Document Control', 'Administrative Skills', 'Customer Service'],
    },
    {
      title: 'IT Support & Web Developer Intern',
      company: 'Universitas Muhammadiyah Bone (UNIMBONE)',
      duration: 'Feb 2026',
      type: 'Freelance',
      description:
        'Revamped and maintained the university’s repository website. Enhanced platform security by configuring and migrating server protocols from SSH to SSL. Redesigned the main user interface for a more modern and responsive user experience, and reconfigured the backend email dispatch system to optimize notification delivery.',
      technologies: ['Eprints', 'Web Security (SSL)', 'UI/UX Redesign', 'Email Server Configuration', 'Server Management'],
    },
  ];

  const certifications: CertificationItem[] = [
    {
      title: 'Assistant Web Developer (Digital Talent Academy)',
      issuer: 'Digital Talent Scholarship',
      issued: 'May 2026',
      expires: 'May 2030',
      credentialId: '21211988840-2056',
    },
    {
      title: 'Associate Data Scientist (Digital Talent Academy)',
      issuer: 'Digital Talent Scholarship',
      issued: 'May 2026',
      expires: 'May 2030',
      credentialId: '21211993840-5289',
    },
    {
      title: 'Junior Web Developer (Vocational School Graduate Academy)',
      issuer: 'Digital Talent Scholarship',
      issued: 'May 2024',
      expires: 'May 2027',
      credentialId: '19380681060-21',
    },
    {
      title: 'Keamanan Informasi (Micro Skill)',
      issuer: 'Digital Talent Scholarship',
      issued: 'Apr 2026',
      expires: 'Apr 2029',
      credentialId: '2299734850-26543',
    },
    {
      title: 'Junior Web Developer (Vocational School Graduate Academy)',
      issuer: 'Digital Talent Scholarship',
      issued: 'May 2024',
    },
  ];

  const visibleCertificates = showAll ? certifications : certifications.slice(0, 4);

  return (
    <section
      id="experience"
      className="py-24 md:py-32"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <span className="section-label">EXPERIENCE</span>
          <h2 className="section-title">Where I&apos;ve Worked</h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[5px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px"
            style={{ backgroundColor: 'var(--border-primary)' }}
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <ScrollReveal
                  key={index}
                  direction={isLeft ? 'left' : 'right'}
                  delay={index * 150}
                >
                  <div
                    className={`relative flex flex-col md:flex-row items-start gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full border-2 z-10"
                      style={{
                        borderColor: 'var(--text-primary)',
                        backgroundColor: 'var(--bg-secondary)',
                      }}
                    />

                    {/* Content */}
                    <div
                      className={`ml-8 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'
                        }`}
                    >
                      <div className="glass-card p-6">
                        <div className={`flex items-center gap-2 mb-2 flex-wrap justify-start ${isLeft ? 'md:justify-end' : 'md:justify-start'
                          }`}>
                          <span
                            className="text-xs font-mono px-2 py-1 rounded-full"
                            style={{
                              backgroundColor: 'var(--bg-tertiary)',
                              color: 'var(--text-muted)',
                            }}
                          >
                            {exp.type}
                          </span>
                        </div>
                        <h3
                          className="text-xl font-bold mb-1"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {exp.title}
                        </h3>
                        <p
                          className="font-medium mb-1"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {exp.company}
                        </p>
                        <p
                          className="text-sm font-mono mb-4"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {exp.duration}
                        </p>
                        <p
                          className="text-sm leading-relaxed mb-4"
                          style={{ color: 'var(--text-tertiary)' }}
                        >
                          {exp.description}
                        </p>
                        <div
                          className={`flex flex-wrap gap-2 justify-start ${isLeft ? 'md:justify-end' : 'md:justify-start'
                            }`}
                        >
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs font-mono px-2 py-1 rounded"
                              style={{
                                backgroundColor: 'var(--bg-tertiary)',
                                color: 'var(--text-muted)',
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Spacer for the other side */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Licenses & Certifications Sub-section */}
        <div className="mt-28">
          <ScrollReveal direction="up">
            <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center" style={{ color: 'var(--text-primary)' }}>
              Licenses & Certifications
            </h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {visibleCertificates.map((cert, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 50}>
                <div
                  className="glass-card p-6 flex gap-4 items-start transition-all duration-300 border"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--border-primary)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-secondary)';
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--card-hover)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-primary)';
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--card-bg)';
                  }}
                >
                  <div
                    className="p-3 rounded-lg shrink-0"
                    style={{ backgroundColor: 'var(--bg-tertiary)' }}
                  >
                    <FaAward className="text-2xl" style={{ color: 'var(--text-secondary)' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-base mb-1 truncate" style={{ color: 'var(--text-primary)' }}>
                      {cert.title}
                    </h4>
                    <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>
                      {cert.issuer}
                    </p>
                    <p className="text-xs font-mono mb-2" style={{ color: 'var(--text-muted)' }}>
                      Issued {cert.issued} {cert.expires ? ` · Expires ${cert.expires}` : ''}
                    </p>
                    {cert.credentialId && (
                      <p className="text-xs font-mono px-2 py-0.5 rounded inline-block bg-[var(--bg-primary)] border" style={{ color: 'var(--text-muted)', borderColor: 'var(--border-primary)' }}>
                        ID: {cert.credentialId}
                      </p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {certifications.length > 4 && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setShowAll(!showAll)}
                className="flex items-center gap-2 font-mono text-sm cursor-pointer transition-colors duration-200 hover:underline"
                style={{ color: 'var(--text-secondary)', background: 'none', border: 'none' }}
              >
                <span>{showAll ? 'Lihat Lebih Sedikit' : 'Lihat Semua Sertifikasi'}</span>
                {showAll ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
