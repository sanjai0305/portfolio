import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';

// 🟢 STEP 1: Knowledge Base - Ithu thaan unga AI-oda 'Moolai'
const SANJAI_DATA = {
  intro: "Hi! I'm Sanjai's AI Assistant. I can tell you about his projects, skills, and experience. What would you like to know?",
  skills: "Sanjai is a pro in Full Stack (React, Node.js), AI/ML (Python, Scikit-Learn, NLP), and DevOps (Docker, CI/CD).",
  projects: "His top projects are: 1. Quiz Management System (MERN), 2. CrowdGuard AI (Computer Vision), and 3. Sentiment Analysis (NLP).",
  contact: "You can reach Sanjai at sanjaim0940r@gmail.com or find him on LinkedIn as 'sanjai0426'.",
  experience: "Sanjai has a strong roadmap moving from AI/ML foundations towards becoming a DevSecOps Architect.",
  default: "That's interesting! I'm specifically trained on Sanjai's professional background. Try asking about his 'skills', 'projects', or 'contact'!"
};

function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: SANJAI_DATA.intro }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  // Auto-scroll to bottom when new message arrives
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 🟢 STEP 2: Smart Response Logic
  const getBotResponse = (userText) => {
    const text = userText.toLowerCase();
    if (text.includes("skill") || text.includes("know")) return SANJAI_DATA.skills;
    if (text.includes("project") || text.includes("build")) return SANJAI_DATA.projects;
    if (text.includes("contact") || text.includes("email") || text.includes("call")) return SANJAI_DATA.contact;
    if (text.includes("experience") || text.includes("work")) return SANJAI_DATA.experience;
    return SANJAI_DATA.default;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate "Bot is thinking"
    setTimeout(() => {
      const botMessage = { role: 'bot', text: getBotResponse(input) };
      setMessages(prev => [...prev, botMessage]);
    }, 600);

    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[1000]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Sanjai's AI</h3>
                  <p className="text-[10px] opacity-80 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" /> Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'bot' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'bot' 
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none' 
                    : 'bg-blue-600 text-white rounded-tr-none shadow-lg'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={scrollRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
              <div className="relative flex items-center">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about Sanjai..."
                  className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all dark:text-white"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-blue-500/20 relative group"
      >
        <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20 group-hover:hidden" />
        {isOpen ? <X className="w-7 h-7" /> : <Sparkles className="w-7 h-7" />}
      </motion.button>
    </div>
  );
}

export default AIChatbot;