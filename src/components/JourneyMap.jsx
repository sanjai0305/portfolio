import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BrainCircuit, Code2, Terminal, ShieldCheck, Milestone } from 'lucide-react';

function JourneyMap() {
  const containerRef = useRef(null);

  // Tracks scroll progress to draw the "Roadmap Line" dynamically
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const roadmap = [
    {
      status: "completed",
      year: "2024",
      role: "AI/ML Foundations",
      tech: "Python • NLP • Scikit-Learn",
      desc: "Began the journey by diving deep into data-driven systems and intelligent algorithms.",
      icon: <BrainCircuit className="w-5 h-5" />
    },
    {
      status: "completed",
      year: "2025",
      role: "Full Stack Engineering",
      tech: "React • Node.js • Express",
      desc: "Built robust web applications and integrated AI models like the CrowdGuard system.",
      icon: <Code2 className="w-5 h-5" />
    },
    {
      status: "current",
      year: "2026",
      role: "DevOps Mastery",
      tech: "Docker • CI/CD • GitHub Actions",
      desc: "Focusing on modern deployment pipelines, containerization, and infrastructure automation.",
      icon: <Terminal className="w-5 h-5" />
    },
    {
      status: "future", // This special status creates the "Goal" aesthetic
      year: "Future Goal",
      role: "DevSecOps Architect",
      tech: "Security • Cloud • Kubernetes",
      desc: "Evolving infrastructure to embed security at every layer of the automated deployment lifecycle.",
      icon: <ShieldCheck className="w-5 h-5" />
    }
  ];

  return (
    <section id="journey" className="py-24 px-6 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-20 text-center">
          <div className="p-3 bg-slate-200 dark:bg-white/5 rounded-2xl border border-slate-300 dark:border-white/10 mb-4 inline-block">
            <Milestone className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 mb-4">
            Career Roadmap
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            My technical evolution from AI fundamentals to Full Stack, and my trajectory towards DevSecOps.
          </p>
        </div>

        {/* Roadmap Graph Container */}
        <div ref={containerRef} className="relative">
          
          {/* THE GRAPH LINES */}
          {/* 1. Background Dashed Line (The Path) */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] border-l-2 border-dashed border-slate-300 dark:border-slate-700 md:-translate-x-1/2" />
          
          {/* 2. Animated Solid Gradient Line (The Progress) */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[28px] md:left-1/2 top-0 w-[4px] bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 md:-translate-x-1/2 rounded-full origin-top"
          />

          {roadmap.map((item, index) => {
            const isLeft = index % 2 === 0;
            const isFuture = item.status === "future";
            const isCurrent = item.status === "current";

            return (
              <div key={index} className="relative w-full mb-16 md:mb-24 flex items-center">
                
                {/* GRAPH NODE (The Circle) */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={`absolute left-[12px] md:left-1/2 top-0 md:top-1/2 w-10 h-10 md:w-14 md:h-14 -translate-y-1/2 -translate-x-1/2 rounded-full flex items-center justify-center z-10 transition-colors duration-300
                    ${isFuture 
                      ? "bg-slate-100 dark:bg-slate-900 border-2 border-dashed border-slate-400 dark:border-slate-500 text-slate-500" 
                      : isCurrent 
                        ? "bg-blue-50 dark:bg-slate-800 border-4 border-blue-500 text-blue-600 dark:text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                        : "bg-purple-50 dark:bg-slate-800 border-4 border-purple-500 text-purple-600 dark:text-purple-400"
                    }
                  `}
                >
                  {/* Pulse effect for the "Current" node */}
                  {isCurrent && (
                    <span className="absolute inset-0 rounded-full animate-ping bg-blue-500/40 dark:bg-blue-400/40" />
                  )}
                  <span className="relative z-10">{item.icon}</span>
                </motion.div>

                {/* CONTENT CARD */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`w-full pl-[60px] md:pl-0 md:w-[45%] ${
                    isLeft ? "md:mr-auto md:pr-12 md:text-right" : "md:ml-auto md:pl-12 md:text-left"
                  }`}
                >
                  <div className={`backdrop-blur-md p-8 rounded-3xl transition-all duration-300 group
                    ${isFuture 
                      ? "bg-slate-100/50 dark:bg-white/5 border border-dashed border-slate-300 dark:border-slate-700" 
                      : "bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-xl hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)] hover:-translate-y-1 hover:border-blue-500/30"
                    }
                  `}>
                    
                    {/* Status / Year Badge */}
                    <div className={`inline-block px-4 py-1.5 mb-4 text-xs font-bold rounded-full border uppercase tracking-wider
                      ${isFuture 
                        ? "bg-slate-200 dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400" 
                        : isCurrent
                          ? "bg-blue-100 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-300"
                          : "bg-purple-100 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20 text-purple-700 dark:text-purple-300"
                      }
                    `}>
                      {item.year}
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-2 transition-colors
                      ${isFuture ? "text-slate-600 dark:text-slate-400" : "text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400"}
                    `}>
                      {item.role}
                    </h3>

                    {/* Tech Stack Subtitle */}
                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4">
                      {item.tech}
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
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

export default JourneyMap;