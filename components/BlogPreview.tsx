import ScrollReveal from '@/components/ScrollReveal';

export default function BlogPreview() {
  const articles = [
    {
      title: 'Building Modern Web Apps with Next.js 16',
      excerpt:
        'Exploring the latest features in Next.js 16 and how they improve developer experience...',
      date: '2026',
      readingTime: '5 min read',
      category: 'Web Dev',
    },
    {
      title: 'Clean Code Principles for Junior Developers',
      excerpt:
        'Essential clean code practices that every fresh graduate should know to write maintainable code...',
      date: '2026',
      readingTime: '8 min read',
      category: 'Best Practices',
    },
    {
      title: 'Getting Started with TypeScript in 2026',
      excerpt:
        'A comprehensive guide to TypeScript for developers transitioning from JavaScript...',
      date: '2026',
      readingTime: '6 min read',
      category: 'TypeScript',
    },
  ];

  return (
    <section
      className="py-24 md:py-32"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <span className="section-label">LATEST ARTICLES</span>
          <h2 className="section-title">Blog</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 120}>
              <article
                className="glass-card p-6 flex flex-col h-full cursor-pointer group"
              >
                {/* Category & Reading Time */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-mono px-2 py-1 rounded"
                    style={{
                      backgroundColor: 'var(--bg-tertiary)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {article.category}
                  </span>
                  <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                    {article.readingTime}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold mb-3 group-hover:underline underline-offset-4 transition-all"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  {article.excerpt}
                </p>

                {/* Date */}
                <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--border-primary)' }}>
                  <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                    {article.date}
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={400}>
          <div className="text-center mt-12">
            <span
              className="text-sm font-mono cursor-default"
              style={{ color: 'var(--text-muted)' }}
            >
              More articles coming soon...
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
