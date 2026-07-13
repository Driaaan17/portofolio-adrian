import Link from 'next/link';
import type { Metadata } from 'next';

interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  year: string;
  demoLink: string;
  githubLink: string;
  challenges: string;
  learnings: string;
}

const projects: Project[] = [
  {
    slug: 'sibi-learn',
    title: 'SIBI Learn — Web App Pengenalan Alfabet Bahasa Isyarat BISINDO',
    description:
      'Project tugas akhir skripsi S1 berupa Web App Pengenalan Alfabet Bahasa Isyarat BISINDO dengan real-time gesture recognition.',
    longDescription:
      'Merupakan proyek tugas akhir skripsi S1 saya untuk membangun aplikasi web edukasi pengenalan alfabet Bahasa Isyarat Indonesia (BISINDO) yang berjalan sepenuhnya secara client-side. Aplikasi ini menggunakan MediaPipe Hands untuk menangkap landmark tangan secara real-time dan mengklasifikasikan 26 alfabet menggunakan algoritma klasifikasi berbasis aturan (rule-based).',
    tags: ['JavaScript', 'MediaPipe', 'HTML', 'CSS', 'Rule-based AI'],
    year: '2025',
    demoLink: '#',
    githubLink: 'https://github.com/Driaaan17',
    challenges:
      'Mengembangkan rule-based classification system menggunakan 21 titik koordinat landmark tangan agar dapat mendeteksi dan membedakan 26 variasi alfabet BISINDO secara presisi dan cepat langsung di sisi client (browser) tanpa mengandalkan server eksternal.',
    learnings:
      'Memahami implementasi computer vision real-time menggunakan MediaPipe, pengolahan koordinat spasial tangan, serta perancangan logika klasifikasi berbasis aturan (rule-based) yang efisien untuk web.',
  },
  {
    slug: 'cerita-rakyat-bilingual',
    title: 'Cerita Rakyat Bilingual — Platform Edukasi Interaktif',
    description:
      'Project platform edukasi cerita rakyat dua bahasa (Indonesia–Inggris) yang dibeli oleh seorang tenaga pendidik.',
    longDescription:
      'Platform edukasi interaktif berbasis web untuk menyajikan koleksi cerita rakyat dalam dua bahasa (Indonesia dan Inggris). Proyek ini merupakan project komersial yang dipesan dan dibeli oleh seorang tenaga pendidik untuk keperluan pembelajaran interaktif. Aplikasi ini dirancang dengan Next.js App Router untuk performa rendering optimal serta integrasi database Supabase untuk pengelolaan data konten cerita.',
    tags: ['Next.js', 'React', 'Framer Motion', 'Supabase', 'Tailwind CSS'],
    year: '2026',
    demoLink: 'https://ceritarakyatbilingual.vercel.app/',
    githubLink: 'https://github.com/Driaaan17',
    challenges:
      'Menerapkan animasi UI/UX yang interaktif dan dinamis menggunakan Framer Motion pada konten cerita rakyat tanpa mengorbankan performa kecepatan load halaman, serta merancang struktur bilingual yang mudah diakses.',
    learnings:
      'Menguasai optimasi rendering pada Next.js App Router, integrasi backend-as-a-service dengan Supabase, dan implementasi teknik animasi transisi tingkat lanjut dengan Framer Motion.',
  },
];

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return { title: 'Project Not Found' };
  }
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div
        className="min-h-screen flex items-center justify-center pt-16"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Project Not Found
          </h1>
          <Link href="/#projects" className="btn-primary inline-block">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  // Find related projects (same tags)
  const related = projects
    .filter(
      (p) =>
        p.slug !== project.slug &&
        p.tags.some((t) => project.tags.includes(t))
    )
    .slice(0, 2);

  return (
    <main
      className="min-h-screen pt-24 pb-16"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-mono mb-8 transition-colors duration-200"
          style={{ color: 'var(--text-muted)' }}
        >
          ← Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
              {project.year}
            </span>
            <span style={{ color: 'var(--text-muted)' }}>·</span>
            <div className="flex gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2 py-1 rounded"
                  style={{
                    backgroundColor: 'var(--bg-tertiary)',
                    color: 'var(--text-muted)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <h1
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            {project.title}
          </h1>

          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
            {project.longDescription}
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-4 mb-16">
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
            Live Demo →
          </a>
          <a href={project.githubLink} className="btn-outline text-sm">
            Source Code
          </a>
        </div>

        {/* Challenges & Learnings */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div
            className="glass-card p-6"
          >
            <h3
              className="text-lg font-bold mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              🎯 Challenges
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
              {project.challenges}
            </p>
          </div>
          <div
            className="glass-card p-6"
          >
            <h3
              className="text-lg font-bold mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              💡 Learnings
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
              {project.learnings}
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h3
            className="text-lg font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-lg text-sm font-medium"
                style={{
                  backgroundColor: 'var(--bg-tertiary)',
                  color: 'var(--text-secondary)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Projects */}
        {related.length > 0 && (
          <div className="border-t pt-12" style={{ borderColor: 'var(--border-primary)' }}>
            <h3
              className="text-lg font-bold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Related Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/projects/${rel.slug}`}
                  className="glass-card p-6 block group"
                >
                  <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                    {rel.year}
                  </span>
                  <h4
                    className="text-lg font-bold mt-2 group-hover:underline underline-offset-4"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {rel.title}
                  </h4>
                  <p className="text-sm mt-2 line-clamp-2" style={{ color: 'var(--text-tertiary)' }}>
                    {rel.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
