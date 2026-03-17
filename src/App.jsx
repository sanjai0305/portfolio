import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import GithubProjects from "./components/GithubProjects";
import Timeline from "./components/Timeline";
import Certifications from "./components/Certifications";
import ContactForm from "./components/ContactForm";
import AIChatbot from './components/AIChatbot';
import SkillGame from "./components/SkillGame";
import Terminal from "./components/Terminal"; // <-- Make sure you created this file!

function App() {
  // State to toggle between standard portfolio and terminal mode
  const [isTerminalMode, setIsTerminalMode] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans antialiased selection:bg-blue-500/30 selection:text-blue-200 scroll-smooth flex flex-col relative">
      
      {/* Mode Toggle Button - Floats on top right of everything */}
      <button 
        onClick={() => setIsTerminalMode(!isTerminalMode)}
        className="fixed z-50 top-4 right-4 md:top-6 md:right-6 px-4 py-2 bg-slate-900/50 hover:bg-blue-600/20 border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-blue-400 font-mono text-sm rounded backdrop-blur-md transition-all duration-300 shadow-lg"
      >
        {isTerminalMode ? '🖥️ Switch to UI Mode' : '>_ Terminal Mode'}
      </button>

      {isTerminalMode ? (
        /* --- TERMINAL MODE VIEW --- */
        <div className="pt-16 md:pt-0"> {/* Padding to prevent button overlap on mobile */}
          <Terminal />
        </div>
      ) : (
        /* --- STANDARD UI MODE VIEW --- */
        <>
          {/* Global Background Glow */}
          <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] pointer-events-none"></div>

          <Navbar />
          
          <main className="flex-grow w-full">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <GithubProjects />
            <Timeline />
            <Certifications />
            <ContactForm />
            <SkillGame />
          </main>

          {/* Sleek Built-in Footer */}
          <footer className="py-8 px-6 text-center border-t border-white/5 bg-slate-950/50 backdrop-blur-sm mt-auto">
            <p className="text-slate-500 text-sm font-medium">
              © {new Date().getFullYear()} Sanjai R. All rights reserved.
            </p>
            <p className="text-slate-600 text-xs mt-2 flex items-center justify-center gap-1.5">
              Built with <span className="text-blue-500 animate-pulse">♥</span> using React & Tailwind CSS
            </p>
          </footer>
          
          {/* Floating Global Components */}
          <AIChatbot />
        </>
      )}
    </div>
  );
}

export default App;