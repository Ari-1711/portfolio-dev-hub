import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-[var(--color-bg-base)] text-[var(--color-text-secondary)] text-xs border-t border-[var(--color-surface-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left Brand info */}
          <div className="flex items-center gap-2 font-sans">
            <span className="font-bold text-[var(--color-text-primary)]">ARI HERMAWAN</span>
            <span>&copy; {new Date().getFullYear()} Portfolio Dev Hub. Built with React &amp; Express.</span>
          </div>

          {/* Social Quick Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/Ari-1711/portfolio-dev-hub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[var(--color-accent)] transition-colors font-sans"
            >
              GitHub Repository
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-[var(--color-surface-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
              title="Back to Top"
            >
              <ArrowUp size={14} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
