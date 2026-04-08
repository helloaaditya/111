'use client';
import React from 'react';
import { motion } from 'motion/react';
import { FlowButton } from './FlowButton';
import { Link } from 'react-router-dom';
import { SPA_SERVICES } from '../../data/spaServices';

/** Home carousel: representative picks from the full services menu (order = scroll order). */
const FEATURED_SERVICE_IDS = [
  'water-hydro-therapy-room',
  'the-royal-4-hand-experience',
  'arabian-hammam-therapy',
  'full-body-hot-stone-therapy',
  'the-healing-therapy-experience',
  'full-body-traditional-thai-therapy',
];

const treatments = FEATURED_SERVICE_IDS.map((id) =>
  SPA_SERVICES.find((s) => s.id === id)
).filter(Boolean);

// Extracted card for cleaner loop mapping
const TreatmentCard = ({ title, description, image, serviceId }) => (
  <div className="min-w-[260px] sm:min-w-[320px] md:min-w-[450px] group">
    <Link to={`/services/${serviceId}`} className="block">
      <div className="aspect-[16/10] overflow-hidden rounded-3xl mb-6 relative">
        <img
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          src={image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8 pointer-events-none">
          <span className="text-white text-xs tracking-widest font-label">VIEW EXPERIENCE</span>
        </div>
      </div>
    </Link>
    <div className="flex justify-between items-start mb-4">
      <h3 className="font-headline text-2xl text-on-surface">{title}</h3>
    </div>
    <p className="font-body text-on-surface-variant leading-relaxed mb-6">
      {description}
    </p>
    <div className="flex flex-wrap items-center gap-5">
      <Link to="/contact#booking-form">
        <FlowButton text="RESERVE SESSION" />
      </Link>
      <Link
        to={`/services/${serviceId}`}
        className="text-sm font-label uppercase tracking-wider text-primary underline-offset-4 hover:underline"
      >
        View details
      </Link>
    </div>
  </div>
);

// We wrap the list in a Track component with pr-8 to perfectly mirror the gap-8.
// This ensures that when the track repeats at -50%, the spacing is mathematically flawless.
const Track = () => (
  <div className="flex gap-8 pr-8">
    {treatments.map((t) => (
      <TreatmentCard
        key={t.id}
        title={t.title}
        description={t.intro}
        image={t.image}
        serviceId={t.id}
      />
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
            duration: 55,
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
