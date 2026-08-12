import React from 'react';
import { Layout, Server, Brain, Wrench, CheckCircle2 } from 'lucide-react';

export default function About() {
  const stackCategories = [
    {
      title: 'Frontend Development',
      icon: Layout,
      description: 'Membangun antarmuka modern, responsif, dan modular.',
      skills: [
        { name: 'React.js', tag: 'v18+' },
        { name: 'Tailwind CSS', tag: 'v3.4' },
        { name: 'React Router', tag: 'v6' },
        { name: 'Vite', tag: 'Build Tool' },
      ],
    },
    {
      title: 'Backend & Database',
      icon: Server,
      description: 'Merancang endpoint RESTful bersih dan arsitektur aman.',
      skills: [
        { name: 'Node.js', tag: 'Runtime' },
        { name: 'Express.js', tag: 'Framework' },
        { name: 'RESTful API', tag: 'Architecture' },
        { name: 'MySQL', tag: 'Relational' },
        { name: 'Firebase', tag: 'NoSQL' },
      ],
    },
    {
      title: 'AI & Data Science',
      icon: Brain,
      description: 'Pengembangan model machine learning & computer vision.',
      skills: [
        { name: 'Python', tag: 'Language' },
        { name: 'MobileNetV2', tag: 'CNN Model' },
        { name: 'TensorFlow/Keras', tag: 'Framework' },
        { name: 'OpenCV', tag: 'Vision' },
        { name: 'Streamlit', tag: 'Web App' },
      ],
    },
    {
      title: 'Tools & Deployment',
      icon: Wrench,
      description: 'Manajemen versi, CI/CD, dan cloud hosting.',
      skills: [
        { name: 'Git & GitHub', tag: 'Version Control' },
        { name: 'Vercel', tag: 'Deployment' },
        { name: 'Streamlit Community Cloud', tag: 'Cloud Hosting' },
      ],
    },
  ];

  return (
    <section id="about" className="py-20 border-b border-[var(--color-surface-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[var(--color-accent)] font-semibold uppercase tracking-wider mb-2">
            <span>// 01. About &amp; Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Tentang Saya &amp; <span className="text-[var(--color-accent)]">Tech Stack Matrix</span>
          </h2>
          <p className="mt-4 text-base text-[var(--color-text-secondary)] leading-relaxed">
            Berfokus pada pengembangan aplikasi web end-to-end yang scalable, terstruktur, dan mudah dipelihara. Mengombinasikan antarmuka yang responsif dengan arsitektur backend yang aman, pengelolaan database (Relational & NoSQL), serta deployment model Machine Learning yang efisien.
          </p>
        </div>

        {/* 4-Column Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackCategories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div 
                key={cat.title}
                className="p-6 rounded-xl border border-[var(--color-surface-border)] bg-[var(--color-surface-card)] transition-all hover:border-[var(--color-accent)] hover:translate-y-[-2px]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="font-bold text-base text-[var(--color-text-primary)]">{cat.title}</h3>
                </div>

                <p className="text-xs text-[var(--color-text-secondary)] mb-4 leading-normal">
                  {cat.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-[var(--color-surface-border)]/60">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 font-medium text-[var(--color-text-primary)]">
                        <CheckCircle2 size={13} className="text-[var(--color-accent)]" />
                        <span>{skill.name}</span>
                      </div>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[var(--color-badge-bg)] text-[var(--color-badge-text)] font-semibold">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
