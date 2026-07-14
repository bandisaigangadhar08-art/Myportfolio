import { X, Printer, Download, MapPin, Mail, Phone, Linkedin } from 'lucide-react';
import { portfolioData } from '../data';

interface PrintResumeProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrintResume({ isOpen, onClose }: PrintResumeProps) {
  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-zinc-950/80 backdrop-blur-md no-print">
      {/* Print Preview Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="p-4 md:p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-950/90 backdrop-blur-sm">
          <div className="space-y-1">
            <h3 className="text-base font-sans font-bold text-white">Print-Ready CV Preview</h3>
            <p className="text-xs text-zinc-400">Prints to a clean page layout. Recommended format: PDF.</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-sans text-xs font-bold transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scalable Paper Sheet Container */}
        <div className="flex-1 overflow-y-auto bg-zinc-950 p-6 flex justify-center">
          {/* Simulated A4 Page */}
          <div className="w-full max-w-[210mm] bg-white text-zinc-900 p-8 sm:p-12 shadow-xl rounded-md border border-zinc-200 text-left font-sans text-xs leading-relaxed">
            
            {/* Header: Name & Contact Details */}
            <div className="border-b-2 border-zinc-900 pb-6 text-center space-y-3">
              <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 uppercase">
                {portfolioData.name}
              </h1>
              <p className="text-sm font-semibold text-zinc-600 uppercase tracking-widest">
                {portfolioData.title}
              </p>
              
              {/* Contact Icons Row */}
              <div className="flex flex-wrap items-center justify-center gap-y-1.5 gap-x-4 text-[10px] sm:text-xs text-zinc-600 pt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {portfolioData.location}
                </span>
                <span className="text-zinc-300">|</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" />
                  {portfolioData.phone}
                </span>
                <span className="text-zinc-300">|</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" />
                  {portfolioData.email}
                </span>
                <span className="text-zinc-300">|</span>
                <span className="flex items-center gap-1">
                  <Linkedin className="w-3.5 h-3.5" />
                  {portfolioData.linkedin}
                </span>
              </div>
            </div>

            {/* Section: Professional Summary */}
            <div className="py-5 space-y-2 border-b border-zinc-200">
              <h2 className="text-sm font-extrabold text-zinc-900 uppercase tracking-wider">
                Professional Summary
              </h2>
              <p className="text-zinc-700 leading-relaxed text-justify">
                {portfolioData.summary}
              </p>
            </div>

            {/* Section: Skills */}
            <div className="py-5 space-y-3 border-b border-zinc-200">
              <h2 className="text-sm font-extrabold text-zinc-900 uppercase tracking-wider">
                Technical Expertise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {portfolioData.skills.map((group) => (
                  <div key={group.category} className="space-y-1">
                    <h3 className="font-bold text-zinc-800 text-[11px] uppercase">
                      {group.category}
                    </h3>
                    <p className="text-zinc-600 text-[11px]">
                      {group.skills.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Work Experience */}
            <div className="py-5 space-y-4 border-b border-zinc-200">
              <h2 className="text-sm font-extrabold text-zinc-900 uppercase tracking-wider">
                Work Experience
              </h2>
              <div className="space-y-5">
                {portfolioData.experience.map((exp) => (
                  <div key={exp.id} className="space-y-1.5">
                    <div className="flex justify-between items-baseline font-bold text-zinc-900 text-xs sm:text-sm">
                      <h3>{exp.role}</h3>
                      <span className="text-[10px] sm:text-xs text-zinc-600 font-mono font-medium">{exp.period}</span>
                    </div>
                    <div className="flex justify-between items-baseline text-[11px] text-zinc-600">
                      <span>{exp.company}</span>
                      <span>{exp.location}</span>
                    </div>
                    <ul className="list-disc pl-4 space-y-1 text-zinc-700 text-[11px]">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Key Projects list (Compact summary for printable page limits) */}
            <div className="py-5 space-y-3 border-b border-zinc-200 page-break-before">
              <h2 className="text-sm font-extrabold text-zinc-900 uppercase tracking-wider">
                Key Architectural Projects
              </h2>
              <p className="text-zinc-600 text-[11px] pb-1">
                Completed 18+ custom database integrations, multi-level automations, and R&D systems. Core highlights:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {portfolioData.projects.slice(0, 10).map((project) => (
                  <div key={project.id} className="space-y-0.5">
                    <h4 className="font-bold text-zinc-800 text-[11px]">
                      • {project.title}
                    </h4>
                    <p className="text-zinc-600 text-[10px] pl-2 leading-snug">
                      {project.description.slice(0, 100)}...
                    </p>
                    <div className="text-[9px] text-zinc-400 pl-2 font-mono">
                      Tech: {project.technologies.slice(0, 3).join(', ')}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-zinc-400 italic text-center pt-2">
                * Note: Full architectural summaries for all 18+ projects are hosted interactively on the web portfolio.
              </p>
            </div>

            {/* Section: Education */}
            <div className="py-5 space-y-1.5">
              <h2 className="text-sm font-extrabold text-zinc-900 uppercase tracking-wider">
                Education
              </h2>
              <div className="flex justify-between items-baseline font-bold text-zinc-900 text-xs">
                <h3>{portfolioData.education.degree} in {portfolioData.education.field}</h3>
                <span className="text-[10px] sm:text-xs text-zinc-600 font-mono font-medium">{portfolioData.education.period}</span>
              </div>
              <div className="flex justify-between items-baseline text-[11px] text-zinc-600">
                <span>{portfolioData.education.institution}</span>
                <span>Score: {portfolioData.education.score}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
