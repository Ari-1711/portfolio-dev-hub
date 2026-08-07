import React from 'react';
import { BookOpen, Clock, ArrowUpRight, Tag } from 'lucide-react';

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: 'Merancang RESTful API Bersih dengan Express.js & Clean Architecture',
      summary: 'Panduan praktis membangun endpoint API terstruktur dengan validasi input, middleware error handling terpusat, dan format respons standar JSON.',
      date: 'Aug 2026',
      readTime: '5 min read',
      tag: 'Backend & API',
    },
    {
      id: 2,
      title: 'Implementasi Klasifikasi Citra Visi Komputer dengan MobileNetV2 di Python',
      summary: 'Studi kasus penggunaan transfer learning CNN MobileNetV2 untuk mengenali dan memilah jenis sampah organik/anorganik secara efisien.',
      date: 'Jul 2026',
      readTime: '7 min read',
      tag: 'AI / Machine Learning',
    },
    {
      id: 3,
      title: 'Manajemen State Native & Responsivitas Mobile-First di React.js',
      summary: 'Praktik terbaik mengatur state aplikasi tanpa *library* berlebih serta memanfaatkan Tailwind CSS untuk UI responsif presisi.',
      date: 'Jun 2026',
      readTime: '4 min read',
      tag: 'Frontend Engineering',
    },
  ];

  return (
    <section id="blog" className="py-20 border-b border-[var(--color-surface-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[var(--color-accent)] font-semibold uppercase tracking-wider mb-2">
            <span>// 04. Articles &amp; Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Blog &amp; <span className="text-[var(--color-accent)]">Engineering Notes</span>
          </h2>
          <p className="mt-4 text-base text-[var(--color-text-secondary)] leading-relaxed">
            Kumpulan tulisan ringkas seputar arsitektur perangkat lunak, integrasi kecerdasan buatan, dan tips pengkodean.
          </p>
        </div>

        {/* 3-Column Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art) => (
            <article 
              key={art.id}
              className="p-6 rounded-xl border border-[var(--color-surface-border)] bg-[var(--color-surface-card)] flex flex-col justify-between space-y-4 hover:border-[var(--color-accent)] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-[var(--color-badge-bg)] text-[var(--color-badge-text)] font-semibold">
                    {art.tag}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-[var(--color-text-secondary)]">
                    <Clock size={12} />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-2 mb-2">
                  {art.title}
                </h3>

                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed line-clamp-3">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--color-surface-border)]/60 flex items-center justify-between text-xs font-mono">
                <span className="text-[var(--color-text-secondary)]">{art.date}</span>
                <span className="inline-flex items-center gap-1 text-[var(--color-accent)] font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
