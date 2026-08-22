import React from 'react';
import { Mail, ArrowUpRight, User, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from './Icons';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  const socialLinks = [
    { name: 'GitHub', icon: GithubIcon, url: 'https://github.com/Ari-1711', label: 'github.com/Ari-1711' },
    { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://www.linkedin.com/in/ari-hermawan-783370315/', label: 'Ari Hermawan' },
    { name: 'WhatsApp Direct', icon: WhatsappIcon, url: 'https://wa.me/6282112634924', label: '+62 821-1263-4924' },
    { name: 'Email', icon: Mail, url: 'mailto:arihermawan006@gmail.com', label: 'arihermawan006@gmail.com' },
    { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/arihermawan_431/', label: '@arihermawan_431' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[var(--color-surface-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Headline, Bio, CTAs, Social Icons */}
          <div className="lg:col-span-7 space-y-6">

            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-badge-bg)] text-[var(--color-badge-text)] text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Seeking Fullstack / AI Internship</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-text-primary)] leading-[1.2] sm:leading-[1.1] text-pretty">
              Hai saya <span className="text-gradient block mt-2 sm:mt-0 sm:inline"> Ari Hermawan</span>
            </h1>

            {/* 2-Line Bio */}
            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
              Mahasiswa Teknik Informatika Mercu Buana yang siap berkontribusi dalam pengembangan aplikasi web modern (React/Node.js) dan integrasi solusi AI/ML berbasis Python.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent)]/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                <span>View Projects</span>
                <ArrowUpRight size={16} />
              </button>

              <a
                href="https://drive.google.com/file/d/1qr-FyOUWgvgL--5x88z9qoqFppab0XIb/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl border-2 border-[var(--color-surface-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-all hover:-translate-y-1"
              >
                <span>View CV</span>
                <FileText size={16} />
              </a>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl border-2 border-[var(--color-surface-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-all hover:-translate-y-1"
              >
                <span>Contact Me</span>
              </button>
            </div>

            {/* 5 Social Connect Icons */}
            <div className="pt-6 border-t border-[var(--color-surface-border)]/60">
              <p className="text-xs font-mono text-[var(--color-text-secondary)] uppercase tracking-wider mb-3">
                Direct Connect Hub
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`${item.name}: ${item.label}`}
                      className="p-2.5 rounded-lg border border-[var(--color-surface-border)] text-[var(--color-text-primary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-all"
                    >
                      <IconComponent size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Profile Avatar Frame & Status Badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">

              {/* Outer Decorative Border Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-[var(--color-surface-border)] pb-4">
                  <div className="flex items-center gap-2">
                    <User size={18} className="text-[var(--color-accent)]" />
                    <span className="font-sans text-xs font-bold text-[var(--color-text-primary)]">Ari Hermawan</span>
                  </div>

                </div>

                {/* Avatar Placeholder / Photo Frame */}
                <div className="relative group">
                  <div className="w-44 h-44 sm:w-52 sm:h-52 mx-auto rounded-full border-4 border-[var(--color-accent)] bg-[var(--color-bg-base)] flex items-center justify-center overflow-hidden transition-all duration-300 shadow-lg shadow-[var(--color-accent)]/20">
                    <img src={profileImg} alt="Ari Hermawan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>

                {/* Tech Snapshot Pills */}
                <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-sans">
                  <div className="p-2 rounded-lg border border-[var(--color-surface-border)] bg-[var(--color-bg-base)]/50">
                    <span className="block text-[var(--color-text-secondary)] text-[11px]">Frontend</span>
                    <span className="font-semibold text-[var(--color-text-primary)]">React + Tailwind</span>
                  </div>
                  <div className="p-2 rounded-lg border border-[var(--color-surface-border)] bg-[var(--color-bg-base)]/50">
                    <span className="block text-[var(--color-text-secondary)] text-[11px]">Backend</span>
                    <span className="font-semibold text-[var(--color-text-primary)]">Node + Express</span>
                  </div>
                  <div className="p-2 rounded-lg border border-[var(--color-surface-border)] bg-[var(--color-bg-base)]/50">
                    <span className="block text-[var(--color-text-secondary)] text-[11px]">AI / ML</span>
                    <span className="font-semibold text-[var(--color-text-primary)]">Python + MobileNet</span>
                  </div>
                  <div className="p-2 rounded-lg border border-[var(--color-surface-border)] bg-[var(--color-bg-base)]/50">
                    <span className="block text-[var(--color-text-secondary)] text-[11px]">Education</span>
                    <span className="font-semibold text-[var(--color-text-primary)]">Mercu Buana Univ.</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
