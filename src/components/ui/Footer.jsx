import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
      className="bg-gradient-to-b from-surface to-background w-full py-10 md:py-12 px-4 sm:px-10 mt-6 tonal-shift"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full border-t border-outline/20 pt-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <img src="/images/logo_final.png" alt="International Luxury Spa" className="h-[60px] w-auto object-contain opacity-80" />
          <span className="font-['Manrope'] text-xs tracking-[0.15em] uppercase text-on-surface-variant">© 2024 INTERNATIONAL LUXURY SPA. ALL RIGHTS RESERVED.</span>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Link className="font-['Manrope'] text-xs tracking-[0.15em] uppercase text-primary hover:text-primary/70 transition-all" to="/about">ABOUT</Link>
          <Link className="font-['Manrope'] text-xs tracking-[0.15em] uppercase text-primary hover:text-primary/70 transition-all" to="/services">TREATMENTS</Link>
          <Link className="font-['Manrope'] text-xs tracking-[0.15em] uppercase text-primary hover:text-primary/70 transition-all" to="/gallery">GALLERY</Link>
          <Link className="font-['Manrope'] text-xs tracking-[0.15em] uppercase text-primary hover:text-primary/70 transition-all" to="/contact">CONTACT</Link>
        </div>
        <div className="flex gap-6">
          <a className="text-primary hover:text-primary/70 transition-colors" href="#"><span className="material-symbols-outlined text-xl">camera</span></a>
          <a className="text-primary hover:text-primary/70 transition-colors" href="#"><span className="material-symbols-outlined text-xl">alternate_email</span></a>
        </div>
      </div>
    </motion.footer>
  );
}
