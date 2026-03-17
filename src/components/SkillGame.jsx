import React, { useState, useEffect, useRef } from 'react';

const SkillGame = () => {
  const [score, setScore] = useState(0);
  const [items, setItems] = useState([]);
  const [basketPos, setBasketPos] = useState(50); // Percentage
  const [gameActive, setGameActive] = useState(false);
  const gameAreaRef = useRef(null);

  const skills = ['⚛️', '🐍', '🚀', '💻', '🔥'];
  const bugs = ['🪲', '❌'];

  const startGame = () => {
    setScore(0);
    setItems([]);
    setGameActive(true);
  };

  // Handle Basket Movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!gameActive || !gameAreaRef.current) return;
      const rect = gameAreaRef.current.getBoundingClientRect();
      let newPos = ((e.clientX - rect.left) / rect.width) * 100;
      setBasketPos(Math.max(0, Math.min(90, newPos)));
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [gameActive]);

  // Game Logic Loop
  useEffect(() => {
    if (!gameActive) return;

    const interval = setInterval(() => {
      const isBug = Math.random() > 0.8;
      const newItem = {
        id: Date.now(),
        char: isBug ? bugs[Math.floor(Math.random() * bugs.length)] : skills[Math.floor(Math.random() * skills.length)],
        x: Math.random() * 90,
        y: 0,
        isBug
      };
      setItems(prev => [...prev, newItem]);
    }, 800);

    const moveInterval = setInterval(() => {
      setItems(prev => prev.map(item => ({ ...item, y: item.y + 2 })).filter(item => item.y < 100));
    }, 30);

    return () => {
      clearInterval(interval);
      clearInterval(moveInterval);
    };
  }, [gameActive]);

  // Collision Detection
  useEffect(() => {
    items.forEach(item => {
      if (item.y > 80 && item.y < 90 && Math.abs(item.x - basketPos) < 10) {
        if (item.isBug) setScore(s => Math.max(0, s - 5));
        else setScore(s => s + 10);
        setItems(prev => prev.filter(i => i.id !== item.id));
      }
    });
  }, [items, basketPos]);

  return (
    <section className="py-20 px-6 bg-slate-900/50 backdrop-blur-md border-y border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">🎮 Catch My Skills</h2>
        <p className="text-slate-400 mb-8 font-medium">Catch the tech icons to boost Sanjai's score. Avoid the bugs!</p>

        {!gameActive ? (
          <button 
            onClick={startGame}
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105"
          >
            Start Game
          </button>
        ) : (
          <div 
            ref={gameAreaRef}
            className="relative w-full h-[400px] bg-slate-950 rounded-2xl border-2 border-blue-500/30 overflow-hidden cursor-none"
          >
            <div className="absolute top-4 right-6 text-2xl font-bold text-blue-400">Score: {score}</div>
            
            {/* Falling Items */}
            {items.map(item => (
              <div 
                key={item.id}
                className="absolute text-3xl"
                style={{ left: `${item.x}%`, top: `${item.y}%` }}
              >
                {item.char}
              </div>
            ))}

            {/* Basket (Player) */}
            <div 
              className="absolute bottom-4 h-4 w-20 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)]"
              style={{ left: `${basketPos}%` }}
            />

            {score >= 100 && (
              <div className="absolute inset-0 bg-slate-950/90 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-500">
                <h3 className="text-4xl font-bold text-yellow-400 mb-2">Achievement Unlocked! 🏆</h3>
                <p className="text-white text-lg mb-6">You've reached a score of {score}. Sanjai is definitely ready for your team!</p>
                <button onClick={() => setGameActive(false)} className="text-blue-400 underline underline-offset-4">Close Game</button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillGame;