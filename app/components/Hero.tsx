'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, Atom, Leaf, Box, Bot, Gamepad2, Component, 
  Database, Wind, Figma, Github, Cpu, Code2, Layers, Server, Cloud 
} from 'lucide-react';

const words = ["DEVELOPER", "ENGINEER", "BUILDER"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Text Rotation Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Interactive Particle Background Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000, radius: 120 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      // Create 60 subtle dots
      const numParticles = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < Math.min(numParticles, 80); i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5, // Slow drift velocity
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 0.5, // Tiny dot sizes
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000; // Move interaction far away
      mouse.y = -1000;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    resize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'; // Very subtle dark dots for the light theme

      particles.forEach((p) => {
        // Move particles
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Mouse interaction (Repel effect)
        let dx = mouse.x - p.x;
        let dy = mouse.y - p.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = forceDirectionX * force * 2;
          const directionY = forceDirectionY * force * 2;
          
          p.x -= directionX;
          p.y -= directionY;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Pre-calculated perfectly symmetrical positions for 6 items on a circle
  const pos1 = "top-[0%] left-[50%] -translate-x-1/2 -translate-y-1/2";
  const pos2 = "top-[25%] left-[93.3%] -translate-x-1/2 -translate-y-1/2";
  const pos3 = "top-[75%] left-[93.3%] -translate-x-1/2 -translate-y-1/2";
  const pos4 = "top-[100%] left-[50%] -translate-x-1/2 -translate-y-1/2";
  const pos5 = "top-[75%] left-[6.7%] -translate-x-1/2 -translate-y-1/2";
  const pos6 = "top-[25%] left-[6.7%] -translate-x-1/2 -translate-y-1/2";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#f8f9fa] text-black">
      
      {/* ================= INTERACTIVE PARTICLE CANVAS ================= */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* ================= SYMMETRICAL ORBIT RINGS SYSTEM ================= */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        
        {/* Ring 1: Inner (700px) - 30s Speed */}
        <div className="absolute w-[700px] h-[700px] border border-black/10 rounded-full animate-[spin_30s_linear_infinite]">
          <div className={`absolute ${pos1} animate-[spin_30s_linear_infinite_reverse] text-gray-500`}>
            <Atom size={64} />
          </div>
          <div className={`absolute ${pos2} animate-[spin_30s_linear_infinite_reverse]`}>
            <div className="bg-gray-800 text-white font-bold text-xl px-5 py-2 rounded-lg shadow-lg">JS</div>
          </div>
          <div className={`absolute ${pos3} animate-[spin_30s_linear_infinite_reverse] text-gray-400`}>
            <Leaf size={56} />
          </div>
          <div className={`absolute ${pos4} animate-[spin_30s_linear_infinite_reverse]`}>
            <div className="bg-gray-600 text-white font-bold text-xl px-5 py-2 rounded-lg shadow-lg">TS</div>
          </div>
          <div className={`absolute ${pos5} animate-[spin_30s_linear_infinite_reverse]`}>
            <div className="flex items-center justify-center w-16 h-16 bg-black text-white rounded-full font-bold text-3xl shadow-xl">N</div>
          </div>
          <div className={`absolute ${pos6} animate-[spin_30s_linear_infinite_reverse] text-gray-400`}>
            <Bot size={64} />
          </div>
        </div>

        {/* Ring 2: Middle (1150px) - 50s Speed, Spins Reverse */}
        <div className="absolute w-[1150px] h-[1150px] border border-black/10 rounded-full animate-[spin_50s_linear_infinite_reverse]">
          <div className={`absolute ${pos1} animate-[spin_50s_linear_infinite] text-gray-400`}>
            <Cpu size={72} />
          </div>
          <div className={`absolute ${pos2} animate-[spin_50s_linear_infinite] text-gray-300`}>
            <Box size={72} />
          </div>
          <div className={`absolute ${pos3} animate-[spin_50s_linear_infinite] text-gray-400`}>
            <Database size={72} />
          </div>
          <div className={`absolute ${pos4} animate-[spin_50s_linear_infinite] text-gray-300`}>
            <Github size={72} />
          </div>
          <div className={`absolute ${pos5} animate-[spin_50s_linear_infinite] text-gray-300`}>
            <Gamepad2 size={72} />
          </div>
          <div className={`absolute ${pos6} animate-[spin_50s_linear_infinite] text-gray-300`}>
            <Figma size={72} />
          </div>
        </div>

        {/* Ring 3: Outer (1600px) - 80s Speed */}
        <div className="absolute w-[1600px] h-[1600px] border border-black/5 rounded-full animate-[spin_80s_linear_infinite]">
          <div className={`absolute ${pos1} animate-[spin_80s_linear_infinite_reverse] text-gray-300`}>
            <Component size={84} />
          </div>
          <div className={`absolute ${pos2} animate-[spin_80s_linear_infinite_reverse] text-gray-200`}>
            <Wind size={84} />
          </div>
          <div className={`absolute ${pos3} animate-[spin_80s_linear_infinite_reverse] text-gray-300`}>
            <Code2 size={84} />
          </div>
          <div className={`absolute ${pos4} animate-[spin_80s_linear_infinite_reverse] text-gray-200`}>
            <Layers size={84} />
          </div>
          <div className={`absolute ${pos5} animate-[spin_80s_linear_infinite_reverse] text-gray-300`}>
            <Server size={84} />
          </div>
          <div className={`absolute ${pos6} animate-[spin_80s_linear_infinite_reverse] text-gray-200`}>
            <Cloud size={84} />
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 w-full max-w-4xl mt-12">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 px-4 py-1.5 border border-black/10 rounded-full bg-white shadow-sm mb-8"
        >
          <div className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/40"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-black"></span>
          </div>
          <span className="text-xs font-medium uppercase tracking-widest text-gray-600 font-sans">Available for Work</span>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-light text-gray-600 mb-2 font-sans"
        >
          Hello! I'm Rohit Kumar Sahoo. A Creative <span className="text-gray-400">Full-Stack</span>
        </motion.p>

        <div className="relative h-[100px] md:h-[180px] w-full flex justify-center items-center mb-6 overflow-hidden">
          <AnimatePresence>
            <motion.h1
              key={words[index]}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -80 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
              className="absolute text-7xl md:text-[9rem] font-medium text-black tracking-tight font-[family-name:var(--font-outfit)]"
            >
              {words[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10 font-sans"
        >
          I'm a full-stack developer focused on building modern, scalable, and secure web applications. I enjoy working across the stack — from clean, intuitive interfaces to robust backend systems — with an emphasis on performance, reliability, and real-world impact.
        </motion.p>

        <div className="flex gap-4 mt-8">
            <button className="cta-primary">
                Let's Talk
            </button>
            
            <button className="cta-secondary">
                Download CV
                {/* Optional: Add the little arrow SVG here */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
            </button>
        </div>

      </div>
    </section>
  );
}