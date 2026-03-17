import React from 'react';
import { User, BrainCircuit, Blocks, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

function About() {
  const highlights = [
    {
      icon: <BrainCircuit className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      title: "AI & ML Focus",
      desc: "Pursuing B.Tech with a deep dive into building data-driven, intelligent systems."
    },
    {
      icon: <Blocks className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Full Stack & DevOps",
      desc: "Specializing in scalable web applications and modern, automated deployment practices."
    },
    {
      icon: <Trophy className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      title: "Hackathon Enthusiast",
      desc: "Passionate about participating in hackathons to build fast, real-world solutions under pressure."
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
    <section id="about" className="py-24 px-6 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto relative z-10"
      >
        
        {/* Section Header */}
        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center mb-12 text-center">
          <div className="p-3 bg-slate-200 dark:bg-white/5 rounded-2xl border border-slate-300 dark:border-white/10 mb-4 inline-block">
            <User className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 mb-6">
            About Me
          </h2>
        </motion.div>

        {/* Main Text Content */}
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto bg-white dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 p-8 md:p-10 rounded-3xl text-center mb-16 shadow-xl hover:shadow-[0_8px_30px_rgb(59,130,246,0.05)] transition-all duration-300">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg md:text-xl font-medium">
            I am an aspiring <span className="text-blue-600 dark:text-blue-400 font-semibold">Full Stack Developer</span> and <span className="text-blue-600 dark:text-blue-400 font-semibold">DevOps Engineer</span> currently pursuing my B.Tech in <span className="text-purple-600 dark:text-purple-400 font-semibold">Artificial Intelligence and Machine Learning</span>. 
            <br className="hidden md:block my-4" />
            My expertise lies in bridging the gap between intelligent algorithms and robust web architecture. I specialize in building highly scalable web applications, integrating complex AI solutions, and deploying these systems using modern, efficient DevOps practices. 
          </p>
        </motion.div>

        {/* Highlight Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white dark:bg-slate-800/50 backdrop-blur-lg border border-slate-200 dark:border-white/10 p-8 rounded-2xl hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgb(59,130,246,0.1)] transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-100 dark:border-white/5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}

export default About;