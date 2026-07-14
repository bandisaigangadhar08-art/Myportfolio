import { ArrowUp, Heart, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-zinc-900 py-12 no-print">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand Credits */}
        <div className="text-center md:text-left space-y-2">
          <p className="text-sm font-sans font-bold text-white tracking-tight">
            {portfolioData.name}
          </p>
          <p className="text-xs text-zinc-500 font-sans">
            © {new Date().getFullYear()} • All rights reserved. Managed with Microsoft Power Platform guidelines.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex items-center gap-4 text-zinc-500 text-xs font-sans">
          <a
            href={portfolioData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors flex items-center gap-1"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <span className="text-zinc-800">•</span>
          <a
            href={`mailto:${portfolioData.email}`}
            className="hover:text-blue-400 transition-colors flex items-center gap-1"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>

        {/* Right Side: Back to Top */}
        <button
          onClick={handleScrollToTop}
          className="p-3 rounded-xl bg-zinc-900 hover:bg-blue-600 hover:text-white border border-zinc-800 text-zinc-400 transition-all cursor-pointer flex items-center justify-center shadow-md hover:shadow-blue-600/10"
          title="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
