import React from 'react';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      name: "Quiz Management System",
      desc: "A dynamic web-based quiz system with robust backend APIs for seamless assessment management.",
      techStack: ["React.js", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/sanjai0305/Quiz_Management_System",
      liveDemo: "#" // Add a link here if you host it later
    },
    {
      name: "CrowdGuard AI",
      desc: "An AI-powered crowd monitoring and alert system designed to enhance public safety and surveillance.",
      techStack: ["Python", "Machine Learning", "OpenCV"],
      link: "https://github.com/sanjai0305/crowdguardai-v1-",
      liveDemo: "#"
    },
    {
      name: "Sentiment Analysis",
      desc: "An NLP-based sentiment classification model that analyzes and categorizes text data efficiently.",
      techStack: ["Python", "NLP", "Scikit-Learn"],
      link: "https://github.com/sanjai0305/sentiment-analysis",
      liveDemo: "#"
    }
  ];

  // Framer Motion staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    // Responsive background: slate-50 for light mode, slate-900 for dark mode
    <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300 text-center">
      
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="p-3 bg-slate-200 dark:bg-white/5 rounded-2xl border border-slate-300 dark:border-white/10 mb-4 inline-block">
            <FolderGit2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            A selection of my recent work in web development, AI, and machine learning.
          </p>
        </div>

        {/* Projects Grid with Framer Motion */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group relative bg-white dark:bg-white/5 backdrop-blur-lg border border-slate-200 dark:border-white/10 p-8 rounded-3xl flex flex-col text-left hover:-translate-y-2 hover:border-blue-500/30 shadow-xl hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)] transition-all duration-300"
            >
              {/* Project Title & Description */}
              <div className="mb-6 flex-grow">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  {project.desc}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 text-xs font-semibold bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300 rounded-lg border border-blue-200 dark:border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4 mt-auto pt-5 border-t border-slate-100 dark:border-white/10">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>Code</span>
                </a>
                
                {/* Optional Live Demo Link - Only shows if it's not "#" */}
                {project.liveDemo !== "#" && (
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ml-auto"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;