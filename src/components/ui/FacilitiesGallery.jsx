import React from 'react';
import { motion } from 'motion/react';

// Using remaining high-quality unused photos from public/images
const galleryImages = [
  { src: "/images/2024-07-30.jpg", alt: "Reception and Lounge Area", colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
  { src: "/images/2024-07-17 (1).jpg", alt: "Private Therapy Room", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/images/2024-09-26 (1).jpg", alt: "Luxury Jacuzzi Setup", colSpan: "md:col-span-1", rowSpan: "md:row-span-2" },
  { src: "/images/2024-10-22 (4).jpg", alt: "Sauna Interior", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  { src: "/images/2024-07-30 (6).jpg", alt: "Premium Treatment Bed", colSpan: "md:col-span-2", rowSpan: "md:row-span-1" },
];

export default function FacilitiesGallery() {
  return (
    <section className="py-24 bg-surface tonal-shift">
      <div className="container mx-auto px-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="label-md uppercase tracking-[0.2em] text-primary mb-4 block">THE ETHEREAL JOURNEY</span>
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface leading-tight">
              An Environment <br/> <span className="italic">Curated for Peace</span>
            </h2>
          </div>
          <p className="font-body text-on-surface-variant text-lg max-w-md md:text-right">
            Every material, sound, and scent throughout our sanctuary has been intentionally designed to initiate your transition from the outside world into total serenity.
          </p>
        </div>

        {/* CSS Grid Masonry / Bento layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-[auto] gap-4 md:gap-6 auto-rows-[250px]">
          {galleryImages.map((image, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-sm group ${image.colSpan} ${image.rowSpan} h-64 md:h-auto`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              {/* Optional overlay gradient for subtle dark theme fitting */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
