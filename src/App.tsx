import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ArchitectureCanvas from './components/ArchitectureCanvas';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrintResume from './components/PrintResume';

export default function App() {
  const [isPrintOpen, setIsPrintOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 flex flex-col font-sans selection:bg-blue-500/30 selection:text-white">
      {/* Dynamic Header */}
      <Header onPrintResume={() => setIsPrintOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Banner Section */}
        <Hero />

        {/* Dynamic Skill Relation Matrix */}
        <Skills />

        {/* Interactive Schematic Logic Map */}
        <ArchitectureCanvas />

        {/* Staggered Vertically-Aligned Experience Timeline */}
        <Experience />

        {/* Comprehensive Project Grid and Modal Details */}
        <Projects />

        {/* Contact Form and Simulated Webhook trigger */}
        <Contact />
      </main>

      {/* Footer Credits */}
      <Footer />

      {/* Print Resume Overlay and Previewer */}
      <PrintResume isOpen={isPrintOpen} onClose={() => setIsPrintOpen(false)} />
    </div>
  );
}
