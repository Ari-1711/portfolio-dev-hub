import React from 'react';
import { Mail, ArrowUpRight, User } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from './Icons';
import profileImg from '../assets/profile.jpg';

export default function Hero() {
  const socialLinks = [
    { name: 'GitHub', icon: GithubIcon, url: 'https://github.com/Ari-1711', label: 'github.com/Ari-1711' },
    { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://linkedin.com/in/ari', label: 'LinkedIn Profile' },
    { name: 'WhatsApp Direct', icon: WhatsappIcon, url: 'https://wa.me/6281234567890', label: '+62 812-3456-7890' },
    { name: 'Email', icon: Mail, url: 'mailto:ari.developer@email.com', label: 'ari.developer@email.com' },
    { name: 'Instagram', icon: InstagramIcon, url: 'https://instagram.com/ari', label: '@ari.dev' },
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
              <span>Available for Hire &amp; AI Projects</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-text-primary)] leading-[1.1]">
              Fullstack &amp; <span className="text-[var(--color-accent)]">AI Developer</span>
            </h1>

            {/* 2-Line Bio */}
            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
              Membangun aplikasi web *production-grade* berarsitektur bersih (React &amp; Express) dipadukan dengan model AI terintegrasi (Python &amp; MobileNetV2). Mahasiswa Teknik Informatika Universitas Mercu Buana.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent)]/90 transition-all shadow-sm hover:translate-y-[-2px]"
              >
                <span>View Projects</span>
                <ArrowUpRight size={16} />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg border border-[var(--color-surface-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 transition-all"
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
              <div className="p-6 rounded-2xl border border-[var(--color-surface-border)] bg-[var(--color-surface-card)] shadow-md space-y-6">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-[var(--color-surface-border)] pb-4">
                  <div className="flex items-center gap-2">
                    <User size={18} className="text-[var(--color-accent)]" />
                    <span className="font-sans text-xs font-bold text-[var(--color-text-primary)]">Ari Hermawan</span>
                  </div>
                  <span className="font-sans text-xs text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2.5 py-0.5 rounded-full font-medium">Software Engineer</span>
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
