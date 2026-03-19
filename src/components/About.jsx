import React from 'react';
import { User, BrainCircuit, Blocks, Trophy, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

function About() {
  const highlights = [
    {
      icon: <BrainCircuit className="w-7 h-7" />,
      title: "AI & ML Focus",
      desc: "Pursuing B.Tech with a deep dive into building data-driven, intelligent systems and predictive models.",
      gradient: "from-purple-500 to-fuchsia-500",
      textColor: "text-purple-600 dark:text-purple-400",
      glowColor: "group-hover:shadow-purple-500/20 group-hover:border-purple-500/50"
    },
    {
      icon: <Blocks className="w-7 h-7" />,
      title: "Full Stack & DevOps",
      desc: "Specializing in scalable web applications, microservices, and modern, automated CI/CD deployment pipelines.",
      gradient: "from-blue-500 to-cyan-500",
      textColor: "text-blue-600 dark:text-blue-400",
      glowColor: "group-hover:shadow-blue-500/20 group-hover:border-blue-500/50"
    },
    {
      icon: <Trophy className="w-7 h-7" />,
      title: "Hackathon Enthusiast",
      desc: "Passionate about participating in hackathons to architect fast, real-world tech solutions under high pressure.",
      gradient: "from-emerald-500 to-teal-500",
      textColor: "text-emerald-600 dark:text-emerald-400",
      glowColor: "group-hover:shadow-emerald-500/20 group-hover:border-emerald-500/50"
    }
  ];

  // Premium Framer Motion spring physics
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 60, damping: 15 } 
    }
  };

  return (
    <section id="about" className="py-24 px-6 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      
      {/* 🟢 Premium Deep Ambient Lighting (No Grid) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-blue-600/10 dark:bg-blue-500/10 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-purple-600/10 dark:bg-purple-500/10 blur-[150px] rounded-full" 
        />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto relative z-10"
      >
        
        {/* Section Header */}
        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center mb-16 text-center">
          <motion.div 
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl mb-6 relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <User className="w-10 h-10 text-slate-800 dark:text-slate-100 relative z-10" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500 dark:from-white dark:to-slate-400 mb-6 tracking-tight">
            About Me
          </h2>
        </motion.div>

        {/* Main Text Content (Glassmorphism Bento Box) */}
        <motion.div 
          variants={itemVariants} 
          whileHover={{ y: -5 }}
          className="max-w-5xl mx-auto bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-8 md:p-12 rounded-[2.5rem] text-center mb-16 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
        >
          {/* Subtle hover gradient sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
          
          <Sparkles className="w-8 h-8 mx-auto mb-6 text-blue-500 dark:text-blue-400 opacity-50" />
          
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg md:text-2xl font-medium relative z-10">
            I am an aspiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 font-bold">Full Stack Developer</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 dark:from-orange-400 dark:to-amber-400 font-bold">DevOps Engineer</span> currently pursuing my B.Tech in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-400 font-bold">Artificial Intelligence and Machine Learning</span>. 
            <br className="hidden md:block my-6" />
            My expertise lies in bridging the gap between intelligent algorithms and robust web architecture. I specialize in building highly scalable web applications, integrating complex AI solutions, and deploying these systems using modern, efficient DevOps practices. 
          </p>
        </motion.div>

        {/* Highlight Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-8 md:p-10 rounded-[2rem] shadow-lg transition-all duration-500 flex flex-col text-left group overflow-hidden ${item.glowColor}`}
            >
              {/* Internal Glowing Orb that appears on hover */}
              <div className={`absolute -right-16 -top-16 w-48 h-48 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-500 rounded-full z-0`} />

              <div className="relative z-10">
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                  className={`p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm mb-6 w-fit border border-slate-100 dark:border-slate-700 ${item.textColor}`}
                >
                  {item.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}

export default About;