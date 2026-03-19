import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, FolderGit2, X, Target, Cpu, Image, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  const projects = [
    {
      name: "Quiz Management System",
      shortDesc: "A dynamic web-based quiz system with robust backend APIs.",
      techStack: ["React.js", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/sanjai0305/Quiz_Management_System",
      liveDemo: "#",
      image: "https://images.unsplash.com/photo-1606326514690-71a5cc4f4c7d?q=80&w=800&auto=format&fit=crop", 
      problem: "Educational institutions needed an automated way to distribute and grade assessments without manual overhead.",
      features: [
        "Role-based access control (Admin/Student dashboards).",
        "Dynamic quiz generation with randomized questions.",
        "Real-time automated grading and analytics."
      ],
      badge: null // No hackathon badge
    },
    {
      name: "Smart Crowd Management", // Updated name based on your prompt
      shortDesc: "AI-powered crowd monitoring and alert system for public safety.",
      techStack: ["Python", "Machine Learning", "OpenCV", "TensorFlow"],
      link: "https://github.com/sanjai0305/crowdguardai-v1-",
      liveDemo: "#",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
      problem: "Large gatherings are prone to stampedes. Manual surveillance is too slow to detect critical density levels before incidents occur.",
      features: [
        "Real-time video feed analysis using OpenCV.",
        "Machine Learning models to estimate crowd density.",
        "Automated threshold alerts sent to authorities."
      ],
      // 🟢 NEW: Hackathon Badge details
      badge: {
        text: "Built at PSG iTech Hackathon",
        color: "bg-blue-500/10 text-blue-500 border-blue-500/20"
      }
    },
    {
      name: "Sentiment Analysis",
      shortDesc: "NLP-based sentiment classification model categorizing text data efficiently.",
      techStack: ["Python", "NLP", "Scikit-Learn", "Pandas"],
      link: "https://github.com/sanjai0305/sentiment-analysis",
      liveDemo: "#",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
      problem: "Businesses struggle to manually process customer reviews to understand overall brand sentiment.",
      features: [
        "Data preprocessing pipeline (tokenization, stop-word removal).",
        "Feature extraction using TF-IDF vectorization.",
        "High accuracy trained classifiers (SVM, Naive Bayes)."
      ],
      // 🟢 NEW: Hackathon Badge details
      badge: {
        text: "National Hackathon Project",
        color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
      }
    }
  ];

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 60, damping: 15 } }
  };

  return (
    <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      
      {/* Premium Deep Ambient Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 -left-20 w-[600px] h-[600px] bg-blue-600/10 dark:bg-blue-500/5 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 -right-20 w-[600px] h-[600px] bg-purple-600/10 dark:bg-purple-500/5 blur-[150px] rounded-full" 
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mb-16"
        >
          <motion.div 
            whileHover={{ rotate: -10, scale: 1.1 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl mb-6 relative overflow-hidden"
          >
            <FolderGit2 className="w-10 h-10 text-slate-800 dark:text-slate-100 relative z-10" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500 dark:from-white dark:to-slate-400 mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            A selection of my recent work. Click on any project to see screenshots, architecture, and details.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -8 }}
              className="group cursor-pointer relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-8 rounded-[2rem] flex flex-col text-left hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Internal Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

              {/* 🟢 HACKATHON BADGE */}
              {project.badge && (
                <div className={`absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl border-b border-l text-xs font-bold flex items-center gap-1.5 z-20 ${project.badge.color}`}>
                  <Trophy className="w-3.5 h-3.5" />
                  {project.badge.text}
                </div>
              )}

              <div className="mb-6 flex-grow relative z-10 mt-2">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  {project.shortDesc}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                {project.techStack.slice(0, 3).map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700 group-hover:border-blue-500/30 transition-colors duration-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-5 border-t border-slate-100 dark:border-slate-800/50 text-blue-600 dark:text-blue-400 text-sm font-bold flex items-center justify-between group-hover:translate-x-1 transition-transform relative z-10">
                <span>View Full Details</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 🚀 SMART PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            
            {/* Dark Overlay Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"
            />

            {/* Modal Content Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2rem] shadow-2xl flex flex-col custom-scrollbar"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 p-2.5 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white rounded-full transition-colors shadow-lg"
              >
                <X className="w-6 h-6" />
              </button>

              {/* SCREENSHOT AREA */}
              <div className="w-full h-64 sm:h-96 md:h-[450px] relative overflow-hidden bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
                {selectedProject.image ? (
                    <img 
                        src={selectedProject.image} 
                        alt={selectedProject.name} 
                        className="w-full h-full object-cover object-top"
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center gap-4 text-slate-400">
                        <Image className="w-16 h-16" strokeWidth={1}/>
                        <span>Screenshot coming soon</span>
                    </div>
                )}
                {/* Visual fade-out effect */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-slate-950 to-transparent" />
              </div>

              {/* Modal Body */}
              <div className="p-8 sm:p-12 text-left relative z-10 -mt-12 bg-white dark:bg-slate-950 rounded-t-[2.5rem]">
                
                {/* Modal Header & Badges */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                    {selectedProject.name}
                  </h3>
                  
                  {/* Show Hackathon Badge in Modal too */}
                  {selectedProject.badge && (
                    <div className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 border ${selectedProject.badge.color} w-fit`}>
                      <Trophy className="w-4 h-4" />
                      {selectedProject.badge.text}
                    </div>
                  )}
                </div>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2.5 mb-12">
                  {selectedProject.techStack.map((tech, i) => (
                    <span key={i} className="px-3.5 py-1.5 text-sm font-semibold bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-xl border border-slate-200 dark:border-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Grid for Problem & Features */}
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <div className="flex items-center gap-2.5 text-xl font-bold text-slate-800 dark:text-slate-100 mb-5">
                      <Target className="w-6 h-6 text-purple-500 dark:text-purple-400" />
                      The Problem
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base sm:text-lg">
                      {selectedProject.problem}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2.5 text-xl font-bold text-slate-800 dark:text-slate-100 mb-5">
                      <Cpu className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                      Key Features
                    </div>
                    <ul className="space-y-4">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3.5 text-slate-600 dark:text-slate-400 text-base">
                          <span className="mt-2 w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0" />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-10 border-t border-slate-200 dark:border-slate-800/50">
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                    Source Code
                  </a>
                  
                  {selectedProject.liveDemo !== "#" && (
                    <a 
                    href={selectedProject.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-900 hover:-translate-y-1 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default Projects;