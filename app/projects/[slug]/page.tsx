import Link from 'next/link';
import type { Metadata } from 'next';

import { projects } from '@/lib/projects';

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
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: 'article',
      title: project.title,
      description: project.description,
      url: `/projects/${project.slug}`,
    },
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
        {(project.demoLink || project.githubLink) && (
          <div className="flex gap-4 mb-16">
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                Live Demo →
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
                Source Code
              </a>
            )}
          </div>
        )}

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
