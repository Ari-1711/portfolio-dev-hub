import React from 'react';
import { ExternalLink, Cpu, Sparkles, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Portfolio() {
  const projects = [
    {
      id: 'smart-waste',
      featured: true,
      title: 'Smart Waste Management System',
      category: 'AI / Fullstack Deep Learning App',
      description: 'Sistem klasifikasi dan pemilahan sampah otomatis berbasis Vision AI. Menggunakan arsitektur CNN MobileNetV2 yang dihubungkan ke REST API Node.js/Express dan disajikan melalui Dashboard React responsif.',
      problem: 'Proses pemilahan jenis sampah organik/anorganik secara manual membutuhkan waktu lama dan rentan kesalahan manusia.',
      solution: 'Model AI MobileNetV2 mengklasifikasikan citra sampah dengan akurasi tinggi dan mengabarkan status tampungan via API backend secara real-time.',
      tags: ['React.js', 'Node.js', 'Express.js', 'Python', 'MobileNetV2', 'Tailwind CSS'],
      demoUrl: '#',
      githubUrl: 'https://github.com/Ari-1711/portfolio-dev-hub',
    },
    {
      id: 'portfolio-dev-hub',
      featured: false,
      title: 'Portfolio Dev Hub & REST Backend',
      category: 'Fullstack Web Application',
      description: 'Portofolio interaktif berbasis React.js (Vite) dan Tailwind CSS berarsitektur Clean Soft Minimalist. Dilengkapi backend Express.js untuk menyajikan data portofolio dan menangani pesan masuk.',
      tags: ['React.js', 'Node.js', 'Express', 'Tailwind CSS', 'Vercel'],
      demoUrl: '#',
      githubUrl: 'https://github.com/Ari-1711/portfolio-dev-hub',
    },
    {
      id: 'rest-api-service',
      featured: false,
      title: 'Centralized RESTful API Service',
      category: 'Backend Architecture',
      description: 'Service API tersentralisasi dengan Express.js yang menangani validasi input, *middleware error handling* terpusat, dan struktur respons standar JSON `{ success, data, message }`.',
      tags: ['Node.js', 'Express.js', 'REST API', 'JSON Protocol'],
      demoUrl: '#',
      githubUrl: 'https://github.com/Ari-1711/portfolio-dev-hub',
    },
  ];

  return (
    <section id="portfolio" className="py-20 border-b border-[var(--color-surface-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[var(--color-accent)] font-semibold uppercase tracking-wider mb-2">
            <span>// 02. Featured Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Portfolio <span className="text-[var(--color-accent)]">Showcase</span>
          </h2>
          <p className="mt-4 text-base text-[var(--color-text-secondary)] leading-relaxed">
            Daftar proyek nyata dan proof of concept yang menunjukkan penerapan arsitektur full-stack, integrasi model AI, dan standar rekayasa perangkat lunak.
          </p>
        </div>

        {/* Featured Project Showcase Card (Smart Waste Management System) */}
        {projects.filter(p => p.featured).map((project) => (
          <div 
            key={project.id}
            className="mb-12 p-6 sm:p-8 rounded-2xl border-2 border-[var(--color-accent)] bg-[var(--color-surface-card)] shadow-lg relative overflow-hidden"
          >
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[var(--color-surface-border)]">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-[var(--color-accent)]" />
                <span className="font-mono text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider">
                  Featured AI Project
                </span>
              </div>
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-[var(--color-badge-bg)] text-[var(--color-badge-text)] font-semibold">
                {project.category}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text-primary)]">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
                  {project.description}
                </p>

                {/* Problem vs Solution Split */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3 rounded-lg border border-amber-500/30 bg-amber-500/5 text-[var(--color-text-primary)]">
                    <span className="block font-bold text-amber-500 mb-1">Masalah:</span>
                    <span>{project.problem}</span>
                  </div>
                  <div className="p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/5 text-[var(--color-text-primary)]">
                    <span className="block font-bold text-emerald-500 mb-1">Solusi AI:</span>
                    <span>{project.solution}</span>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="pt-2">
                  <span className="block text-xs font-mono text-[var(--color-text-secondary)] mb-2">Technologies Used:</span>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="font-mono text-xs px-2.5 py-1 rounded-md border border-[var(--color-surface-border)] bg-[var(--color-bg-base)] text-[var(--color-text-primary)] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Action Links & Graphic Card */}
              <div className="lg:col-span-5 flex flex-col h-full justify-between p-6 rounded-xl border border-[var(--color-surface-border)] bg-[var(--color-bg-base)]/50 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Cpu size={20} className="text-[var(--color-accent)]" />
                    <span className="font-mono text-xs font-bold text-[var(--color-text-primary)]">AI Model Integration</span>
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-normal">
                    Model MobileNetV2 di-train untuk mendeteksi jenis sampah secara efisien dan hemat memori pada perangkat edge / web server.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[var(--color-surface-border)]">
                  <a
                    href={project.demoUrl}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent)]/90 transition-all text-center"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={14} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg border border-[var(--color-surface-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-all text-center"
                  >
                    <GithubIcon size={14} />
                    <span>GitHub Repo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project) => (
            <div 
              key={project.id}
              className="p-6 rounded-xl border border-[var(--color-surface-border)] bg-[var(--color-surface-card)] flex flex-col justify-between space-y-4 hover:border-[var(--color-accent)] transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs text-[var(--color-accent)] font-semibold">
                    {project.category}
                  </span>
                  <FolderGit2 size={16} className="text-[var(--color-text-secondary)]" />
                </div>

                <h4 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
                  {project.title}
                </h4>

                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[var(--color-surface-border)]/60">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="font-mono text-[11px] px-2 py-0.5 rounded bg-[var(--color-badge-bg)] text-[var(--color-badge-text)] font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-1 text-xs font-semibold">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    <GithubIcon size={14} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
