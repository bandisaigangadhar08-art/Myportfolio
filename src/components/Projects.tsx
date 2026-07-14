import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ExternalLink, X, Cpu, CheckCircle2, ChevronRight, Sparkles, Building, Briefcase } from 'lucide-react';
import { portfolioData } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'AI & Automation', 'Finance & ERP', 'Sales & Planning', 'Operations & Admin'];

  const filteredProjects = useMemo(() => {
    return portfolioData.projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Automation':
        return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'Finance & ERP':
        return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'Sales & Planning':
        return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'Operations & Admin':
        return 'text-zinc-300 bg-zinc-800/10 border-zinc-700/20';
      default:
        return 'text-zinc-400 bg-zinc-800/10 border-zinc-700/20';
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] relative overflow-hidden no-print">
      {/* Background visual details */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-blue-400">
            Case Studies
          </h2>
          <p className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-white">
            Enterprise Solutions Portfolio
          </p>
          <p className="text-zinc-400 font-sans text-sm md:text-base">
            Explore {portfolioData.projects.length} real-world applications engineered for Finance, HR, R&D, Operations, and Field Sales at MYK LATICRETE.
          </p>
        </div>

        {/* Search & Dynamic Filter Controls */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between p-4 rounded-2xl border border-zinc-800/60 bg-zinc-950/40 backdrop-blur-md">
          {/* Search box */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-zinc-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by tech (e.g. SQL, SAP, REST, PowerFx)..."
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 focus:border-blue-500 focus:outline-none text-sm text-zinc-300 placeholder-zinc-500 transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold font-sans transition-all duration-200 select-none cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/15'
                      : 'bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="glass-card rounded-2xl flex flex-col justify-between border border-zinc-800/80 hover:border-zinc-700 overflow-hidden group"
              >
                <div className="p-6 space-y-4">
                  {/* Card Header: Category & Impact Accent */}
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider border ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                    {project.impact && (
                      <span className="text-[10px] font-sans font-bold text-blue-400 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-blue-400 fill-blue-400/20" />
                        <span>High Impact</span>
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg font-sans font-extrabold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Brief description */}
                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-sans line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Card Footer: Technologies & CTA button */}
                <div className="px-6 pb-6 pt-2 space-y-4">
                  {/* Mini-capsules of top technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-zinc-900 text-[10px] font-mono text-zinc-400 border border-zinc-800/40">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 rounded bg-zinc-900 text-[10px] font-mono text-zinc-500">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      document.body.style.overflow = 'hidden'; // Lock background scroll
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-blue-600 hover:text-white border border-zinc-800 hover:border-blue-500 text-zinc-300 text-xs font-semibold font-sans transition-all duration-200 cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Result feedback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 glass-card rounded-2xl max-w-xl mx-auto border border-zinc-900">
            <Cpu className="w-10 h-10 text-zinc-600 mx-auto mb-4" />
            <h3 className="font-sans font-bold text-white text-base">No matching projects found</h3>
            <p className="text-xs text-zinc-400 max-w-xs mx-auto mt-1 leading-relaxed">
              We couldn't find any enterprise modules matching your keyword. Try searching for "SQL", "SAP", "REST", "Copilot" or "Power Apps".
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('All');
              }}
              className="mt-4 text-xs font-mono text-blue-400 font-bold hover:underline"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

        {/* Detailed Case-Study modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 no-print">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                  setSelectedProject(null);
                  document.body.style.overflow = ''; // Unlock scroll
                }}
                className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="relative w-full max-w-2xl max-h-[85vh] bg-[#0a0a0a] border border-zinc-800 rounded-3xl overflow-y-auto shadow-2xl flex flex-col"
              >
                {/* Header elements */}
                <div className="p-6 md:p-8 border-b border-zinc-900 flex justify-between items-start sticky top-0 bg-[#0a0a0a]/95 backdrop-blur-sm z-10">
                  <div className="space-y-2.5">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider border ${getCategoryColor(selectedProject.category)}`}>
                      {selectedProject.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-sans font-extrabold text-white tracking-tight leading-tight">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      document.body.style.overflow = ''; // Unlock scroll
                    }}
                    className="p-1.5 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Content body */}
                <div className="p-6 md:p-8 space-y-8 flex-1">
                  {/* Block: Project Scope */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">Business Scope</h4>
                    <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Block: Technical Highlights */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">Architectural Highlights</h4>
                    <ul className="space-y-3">
                      {selectedProject.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-zinc-300 font-sans leading-relaxed">
                          <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Block: Business Outcomes & Impact */}
                  {selectedProject.impact && (
                    <div className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/20 space-y-2">
                      <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-blue-400 fill-blue-400/20" />
                        <span>Business Impact</span>
                      </h4>
                      <p className="text-sm text-blue-300 font-sans font-medium">
                        {selectedProject.impact}
                      </p>
                    </div>
                  )}

                  {/* Block: Technology Specifications Stack */}
                  <div className="space-y-3 pt-6 border-t border-zinc-900">
                    <h4 className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">Technology Specifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer elements */}
                <div className="p-6 border-t border-zinc-900 flex justify-between items-center bg-[#0a0a0a] sticky bottom-0">
                  <div className="flex items-center gap-2 text-xs text-zinc-400 font-sans">
                    <Building className="w-4 h-4 text-zinc-600" />
                    <span>MYK LATICRETE Pvt. Ltd.</span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      document.body.style.overflow = ''; // Unlock scroll
                    }}
                    className="px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-semibold font-sans transition-colors cursor-pointer"
                  >
                    Close Specifications
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
