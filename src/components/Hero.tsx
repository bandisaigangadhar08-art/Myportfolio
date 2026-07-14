import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, ArrowRight, Database, Workflow, Cpu } from 'lucide-react';
import { portfolioData } from '../data';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const ctx = gsap.context(() => {
        // Animation for heading elements
        gsap.from('.gsap-hero-title', {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
          stagger: 0.2,
        });

        // Animation for info pills
        gsap.from('.gsap-hero-pill', {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          delay: 0.4,
          ease: 'back.out(1.7)',
          stagger: 0.1,
        });

        // Animation for metrics cards
        gsap.from('.gsap-metric-card', {
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: 0.6,
          ease: 'power3.out',
          stagger: 0.1,
        });
      }, containerRef.current);

      return () => ctx.revert();
    }
  }, []);

  const metrics = [
    {
      value: '4+',
      label: 'Years Experience',
      icon: <Workflow className="w-5 h-5 text-blue-400" />,
      description: 'Enterprise workflow design',
    },
    {
      value: '18+',
      label: 'Key Projects',
      icon: <Database className="w-5 h-5 text-blue-400" />,
      description: 'End-to-end applications',
    },
    {
      value: '10+',
      label: 'Enterprise Solutions',
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      description: 'Finance, HR, Sales & R&D',
    },
  ];

  const scrollToSection = (id: string) => {
    const target = document.querySelector(id);
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
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#0a0a0a] bg-grid-pattern"
    >
      {/* Decorative Radial Gradients for cosmic theme */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center">
        {/* Bio & Title */}
        <div className="space-y-8 flex flex-col items-center max-w-3xl">
          <div className="space-y-6 flex flex-col items-center">
            {/* Status Pill */}
            <div className="gsap-hero-pill inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-mono font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Available for Hyderabad & Remote Projects
            </div>

            <h1 className="gsap-hero-title text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 text-glow">{portfolioData.name}</span>
            </h1>

            <h2 className="gsap-hero-title text-xl md:text-2xl lg:text-3xl font-sans font-medium text-zinc-300">
              {portfolioData.title}
            </h2>
          </div>

          <p className="gsap-hero-title text-base md:text-lg text-zinc-400 leading-relaxed font-sans">
            {portfolioData.summary}
          </p>

          {/* Quick Contact Grid */}
          <div className="gsap-hero-title flex flex-wrap justify-center gap-6 text-sm text-zinc-400 font-sans border-t border-zinc-900 pt-8 w-full">
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{portfolioData.location}</span>
            </div>
            <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{portfolioData.email}</span>
            </a>
            <a href={`tel:${portfolioData.phone}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Phone className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{portfolioData.phone}</span>
            </a>
            <a
              href={portfolioData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
              <span>LinkedIn Profile</span>
            </a>
          </div>

          {/* Action CTAs */}
          <div className="gsap-hero-title flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => scrollToSection('#projects')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-sans font-semibold text-base transition-all duration-200 shadow-md shadow-blue-600/10 cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-sans font-semibold text-base transition-colors duration-200 cursor-pointer"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Technical Metrics Card */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="gsap-metric-card glass-card glass-card-hover p-6 rounded-2xl flex flex-col items-center text-center gap-4"
            >
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-center shrink-0">
                {metric.icon}
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-mono font-extrabold text-white tracking-tight">
                  {metric.value}
                </div>
                <div className="text-sm font-sans font-semibold text-zinc-300 mt-1">
                  {metric.label}
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed mt-2">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
