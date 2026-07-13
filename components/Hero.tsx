'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const typingDone = useRef(false);

  useEffect(() => {
    const hour = new Date().getHours();
    let greeting = 'Hello World, I\'m';
    if (hour < 12) greeting = 'Good Morning, I\'m';
    else if (hour < 15) greeting = 'Good Afternoon, I\'m';
    else if (hour < 18) greeting = 'Good Evening, I\'m';
    else greeting = 'Good Night, I\'m';

    if (typingDone.current) return;
    typingDone.current = true;

    let i = 0;
    const timer = setInterval(() => {
      if (i < greeting.length) {
        setDisplayText(greeting.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        // Blink cursor a few times then stop
        setTimeout(() => setShowCursor(false), 2000);
      }
    }, 60);

    return () => clearInterval(timer);
  }, []);

  // Cursor blink
  const [cursorVisible, setCursorVisible] = useState(true);
  useEffect(() => {
    if (!showCursor) { setCursorVisible(false); return; }
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, [showCursor]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Subtle gradient orbs in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-[0.04]"
          style={{
            background: 'radial-gradient(circle, var(--text-primary) 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full blur-3xl opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle, var(--text-primary) 0%, transparent 70%)',
            animation: 'float 10s ease-in-out infinite 2s',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <div>
            <ScrollReveal direction="up" delay={100}>
              <div className="mb-6">
                <span className="font-mono text-sm" style={{ color: 'var(--text-muted)' }}>
                  {displayText}
                  {showCursor && (
                    <span
                      className="inline-block ml-0.5 w-0.5 h-4 align-text-bottom"
                      style={{
                        backgroundColor: 'var(--text-muted)',
                        opacity: cursorVisible ? 1 : 0,
                      }}
                    />
                  )}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1]"
                style={{ color: 'var(--text-primary)' }}
              >
                Adrian Anggara Faturrahman
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <h2
                className="text-xl md:text-2xl mb-4 font-light"
                style={{ color: 'var(--text-tertiary)' }}
              >
                Fresh Graduate Teknik Informatika
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              {/* Status Badge */}
              <div className="flex items-center gap-2 mb-8">
                <span
                  className="relative flex h-2.5 w-2.5"
                >
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ backgroundColor: '#22c55e' }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-2.5 w-2.5"
                    style={{ backgroundColor: '#22c55e' }}
                  />
                </span>
                <span className="text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
                  Available for hire
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={500}>
              <p
                className="text-base md:text-lg mb-10 leading-relaxed max-w-lg"
                style={{ color: 'var(--text-tertiary)' }}
              >
                Passionate about building exceptional digital experiences.
                Specialized in web development with modern technologies.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={600}>
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="#projects" className="btn-primary">
                  View My Work
                </a>
                <a href="/CV_Adrian_Anggara_Frontend_WebDeveloper.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2">
                  <span>Download CV</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                </a>
                <a href="#contact" className="btn-outline">
                  Get In Touch
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={700}>
              <div className="flex gap-5 text-xl">
                <a
                  href="https://github.com/Driaaan17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-125 hover:-translate-y-0.5"
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#6e5494')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/adrian-anggara-faturrahman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-125 hover:-translate-y-0.5"
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#0A66C2')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:adriananggarafaturrahman@gmail.com"
                  className="transition-all duration-300 hover:scale-125 hover:-translate-y-0.5"
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#EA4335')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right - Profile Image */}
          <ScrollReveal direction="scale" delay={400}>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem]">
                {/* Outer glow ring */}
                <div
                  className="absolute -inset-3 rounded-full opacity-20 blur-xl"
                  style={{
                    background: 'radial-gradient(circle, var(--text-primary) 0%, transparent 70%)',
                  }}
                />
                {/* Profile image container */}
                <div
                  className="relative w-full h-full rounded-full overflow-hidden border-2"
                  style={{ borderColor: 'var(--border-secondary)' }}
                >
                  <Image
                    src="/profile.png"
                    alt="Profile photo"
                    fill
                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 352px"
                    className="object-cover"
                    preload
                  />
                </div>
                {/* Decorative border */}
                <div
                  className="absolute -inset-6 border rounded-full -z-10"
                  style={{ borderColor: 'var(--border-primary)', opacity: 0.5 }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
