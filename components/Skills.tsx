'use client';

import ScrollReveal from '@/components/ScrollReveal';
import { useState } from 'react';
import {
  SiJavascript, SiPython, SiPhp, SiCplusplus, SiKotlin,
  SiNextdotjs, SiTailwindcss, SiBootstrap, SiCss,
  SiMongodb, SiFigma, SiCanva, SiLaravel, SiCisco,
  SiGoogle, SiOpenai, SiFirebase, SiXampp, SiLaragon,
  SiClaude, SiGooglegemini, SiSupabase, SiVercel,
  SiHtml5, SiReact, SiMysql, SiPostgresql
} from 'react-icons/si';
import { FaJava, FaCode, FaDesktop, FaServer, FaTools, FaList, FaBrain, FaRobot, FaSpaceShuttle } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import type { IconType } from 'react-icons';


interface Skill {
  name: string;
  icon: IconType;
  color?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'Java', icon: FaJava, color: '#007396' },
        { name: 'PHP', icon: SiPhp, color: '#777BB4' },
        { name: 'C++', icon: SiCplusplus, color: '#00599C' },
        { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
      ],
    },
    {
      title: 'Frontend & Design',
      skills: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'var(--text-primary)' },
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss, color: '#1572B6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
        { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
        { name: 'Canva', icon: SiCanva, color: '#00C4CC' },
      ],
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
        { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
        { name: 'XAMPP', icon: SiXampp, color: '#FB7A24' },
        { name: 'Laragon', icon: SiLaragon, color: '#00A2E8' },
      ],
    },
    {
      title: 'Tools & Networking',
      skills: [
        { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
        { name: 'Cisco Packet Tracer', icon: SiCisco, color: '#1BA0D7' },
        { name: 'Vercel', icon: SiVercel, color: 'var(--text-primary)' },
      ],
    },
    {
      title: 'AI & Assistants',
      skills: [
        { name: 'Gemini.ai', icon: SiGooglegemini, color: '#8E75FF' },
        { name: 'Claude', icon: SiClaude, color: '#D97756' },
        { name: 'ChatGPT', icon: SiOpenai, color: '#10A37F' },
      ],
    },
  ];

  const categories = ['All', ...skillCategories.map((c) => c.title)];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'All': return FaList;
      case 'Languages': return FaCode;
      case 'Frontend & Design': return FaDesktop;
      case 'Backend & Database': return FaServer;
      case 'Tools & Networking': return FaTools;
      case 'AI & Assistants': return FaBrain;
      default: return FaCode;
    }
  };

  const filteredSkills =
    activeCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.title === activeCategory);

  return (
    <section
      id="skills"
      className="py-24 md:py-32"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <span className="section-label">SKILLS & EXPERTISE</span>
          <h2 className="section-title">Tech Stack</h2>
        </ScrollReveal>

        {/* Category Filter Tabs */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => {
              const Icon = getCategoryIcon(cat);
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-2"
                  style={{
                    backgroundColor: activeCategory === cat ? 'var(--text-primary)' : 'transparent',
                    color: activeCategory === cat ? 'var(--bg-primary)' : 'var(--text-muted)',
                    border: activeCategory === cat ? 'none' : '1px solid var(--border-primary)',
                  }}
                >
                  <Icon className="text-xs" />
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="space-y-12">
          {filteredSkills.map((category, catIndex) => (
            <div key={category.title}>
              {activeCategory === 'All' && (
                <ScrollReveal direction="up" delay={catIndex * 100}>
                  <h3
                    className="text-lg font-semibold mb-6 pb-2 border-b"
                    style={{
                      color: 'var(--text-primary)',
                      borderColor: 'var(--border-primary)',
                    }}
                  >
                    {category.title}
                  </h3>
                </ScrollReveal>
              )}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <ScrollReveal
                      key={skill.name}
                      direction="up"
                      delay={(catIndex * 100) + (skillIndex * 60)}
                    >
                      <div
                        className="glass-card p-4 flex flex-col items-center gap-3 cursor-default group"
                      >
                        <Icon
                          className="text-2xl transition-all duration-300 group-hover:scale-125"
                          style={{ color: 'var(--text-muted)' }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = skill.color || 'var(--text-primary)')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                        />
                        <span
                          className="text-sm font-medium text-center"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {skill.name}
                        </span>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
