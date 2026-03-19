import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Layers, Bot, Briefcase } from 'lucide-react';

function WhyHireMe() {
  const reasons = [
    {
      id: 1,
      title: "Problem-Solving Mindset",
      icon: <Lightbulb className="w-8 h-8 text-amber-500 dark:text-amber-400" />,
      bgIcon: "bg-amber-50 dark:bg-amber-500/10",
      borderHover: "hover:border-amber-300 dark:hover:border-amber-500/50",
      shadowHover: "hover:shadow-[0_8px_30px_rgba(245,158,11,0.15)]",
      desc: "I don't just write code; I solve complex problems. I focus on understanding the core business requirements and delivering optimized, scalable, and user-centric solutions.",
    },
    {
      id: 2,
      title: "Full Stack + DevOps",
      icon: <Layers className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      bgIcon: "bg-blue-50 dark:bg-blue-500/10",
      borderHover: "hover:border-blue-300 dark:hover:border-blue-500/50",
      shadowHover: "hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]",
      desc: "End-to-end ownership. I seamlessly transition from designing responsive frontend interfaces to architecting robust backend APIs and automating CI/CD deployment pipelines.",
    },
    {
      id: 3,
      title: "AI Integration Focus",
      icon: <Bot className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
      bgIcon: "bg-purple-50 dark:bg-purple-500/10",
      borderHover: "hover:border-purple-300 dark:hover:border-purple-500/50",
      shadowHover: "hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)]",
      desc: "Bridging the gap between traditional software and artificial intelligence. I have hands-on experience integrating machine learning models and NLP into production-ready web apps.",
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
    <section id="why-hire-me" className="py-24 px-6 bg-slate-50 dark:bg-slate-900 relative transition-colors duration-300">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <div className="p-3 bg-slate-200 dark:bg-white/5 rounded-2xl border border-slate-300 dark:border-white/10 mb-4 inline-block">
            <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 mb-4">
            Why Hire Me?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            What I bring to the table and how I can add immediate value to your team.
          </p>
        </div>

        {/* Value Proposition Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {reasons.map((reason) => (
            <motion.div 
              key={reason.id}
              variants={itemVariants}
              className={`group bg-white dark:bg-white/5 backdrop-blur-lg border border-slate-200 dark:border-white/10 p-8 rounded-3xl flex flex-col text-left transition-all duration-300 hover:-translate-y-2 shadow-lg ${reason.borderHover} ${reason.shadowHover}`}
            >
              {/* Dynamic Colored Icon */}
              <div className={`p-4 rounded-2xl mb-6 inline-flex w-fit group-hover:scale-110 transition-transform duration-300 ${reason.bgIcon}`}>
                {reason.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {reason.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default WhyHireMe;