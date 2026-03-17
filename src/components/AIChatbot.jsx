import React, { useState, useRef, useEffect } from 'react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm an AI assistant. Ask me anything about Sanjai! Try asking: 'Who is Sanjai?', 'skills', or 'projects'.", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // Auto-scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMsg = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);
    const currentInput = input.toLowerCase();
    setInput('');

    // Simulate AI thinking delay
    setTimeout(() => {
      let aiResponse = "I'm still learning! Try asking about Sanjai's 'skills', 'projects', or 'experience'.";

      // Dynamic Responses
      if (currentInput.includes('who is')) {
        aiResponse = "Sanjai is a passionate developer who builds smart web applications and innovative software solutions!";
      } else if (currentInput.includes('skill') || currentInput.includes('tech')) {
        aiResponse = "Sanjai is skilled in React, JavaScript, Python, Tailwind CSS, and integrating AI features into modern UIs.";
      } else if (currentInput.includes('project')) {
        aiResponse = "Sanjai has worked on some amazing projects, including a Smart Attendance system using Python and face recognition, an AI Smart Campus Assistant, and a Smart Crowd Management dashboard!";
      } else if (currentInput.includes('experience') || currentInput.includes('work')) {
        aiResponse = "Sanjai has experience building technical projects for hackathons and is geared towards roles in development, logistics, and order management.";
      } else if (currentInput.includes('hi') || currentInput.includes('hello')) {
        aiResponse = "Hello there! What would you like to know about Sanjai today?";
      }

      setMessages((prev) => [...prev, { text: aiResponse, sender: 'ai' }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300">
          
          {/* Header */}
          <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
            <h3 className="font-semibold flex items-center gap-2">
              <span className="text-xl">🤖</span> Ask AI about Sanjai
            </h3>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-300 text-2xl leading-none">
              &times;
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-4 h-64 overflow-y-auto flex flex-col gap-3 bg-gray-800 text-sm">
            {messages.map((msg, idx) => (
              <div key={idx} className={`max-w-[80%] p-3 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white self-end rounded-br-none' : 'bg-gray-700 text-gray-100 self-start rounded-bl-none'}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-gray-900 border-t border-gray-700 flex gap-2">
            <input
              type="text"
              className="flex-1 bg-gray-800 text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
              placeholder="Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center gap-2 transition-transform hover:scale-105 animate-bounce"
        >
          <span className="text-2xl">✨</span> 
          <span className="font-semibold pr-2">Ask AI</span>
        </button>
      )}
    </div>
  );
};

export default AIChatbot;