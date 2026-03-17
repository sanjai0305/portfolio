import React, { useState, useRef, useEffect } from 'react';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { 
      command: '', 
      output: 'Welcome to SanjaiOS v1.0.0.\nType "help" to see available commands.' 
    }
  ]);
  const bottomRef = useRef(null);

  // Define your terminal commands here!
  const commands = {
    help: 'Available commands:\n  whoami    - About me\n  skills    - My tech stack\n  projects  - View my work\n  clear     - Clear terminal',
    whoami: 'Sanjai R - Full Stack Developer\nPassionate about building scalable web applications and AI tools.',
    skills: '> React | DevOps | AI/ML | TailwindCSS | Node.js',
    projects: '1. AI Chatbot\n2. SkillGame Platform\n3. Terminal OS Portfolio',
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let output = '';

      if (cmd === 'clear') {
        setHistory([]);
        setInput('');
        return;
      }

      if (commands[cmd]) {
        output = commands[cmd];
      } else if (cmd !== '') {
        output = `Command not found: ${cmd}. Type "help" for a list of commands.`;
      }

      setHistory((prev) => [...prev, { command: cmd, output }]);
      setInput('');
    }
  };

  // Auto-scroll to the bottom when new commands are entered
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="bg-[#0D0D0D] text-green-500 font-mono p-6 min-h-screen w-full text-sm sm:text-base selection:bg-green-500 selection:text-black">
      {/* Render Command History */}
      {history.map((line, index) => (
        <div key={index} className="mb-4">
          {line.command && (
            <div className="flex">
              <span className="text-blue-400 mr-2">guest@sanjai:~$</span>
              <span className="text-white">{line.command}</span>
            </div>
          )}
          <div className="whitespace-pre-wrap mt-1 text-gray-300">{line.output}</div>
        </div>
      ))}

      {/* Active Input Line */}
      <div className="flex items-center mt-2">
        <span className="text-blue-400 mr-2">guest@sanjai:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          className="bg-transparent border-none outline-none text-white flex-1 w-full"
          autoFocus
          spellCheck="false"
          autoComplete="off"
        />
      </div>
      
      {/* Invisible div to scroll to */}
      <div ref={bottomRef} className="pb-10" />
    </div>
  );
};

export default Terminal;