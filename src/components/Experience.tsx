import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, Star } from 'lucide-react';
import { portfolioData } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0a0a0a] border-t border-zinc-900 relative overflow-hidden no-print">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-blue-400">
            Professional Path
          </h2>
          <p className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-white">
            Career Progression & Impact
          </p>
          <p className="text-zinc-400 font-sans text-sm md:text-base">
            Over {new Date().getFullYear() - 2023} years of focused experience designing, automating, and maintaining enterprise solutions for high-performance teams.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline center bar (large screens) or side bar (small screens) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800/80 -translate-x-1/2" />

          <div className="space-y-12">
            {portfolioData.experience.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left or Right spacing block (fills layout on desktop) */}
                  <div className="hidden md:block w-1/2 px-8 text-right" />

                  {/* Centered Timeline Dot node */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-zinc-950 border-2 border-blue-500 flex items-center justify-center -translate-x-1/2 z-20">
                    {exp.isCurrent ? (
                      <Star className="w-3 h-3 text-blue-400 fill-blue-400/20 animate-pulse" />
                    ) : (
                      <Briefcase className="w-3 h-3 text-zinc-400" />
                    )}
                  </div>

                  {/* Active content block */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6, delay: idx * 0.15 }}
                      className="glass-card p-6 md:p-8 rounded-2xl border border-zinc-800/80 hover:border-zinc-700 transition-colors space-y-4"
                    >
                      {/* Job Header Info */}
                      <div className="space-y-2">
                        {/* Period & Status badge */}
                        <div className={`flex flex-wrap items-center gap-2 text-xs font-mono text-blue-400 ${
                          isEven ? 'md:justify-end' : 'justify-start'
                        }`}>
                          <span className="flex items-center gap-1.5 font-semibold bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </span>
                          {exp.isCurrent && (
                            <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/25 font-bold uppercase tracking-wider text-[10px]">
                              Active Role
                            </span>
                          )}
                        </div>

                        <h3 className="text-lg md:text-xl font-sans font-extrabold text-white leading-tight">
                          {exp.role}
                        </h3>

                        <div className={`flex flex-wrap items-center gap-3 text-xs text-zinc-400 font-sans ${
                          isEven ? 'md:justify-end' : 'justify-start'
                        }`}>
                          <span className="font-bold text-zinc-200">{exp.company}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Accomplishments list */}
                      <ul className={`space-y-2.5 text-xs md:text-sm text-zinc-400 font-sans leading-relaxed text-left`}>
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
