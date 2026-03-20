'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto bg-[#050505] relative z-10 border-t border-gray-900">
      <div className="flex flex-col lg:flex-row gap-20">
        
        {/* Left Side: Text & Socials */}
        <div className="w-full lg:w-1/2">
          <p className="text-gray-400 uppercase tracking-widest text-sm mb-4 font-semibold">Get In Touch</p>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8">
            Let's Work <br />
            <span className="text-gray-600">Together</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-12 max-w-md">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col gap-6">
            <a href="mailto:your.email@example.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
              <div className="p-4 bg-[#0a0a0a] border border-gray-800 rounded-full group-hover:border-gray-500 transition-colors">
                <Mail size={24} />
              </div>
              <span className="text-lg font-mono">your.email@example.com</span>
            </a>
            
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
              <div className="p-4 bg-[#0a0a0a] border border-gray-800 rounded-full group-hover:border-gray-500 transition-colors">
                <Github size={24} />
              </div>
              <span className="text-lg font-mono">github.com/yourusername</span>
            </a>

            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
              <div className="p-4 bg-[#0a0a0a] border border-gray-800 rounded-full group-hover:border-gray-500 transition-colors">
                <Linkedin size={24} />
              </div>
              <span className="text-lg font-mono">linkedin.com/in/yourusername</span>
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-1/2 bg-[#0a0a0a] border border-gray-800/60 p-10 md:p-14 rounded-3xl"
        >
          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="name" className="text-sm font-semibold text-gray-400 tracking-wide">Name*</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe" 
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                  required
                />
              </div>
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="email" className="text-sm font-semibold text-gray-400 tracking-wide">Email*</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                  required
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-3">
              <label htmlFor="message" className="text-sm font-semibold text-gray-400 tracking-wide">Message*</label>
              <textarea 
                id="message" 
                rows={4} 
                placeholder="What's on your mind?" 
                className="w-full bg-transparent border-b border-gray-700 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors resize-none"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="mt-4 flex items-center justify-between px-8 py-5 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors w-full group"
            >
              Send Message
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}