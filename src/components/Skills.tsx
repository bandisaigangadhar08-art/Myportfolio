import { useState } from 'react';
import { motion } from 'motion/react';
import { Code, Layers, Share2, ShieldCheck, LucideIcon } from 'lucide-react';
import { portfolioData } from '../data';

// Definition of skill integration pairs to create an interactive "relation graph"
const skillRelationships: Record<string, string[]> = {
  "SharePoint Online (Lists & Libraries)": ["Power Apps (Canvas & Model-Driven)", "Power Automate (Cloud & Desktop)", "Copilot Studio (AI Agents)"],
  "Power Apps (Canvas & Model-Driven)": ["SharePoint Online (Lists & Libraries)", "Power Automate (Cloud & Desktop)", "Power BI (Dashboards & Dax)", "Dataverse & SQL Server", "PowerFx"],
  "Power Automate (Cloud & Desktop)": ["Power Apps (Canvas & Model-Driven)", "SharePoint Online (Lists & Libraries)", "Copilot Studio (AI Agents)", "REST APIs & Webhooks", "Microsoft Graph API"],
  "Power BI (Dashboards & Dax)": ["Power Apps (Canvas & Model-Driven)", "Dataverse & SQL Server", "SQL", "Excel Analytics Integration"],
  "Copilot Studio (AI Agents)": ["Power Automate (Cloud & Desktop)", "SharePoint Online (Lists & Libraries)", "REST APIs & Webhooks", "AI Prompts"],
  "Dataverse & SQL Server": ["Power Apps (Canvas & Model-Driven)", "Power BI (Dashboards & Dax)", "SQL", "Salesforce Integration"],
  "PowerFx": ["Power Apps (Canvas & Model-Driven)", "SharePoint Online (Lists & Libraries)"],
  "Python": ["REST APIs & Webhooks", "SQL", "AI Prompts"],
  "REST APIs & Webhooks": ["Power Automate (Cloud & Desktop)", "Copilot Studio (AI Agents)", "Freshservice ITSM API", "Salesforce Integration", "SAP Data Gateways"],
  "Microsoft Graph API": ["Power Automate (Cloud & Desktop)", "Azure Services & AD", "Microsoft 365 Administration"],
  "Freshservice ITSM API": ["REST APIs & Webhooks", "Power Automate (Cloud & Desktop)"],
  "Salesforce Integration": ["REST APIs & Webhooks", "Dataverse & SQL Server", "Power Apps (Canvas & Model-Driven)"],
  "SAP Data Gateways": ["REST APIs & Webhooks", "Power Apps (Canvas & Model-Driven)", "Power Automate (Cloud & Desktop)"],
};

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const getIconForCategory = (category: string): LucideIcon => {
    switch (category) {
      case 'Power Platform Core':
        return Layers;
      case 'Programming & Web':
        return Code;
      case 'Integrations & Cloud':
        return Share2;
      case 'Process & Methodologies':
        return ShieldCheck;
      default:
        return Code;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Power Platform Core':
        return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'Programming & Web':
        return 'text-zinc-300 bg-zinc-800/10 border-zinc-700/20';
      case 'Integrations & Cloud':
        return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'Process & Methodologies':
        return 'text-zinc-300 bg-zinc-800/10 border-zinc-700/20';
      default:
        return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] border-y border-zinc-900 relative overflow-hidden no-print">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-950/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-blue-400">
            Expertise Matrix
          </h2>
          <p className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-white">
            Comprehensive Power Platform & Integration Capabilities
          </p>
          <p className="text-zinc-400 font-sans text-sm md:text-base">
            Hover or click on a skill badge below to dynamically highlight its core integration partners and see how Sai designs end-to-end connected systems.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioData.skills.map((group) => {
            const CategoryIcon = getIconForCategory(group.category);
            const colorClasses = getCategoryColor(group.category);

            return (
              <div
                key={group.category}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between border border-zinc-800/80 hover:border-zinc-700 transition-colors"
              >
                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg border ${colorClasses}`}>
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-sans font-bold text-base text-white tracking-tight">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skills Badges list */}
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => {
                      const isSelected = activeSkill === skill;
                      const isPartner = activeSkill && skillRelationships[activeSkill]?.includes(skill);
                      const isUnrelated = activeSkill && !isSelected && !isPartner;

                      return (
                        <button
                          key={skill}
                          onMouseEnter={() => setActiveSkill(skill)}
                          onMouseLeave={() => setActiveSkill(null)}
                          onClick={() => setActiveSkill(activeSkill === skill ? null : skill)}
                          className={`px-3 py-1.5 rounded-lg font-sans text-xs font-medium transition-all duration-300 border text-left cursor-pointer select-none ${
                            isSelected
                              ? 'bg-blue-600 border-blue-400 text-white shadow-md shadow-blue-500/25 scale-[1.03]'
                              : isPartner
                              ? 'bg-blue-500/10 border-blue-500/30 text-blue-300 font-semibold scale-[1.01]'
                              : isUnrelated
                              ? 'bg-zinc-900/10 border-zinc-900/30 text-zinc-600 opacity-40'
                              : 'bg-zinc-900/60 border-zinc-800/80 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-800/60'
                          }`}
                        >
                          {skill}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Insight when selected */}
                {activeSkill && group.skills.includes(activeSkill) && (
                  <div className="mt-4 pt-3 border-t border-zinc-900 text-[11px] font-sans text-blue-300 flex items-center gap-1.5 animate-fadeIn">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    <span>See highlighted partners</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dynamic Integration Hub Info Panel */}
        <div className="glass-card p-6 rounded-2xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border border-zinc-800/40">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-sans font-bold text-sm text-white">
              {activeSkill ? `Focus: ${activeSkill}` : "Select a skill to explore connections"}
            </h4>
            <p className="text-xs text-zinc-400 max-w-xl font-sans leading-relaxed">
              {activeSkill && skillRelationships[activeSkill]
                ? `In enterprise scenarios, Sai integrates "${activeSkill}" with ${skillRelationships[activeSkill].join(', and ')} to automate repetitive human tasks and secure records.`
                : "Sai specializes in building integrations that unify business data across services. Toggle any skill above to view typical relational schemas."}
            </p>
          </div>
          {activeSkill && skillRelationships[activeSkill] && (
            <div className="flex flex-wrap gap-2 shrink-0">
              <span className="text-xs font-mono px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-blue-400">
                Connected Stack
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
