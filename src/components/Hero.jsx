import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download, Github, Linkedin, Mail, FileText, Volume2, Square } from 'lucide-react';

import profile from '../assets/profile.png';
import ParticleNetwork from './ParticleNetwork';
import resumePDF from '../assets/resume.pdf'; 

function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      
      {/* Hidden Audio Element */}
      <audio 
        ref={audioRef} 
        src="/intro.mp3" 
        onEnded={() => setIsPlaying(false)}
      />

      {/* 🟢 Minimalist Deep Ambient Lighting (No Grid) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Soft top-left ambient light */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-600/20 dark:bg-purple-500/10 rounded-full blur-[150px]" 
        />
        
        {/* Soft bottom-right ambient light */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-blue-600/20 dark:bg-blue-500/10 rounded-full blur-[150px]" 
        />

        {/* Very subtle slow-moving background sweep to prevent it from feeling completely static */}
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/5 dark:via-blue-400/10 to-transparent blur-[10px] -rotate-6"
        />
      </div>

      {/* Interactive AI Particles - These look great over a clean background */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen">
        <ParticleNetwork />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full z-10">
        
        {/* LEFT TEXT CONTENT */}
        <motion.div
          className="flex-1 text-center md:text-left mt-8 md:mt-0 relative z-10 pointer-events-none"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="pointer-events-auto">
            
            {/* Status Badge - Sleek and subtle */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm text-slate-700 dark:text-slate-300 text-sm font-medium tracking-wide shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new opportunities
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight tracking-tight">
              Hi, I'm <br className="hidden md:block" />
              {/* Premium Gradient Text */}
              <motion.span 
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="bg-[length:200%_auto] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-400"
              >
                Sanjai R
              </motion.span>
            </motion.h1>

            <motion.div variants={itemVariants} className="h-[40px] mb-6">
              <span className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium mr-2">I am a</span>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer", 2000,
                  "DevOps Engineer", 2000,
                  "AI/ML Engineer", 2000,
                ]}
                speed={50}
                repeat={Infinity}
                className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200"
              />
            </motion.div>

            <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed text-base md:text-lg">
              Building scalable web applications, intelligent systems, and seamless deployment pipelines. Let's create something exceptional.
            </motion.p>

            {/* ACTION BUTTONS */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-12">
              
              {/* Audio Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={toggleAudio}
                className={`w-full sm:w-auto group flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 border
                  ${isPlaying 
                    ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-500/30 shadow-md shadow-indigo-500/10" 
                    : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm"
                  }`}
              >
                {isPlaying ? (
                  <>
                    <Square className="w-5 h-5 fill-current animate-pulse" />
                    Playing...
                  </>
                ) : (
                  <>
                    <Volume2 className="w-5 h-5 text-indigo-500 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
                    Listen Intro
                  </>
                )}
              </motion.button>

              {/* Resume Button */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group flex items-center justify-center gap-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3.5 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                View Resume
              </motion.a>

              {/* Projects Button */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 backdrop-blur-sm"
              >
                Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

            </motion.div>

            {/* SOCIAL LINKS */}
            <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start gap-4">
              {[
                { icon: <Github className="w-5 h-5" />, link: "https://github.com/sanjai0305" },
                { icon: <Linkedin className="w-5 h-5" />, link: "https://www.linkedin.com/in/sanjai0426" },
                { icon: <Mail className="w-5 h-5" />, link: "mailto:sanjaim0940r@gmail.com" }
              ].map((social, i) => (
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end pointer-events-auto"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, type: "spring", stiffness: 40 }}
        >
          <div className="relative">
            {/* Elegant, slow-spinning dual rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-12px] rounded-full border border-slate-200 dark:border-slate-800 z-0"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-24px] rounded-full border border-dashed border-slate-200 dark:border-slate-800 z-0 hidden sm:block"
            />

            {/* Very soft glowing backdrop for the image to separate it from the background */}
            <div className="absolute inset-0 bg-slate-300 dark:bg-slate-700 rounded-full blur-2xl opacity-20 dark:opacity-30" />
            
            {/* The Image */}
            <motion.img
              src={profile}
              alt="Sanjai R"
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full border-[4px] border-white dark:border-slate-900 shadow-2xl z-10 bg-slate-100 dark:bg-slate-900"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;