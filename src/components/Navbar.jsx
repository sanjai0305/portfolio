import React, { useState } from 'react';
import { Menu, X, Infinity } from 'lucide-react'; // 🟢 Added Infinity icon
import ThemeToggle from './ThemeToggle'; // Ensure this matches your file path

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    // Responsive background: white/80 for light mode, slate-900/80 for dark mode
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/50 transition-all duration-500">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 px-6">
        
        {/* 🟢 UPGRADED LOGO: Name with DevOps Infinity Icon */}
        <a 
          href="#home" 
          className="flex items-center gap-2.5 group transition-opacity"
        >
          <div className="p-1.5 bg-blue-50 dark:bg-blue-500/10 rounded-xl border border-blue-100 dark:border-blue-500/20 group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-colors">
            <Infinity className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:rotate-180 transition-transform duration-700 ease-in-out" />
          </div>
          <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 tracking-wide">
            Sanjai
          </span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Action Buttons: Theme Toggle + Hire Me */}
          <div className="flex items-center gap-4 pl-4 border-l border-slate-200 dark:border-slate-700">
            <ThemeToggle />
            <a 
              href="#contact" 
              className="px-5 py-2 text-sm font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* MOBILE NAVIGATION TOGGLE */}
        <div className="md:hidden flex items-center gap-4">
          {/* Theme toggle stays visible even when menu is closed on mobile */}
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white p-2 focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div 
        className={`md:hidden absolute w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-2xl transition-all duration-300 origin-top ${
          isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible'
        }`}
      >
        <ul className="flex flex-col px-6 py-6 space-y-5 text-center">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href} 
                onClick={() => setIsOpen(false)} // Close menu on click
                className="block text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="inline-block w-full px-8 py-3 text-sm font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;