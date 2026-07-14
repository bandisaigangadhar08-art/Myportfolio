import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Smartphone, Workflow, Database, Share2, Bot, ArrowRight, CheckCircle } from 'lucide-react';

interface ArchNode {
  id: string;
  title: string;
  sub: string;
  icon: React.ReactNode;
  color: string;
  desc: string;
  techs: string[];
  connections: string[];
}

export default function ArchitectureCanvas() {
  const [activeNode, setActiveNode] = useState<string>('ui');
  const [pulseLine, setPulseLine] = useState<boolean>(true);

  useEffect(() => {
    // Re-trigger pulse animation on node change
    setPulseLine(false);
    const t = setTimeout(() => setPulseLine(true), 50);
    return () => clearTimeout(t);
  }, [activeNode]);

  const nodes: ArchNode[] = [
    {
      id: 'ui',
      title: 'User Interface Layer',
      sub: 'Canvas & Responsive Power Apps',
      icon: <Smartphone className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600 text-blue-400 border-blue-500/30 shadow-blue-500/5',
      desc: 'Sai designs highly intuitive, mobile-responsive Canvas and Model-Driven applications featuring robust client-side validation, role-based visual states, and direct API connector grids.',
      techs: ['PowerFx', 'Responsive Container Layouts', 'Dynamic Galleries', 'Form Validation'],
      connections: ['logic', 'data']
    },
    {
      id: 'logic',
      title: 'Process Automation',
      sub: 'Power Automate & Cloud Flows',
      icon: <Workflow className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600 text-blue-400 border-blue-500/30 shadow-blue-500/5',
      desc: 'Orchestrating complex multi-tier approvals, scheduling triggers, and document routings. Includes automatic notifications, reminder structures, and background data synchronization.',
      techs: ['Multi-Level Approvals', 'Scheduled Routines', 'AI Builder Parsing', 'JSON Arrays Mapping'],
      connections: ['ui', 'data', 'external']
    },
    {
      id: 'data',
      title: 'Database & Directory',
      sub: 'SharePoint, Dataverse & SQL',
      icon: <Database className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600 text-blue-400 border-blue-500/30 shadow-blue-500/5',
      desc: 'Structuring normalized relational schemas, configuring precise item-level security, and optimizing indexing parameters on SharePoint Online, Dataverse, or SQL Server engines.',
      techs: ['SharePoint Lists & Libraries', 'Dataverse Tables', 'SQL Relational Schemas', 'M365 Security Scopes'],
      connections: ['ui', 'logic', 'ai']
    },
    {
      id: 'external',
      title: 'Enterprise Integrations',
      sub: 'SAP, Salesforce & REST APIs',
      icon: <Share2 className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600 text-blue-400 border-blue-500/30 shadow-blue-500/5',
      desc: 'Bridging internal processes with global SaaS systems by integrating custom Power Platform connectors, consuming JSON REST APIs, or piping master records from Salesforce/SAP environments.',
      techs: ['REST APIs', 'Custom Webhooks', 'Microsoft Graph API', 'JSON Mapping Schemas'],
      connections: ['logic']
    },
    {
      id: 'ai',
      title: 'AI Copilot Assistant',
      sub: 'Copilot Studio Agent Integrator',
      icon: <Bot className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600 text-blue-400 border-blue-500/30 shadow-blue-500/5',
      desc: 'Creating intelligent conversational agents equipped to handle natural language queries, fetch real-time records from SharePoint, and trigger administrative approval workflows on behalf of end users.',
      techs: ['Microsoft Copilot Studio', 'Copilot Workflows Triggers', 'SharePoint Retrieval', 'Conversational Fallbacks'],
      connections: ['data']
    }
  ];

  const getActiveNodeData = () => nodes.find(n => n.id === activeNode) || nodes[0];
  const activeNodeData = getActiveNodeData();

  return (
    <section id="architecture" className="py-24 bg-[#0a0a0a] relative overflow-hidden no-print">
      {/* Visual Background Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-blue-400">
            Design Philosophy
          </h2>
          <p className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-white">
            Enterprise Application Architecture Map
          </p>
          <p className="text-zinc-400 font-sans text-sm md:text-base">
            Click on any module to trace how Sai architected connected data flows across systems in his 18+ key business projects.
          </p>
        </div>

        {/* Interactive Schematic Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Connection Schematic */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[420px] lg:min-h-[480px] p-6 rounded-3xl border border-zinc-900 bg-zinc-950/40">
            {/* Overlay SVG Connection Lines with pulsing effects */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block" xmlns="http://www.w3.org/2000/svg">
              {/* Lines from UI to Logic and Data */}
              <line x1="20%" y1="25%" x2="50%" y2="25%" stroke="#27272a" strokeWidth="2" />
              <line x1="20%" y1="25%" x2="50%" y2="75%" stroke="#27272a" strokeWidth="2" />
              
              {/* Lines from Logic to Data and External */}
              <line x1="50%" y1="25%" x2="50%" y2="75%" stroke="#27272a" strokeWidth="2" />
              <line x1="50%" y1="25%" x2="80%" y2="25%" stroke="#27272a" strokeWidth="2" />
              
              {/* Lines from AI to Data */}
              <line x1="80%" y1="75%" x2="50%" y2="75%" stroke="#27272a" strokeWidth="2" />

              {/* Pulsing streams representing active connections */}
              {pulseLine && activeNode === 'ui' && (
                <>
                  <line x1="20%" y1="25%" x2="50%" y2="25%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 12" className="animate-[dash_10s_linear_infinite]" style={{ strokeDashoffset: -50 }} />
                  <line x1="20%" y1="25%" x2="50%" y2="75%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 12" className="animate-[dash_10s_linear_infinite]" style={{ strokeDashoffset: -50 }} />
                </>
              )}
              {pulseLine && activeNode === 'logic' && (
                <>
                  <line x1="20%" y1="25%" x2="50%" y2="25%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 12" className="animate-[dash_10s_linear_infinite]" style={{ strokeDashoffset: 50 }} />
                  <line x1="50%" y1="25%" x2="50%" y2="75%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 12" className="animate-[dash_10s_linear_infinite]" style={{ strokeDashoffset: -50 }} />
                  <line x1="50%" y1="25%" x2="80%" y2="25%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 12" className="animate-[dash_10s_linear_infinite]" style={{ strokeDashoffset: -50 }} />
                </>
              )}
              {pulseLine && activeNode === 'data' && (
                <>
                  <line x1="20%" y1="25%" x2="50%" y2="75%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 12" className="animate-[dash_10s_linear_infinite]" style={{ strokeDashoffset: 50 }} />
                  <line x1="50%" y1="25%" x2="50%" y2="75%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 12" className="animate-[dash_10s_linear_infinite]" style={{ strokeDashoffset: 50 }} />
                  <line x1="80%" y1="75%" x2="50%" y2="75%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 12" className="animate-[dash_10s_linear_infinite]" style={{ strokeDashoffset: 50 }} />
                </>
              )}
              {pulseLine && activeNode === 'external' && (
                <line x1="50%" y1="25%" x2="80%" y2="25%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 12" className="animate-[dash_10s_linear_infinite]" style={{ strokeDashoffset: 50 }} />
              )}
              {pulseLine && activeNode === 'ai' && (
                <line x1="80%" y1="75%" x2="50%" y2="75%" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 12" className="animate-[dash_10s_linear_infinite]" style={{ strokeDashoffset: -50 }} />
              )}
            </svg>

            {/* Topology Layout */}
            <div className="w-full h-full flex flex-col justify-between gap-10 min-h-[360px] relative z-10">
              {/* Row 1: Top Nodes */}
              <div className="flex justify-between items-center w-full">
                {/* Node: UI */}
                <button
                  onClick={() => setActiveNode('ui')}
                  className={`w-[45%] sm:w-[28%] p-4 rounded-xl flex items-center gap-3 border transition-all duration-300 text-left select-none cursor-pointer ${
                    activeNode === 'ui'
                      ? 'bg-blue-600/10 border-blue-500 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]'
                      : 'bg-[#0a0a0a]/90 border-zinc-900 hover:border-zinc-800'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${activeNode === 'ui' ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-400'}`}>
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">UI Layer</p>
                    <p className="text-sm font-sans font-extrabold text-white leading-tight">Power Apps</p>
                  </div>
                </button>

                {/* Node: Logic */}
                <button
                  onClick={() => setActiveNode('logic')}
                  className={`w-[45%] sm:w-[28%] p-4 rounded-xl flex items-center gap-3 border transition-all duration-300 text-left select-none cursor-pointer ${
                    activeNode === 'logic'
                      ? 'bg-blue-600/10 border-blue-500 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]'
                      : 'bg-[#0a0a0a]/90 border-zinc-900 hover:border-zinc-800'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${activeNode === 'logic' ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-400'}`}>
                    <Workflow className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">Automation</p>
                    <p className="text-sm font-sans font-extrabold text-white leading-tight">Power Automate</p>
                  </div>
                </button>

                {/* Node: External Integrations */}
                <button
                  onClick={() => setActiveNode('external')}
                  className={`hidden sm:flex w-[28%] p-4 rounded-xl items-center gap-3 border transition-all duration-300 text-left select-none cursor-pointer ${
                    activeNode === 'external'
                      ? 'bg-blue-600/10 border-blue-500 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]'
                      : 'bg-[#0a0a0a]/90 border-zinc-900 hover:border-zinc-800'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${activeNode === 'external' ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-400'}`}>
                    <Share2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">Enterprise</p>
                    <p className="text-sm font-sans font-extrabold text-white leading-tight">SAP / Salesforce</p>
                  </div>
                </button>
              </div>

              {/* Mobile Only: External Node Row */}
              <div className="flex sm:hidden justify-center">
                <button
                  onClick={() => setActiveNode('external')}
                  className={`w-full p-4 rounded-xl flex items-center gap-3 border transition-all duration-300 text-left select-none cursor-pointer ${
                    activeNode === 'external'
                      ? 'bg-blue-600/10 border-blue-500 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]'
                      : 'bg-[#0a0a0a]/90 border-zinc-900 hover:border-zinc-800'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${activeNode === 'external' ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-400'}`}>
                    <Share2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">Enterprise</p>
                    <p className="text-sm font-sans font-extrabold text-white leading-tight">SAP / Salesforce APIs</p>
                  </div>
                </button>
              </div>

              {/* Row 2: Bottom Nodes */}
              <div className="flex justify-around items-center w-full">
                {/* Node: Data */}
                <button
                  onClick={() => setActiveNode('data')}
                  className={`w-[45%] sm:w-[32%] p-4 rounded-xl flex items-center gap-3 border transition-all duration-300 text-left select-none cursor-pointer ${
                    activeNode === 'data'
                      ? 'bg-blue-600/10 border-blue-500 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]'
                      : 'bg-[#0a0a0a]/90 border-zinc-900 hover:border-zinc-800'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${activeNode === 'data' ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-400'}`}>
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">Database</p>
                    <p className="text-sm font-sans font-extrabold text-white leading-tight">SharePoint List</p>
                  </div>
                </button>

                {/* Node: AI */}
                <button
                  onClick={() => setActiveNode('ai')}
                  className={`w-[45%] sm:w-[32%] p-4 rounded-xl flex items-center gap-3 border transition-all duration-300 text-left select-none cursor-pointer ${
                    activeNode === 'ai'
                      ? 'bg-blue-600/10 border-blue-500 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]'
                      : 'bg-[#0a0a0a]/90 border-zinc-900 hover:border-zinc-800'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${activeNode === 'ai' ? 'bg-blue-500 text-white' : 'bg-zinc-900 text-zinc-400'}`}>
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">AI Assistant</p>
                    <p className="text-sm font-sans font-extrabold text-white leading-tight">Copilot Studio</p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Information Panel detailing Selected Node */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">Active Module Breakdown</span>
              <h3 className="text-2xl md:text-3xl font-sans font-extrabold text-white tracking-tight">
                {activeNodeData.title}
              </h3>
              <p className="font-sans text-sm font-semibold text-blue-400">{activeNodeData.sub}</p>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed font-sans">
              {activeNodeData.desc}
            </p>

            <div className="space-y-3 pt-4 border-t border-zinc-900">
              <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Key Concepts & Formulas</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {activeNodeData.techs.map((tech) => (
                  <div key={tech} className="flex items-center gap-2.5 text-xs text-zinc-300 font-sans">
                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Illustrative Use Case Context */}
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/40 text-xs text-zinc-400 font-sans flex items-start gap-3">
              <span className="font-mono font-bold text-blue-400">USE CASE:</span>
              <span>
                {activeNode === 'ui' && 'Used in "Stage Gate Process" Canvas App, utilizing PowerFx to bind form validation locks and dynamically toggle tab panels based on user roles.'}
                {activeNode === 'logic' && 'Configured for the "Invoice Tracking System" to extract key data from PDFs via AI Builder, route records based on values, and notify ledger specialists.'}
                {activeNode === 'data' && 'Constructed relational tables inside "Visitor Management" using SharePoint lists linked by indexed single-value lookups to guarantee 100% security.'}
                {activeNode === 'external' && 'Integrated for the "Salesforce & Power Apps" & "SharePoint & Freshservice" systems, constructing direct REST API loops to sync assets.'}
                {activeNode === 'ai' && 'Deployed in the "AI-Powered Auto-Routing Copilot Agent" to interpret employee helpdesk requests and query SharePoint directories.'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
