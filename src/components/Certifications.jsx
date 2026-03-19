import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Trophy, Medal, Image as ImageIcon, X, ArrowRight, ZoomIn } from 'lucide-react';

// 🟢 Import your certificate images here
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';

function Certifications() {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // 🟢 State for Zoom View

  // Prevent background scrolling when gallery or zoom is open
  useEffect(() => {
    if (showGallery || selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showGallery, selectedImage]);

  const certImages = [img1, img2, img3, img4, img5, img6];

  // 🟢 UPGRADED: Corrected Achievements Data
  const data = [
    { title: "Machine Learning Basics", org: "Coursera", type: "cert", year: "2025" },
    { title: "Full Stack Development", org: "Self Learning", type: "cert", year: "2025" },
    { title: "Smart Crowd Management", org: "PSG iTech Hackathon", type: "achievement", year: "2026" },
    { title: "Sentiment Analysis System", org: "National Hackathon", type: "achievement", year: "2025" },
    { title: "Quiz Management System", org: "College Mini Project", type: "achievement", year: "2025" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } }
  };

  return (
    <section id="certifications" className="py-24 px-6 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      
      {/* Background Ambient Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 dark:bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 dark:bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mb-12 text-center"
        >
          <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl mb-6 relative overflow-hidden">
            <Medal className="w-10 h-10 text-slate-800 dark:text-slate-100 relative z-10" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500 dark:from-white dark:to-slate-400 mb-6 tracking-tight">
            Certifications & Achievements
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Milestones, continuous learning, and project recognitions.
          </p>
        </motion.div>

        {/* TOP FEATURE: Premium Gallery Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          onClick={() => setShowGallery(true)}
          className="mb-16 cursor-pointer group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-[1px] shadow-2xl shadow-blue-500/20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
          <div className="relative bg-white dark:bg-slate-950 px-8 py-10 rounded-[23px] flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden">
            
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-500/20 blur-[60px] rounded-full pointer-events-none" />
            
            <div className="flex items-center gap-6 relative z-10">
              <div className="p-4 bg-blue-50 dark:bg-blue-500/10 rounded-2xl text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <ImageIcon className="w-8 h-8" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">View Certificate Gallery</h3>
                <p className="text-slate-600 dark:text-slate-400">Click here to view my original course completion certificates.</p>
              </div>
            </div>
            
            <div className="flex-shrink-0 relative z-10">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements List */}
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
              className="group relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-6 rounded-2xl flex items-center gap-5 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition-all duration-300"
            >
              <div className={`p-4 rounded-xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 border ${
                item.type === "cert" 
                  ? "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-500/20" 
                  : "bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-500/20"
              }`}>
                {item.type === "cert" ? <Award className="w-6 h-6" /> : <Trophy className="w-6 h-6" />}
              </div>

              <div className="text-left flex-grow">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
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

      {/* 🚀 LEVEL 1: FULL-SCREEN GRID GALLERY OVERLAY */}
      <AnimatePresence>
        {showGallery && !selectedImage && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center">
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowGallery(false)}
              className="absolute inset-0 bg-slate-900/95 backdrop-blur-xl"
            />

            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="relative w-full h-full max-w-7xl mx-auto flex flex-col p-4 md:p-8"
            >
              {/* Gallery Header */}
              <div className="flex items-center justify-between text-white mb-8 mt-4">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">Certificate Gallery</h2>
                  <p className="text-slate-400 mt-1">Click any image to view in full size.</p>
                </div>
                <button 
                  onClick={() => setShowGallery(false)}
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors flex items-center gap-2"
                >
                  <X className="w-6 h-6" />
                  <span className="hidden sm:block font-medium">Close</span>
                </button>
              </div>

              {/* Scrollable Image Grid */}
              <div className="flex-1 overflow-y-auto custom-scrollbar pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pr-2">
                  {certImages.map((imgSrc, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setSelectedImage(imgSrc)} // 🟢 Click opens Zoom View
                      className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-blue-500 transition-colors duration-300 cursor-pointer"
                    >
                      <img 
                        src={imgSrc} 
                        alt={`Certificate ${index + 1}`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Hover Overlay with Zoom Icon */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                        <ZoomIn className="w-10 h-10 text-white mb-2" />
                        <span className="text-white font-medium">View Full Size</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 🚀 LEVEL 2: INDIVIDUAL IMAGE ZOOM VIEW */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
            {/* Click outside the image to close Zoom view and go back to Gallery */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)} 
              className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-zoom-out"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <img 
                src={selectedImage} 
                alt="Selected Certificate" 
                className="w-full h-full object-contain rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default Certifications;