import React from 'react';
import { GraduationCap, Award, Code2, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const timelineItems = [
    {
      id: 1,
      type: 'education',
      title: 'Teknik Informatika (S1)',
      institution: 'Universitas Mercu Buana',
      period: '2022 - Sekarang',
      location: 'Jakarta, Indonesia',
      description: 'Studi berfokus pada Rekayasa Perangkat Lunak, Struktur Data & Algoritma, Basis Data, dan Inteligensi Buatan (AI/ML). Active developer dalam proyek sistem pemilahan sampah cerdas berbasis Vision AI.',
      highlights: [
        'IPK & Performa Akademis Tinggi',
        'Fokus Riset: Machine Learning & Computer Vision (MobileNetV2)',
        'Pengembangan Aplikasi Fullstack Web & REST API',
      ],
      icon: GraduationCap,
    },
    {
      id: 2,
      type: 'certification',
      title: 'Fullstack & AI Engineering Program',
      institution: 'Intensive Developer Bootcamp / Certification',
      period: '2023 - 2024',
      location: 'Online / Remote',
      description: 'Program pelatihan intensif pengembangan aplikasi web berbasis React.js (Vite), arsitektur REST API dengan Express.js, manajemen state, serta deployment terintegrasi di Vercel.',
      highlights: [
        'Mastery React.js & Tailwind CSS Responsive Design',
        'Penerapan Clean Architecture & Input Validation di Express.js',
        'Sistem Kontrol Versi Git & Workflow Agentic AI',
      ],
      icon: Award,
    },
    {
      id: 3,
      type: 'project',
      title: 'Independent Fullstack & AI Projects',
      institution: 'Portfolio Dev Hub & Open Source',
      period: '2024 - Sekarang',
      location: 'Self-Directed',
      description: 'Mengembangkan berbagai repositori publik di GitHub untuk mempraktikkan *Senior Engineering Standards*, pola respons standar JSON, dan integrasi model AI Python.',
      highlights: [
        'Smart Waste Management System (Vision AI)',
        'Centralized Express REST API Service',
        'Portfolio Dev Hub dengan Antigravity & Ruleset Sistem',
      ],
      icon: Code2,
    },
  ];

  return (
    <section id="experience" className="py-20 border-b border-[var(--color-surface-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[var(--color-accent)] font-semibold uppercase tracking-wider mb-2">
            <span>// 03. Education &amp; Milestone</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Pendidikan &amp; <span className="text-[var(--color-accent)]">Pengalaman</span>
          </h2>
          <p className="mt-4 text-base text-[var(--color-text-secondary)] leading-relaxed">
            Perjalanan akademis dan rekam jejak pengembangan keahlian di bidang rekayasa perangkat lunak dan kecerdasan buatan.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-[var(--color-accent)]/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {timelineItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="relative group">
                
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-0 p-2 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-surface-card)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                  <IconComponent size={16} />
                </div>

                {/* Content Card */}
                <div className="p-6 sm:p-8 rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-card)] space-y-4 hover:border-[var(--color-accent)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <span className="font-mono text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider block mb-1">
                        {item.type === 'education' ? 'Pendidikan Utama' : item.type === 'certification' ? 'Sertifikasi & Program' : 'Proyek & Praktik'}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)]">
                        {item.title}
                      </h3>
                      <h4 className="text-sm font-semibold text-[var(--color-text-secondary)]">
                        {item.institution}
                      </h4>
                    </div>

                    <div className="flex flex-col items-end text-xs font-mono text-[var(--color-text-secondary)] space-y-1">
                      <div className="flex items-center gap-1 px-2.5 py-1 rounded bg-[var(--color-badge-bg)] text-[var(--color-badge-text)] font-semibold">
                        <Calendar size={12} />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1 pt-0.5">
                        <MapPin size={12} />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2 border-t border-[var(--color-surface-border)]/60">
                    <span className="block text-xs font-mono text-[var(--color-text-secondary)] mb-2 font-semibold">Highlight &amp; Pencapaian:</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-1.5 p-2 rounded border border-[var(--color-surface-border)]/60 bg-[var(--color-bg-base)]/50 text-[var(--color-text-primary)] font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
