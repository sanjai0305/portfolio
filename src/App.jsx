import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import GithubProjects from "./components/GithubProjects"
import Timeline from "./components/Timeline"
import Certifications from "./components/Certifications"
import ContactForm from "./components/ContactForm"

function App() {
  return (
    // 'scroll-smooth' ensures smooth navigation when clicking navbar links.
    // 'antialiased' makes the font render sharper.
    // 'selection:bg-blue-500/30' changes the default blue highlight when dragging over text to match your theme.
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans antialiased selection:bg-blue-500/30 selection:text-blue-200 scroll-smooth flex flex-col">
      
      {/* Global Background Glow - Stays fixed in the background while the user scrolls */}
      <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] pointer-events-none"></div>

      <Navbar />
      
      {/* Main Content Area */}
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
      
    </div>
  );
}

export default App;