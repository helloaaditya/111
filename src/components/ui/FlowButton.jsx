'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

export function FlowButton({ text = "Modern Button", className = "", ...props }) {
  return (
    <button {...props} className={`group relative flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-[#E9C176] px-6 py-3 md:px-8 md:py-4 font-label text-[10px] md:text-xs tracking-widest text-white shadow-sm hover:shadow-md cursor-pointer transition-all duration-500 ease-out hover:-translate-y-[2px] active:scale-[0.98] ${className}`}>
      <span className="relative z-[1] whitespace-nowrap">
        {text}
      </span>
      <ArrowRight className="w-4 h-4 stroke-white fill-none transition-transform duration-500 group-hover:translate-x-1" />
    </button>
  );
}
