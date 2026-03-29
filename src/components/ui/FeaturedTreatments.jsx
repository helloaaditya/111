'use client';
import React from 'react';
import { motion } from 'motion/react';
import { FlowButton } from './FlowButton';

const treatments = [
  {
    title: "Thai Massage",
    duration: "90 MIN",
    price: "$180",
    description: "A sensory journey using signature essential oils to balance the limbic system and soothe the nervous system.",
    image: "/images/2024-07-30 (5).jpg",
    alt: "Aroma Massage"
  },
  {
    title: "Swedish Massage",
    duration: "60 MIN",
    price: "$150",
    description: "Classic techniques designed to increase oxygen flow in the blood and release toxins from the muscles.",
    image: "/images/2024-09-26.jpg",
    alt: "Swedish Massage"
  },
  {
    title: "Deep Tissue",
    duration: "75 MIN",
    price: "$210",
    description: "Targeting the inner layers of your muscles and connective tissues to address chronic aches and stiffness.",
    image: "/images/2024-07-30 (7).jpg",
    alt: "Deep Tissue"
  }
];

// Extracted card for cleaner loop mapping
const TreatmentCard = ({ title, duration, price, description, image, alt }) => (
  <div className="min-w-[260px] sm:min-w-[320px] md:min-w-[450px] group">
    <div className="aspect-[16/10] overflow-hidden rounded-3xl mb-6 relative">
      <img 
        alt={alt} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
        src={image} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
        <span className="text-white text-xs tracking-widest font-label">DURATION: {duration}</span>
      </div>
    </div>
    <div className="flex justify-between items-start mb-4">
      <h3 className="font-headline text-2xl text-on-surface">{title}</h3>
      <span className="text-primary font-label">{price}</span>
    </div>
    <p className="font-body text-on-surface-variant leading-relaxed mb-6">
      {description}
    </p>
    <FlowButton text="RESERVE SESSION" />
  </div>
);

// We wrap the list in a Track component with pr-8 to perfectly mirror the gap-8.
// This ensures that when the track repeats at -50%, the spacing is mathematically flawless.
const Track = () => (
  <div className="flex gap-8 pr-8">
    {treatments.map((t, index) => (
      <TreatmentCard key={index} {...t} />
    ))}
  </div>
);

export default function FeaturedTreatments() {
  return (
    <section className="py-16 md:py-24 bg-surface overflow-hidden">
      <div className="px-4 sm:px-10 mb-10 md:mb-16 flex flex-col md:flex-row justify-between items-end gap-6 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
        >
          <span className="label-md uppercase tracking-[0.2em] text-primary mb-4 block">CURATED EXPERIENCES</span>
          <h2 className="font-headline text-4xl md:text-5xl text-on-surface">Featured Treatments</h2>
        </motion.div>
        {/* Removed static arrows since we have an automated carousel now */}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1, delay: 0.2 }}
        className="relative w-full overflow-hidden flex hide-scrollbar"
      >
        {/* Gradient fades for the edges of the screen */}
        <div className="absolute pointer-events-none inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-surface to-transparent z-10"></div>
        <div className="absolute pointer-events-none inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-surface to-transparent z-10"></div>
        
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35, // slow, 35 second luxurious scroll
          }}
        >
          {/* We render exactly 2 tracks. -50% translation matches the width of exactly 1 track perfectly. */}
          <Track />
          <Track />
        </motion.div>
      </motion.div>
    </section>
  );
}
