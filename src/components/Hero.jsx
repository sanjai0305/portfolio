import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download, Github, Linkedin, Mail, FileText } from 'lucide-react';
import profile from '../assets/profile.png';

function Hero() {
  // Staggered animation variants for a smooth, premium load-in effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      
      {/* Subtle Background Glow Effects - Opacity adjusts based on theme */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full z-10">
        
        {/* LEFT TEXT CONTENT */}
        <motion.div
          className="flex-1 text-center md:text-left mt-10 md:mt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Open to work badge */}
          <motion.div variants={itemVariants} className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300 text-sm font-semibold tracking-wide">
            Available for new opportunities
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">
            Hi, I'm <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
              Sanjai R
            </span>
          </motion.h1>

          {/* TYPING ANIMATION */}
          <motion.div variants={itemVariants} className="h-[40px] mb-4">
            <span className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium mr-2">I am a</span>
            <TypeAnimation
              sequence={[
                "Full Stack Developer", 2000,
                "DevOps Engineer", 2000,
                "AI/ML Engineer", 2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)] dark:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            />
          </motion.div>

          <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
            Building scalable web apps, intelligent systems, and deploying using modern DevOps practices. Let's build something amazing together.
          </motion.p>

          {/* UPGRADED ACTION BUTTONS (Theme Responsive) */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10">
            
            {/* View Resume - Primary Gradient stays mostly the same */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-purple-500 dark:to-blue-500 text-white px-7 py-3.5 rounded-xl font-semibold hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] dark:hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              <FileText className="w-5 h-5" />
              View Resume
            </a>

            {/* Download Resume - Outline adapts to theme */}
            <a
              href="/resume.pdf"
              download
              className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white hover:-translate-y-1 transition-all duration-300"
            >
              <Download className="w-5 h-5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              Download
            </a>

            {/* View Projects - Glassmorphism adapts to theme */}
            <a
              href="#projects"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-white bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

          </motion.div>

          {/* SOCIAL LINKS (Theme Responsive) */}
          <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start gap-5">
            {[
              { icon: <Github className="w-5 h-5" />, link: "https://github.com/sanjai0305" },
              { icon: <Linkedin className="w-5 h-5" />, link: "https://www.linkedin.com/in/sanjai0426" },
              { icon: <Mail className="w-5 h-5" />, link: "mailto:sanjaim0940r@gmail.com" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-200/50 dark:bg-white/5 rounded-full border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-400/50 hover:bg-blue-50 dark:hover:bg-blue-400/10 hover:-translate-y-1 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 dark:opacity-40 animate-pulse" />
            <motion.img
              src={profile}
              alt="Sanjai R"
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-[6px] border-white dark:border-slate-900 shadow-xl dark:shadow-2xl z-10 bg-slate-100 dark:bg-slate-800"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;