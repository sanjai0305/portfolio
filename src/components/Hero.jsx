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
    // 'pt-32' added to ensure Navbar doesn't cover content on mobile.
    // 'pb-20' ensures there's room before the next section.
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      
      {/* 🟢 Ambient Background Glows - Fills up the empty space visually */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] left-[-10%] w-[80%] h-[35%] bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[80%] h-[35%] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[100px]" />
      </div>

      {/* 🟢 'flex-col-reverse' is the fix for your mobile whitespace issue */}
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full z-10">
        
        {/* LEFT TEXT CONTENT */}
        <motion.div
          className="flex-1 text-center md:text-left mt-8 md:mt-0"
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

          <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed text-base md:text-lg">
            Building scalable web apps, intelligent systems, and deploying using modern DevOps practices. Let's build something amazing together.
          </motion.p>

          {/* ACTION BUTTONS - Optimized for mobile tap targets */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-10">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-purple-500 dark:to-blue-500 text-white px-7 py-3.5 rounded-xl font-semibold hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:-translate-y-1 transition-all duration-300 active:scale-95"
            >
              <FileText className="w-5 h-5" />
              View Resume
            </a>

            <div className="flex gap-4 w-full sm:w-auto">
              <a
                href="/resume.pdf"
                download
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300 active:scale-95"
              >
                <Download className="w-5 h-5" />
                Download
              </a>

              <a
                href="#projects"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-white bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 active:scale-95"
              >
                Projects
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* SOCIAL LINKS */}
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

        {/* RIGHT IMAGE - Mobile-la ithu top-la varum (fixes whitespace) */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Pulsating glow for visual depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 dark:opacity-40 animate-pulse" />
            
            <motion.img
              src={profile}
              alt="Sanjai R"
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              // Responsive sizes: 56 on small mobile, 64 on medium, 80 on desktop
              className="relative w-56 h-56 sm:w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-[6px] border-white dark:border-slate-800 shadow-xl dark:shadow-2xl z-10 bg-slate-100 dark:bg-slate-800"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;