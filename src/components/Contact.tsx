import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, Clipboard, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const headingRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP scroll trigger entrance (subtle)
    if (headingRef.current) {
      gsap.from(headingRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate real network request trigger mimicking Power Automate workflow dispatch
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] border-t border-zinc-900 relative overflow-hidden no-print">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Info Info-Grid */}
          <div ref={contactInfoRef} className="lg:col-span-5 space-y-8">
            <div ref={headingRef} className="space-y-4">
              <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">Connect</span>
              <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-white tracking-tight">
                Let's Build Something Impactful
              </h2>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-sans max-w-md">
                I am actively seeking Senior SharePoint / Power Platform positions or consulting requests. Feel free to contact me directly or use the automated trigger panel.
              </p>
            </div>

            {/* Direct Details Stack */}
            <div className="space-y-4 max-w-sm pt-4">
              {/* Card: Email */}
              <div className="glass-card p-5 rounded-2xl border border-zinc-800/80 hover:border-zinc-700 transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-zinc-900 text-blue-400 border border-zinc-800/80">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">Email Address</p>
                    <p className="text-sm font-sans font-bold text-white tracking-tight">{portfolioData.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-zinc-500 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors"
                  title="Copy to clipboard"
                >
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-blue-400" /> : <Clipboard className="w-4 h-4" />}
                </button>
              </div>

              {/* Card: Phone */}
              <a
                href={`tel:${portfolioData.phone}`}
                className="glass-card p-5 rounded-2xl border border-zinc-800/80 hover:border-zinc-700 transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-zinc-900 text-blue-400 border border-zinc-800/80">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">Direct Call</p>
                    <p className="text-sm font-sans font-bold text-white tracking-tight">{portfolioData.phone}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </a>

              {/* Card: LinkedIn */}
              <a
                href={portfolioData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-2xl border border-zinc-800/80 hover:border-zinc-700 transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-zinc-900 text-blue-400 border border-zinc-800/80">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">Professional Network</p>
                    <p className="text-sm font-sans font-bold text-white tracking-tight">Sai Gangadhar Bandi</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </a>

              {/* Card: Location */}
              <div className="glass-card p-5 rounded-2xl border border-zinc-800/80 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-zinc-900 text-blue-400 border border-zinc-800/80">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">Current Location</p>
                  <p className="text-sm font-sans font-bold text-white tracking-tight">{portfolioData.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Simulated Power Automate Trigger Form */}
          <div className="lg:col-span-7 glass-card p-6 md:p-8 rounded-3xl border border-zinc-800/80 relative">
            {/* Thematic tech status bar */}
            <div className="absolute top-0 right-8 -translate-y-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950 border border-zinc-800 text-[10px] font-mono text-blue-400 uppercase tracking-widest font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Flow Hook Active</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Field: Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 focus:border-blue-500 focus:outline-none text-sm text-zinc-300 placeholder-zinc-600 transition-colors"
                  />
                </div>

                {/* Field: Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 focus:border-blue-500 focus:outline-none text-sm text-zinc-300 placeholder-zinc-600 transition-colors"
                  />
                </div>
              </div>

              {/* Field: Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Inquiry Topic"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 focus:border-blue-500 focus:outline-none text-sm text-zinc-300 placeholder-zinc-600 transition-colors"
                />
              </div>

              {/* Field: Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Message *</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your proposal or request specifications..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800 focus:border-blue-500 focus:outline-none text-sm text-zinc-300 placeholder-zinc-600 transition-colors resize-none"
                />
              </div>

              {/* Action and feedback states */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-2">
                <p className="text-[10px] font-mono text-zinc-500 max-w-xs leading-relaxed text-center sm:text-left">
                  * Triggers a simulated Power Automate REST webhook action forwarding values safely inside Office 365 Outlook directories.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-sans font-semibold text-sm transition-all duration-200 shadow-md shadow-blue-600/10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Triggering Flow...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Dispatch Request</span>
                    </>
                  )}
                </button>
              </div>

              {/* Success Notification */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 rounded-xl bg-blue-500/15 border border-blue-500/25 text-blue-300 font-sans text-xs flex items-center gap-3 animate-fadeIn"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                    <div>
                      <p className="font-bold">Automated flow dispatched successfully!</p>
                      <p className="text-blue-400 mt-0.5">In a live implementation, this action parses input fields, generates a structured JSON request body, and pipes values to a CRM database.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
