'use client';
import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { FlowButton } from './FlowButton';
import { MenuContainer, MenuItem } from './FluidMenu';
import { Menu as MenuIcon, X } from 'lucide-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // Only hide if we have scrolled past 100px and we are scrolling down
    if (latest > 100 && latest > previous) {
      setHidden(true);
    } 
    // Always show if scrolling up, or if we are exactly at the top
    else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-150%", opacity: 0 }
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-4 left-4 right-4 md:left-8 md:right-8 z-50 flex justify-center pointer-events-none"
    >
      <nav className="pointer-events-auto w-full max-w-6xl bg-white/60 backdrop-blur-md flex justify-between items-center px-4 md:px-8 py-2 md:py-2.5 rounded-full border border-black/5 shadow-2xl transition-all select-none outline-none">
        <div className="flex items-center gap-4">
          <img src="/images/logo_final.png" alt="International Luxury Spa" className="h-[40px] md:h-[65px] -my-1 w-auto object-contain drop-shadow-md origin-left pl-1 pointer-events-none" />
        </div>
        <div className="hidden md:flex items-center gap-10">
          <a className="text-primary font-semibold font-label text-[10px] tracking-widest hover:opacity-90 transition-opacity duration-300 outline-none" href="#">HOME</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-label text-[10px] tracking-widest outline-none" href="#">TREATMENTS</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-label text-[10px] tracking-widest outline-none" href="#">PHILOSOPHY</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-label text-[10px] tracking-widest outline-none" href="#">JOURNAL</a>
        </div>
        <div className="hidden sm:block">
          <FlowButton text="BOOK APPOINTMENT" />
        </div>
        
        {/* Mobile Fluid Menu Container */}
        <div className="block sm:hidden shrink-0">
          <MenuContainer>
            {/* Trigger (First Child) */}
            <div className="relative w-6 h-6 flex items-center justify-center outline-none select-none">
              <div className="flex flex-col items-center justify-center w-full h-full gap-[6px] pointer-events-none">
                <span className="w-[22px] h-[1.5px] bg-primary rounded-full transition-all duration-[400ms] ease-out origin-center [div[data-expanded=true]_&]:translate-y-[7.5px] [div[data-expanded=true]_&]:rotate-45"></span>
                <span className="w-[22px] h-[1.5px] bg-primary rounded-full transition-all duration-[400ms] ease-out origin-center [div[data-expanded=true]_&]:opacity-0"></span>
                <span className="w-[22px] h-[1.5px] bg-primary rounded-full transition-all duration-[400ms] ease-out origin-center [div[data-expanded=true]_&]:-translate-y-[7.5px] [div[data-expanded=true]_&]:-rotate-45"></span>
              </div>
            </div>
            {/* Navigation Items (Text Pills) */}
            <MenuItem>Home</MenuItem>
            <MenuItem>Book Now</MenuItem>
            <MenuItem>Treatments</MenuItem>
            <MenuItem>Journal</MenuItem>
          </MenuContainer>
        </div>
      </nav>
    </motion.div>
  );
}
