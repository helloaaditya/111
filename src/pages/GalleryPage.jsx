import React from 'react';
import { motion } from 'motion/react';
import TextReveal from '../components/ui/TextReveal';

const galleryImages = [
  { src: "/images/2024-10-22.jpg", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/2024-07-24.jpg", span: "md:col-span-1 md:row-span-1" },
  { src: "/images/premium_spa_hero.png", span: "md:col-span-1 md:row-span-1" },
  { src: "/images/2024-07-30 (1).jpg", span: "md:col-span-1 md:row-span-2" },
  { src: "/images/2024-07-30.jpg", span: "md:col-span-1 md:row-span-1" },
  { src: "/images/2024-09-26.jpg", span: "md:col-span-2 md:row-span-1" },
  { src: "/images/2024-09-26 (1).jpg", span: "md:col-span-1 md:row-span-1" },
  { src: "/images/2024-07-17 (1).jpg", span: "md:col-span-2 md:row-span-1" },
  { src: "/images/2024-07-17 (2).jpg", span: "md:col-span-1 md:row-span-1" },
  { src: "/images/2024-07-30 (3).jpg", span: "md:col-span-1 md:row-span-2" },
  { src: "/images/2024-10-22 (2).jpg", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/2024-07-30 (5).jpg", span: "md:col-span-1 md:row-span-1" },
  { src: "/images/2024-09-26 (2).jpg", span: "md:col-span-2 md:row-span-1" },
  { src: "/images/2024-10-22 (4).jpg", span: "md:col-span-1 md:row-span-1" },
];

export default function GalleryPage() {
  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden pb-32">
      
      {/* Gallery Hero */}
      <section className="relative w-full py-24 md:py-32 px-6 flex items-center justify-center text-center">
        <div className="relative z-10 container mx-auto max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="font-label text-xs uppercase tracking-[0.3em] text-tertiary mb-6 block"
          >
            AESTHETICS OF WELLNESS
          </motion.span>
          <div className="font-headline text-5xl md:text-7xl text-on-surface leading-tight tracking-tight mb-8">
            <TextReveal word="The Sanctuary" />
            <TextReveal word="Gallery" className="italic text-primary" delayOffset={5} />
          </div>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
            className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
          >
            Immerse yourself in the visual serenity of our facilities. Every architectural detail is designed to induce profound calm before your treatment even begins.
          </motion.p>
        </div>
      </section>

      {/* Bento Grid Gallery */}
      <section className="px-6 w-full">
        <div className="container mx-auto max-w-7xl">
          
          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4 md:gap-6">
            {galleryImages.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-100px" }} 
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative group rounded-3xl overflow-hidden bg-surface shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer ${img.span}`}
              >
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay z-10"></div>
                <img 
                  src={img.src} 
                  alt={`Sanctuary interior detail ${i+1}`} 
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
