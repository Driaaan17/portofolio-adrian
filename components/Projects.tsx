'use client';

import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';
import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  demoLink: string;
  githubLink: string;
  featured?: boolean;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects: Project[] = [
    {
      slug: 'sibi-learn',
      title: 'SIBI Learn — Web App Pengenalan Alfabet Bahasa Isyarat BISINDO',
      description:
        'Project tugas akhir skripsi saya yang mengembangkan rule-based classification system dengan 21 titik koordinat landmark tangan untuk mengklasifikasikan 26 alfabet secara real-time langsung melalui browser tanpa server eksternal.',
      tags: ['JavaScript', 'MediaPipe', 'HTML', 'CSS', 'Rule-based AI'],
      year: '2025',
      demoLink: '#',
      githubLink: 'https://github.com/Driaaan17',
      featured: true,
    },
    {
      slug: 'cerita-rakyat-bilingual',
      title: 'Cerita Rakyat Bilingual — Platform Edukasi Interaktif',
      description:
        'Project komersial yang dibeli oleh seorang tenaga pendidik. Membangun web application edukasi bilingual (Indonesia–Inggris) menggunakan Next.js (App Router) dan Framer Motion untuk menampilkan koleksi cerita rakyat interaktif.',
      tags: ['Next.js', 'React', 'Framer Motion', 'Supabase', 'Tailwind CSS'],
      year: '2026',
      demoLink: 'https://ceritarakyatbilingual.vercel.app/',
      githubLink: 'https://github.com/Driaaan17',
      featured: true,
    },
  ];

  const allTags = ['All', ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section
      id="projects"
      className="py-24 md:py-32"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <span className="section-label">SELECTED WORKS</span>
          <h2 className="section-title">Projects</h2>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-wrap gap-2 mb-12">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className="px-3 py-1.5 text-xs font-mono rounded-md transition-all duration-300"
                style={{
                  backgroundColor: activeFilter === tag ? 'var(--text-primary)' : 'transparent',
                  color: activeFilter === tag ? 'var(--bg-primary)' : 'var(--text-muted)',
                  border: activeFilter === tag ? 'none' : '1px solid var(--border-primary)',
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="space-y-6">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.slug} direction="up" delay={index * 100}>
              <div
                className="group rounded-xl p-6 md:p-8 transition-all duration-300 border"
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
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Year */}
                  <div className="flex-shrink-0">
                    <span
                      className="text-sm font-mono"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {project.year}
                    </span>
                    {project.featured && (
                      <span
                        className="block text-xs font-mono mt-1 px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: 'var(--bg-tertiary)',
                          color: 'var(--text-muted)',
                        }}
                      >
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-block"
                    >
                      <h3
                        className="text-xl md:text-2xl font-bold mb-3 group-hover:underline underline-offset-4 transition-all"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {project.title}
                      </h3>
                    </Link>
                    <p
                      className="leading-relaxed mb-5 max-w-2xl"
                      style={{ color: 'var(--text-tertiary)' }}
                    >
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2.5 py-1 rounded-md"
                          style={{
                            backgroundColor: 'var(--bg-tertiary)',
                            color: 'var(--text-muted)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200"
                        style={{ color: 'var(--text-secondary)' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-200"
                        style={{ color: 'var(--text-muted)' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                      >
                        <FaGithub />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
