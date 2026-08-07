import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Default to dark mode as per DESIGN.md
    document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Beranda' },
    { id: 'about', label: 'Tentang Saya' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'experience', label: 'Pendidikan & Pengalaman' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Kontak' },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-base)]/90 backdrop-blur-md border-b border-[var(--color-surface-border)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Ultra-Minimalist Typography Branding */}
          <div className="flex items-center gap-3">
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
              className="text-lg font-bold font-sans tracking-wide text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
            >
              ARI HERMAWAN 
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 text-sm font-medium transition-colors rounded-md ${
                  activeSection === item.id
                    ? 'text-[var(--color-accent)] font-semibold bg-[var(--color-accent)]/10'
                    : 'text-[var(--color-text-primary)]/80 hover:text-[var(--color-accent)]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg border border-[var(--color-surface-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] transition-colors"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent)]/90 transition-all shadow-sm hover:translate-y-[-1px]"
            >
              <span>Contact Me</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="touch-target p-2 rounded-lg border border-[var(--color-surface-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface-border)]/50 transition-colors"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="touch-target p-2 rounded-lg border border-[var(--color-surface-border)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface-border)]/50 transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-drawer px-4 pt-2 pb-4 space-y-2 animate-in slide-in-from-top-4 fade-in duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-3 py-2 text-base font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-accent)]/10 hover:text-[var(--color-accent)] rounded-md"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-[var(--color-accent)] text-white"
          >
            <span>Contact Me</span>
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </header>
  );
}
