import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Wrench, BrainCircuit, Cpu } from 'lucide-react';

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: ["React.js", "Tailwind CSS", "JavaScript"]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      skills: ["Node.js", "Express.js", "Python", "Java", "C++"] // Added C++ based on your profile!
    },
    {
      title: "DevOps & Tools",
      icon: <Wrench className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
      skills: ["Docker", "GitHub", "CI/CD"]
    },
    {
      title: "AI & Machine Learning",
      icon: <BrainCircuit className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      skills: ["NLP", "Machine Learning"]
    }
  ];

  // Framer Motion staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    // Responsive background: slate-50 for light mode, slate-900 for dark mode
    <section id="skills" className="py-24 px-6 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <div className="p-3 bg-slate-200 dark:bg-white/5 rounded-2xl border border-slate-300 dark:border-white/10 mb-4 inline-block">
            <Cpu className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 mb-4">
            Technical Expertise
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical skills, tools, and technologies.
          </p>
        </div>

        {/* Responsive Grid for Categories with Scroll Animations */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-slate-800/50 backdrop-blur-lg border border-slate-200 dark:border-white/10 p-8 rounded-2xl hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgb(59,130,246,0.1)] transition-all duration-300 text-left flex flex-col group"
            >
              {/* Category Header with Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                  {category.title}
                </h3>
              </div>

              {/* Skill Pills/Badges */}
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3.5 py-1.5 text-sm font-semibold bg-slate-100 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-white/10 hover:bg-blue-50 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-white hover:border-blue-200 dark:hover:border-blue-500/30 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;