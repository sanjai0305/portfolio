import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from 'framer-motion';

function Contact() {
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
    <section id="contact" className="py-24 px-6 bg-slate-50 dark:bg-slate-900 relative overflow-hidden text-center transition-colors duration-300">
      
      {/* Subtle Background Glow behind the section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Whether you have a question, a project idea, or just want to connect, feel free to reach out. I'll do my best to get back to you!
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {/* Email Card - Opens default mail client */}
          <motion.a 
            variants={itemVariants}
            href="mailto:sanjaim0940r@gmail.com" 
            className="group bg-white dark:bg-white/5 backdrop-blur-lg border border-slate-200 dark:border-white/10 p-8 rounded-3xl hover:-translate-y-2 hover:border-blue-300 dark:hover:border-blue-500/30 shadow-lg hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)] transition-all duration-300 flex flex-col items-center"
          >
            <div className="p-4 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Email</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">sanjaim0940r@gmail.com</p>
          </motion.a>

          {/* Phone Card - Prompts call on mobile */}
          <motion.a 
            variants={itemVariants}
            href="tel:+918637628773" 
            className="group bg-white dark:bg-white/5 backdrop-blur-lg border border-slate-200 dark:border-white/10 p-8 rounded-3xl hover:-translate-y-2 hover:border-purple-300 dark:hover:border-purple-500/30 shadow-lg hover:shadow-[0_8px_30px_rgb(168,85,247,0.15)] transition-all duration-300 flex flex-col items-center"
          >
            <div className="p-4 bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Phone</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">+91 8637628773</p>
          </motion.a>

          {/* Location Card */}
          <motion.div 
            variants={itemVariants}
            className="group bg-white dark:bg-white/5 backdrop-blur-lg border border-slate-200 dark:border-white/10 p-8 rounded-3xl hover:-translate-y-2 hover:border-emerald-300 dark:hover:border-emerald-500/30 shadow-lg hover:shadow-[0_8px_30px_rgb(16,185,129,0.15)] transition-all duration-300 flex flex-col items-center"
          >
            <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Location</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">Salem, Tamil Nadu, India</p>
          </motion.div>

        </motion.div>

        {/* Social Links as Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center items-center gap-6"
        >
          <a 
            href="https://github.com/sanjai0305" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-3.5 bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 hover:shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-1 transition-all duration-300"
          >
            <FaGithub className="text-2xl" />
            <span className="font-semibold">GitHub</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/sanjai0426" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-3.5 bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl text-slate-700 dark:text-slate-300 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(10,102,194,0.1)] dark:hover:shadow-[0_0_20px_rgba(10,102,194,0.2)] hover:-translate-y-1 transition-all duration-300"
          >
            <FaLinkedin className="text-2xl" />
            <span className="font-semibold">LinkedIn</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;