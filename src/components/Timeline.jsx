import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Code2, ShieldCheck, Terminal, Milestone } from 'lucide-react';

function Timeline() {
  // Added custom icons to each milestone to make it visually engaging
  const timeline = [
    {
      year: "2024",
      title: "Started AI/ML Journey",
      desc: "Began learning Machine Learning, NLP, and Python fundamentals to build data-driven systems.",
      icon: <BrainCircuit className="w-5 h-5" />
    },
    {
      year: "2025",
      title: "Built Full Stack Projects",
      desc: "Developed a dynamic Quiz System and an NLP-based Sentiment Analysis model with robust backend APIs.",
      icon: <Code2 className="w-5 h-5" />
    },
    {
      year: "2025",
      title: "CrowdGuard AI Project",
      desc: "Engineered an AI-based crowd monitoring and alert system to enhance public safety surveillance.",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      year: "2026",
      title: "Mastering DevOps",
      desc: "Exploring modern deployment practices including CI/CD pipelines, Docker containerization, and cloud tools.",
      icon: <Terminal className="w-5 h-5" />
    },
  ];

  return (
    // Responsive background classes
    <section id="experience" className="py-24 px-6 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-20 text-center">
          <div className="p-3 bg-slate-200 dark:bg-white/5 rounded-2xl border border-slate-300 dark:border-white/10 mb-4 inline-block">
            <Milestone className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 mb-4">
            Experience Timeline
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            My journey through continuous learning, building systems, and scaling applications.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Glowing Vertical Line */}
          {/* On mobile: stuck to the left. On desktop: centered */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-500/20 via-purple-500/50 to-blue-500/20 md:-translate-x-1/2 rounded-full"></div>

          {timeline.map((item, index) => {
            // Logic to alternate sides on desktop
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className="relative w-full mb-12 md:mb-24">
                
                {/* Timeline Dot & Icon */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute left-[20px] md:left-1/2 top-6 md:top-1/2 w-12 h-12 -translate-x-1/2 md:-translate-y-1/2 rounded-full bg-slate-50 dark:bg-slate-900 border-4 border-blue-500 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(59,130,246,0.4)] text-blue-600 dark:text-blue-400"
                >
                  {item.icon}
                </motion.div>

                {/* Content Card Wrapper */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  // Mobile: Everything shifts right. Desktop: Alternates left/right with proper margins.
                  className={`w-full pl-[60px] md:pl-0 md:w-[45%] ${
                    isLeft ? "md:mr-auto md:pr-10 md:text-right" : "md:ml-auto md:pl-10 md:text-left"
                  }`}
                >
                  {/* Glassmorphism Card */}
                  <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)] group">
                    
                    {/* Year Badge */}
                    <span className="inline-block px-4 py-1.5 mb-4 text-sm font-bold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-500/10 rounded-full border border-blue-200 dark:border-blue-500/20">
                      {item.year}
                    </span>
                    
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Timeline;