import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data';

interface HeaderProps {
  onPrintResume: () => void;
}

export default function Header({ onPrintResume }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        isScrolled
          ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-800/50 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#about"
          onClick={(e) => handleNavClick(e, '#about')}
          className="flex flex-col group"
        >
          <span className="font-sans font-bold text-lg md:text-xl tracking-tight text-white group-hover:text-blue-400 transition-colors">
            {portfolioData.name}
          </span>
          <span className="font-mono text-[10px] text-zinc-400 tracking-wider uppercase group-hover:text-blue-400 transition-colors">
            Power Platform Architect
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-sans text-sm font-medium text-zinc-300 hover:text-white transition-colors relative group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-350 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="h-4 w-px bg-zinc-800" />

          {/* Social Links & CTA */}
          <div className="flex items-center gap-4">
            <a
              href={portfolioData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-zinc-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <button
              onClick={onPrintResume}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/15 hover:bg-blue-600 border border-blue-500/30 hover:border-blue-500 text-blue-200 hover:text-white font-sans text-sm font-semibold transition-all duration-200 shadow-sm cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Print CV</span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onPrintResume}
            className="flex items-center justify-center p-2 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-300"
            title="Print Resume"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-zinc-900 bg-[#0a0a0a] px-6 py-4 space-y-4 shadow-lg"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-sans text-base font-medium text-zinc-300 hover:text-white py-2 border-b border-zinc-900 last:border-0"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-zinc-900">
              <a
                href={portfolioData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${portfolioData.email}`}
                className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
