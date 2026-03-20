"use client";

import { useState, useEffect } from 'react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const className = 'nav-open';

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add(className);
    } else {
      document.body.style.overflow = 'auto';
      document.body.classList.remove(className);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.classList.remove(className);
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'home', href: '#home', angle: '-2deg' },
    { name: 'services', href: '#services', angle: '1deg' },
    { name: 'skills', href: '#skills', angle: '-1deg' },
    { name: 'projects', href: '#projects', angle: '2deg' },
    { name: 'experience', href: '#experience', angle: '-2deg' },
    { name: 'contact', href: '#contact', angle: '1deg' },
  ];

  return (
    <>
      {/* The Toggle Button (Hamburger / X) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="nav-trigger magnetic-btn"
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          // 'X' Icon
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          // Minimalist 2-Line Hamburger Icon
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="9" x2="20" y2="9"></line>
            <line x1="4" y1="15" x2="20" y2="15"></line>
          </svg>
        )}
      </button>

      {/* The Fullscreen Blur Overlay */}
      <div className={`nav-overlay ${isOpen ? 'is-open' : ''}`}>
        
        <div className="nav-backdrop" onClick={() => setIsOpen(false)}></div>
        
        <nav className="nav-menu-grid">
          {navLinks.map((link, i) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="nav-card"
              style={{ 
                '--angle': link.angle,
                '--delay': `${i * 0.05}s`
              } as React.CSSProperties}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}