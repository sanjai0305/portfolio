import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Wrench, BrainCircuit, Cpu, Sparkles } from 'lucide-react';

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-7 h-7" />,
      color: "blue",
      gradient: "from-blue-500 to-cyan-400",
      bgGlow: "group-hover:shadow-blue-500/20",
      borderGlow: "group-hover:border-blue-500/50",
      skills: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"]
    },
    {
      title: "Backend Architecture",
      icon: <Server className="w-7 h-7" />,
      color: "emerald",
      gradient: "from-emerald-500 to-teal-400",
      bgGlow: "group-hover:shadow-emerald-500/20",
      borderGlow: "group-hover:border-emerald-500/50",
      skills: ["Node.js", "Express.js", "Python", "Java", "C++", "MongoDB", "SQL"]
    },
    {
      title: "DevOps & Cloud",
      icon: <Wrench className="w-7 h-7" />,
      color: "orange",
      gradient: "from-orange-500 to-amber-400",
      bgGlow: "group-hover:shadow-orange-500/20",
      borderGlow: "group-hover:border-orange-500/50",
      skills: ["Docker", "GitHub Actions", "CI/CD", "Linux", "Git"]
    },
    {
      title: "AI & Machine Learning",
      icon: <BrainCircuit className="w-7 h-7" />,
      color: "purple",
      gradient: "from-purple-500 to-fuchsia-400",
      bgGlow: "group-hover:shadow-purple-500/20",
      borderGlow: "group-hover:border-purple-500/50",
      skills: ["NLP", "Machine Learning", "Scikit-Learn", "Pandas", "OpenCV"]
    }
  ];

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, y: 0, scale: 1, 
      transition: { type: "spring", stiffness: 70, damping: 15 } 
    }
  };

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="skills" className="py-24 px-6 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      
      {/* 🟢 UPGRADED: Tech Blueprint/Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Dynamic Floating Orbs */}
      <motion.div 
        animate={{ x: [0, 100, -100, 0], y: [0, -100, 100, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-500/20 blur-[150px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ x: [0, -100, 100, 0], y: [0, 100, -100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/20 blur-[150px] rounded-full pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mb-20 text-center"
        >
          <motion.div 
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl mb-6 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Cpu className="w-10 h-10 text-slate-800 dark:text-slate-100" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500 dark:from-white dark:to-slate-400 mb-6 tracking-tight">
            Technical Arsenal
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg md:text-xl">
            The tools, frameworks, and technologies I use to build scalable systems and intelligent applications.
          </p>
        </motion.div>

        {/* 🟢 UPGRADED: Bento Box Grid for Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className={`group relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-8 md:p-10 rounded-[2.5rem] shadow-lg transition-all duration-500 overflow-hidden ${category.bgGlow} ${category.borderGlow}`}
            >
              {/* Animated Glow Behind Card content */}
              <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-500 rounded-full`} />

              {/* Category Header */}
              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.gradient} text-white shadow-lg shadow-${category.color}-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Animated Skill Pills */}
              <motion.div 
                className="flex flex-wrap gap-3 relative z-10"
              >
                {category.skills.map((skill, i) => (
                  <motion.div 
                    key={i} 
                    variants={pillVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-4 py-2 font-semibold text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 shadow-sm cursor-default transition-all duration-300
                      hover:border-transparent hover:text-white dark:hover:text-white hover:shadow-lg
                      hover:bg-gradient-to-r ${category.gradient}
                    `}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;