'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Code, Cpu } from 'lucide-react';

const journey = [
  {
    id: 1,
    type: 'education',
    date: 'Aug 2024 - Present',
    title: 'B.Tech in Computer Science & Engineering',
    organization: 'Veer Surendra Sai University of Technology (VSSUT), Burla',
    description: 'Currently in 2nd Year (4th Semester). Focusing on core computer science fundamentals, data structures, algorithms, and logic design.',
    icon: <GraduationCap size={24} className="text-white" />
  },
  {
    id: 2,
    type: 'experience',
    date: 'Oct 2025 - Present',
    title: 'Independent Software Developer',
    organization: 'Self-Directed Projects',
    description: 'Developed complex terminal-based UI systems in C for hospital management and engineered interactive web extensions using DOM manipulation and 3D object integration.',
    icon: <Code size={24} className="text-white" />
  },
  {
    id: 3,
    type: 'experience',
    date: 'June 2025 - Oct 2025',
    title: 'Hardware & Math Simulation Research',
    organization: 'Academic Projects',
    description: 'Prepared for competitive hackathons and built hardware simulations in Proteus, including a Smart Grid Transformer Safety Controller. Applied Laplace transforms and Fourier series to biological problem statements.',
    icon: <Cpu size={24} className="text-white" />
  }
];

export default function Experience() {
  return (
    <section className="py-32 px-6 max-w-5xl mx-auto bg-[#050505]">
      <div className="mb-20 text-center md:text-left">
        <p className="text-gray-400 uppercase tracking-widest text-sm mb-4 font-semibold">My Journey</p>
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          Experience & <br className="hidden md:block" />
          <span className="text-gray-600">Education</span>
        </h2>
      </div>

      <div className="relative border-l border-gray-800 ml-4 md:ml-0 md:pl-8">
        {journey.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            className="mb-16 relative pl-8 md:pl-0"
          >
            {/* Glowing Icon on the Timeline */}
            <div className="absolute -left-[41px] md:-left-[57px] top-0 w-12 h-12 bg-[#0a0a0a] border border-gray-700 rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              {item.icon}
            </div>

            <div className="bg-[#0a0a0a] border border-gray-800/60 p-8 rounded-3xl hover:border-gray-600 transition-colors duration-300">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-mono text-gray-300 bg-white/5 border border-white/10 rounded-full">
                {item.date}
              </span>
              <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">{item.title}</h3>
              <p className="text-lg text-gray-300 font-medium mb-4">{item.organization}</p>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}