'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Emergency Room Patient Management System',
    category: 'Data Structures Software',
    description: 'A core C-based application designed to manage patient flow, prioritize emergencies, and handle hospital queues using advanced data structures.',
    tech: ['C', 'Data Structures', 'Algorithms', 'Terminal UI'],
    image: '/placeholder-project-1.jpg', // You can replace these with actual screenshots later
  },
  {
    id: 2,
    title: 'Cyberpunk Chrome Extension',
    category: 'Web Development',
    description: 'A highly interactive custom new tab page featuring a real-time clock, search bar, weather widget, and embedded 3D object interactions.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Blender / 3D'],
    image: '/placeholder-project-2.jpg',
  },
  {
    id: 3,
    title: 'Smart Grid Transformer Safety Controller',
    category: 'Hardware Simulation',
    description: 'A Digital Logic Design (DLD) project simulating a safety control mechanism for power grids, modeled and tested entirely within Proteus.',
    tech: ['Proteus', 'Logic Gates', 'Circuit Simulation', 'DLD'],
    image: '/placeholder-project-3.jpg',
  },
  {
    id: 4,
    title: 'Hacker Terminal Portfolio',
    category: 'Web Development',
    description: 'A creative, CLI-themed portfolio website that mimics a computer terminal, built with a strict monochrome aesthetic and interactive command inputs.',
    tech: ['JavaScript', 'CSS', 'DOM Manipulation'],
    image: '/placeholder-project-4.jpg',
  }
];

export default function Projects() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto bg-[#050505]">
      <div className="mb-20">
        <p className="text-gray-400 uppercase tracking-widest text-sm mb-4 font-semibold">My Work</p>
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          Featured <br /><span className="text-gray-600">Projects</span>
        </h2>
      </div>

      <div className="flex flex-col gap-24">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}
          >
            {/* Project Image Placeholder */}
            <div className="w-full md:w-1/2 h-[300px] md:h-[450px] bg-[#0a0a0a] border border-gray-800 rounded-3xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div className="flex gap-4">
                  <button className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                    <ExternalLink size={20} />
                  </button>
                  <button className="p-3 bg-gray-900 text-white border border-gray-700 rounded-full hover:border-white transition-colors">
                    <Github size={20} />
                  </button>
                </div>
              </div>
              {/* Note: When you have real screenshots, use Next.js <Image /> component here instead of a div */}
              <div className="w-full h-full flex items-center justify-center text-gray-700 font-mono text-sm">
                [ Screenshot Placeholder ]
              </div>
            </div>

            {/* Project Info */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <p className="text-gray-400 font-mono text-sm mb-4">{project.category}</p>
              <h3 className="text-3xl font-bold text-white mb-6">{project.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-[#111] border border-gray-800 text-gray-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}