'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

export function FlowButton({ text = "Modern Button", className = "", ...props }) {
  // Common animation timing to ensure synchronization
  const transitionBase = "transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]";
  
  return (
    <button 
      {...props}
      className={`group relative inline-flex items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] border-transparent bg-transparent px-8 py-3 text-[11px] md:text-xs tracking-[0.15em] font-semibold text-white cursor-pointer hover:border-primary/30 hover:text-primary hover:rounded-[12px] active:scale-[0.95] transform-gpu isolation-auto ${transitionBase} ${className}`}
      style={{
        // Force hardware acceleration and fix corner clipping quirks in Webkit browsers
        WebkitMaskImage: '-webkit-radial-gradient(white, black)',
        maskImage: 'radial-gradient(white, black)',
        backfaceVisibility: 'hidden'
      }}
    >
      {/* Base Background Layer - Now explicitly rounded to match parent and prevent leakage */}
      <div className={`absolute inset-0 bg-primary z-0 rounded-[100px] group-hover:rounded-[12px] ${transitionBase}`} />

      {/* Left arrow appearing on hover */}
      <ArrowRight 
        className="absolute w-4 h-4 left-[-25%] stroke-white fill-none z-[9] group-hover:left-4 group-hover:stroke-primary transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
      />

      {/* Text with slide effect */}
      <span className="relative z-[1] translate-x-1 group-hover:translate-x-3 transition-all duration-[800ms] ease-out uppercase pointer-events-none">
        {text}
      </span>

      {/* Scale-based hover background — covers any button width perfectly */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full opacity-0 scale-0 group-hover:scale-[30] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] pointer-events-none z-0"></span>

      {/* Right arrow disappearing on hover */}
      <ArrowRight 
        className="absolute w-4 h-4 right-4 stroke-white fill-none z-[9] group-hover:right-[-25%] group-hover:stroke-primary transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
      />
    </button>
  );
}
