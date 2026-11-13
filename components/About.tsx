'use client';

import ScrollReveal from '@/components/ScrollReveal';
import { useState, useEffect, useRef } from 'react';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1500;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const stats = [
    { value: 10, suffix: '+', label: 'Projects Completed' },
    { value: 15, suffix: '+', label: 'Technologies' },
    { value: 4, suffix: '', label: 'Years Learning' },
  ];

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      {/* Noise texture overlay */}
      <div className="noise-bg absolute inset-0" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div>
            <ScrollReveal direction="up">
              <span className="section-label">ABOUT ME</span>
              <h2 className="section-title mb-8">
                Turning Ideas<br />Into Reality
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              <div className="space-y-5 leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
                <p>
                  Fresh graduate dari Teknik Informatika dengan passion yang kuat dalam 
                  pengembangan web dan teknologi. Fokus pada pembuatan solusi digital yang 
                  efisien dan user-friendly.
                </p>
                <p>
                  Selalu antusias untuk belajar teknologi baru dan mencari peluang untuk 
                  menerapkan pengetahuan dalam proyek-proyek yang challenging dan impactful.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal direction="up" delay={300}>
              <div className="grid grid-cols-3 gap-6 mt-12">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center md:text-left">
                    <div
                      className="text-3xl md:text-4xl font-bold mb-1"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div
                      className="text-xs font-mono uppercase tracking-wider"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right column — Info Cards */}
          <div className="space-y-6">
            <ScrollReveal direction="right" delay={100}>
              <div
                className="glass-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'var(--bg-tertiary)' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-primary)' }}>
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1" style={{ color: 'var(--text-primary)' }}>
                      Education
                    </h4>
                    <p style={{ color: 'var(--text-secondary)' }}>S1 Teknik Informatika</p>
                    <p className="text-sm font-mono mt-1" style={{ color: 'var(--text-muted)' }}>
                      GPA: 3.56 | 2022–2026
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div
                className="glass-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'var(--bg-tertiary)' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-primary)' }}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1" style={{ color: 'var(--text-primary)' }}>
                      Location
                    </h4>
                    <p style={{ color: 'var(--text-secondary)' }}>Makassar, Indonesia</p>
                    <p className="text-sm font-mono mt-1" style={{ color: 'var(--text-muted)' }}>
                      Open to remote & on-site
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={300}>
              <div
                className="glass-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'var(--bg-tertiary)' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-primary)' }}>
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1" style={{ color: 'var(--text-primary)' }}>
                      Focus
                    </h4>
                    <p style={{ color: 'var(--text-secondary)' }}>Full-stack Web Development</p>
                    <p className="text-sm font-mono mt-1" style={{ color: 'var(--text-muted)' }}>
                      Modern JavaScript ecosystem
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
