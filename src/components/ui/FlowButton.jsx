'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

export function FlowButton({ text = "Modern Button", className = "", ...props }) {
  return (
    <button 
      {...props}
      className={`group relative flex items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] border-transparent bg-gradient-to-r from-primary to-[#E9C176] px-8 py-3 text-[11px] md:text-xs tracking-[0.15em] font-semibold text-white cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-primary/30 hover:text-primary hover:rounded-[12px] active:scale-[0.95] ${className}`}
    >
      {/* Left arrow (arr-2) appearing on hover */}
      <ArrowRight 
        className="absolute w-4 h-4 left-[-25%] stroke-white fill-none z-[9] group-hover:left-4 group-hover:stroke-primary transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
      />

      {/* Text with slide effect */}
      <span className="relative z-[1] translate-x-1 group-hover:translate-x-3 transition-all duration-[800ms] ease-out uppercase">
        {text}
      </span>

      {/* Hover Background Circle Expansion */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/90 backdrop-blur-sm rounded-[50%] opacity-0 group-hover:w-[280px] group-hover:h-[280px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]"></span>

      {/* Right arrow (arr-1) disappearing on hover */}
      <ArrowRight 
        className="absolute w-4 h-4 right-4 stroke-white fill-none z-[9] group-hover:right-[-25%] group-hover:stroke-primary transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
      />
    </button>
  );
}
