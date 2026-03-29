import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './social-icons';
export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
      className="bg-[#11161d] text-white w-full py-16 md:py-20 px-4 md:px-10 mt-12"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        <img src="/images/logo_final.png" alt="International Luxury Spa" className="h-[90px] md:h-[120px] w-auto object-contain drop-shadow-xl" />
        
        <p className="font-body text-white/80 text-lg md:text-xl leading-relaxed mt-4 drop-shadow-sm">
          Welcome to our International Luxury Spa, where indulgence meets tranquility. Escape into a world of rejuvenation and relaxation with our bespoke treatments and serene ambiance, crafted to elevate your wellness experience.
        </p>
        
        <div className="flex gap-6 mt-6">
          <a href="#" className="w-12 h-12 rounded-full border border-[#F5F1EA]/20 flex items-center justify-center text-[#F5F1EA]/70 hover:bg-[#F5F1EA] hover:text-[#11161d] transition-all shadow-md shadow-black/20"><FacebookIcon className="w-5 h-5" /></a>
          <a href="#" className="w-12 h-12 rounded-full border border-[#F5F1EA]/20 flex items-center justify-center text-[#F5F1EA]/70 hover:bg-[#F5F1EA] hover:text-[#11161d] transition-all shadow-md shadow-black/20"><InstagramIcon className="w-5 h-5" /></a>
          <a href="#" className="w-12 h-12 rounded-full border border-[#F5F1EA]/20 flex items-center justify-center text-[#F5F1EA]/70 hover:bg-[#F5F1EA] hover:text-[#11161d] transition-all shadow-md shadow-black/20"><TwitterIcon className="w-5 h-5" /></a>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto border-t border-[#C5A059]/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-wrap justify-center gap-8">
          <Link className="font-label text-[10px] tracking-[0.15em] uppercase text-white/70 hover:text-white hover:drop-shadow-sm transition-all" to="/about">ABOUT</Link>
          <Link className="font-label text-[10px] tracking-[0.15em] uppercase text-white/70 hover:text-white hover:drop-shadow-sm transition-all" to="/services">TREATMENTS</Link>
          <Link className="font-label text-[10px] tracking-[0.15em] uppercase text-white/70 hover:text-white hover:drop-shadow-sm transition-all" to="/gallery">GALLERY</Link>
          <Link className="font-label text-[10px] tracking-[0.15em] uppercase text-white/70 hover:text-white hover:drop-shadow-sm transition-all" to="/contact">CONTACT</Link>
        </div>
        <span className="font-label text-[10px] tracking-[0.15em] uppercase text-white/50 text-center md:text-right">
          © 2024 111 INTERNATIONAL LUXURY SPA. ALL RIGHTS RESERVED.
        </span>
      </div>
    </motion.footer>
  );
}
