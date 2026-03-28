"use client"

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export function Menu({ trigger, children, align = "left", showChevron = true }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative inline-block text-left">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer inline-flex items-center"
        role="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {trigger}
        {showChevron && (
          <ChevronDown className="ml-2 -mr-1 h-4 w-4 text-on-surface-variant" aria-hidden="true" />
        )}
      </div>

      {isOpen && (
        <div
          className={`absolute ${
            align === "right" ? "right-0" : "left-0"
          } mt-2 w-56 rounded-xl bg-surface-container border border-outline-variant/20 shadow-xl ring-1 ring-black/5 focus:outline-none z-50`}
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-2" role="none">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

export function MenuItem({ children, onClick, href, disabled = false, isActive = false }) {
  const baseClasses = `relative flex items-center justify-end w-full h-full px-5 group whitespace-nowrap select-none outline-none
    ${disabled ? "text-on-surface-variant/40 cursor-not-allowed" : "text-on-surface hover:text-primary"}
    ${isActive ? "text-primary font-bold" : "font-semibold"}
    transition-colors duration-200 cursor-pointer
  `;
  
  const content = (
    <span className="font-label text-xs tracking-widest uppercase origin-right pr-1 pointer-events-none">
      {children}
    </span>
  );

  if (href) {
    return (
      <Link to={href} className={baseClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={baseClasses}
      role="menuitem"
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

export function MenuContainer({ children }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const childrenArray = React.Children.toArray(children)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="relative shrink-0" data-expanded={isExpanded}>
      {/* Container for all items */}
      <div className="relative flex justify-end">
        
        {/* First item (Trigger) - always visible, on top */}
        <div 
          className="relative w-10 h-10 bg-transparent hover:bg-black/5 flex items-center justify-center cursor-pointer rounded-full z-[60] transition-all active:scale-95 shrink-0"
          onClick={handleToggle}
        >
          {childrenArray[0]}
        </div>

        {/* Other items - expanding vertically downwards, anchored right */}
        {childrenArray.slice(1).map((child, index) => {
          const yOffset = isExpanded ? (index + 1) * 52 : 0;
          
          return (
          <div 
            key={index} 
            className="fixed right-4 h-10 w-auto min-w-[130px] max-w-[150px] bg-white/80 backdrop-blur border border-primary/20 rounded-full flex items-center justify-end shadow-lg overflow-hidden"
            style={{
              top: `calc(1rem + 40px + ${yOffset}px)`,
              opacity: isExpanded ? 1 : 0,
              zIndex: isExpanded ? 55 - index : -1,
              transition: `top ${isExpanded ? '400ms' : '300ms'} cubic-bezier(0.34, 1.56, 0.64, 1),
                         opacity ${isExpanded ? '300ms' : '350ms'}`,
              pointerEvents: isExpanded ? 'auto' : 'none'
            }}
          >
            {child}
          </div>
        )})}
      </div>
    </div>
  )
}
