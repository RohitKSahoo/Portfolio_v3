"use client";

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const bracketsRef = useRef<HTMLDivElement>(null);
  const spinContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const brackets = bracketsRef.current;
    const spinContainer = spinContainerRef.current;
    
    if (!dot || !brackets || !spinContainer) return;

    // State variables
    let targetBtn: HTMLElement | null = null;
    let btnRect: DOMRect | null = null;
    let animationFrameId: number;

    // Targets for smooth interpolation (Lerp)
    const mouse = { x: -100, y: -100 };
    const dotPos = { x: -100, y: -100 };
    const bracketPos = { x: -100, y: -100 };
    const bracketSize = { w: 40, h: 40 };
    const btnPos = { x: 0, y: 0 };

    // Linear Interpolation function for smooth springing
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const render = () => {
      // 1. Dot follows mouse very closely
      dotPos.x = lerp(dotPos.x, mouse.x, 0.6);
      dotPos.y = lerp(dotPos.y, mouse.y, 0.6);
      dot.style.transform = `translate3d(calc(${dotPos.x}px - 50%), calc(${dotPos.y}px - 50%), 0)`;

      if (targetBtn && btnRect) {
        
        // --- THE FIX: DOM DETACHMENT SAFETY CHECK ---
        // If React re-renders and destroys the button we were tracking, reset the cursor safely
        if (!document.body.contains(targetBtn)) {
          targetBtn = null;
          btnRect = null;
          spinContainer.classList.add('is-spinning');
          brackets.classList.remove('is-snapped');
          animationFrameId = requestAnimationFrame(render);
          return;
        }
        // ---------------------------------------------

        // --- MAGNETIC HOVER STATE ---
        const btnCenterX = btnRect.left + btnRect.width / 2;
        const btnCenterY = btnRect.top + btnRect.height / 2;
        
        const dx = mouse.x - btnCenterX;
        const dy = mouse.y - btnCenterY;
        
        const pullX = dx * 0.3;
        const pullY = dy * 0.3;

        btnPos.x = lerp(btnPos.x, pullX, 0.15);
        btnPos.y = lerp(btnPos.y, pullY, 0.15);
        targetBtn.style.transform = `translate3d(${btnPos.x}px, ${btnPos.y}px, 0)`;

        bracketPos.x = lerp(bracketPos.x, btnCenterX + btnPos.x, 0.2);
        bracketPos.y = lerp(bracketPos.y, btnCenterY + btnPos.y, 0.2);
        bracketSize.w = lerp(bracketSize.w, btnRect.width + 16, 0.2);
        bracketSize.h = lerp(bracketSize.h, btnRect.height + 16, 0.2);

      } else {
        // --- IDLE STATE ---
        // Brackets follow mouse smoothly
        bracketPos.x = lerp(bracketPos.x, mouse.x, 0.2);
        bracketPos.y = lerp(bracketPos.y, mouse.y, 0.2);
        bracketSize.w = lerp(bracketSize.w, 40, 0.2);
        bracketSize.h = lerp(bracketSize.h, 40, 0.2);
      }

      // Apply bracket transforms
      brackets.style.transform = `translate3d(calc(${bracketPos.x}px - 50%), calc(${bracketPos.y}px - 50%), 0)`;
      brackets.style.width = `${bracketSize.w}px`;
      brackets.style.height = `${bracketSize.h}px`;

      animationFrameId = requestAnimationFrame(render);
    };

    // Track Mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // Automatically detect ANY button or link hover
    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('button, a, [role="button"]') as HTMLElement;
      if (target) {
        targetBtn = target;
        btnRect = target.getBoundingClientRect(); 
        
        // Temporarily disable CSS transitions on the button so JS can animate it smoothly
        target.style.transition = 'none';
        
        spinContainer.classList.remove('is-spinning');
        brackets.classList.add('is-snapped');
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('button, a, [role="button"]') as HTMLElement;
      if (target && target === targetBtn) {
        // Reset button position smoothly via CSS when mouse leaves
        target.style.transition = 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)';
        target.style.transform = `translate3d(0px, 0px, 0)`;
        
        targetBtn = null;
        btnRect = null;
        btnPos.x = 0;
        btnPos.y = 0;
        
        spinContainer.classList.add('is-spinning');
        brackets.classList.remove('is-snapped');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    
    // Start animation loop
    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={bracketsRef} className="cursor-brackets">
        <div ref={spinContainerRef} className="spin-container is-spinning">
          <span className="corner tl"></span>
          <span className="corner tr"></span>
          <span className="corner bl"></span>
          <span className="corner br"></span>
        </div>
      </div>
    </>
  );
}