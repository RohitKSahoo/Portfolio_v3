'use client';

import { motion } from 'framer-motion';
import { Code2, Server, Cpu, Layers } from 'lucide-react';

const expertise = [
  {
    id: '01',
    title: 'FULL STACK WEB DEVELOPMENT',
    desc: 'End-to-end web solutions with modern frameworks, responsive design, and seamless user experiences.',
    icon: <Code2 size={32} className="mb-4 text-gray-400 group-hover:text-white transition-colors" />
  },
  {
    id: '02',
    title: 'BACKEND & C/C++ LOGIC',
    desc: 'Robust server-side architectures, logic implementation, and core systems programming.',
    icon: <Server size={32} className="mb-4 text-gray-400 group-hover:text-white transition-colors" />
  },
  {
    id: '03',
    title: '3D ANIMATION & UI',
    desc: 'Engaging digital experiences using Blender for 3D physics simulations, modeling, and custom texturing.',
    icon: <Cpu size={32} className="mb-4 text-gray-400 group-hover:text-white transition-colors" />
  },
  {
    id: '04',
    title: 'DATABASE & DATA STRUCTURES',
    desc: 'Efficient data management and problem-solving using Python, MySQL, and optimized algorithms.',
    icon: <Layers size={32} className="mb-4 text-gray-400 group-hover:text-white transition-colors" />
  }
];

export default function Expertise() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative z-10 bg-[#050505]">
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
        <div>
          <p className="text-gray-400 uppercase tracking-widest text-sm mb-4 font-semibold">My Expertise</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            What I'm <br /><span className="text-gray-600">Offering</span>
          </h2>
        </div>
        <p className="max-w-md text-gray-400 text-lg leading-relaxed md:mt-12">
          I design and build end-to-end digital products — from intuitive user interfaces to scalable backend systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {expertise.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            className="group border border-gray-800/60 bg-[#0a0a0a] p-10 rounded-3xl hover:bg-white/5 hover:border-gray-700 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-8">
              {item.icon}
              <span className="text-gray-700 font-mono text-xl">{item.id}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 tracking-wide">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}