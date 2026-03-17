import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, FolderGit2, X, LayoutDashboard, Target, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Projects() {
  // State to track which project is currently selected for the modal
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent background scrolling when the modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  // Expanded project data with Problem Statements and Architecture/Features
  const projects = [
    {
      name: "Quiz Management System",
      shortDesc: "A dynamic web-based quiz system with robust backend APIs.",
      techStack: ["React.js", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/sanjai0305/Quiz_Management_System",
      liveDemo: "#",
      imageGrad: "from-blue-500 to-cyan-500", // Placeholder for actual screenshot
      problem: "Educational institutions and corporate trainers needed a streamlined, automated way to create, distribute, and grade assessments without manual overhead.",
      features: [
        "Role-based access control (Admin vs Student dashboards).",
        "Dynamic quiz generation with randomized questions.",
        "Real-time automated grading and performance analytics.",
        "Secure RESTful APIs using Node.js and Express."
      ]
    },
    {
      name: "CrowdGuard AI",
      shortDesc: "An AI-powered crowd monitoring and alert system designed for public safety.",
      techStack: ["Python", "Machine Learning", "OpenCV"],
      link: "https://github.com/sanjai0305/crowdguardai-v1-",
      liveDemo: "#",
      imageGrad: "from-purple-500 to-indigo-500",
      problem: "Large gatherings are prone to stampedes and overcrowding. Manual surveillance is often too slow to detect critical density levels before incidents occur.",
      features: [
        "Real-time video feed analysis using OpenCV.",
        "Machine Learning models trained to estimate crowd density.",
        "Automated threshold alerts sent to authorities when capacity is breached.",
        "Optimized processing pipeline for low-latency detection."
      ]
    },
    {
      name: "Sentiment Analysis",
      shortDesc: "An NLP-based sentiment classification model that categorizes text data efficiently.",
      techStack: ["Python", "NLP", "Scikit-Learn", "Pandas"],
      link: "https://github.com/sanjai0305/sentiment-analysis",
      liveDemo: "#",
      imageGrad: "from-emerald-500 to-teal-500",
      problem: "Businesses struggle to manually process thousands of customer reviews to understand overall brand sentiment and identify areas of improvement.",
      features: [
        "Data preprocessing pipeline including tokenization and stop-word removal.",
        "Feature extraction using TF-IDF vectorization.",
        "Trained multiple classifiers (SVM, Naive Bayes) to achieve high accuracy.",
        "Model evaluation and deployment-ready architecture."
      ]
    }
  ];

  // Animation variants
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-slate-900 relative transition-colors duration-300">
      
      {/* Background Glows */}
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="p-3 bg-slate-200 dark:bg-white/5 rounded-2xl border border-slate-300 dark:border-white/10 mb-4 inline-block">
            <FolderGit2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            A selection of my recent work in web development, AI, and machine learning. Click on any project to see the architecture and details.
          </p>
        </div>

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
              className="group cursor-pointer relative bg-white dark:bg-white/5 backdrop-blur-lg border border-slate-200 dark:border-white/10 p-8 rounded-3xl flex flex-col text-left hover:-translate-y-2 hover:border-blue-500/30 shadow-xl hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)] transition-all duration-300"
            >
              <div className="mb-6 flex-grow">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  {project.shortDesc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.slice(0, 3).map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 text-xs font-semibold bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300 rounded-lg border border-blue-200 dark:border-blue-500/20">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="px-3 py-1.5 text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg border border-slate-200 dark:border-slate-700">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>

              <div className="mt-auto pt-5 border-t border-slate-100 dark:border-white/10 text-blue-600 dark:text-blue-400 text-sm font-bold flex items-center justify-between group-hover:translate-x-1 transition-transform">
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
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            
            {/* Dark Overlay - Clicking it closes the modal */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />

            {/* Modal Content Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-2xl flex flex-col custom-scrollbar"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Placeholder Image / Screenshot Area */}
              {/* Replace the bg-gradient with an actual <img src={project.image} /> when you have screenshots */}
              <div className={`w-full h-64 sm:h-80 bg-gradient-to-br ${selectedProject.imageGrad} flex items-center justify-center relative overflow-hidden`}>
                <LayoutDashboard className="w-24 h-24 text-white/30" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-slate-900 to-transparent" />
              </div>

              {/* Modal Body */}
              <div className="p-8 sm:p-10 -mt-10 relative z-10 text-left">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
                  {selectedProject.name}
                </h3>
                
                {/* Tech Stack Full List */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {selectedProject.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 text-sm font-semibold bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300 rounded-lg border border-blue-200 dark:border-blue-500/20">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Grid for Problem & Features */}
                <div className="grid md:grid-cols-2 gap-10 mb-10">
                  
                  {/* Problem Statement */}
                  <div>
                    <div className="flex items-center gap-2 text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                      <Target className="w-6 h-6 text-purple-500" />
                      The Problem
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  {/* Architecture & Features */}
                  <div>
                    <div className="flex items-center gap-2 text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                      <Cpu className="w-6 h-6 text-emerald-500" />
                      Architecture & Features
                    </div>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-8 border-t border-slate-200 dark:border-slate-800">
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                    Source Code
                  </a>
                  
                  {selectedProject.liveDemo !== "#" && (
                    <a 
                      href={selectedProject.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-8 py-3.5 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 hover:-translate-y-1 transition-all duration-300"
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