import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Medal } from 'lucide-react';

function Certifications() {
  const data = [
    {
      title: "Machine Learning Basics",
      org: "Coursera",
      type: "cert",
      year: "2025",
    },
    {
      title: "Full Stack Development",
      org: "Self Learning",
      type: "cert",
      year: "2025",
    },
    {
      title: "National Hackathon Participant",
      org: "Competitive Programming",
      type: "achievement",
      year: "2026",
    },
    {
      title: "AI Project - CrowdGuard",
      org: "College Project",
      type: "achievement",
      year: "2025",
    },
    {
      title: "Sentiment Analysis System",
      org: "Mini Project",
      type: "achievement",
      year: "2025",
    },
  ];

  // Staggered animation variants for the grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="certifications" className="py-24 px-6 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <div className="p-3 bg-slate-200 dark:bg-white/5 rounded-2xl border border-slate-300 dark:border-white/10 mb-4 inline-block">
            <Medal className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Milestones, continuous learning, and project recognitions.
          </p>
        </div>

        {/* Grid Container with Framer Motion Staggering */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {data.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative bg-white dark:bg-white/5 backdrop-blur-lg border border-slate-200 dark:border-white/10 p-6 rounded-2xl flex items-center gap-5 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgb(59,130,246,0.1)] transition-all duration-300"
            >
              {/* Dynamic Icon Styling based on Type */}
              <div className={`p-4 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-110 border ${
                item.type === "cert" 
                  ? "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-500/20" 
                  : "bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-500/20"
              }`}>
                {item.type === "cert" ? <Award className="w-7 h-7" /> : <Trophy className="w-7 h-7" />}
              </div>

              {/* Text Content */}
              <div className="text-left flex-grow">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                    {item.org}
                  </p>
                  <span className="px-2.5 py-1 text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-md">
                    {item.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Certifications;