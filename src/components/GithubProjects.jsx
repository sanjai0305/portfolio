import React, { useEffect, useState } from 'react';
import { Github, Star, GitFork, ExternalLink, FolderGit2, Loader2, Circle } from 'lucide-react';

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

  return (
    // Responsive background: slate-50 for light mode, slate-900 for dark mode
    <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900 text-center transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="p-3 bg-slate-200 dark:bg-white/5 rounded-2xl border border-slate-300 dark:border-white/10 mb-4 inline-block">
            <Github className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 mb-4">
            Live GitHub Activity
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            My most recently updated repositories pulled directly from GitHub.
          </p>
        </div>

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="group relative bg-white dark:bg-white/5 backdrop-blur-lg border border-slate-200 dark:border-white/10 p-7 rounded-2xl flex flex-col hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_8px_30px_rgb(59,130,246,0.1)] transition-all duration-300"
              >
                {/* Repo Name & Description */}
                <div className="mb-6 flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <FolderGit2 className="w-5 h-5 text-slate-400 dark:text-slate-500" />
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                      {repo.name}
                    </h3>
                  </div>
                  
                  {/* line-clamp-2 keeps the cards a uniform height even if the description is long */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                    {repo.description || "No description provided for this repository."}
                  </p>
                </div>

                {/* Repo Stats & Language */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-white/10 text-sm text-slate-500 dark:text-slate-400">
                  
                  {/* Language Indicator */}
                  <div className="flex items-center gap-1.5">
                    {repo.language ? (
                      <>
                        <Circle className="w-3 h-3 fill-blue-500 text-blue-500" />
                        <span>{repo.language}</span>
                      </>
                    ) : (
                      <span className="italic opacity-70">Mixed</span>
                    )}
                  </div>

                  {/* Stars & Forks */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 hover:text-amber-500 transition-colors">
                      <Star className="w-4 h-4" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                      <GitFork className="w-4 h-4" />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                </div>

                {/* Invisible whole-card link covering the card for better UX */}
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label={`View ${repo.name} on GitHub`}
                ></a>
                
                {/* Visual indicator that it's a link (positioned top right) */}
                <ExternalLink className="absolute top-7 right-7 w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-blue-500 transition-colors" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default GithubProjects;