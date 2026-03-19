import React, { useEffect, useState } from 'react';
import { Github, Star, GitFork, ExternalLink, FolderGit2, Loader2, Circle } from 'lucide-react';
import { motion } from 'framer-motion';

function GithubProjects() {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching from your specific GitHub username
    fetch("https://api.github.com/users/sanjai0305/repos")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch repositories");
        return res.json();
      })
      .then((data) => {
        // Sort by latest updated and grab the top 6
        const sorted = data.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );
        setRepos(sorted.slice(0, 6));
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load GitHub projects at this time.");
        setIsLoading(false);
      });
  }, []);

  // Premium Framer Motion staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: "spring", stiffness: 60, damping: 15 } 
    }
  };

  return (
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      
      {/* 🟢 Premium Deep Ambient Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ x: [0, 50, -50, 0], y: [0, 50, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-600/10 dark:bg-blue-500/10 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ x: [0, -50, 50, 0], y: [0, -50, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-indigo-600/10 dark:bg-indigo-500/10 blur-[150px] rounded-full" 
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mb-16"
        >
          <motion.div 
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl mb-6 relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Github className="w-10 h-10 text-slate-800 dark:text-slate-100 relative z-10" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500 dark:from-white dark:to-slate-400 mb-4 tracking-tight">
            Live GitHub Activity
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            My most recently updated repositories pulled directly from GitHub.
          </p>
        </motion.div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-10 h-10 text-blue-500 animate-spin mb-4" />
            <p className="text-slate-500 font-medium">Fetching latest repositories...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="py-20 text-red-500 dark:text-red-400 font-medium">
            {error}
          </div>
        )}

        {/* Projects Grid */}
        {!isLoading && !error && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
          >
            {repos.map((repo) => (
              <motion.div
                key={repo.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-8 rounded-[2rem] flex flex-col hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Subtle Hover Gradient Inside Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                {/* Repo Name & Description */}
                <div className="mb-6 flex-grow relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-blue-50 dark:bg-blue-500/10 rounded-xl">
                      <FolderGit2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                      {repo.name}
                    </h3>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                    {repo.description || "No description provided for this repository."}
                  </p>
                </div>

                {/* Repo Stats & Language */}
                <div className="flex items-center justify-between mt-auto pt-5 border-t border-slate-200/50 dark:border-slate-800/50 text-sm text-slate-500 dark:text-slate-400 relative z-10">
                  
                  {/* Language Indicator */}
                  <div className="flex items-center gap-2 font-medium">
                    {repo.language ? (
                      <>
                        <Circle className="w-3 h-3 fill-blue-500 text-blue-500" />
                        <span className="text-slate-700 dark:text-slate-300">{repo.language}</span>
                      </>
                    ) : (
                      <span className="italic opacity-70">Mixed</span>
                    )}
                  </div>

                  {/* Stars & Forks */}
                  <div className="flex items-center gap-4 font-medium">
                    <div className="flex items-center gap-1.5 hover:text-amber-500 transition-colors">
                      <Star className="w-4 h-4" />
                      <span className="text-slate-700 dark:text-slate-300">{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1.5 hover:text-blue-500 transition-colors">
                      <GitFork className="w-4 h-4" />
                      <span className="text-slate-700 dark:text-slate-300">{repo.forks_count}</span>
                    </div>
                  </div>
                </div>

                {/* Invisible whole-card link covering the card for better UX */}
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20 rounded-[2rem]"
                  aria-label={`View ${repo.name} on GitHub`}
                ></a>
                
                {/* Visual indicator that it's a link (positioned top right) */}
                <ExternalLink className="absolute top-8 right-8 w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-blue-500 transition-colors z-10" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default GithubProjects;