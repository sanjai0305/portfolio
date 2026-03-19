import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
// import WhyHireMe from "./components/WhyHireMe"; // Uncomment if you saved the WhyHireMe component!
import Skills from "./components/Skills";
import Timeline from "./components/Timeline"; // Replace with JourneyMap if you used that version
import Projects from "./components/Projects";
import GithubProjects from "./components/GithubProjects";
import Certifications from "./components/Certifications";
import SkillGame from "./components/SkillGame";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Terminal from "./components/Terminal";

function App() {
  // State to toggle between standard portfolio and terminal mode
  const [isTerminalMode, setIsTerminalMode] = useState(false);

  return (
    // 🟢 Upgraded to support Light/Dark mode transitions globally
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans antialiased selection:bg-blue-200 dark:selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-blue-200 scroll-smooth flex flex-col relative transition-colors duration-300">
      
      {/* Mode Toggle Button - Adapts to Light/Dark Mode */}
      <button 
        onClick={() => setIsTerminalMode(!isTerminalMode)}
        className="fixed z-[100] top-4 right-16 md:top-6 md:right-6 px-4 py-2 bg-white/80 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-blue-600/20 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500/50 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-mono text-sm rounded-xl backdrop-blur-md transition-all duration-300 shadow-lg"
      >
        {isTerminalMode ? '🖥️ UI Mode' : '>_ Terminal'}
      </button>

      {isTerminalMode ? (
        /* --- TERMINAL MODE VIEW --- */
        <div className="pt-20 md:pt-0"> {/* Padding to prevent button overlap on mobile */}
          <Terminal />
        </div>
      ) : (
        /* --- STANDARD UI MODE VIEW --- */
        <>
          {/* Global Background Glow - Changes subtly based on theme */}
          <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] pointer-events-none transition-colors duration-300"></div>

          <Navbar />
          
          {/* 🟢 Reordered for the ultimate narrative flow */}
          <main className="flex-grow w-full">
            <Hero />
            <About />
            {/* <WhyHireMe /> */} 
            <Skills />
            <Timeline />
            <Projects />
            <GithubProjects />
            <Certifications />
            <SkillGame />
            
            {/* Contact section grouping */}
            <div className="bg-slate-100/50 dark:bg-slate-900/50 py-10 transition-colors duration-300">
              <Contact />
              <ContactForm />
            </div>
          </main>

          {/* Sleek Built-in Footer */}
          <footer className="py-8 px-6 text-center border-t border-slate-200 dark:border-white/5 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm mt-auto transition-colors duration-300">
            <p className="text-slate-500 text-sm font-medium">
              © {new Date().getFullYear()} Sanjai R. All rights reserved.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-xs mt-2 flex items-center justify-center gap-1.5">
              Built with <span className="text-blue-500 animate-pulse">♥</span> using React & Tailwind CSS
            </p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;