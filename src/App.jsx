import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyHireMe from "./components/WhyHireMe"; 
import Skills from "./components/Skills";
import JourneyMap from "./components/JourneyMap"; 
import Projects from "./components/Projects";
import GithubProjects from "./components/GithubProjects";
import Certifications from "./components/Certifications";
import SkillGame from "./components/SkillGame";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Terminal from "./components/Terminal";
import AIChatbot from './components/AIChatbot';
// 🟢 NEW: Importing icons for the sleek toggle button
import { Terminal as TerminalIcon, LayoutTemplate } from 'lucide-react'; 

function App() {
  const [isTerminalMode, setIsTerminalMode] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans antialiased selection:bg-blue-200 dark:selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-blue-200 scroll-smooth flex flex-col relative transition-colors duration-500">
      
      {/* 🟢 UPGRADED: Sleek Floating Terminal Toggle (Moved to Bottom-Left) */}
      <button 
        onClick={() => setIsTerminalMode(!isTerminalMode)}
        className="fixed z-[200] bottom-6 left-6 group flex items-center gap-2.5 px-5 py-3.5 bg-slate-900 dark:bg-white backdrop-blur-xl border border-slate-700 dark:border-slate-200 text-white dark:text-slate-900 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
      >
        {isTerminalMode ? (
          <>
            <LayoutTemplate className="w-5 h-5 text-blue-400 dark:text-blue-600 group-hover:animate-pulse" />
            <span className="font-semibold text-sm tracking-wide">UI Mode</span>
          </>
        ) : (
          <>
            <TerminalIcon className="w-5 h-5 text-emerald-400 dark:text-emerald-600 group-hover:animate-pulse" />
            <span className="font-mono font-bold text-sm tracking-tight">Terminal</span>
          </>
        )}
      </button>

      {isTerminalMode ? (
        /* --- TERMINAL MODE VIEW --- */
        <div className="pt-20 md:pt-0">
          <Terminal />
        </div>
      ) : (
        /* --- STANDARD UI MODE VIEW --- */
        <>
          <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.05),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] pointer-events-none transition-colors duration-500"></div>

          <Navbar />
          
          <main className="flex-grow w-full">
            <Hero />
            <About />
            <WhyHireMe /> 
            <Skills />
            <JourneyMap /> 
            <Projects />
            <GithubProjects />
            <Certifications />
            <SkillGame />
            
            <div className="bg-slate-100/50 dark:bg-slate-900/40 py-10 transition-colors duration-500 border-t border-slate-200 dark:border-slate-800/50">
              <Contact />
              <ContactForm />
            </div>
          </main>

          <footer className="py-8 px-6 text-center border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/80 backdrop-blur-md mt-auto transition-colors duration-500">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              © {new Date().getFullYear()} Sanjai R. All rights reserved.
            </p>
            <p className="text-slate-500 dark:text-slate-500 text-xs mt-2 flex items-center justify-center gap-1.5">
              Built with <span className="text-blue-500 animate-pulse">♥</span> using React & Tailwind CSS
            </p>
          </footer>
          
          {/* Smart Floating AI Assistant (Sits at Bottom-Right) */}
          <AIChatbot />
        </>
      )}
    </div>
  );
}

export default App;