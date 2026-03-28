import React from 'react';
import { motion } from 'motion/react';
import TextReveal from '../components/ui/TextReveal';
import { Link } from 'react-router-dom';

const services = [
  {
    id: "aroma-massage",
    title: "Aroma Therapy Massage",
    description: "A sensorial journey combining bespoke essential oils with fluid massage techniques to restore deep emotional and physical balance.",
    image: "/images/2024-10-22.jpg",
    duration: "60 / 90 MIN",
    price: "From $150"
  },
  {
    id: "swedish-massage",
    title: "Swedish Relaxation",
    description: "The classic European technique utilizing long, flowing strokes to dissolve tension, improve circulation, and induce profound relaxation.",
    image: "/images/2024-07-24.jpg",
    duration: "60 / 90 MIN",
    price: "From $135"
  },
  {
    id: "deep-tissue-massage",
    title: "Deep Tissue Ritual",
    description: "Targeted, intensive therapy designed to release chronic muscle tension deeper within the body connective tissues and muscle fibers.",
    image: "/images/2024-09-26.jpg",
    duration: "60 / 90 MIN",
    price: "From $160"
  },
  {
    id: "thai-massage",
    title: "Traditional Thai Healing",
    description: "An ancient, dynamic practice involving gentle stretching, acupressure, and unblocking energy pathways for supreme vitality.",
    image: "/images/2024-07-30 (1).jpg",
    duration: "90 / 120 MIN",
    price: "From $180"
  },
  {
    id: "geothermal-spa",
    title: "Geothermal Stone Therapy",
    description: "Harnessing the earth's natural heat, combining mineral-rich waters and therapeutic volcanic stones to detoxify the body.",
    image: "/images/2024-09-26 (1).jpg",
    duration: "90 MIN",
    price: "From $200"
  }
];

export default function ServicesPage() {
  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden">
      
      {/* Services Hero */}
      <section className="relative w-full py-24 md:py-32 px-6 flex items-center justify-center text-center">
        <div className="relative z-10 container mx-auto max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="font-label text-xs uppercase tracking-[0.3em] text-tertiary mb-6 block"
          >
            OUR THERAPIES
          </motion.span>
          <div className="font-headline text-5xl md:text-7xl text-on-surface leading-tight tracking-tight mb-8">
            <TextReveal word="Curated Rituals" />
            <TextReveal word="for the Soul" className="italic text-primary" delayOffset={8} />
          </div>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
            className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
          >
            Experience unparalleled relaxation with our selection of bespoke treatments. Designed to rejuvenate your body and restore your mind's natural equilibrium.
          </motion.p>
        </div>
      </section>

      {/* Services Listing - Architectural Grid */}
      <section className="pb-32 px-6 w-full relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 md:gap-24">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-20`}
              >
                
                {/* Image Container with Parallax-like Reveal */}
                <div className="w-full md:w-1/2 aspect-[4/5] md:aspect-square overflow-hidden rounded-[2.5rem] bg-surface relative group shadow-lg">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center py-6 md:py-0">
                  <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary mb-4 block">
                    {service.duration} &bull; {service.price}
                  </span>
                  <h3 className="font-headline text-3xl md:text-4xl text-on-surface mb-6 leading-[1.2]">
                    {service.title}
                  </h3>
                  <p className="font-body text-lg text-on-surface-variant/80 leading-relaxed mb-10 max-w-md">
                    {service.description}
                  </p>
                  <Link 
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-3 text-on-surface font-label text-xs tracking-widest border-b border-primary/30 pb-2 hover:border-primary hover:text-primary transition-all w-fit"
                  >
                    DISCOVER MORE <span className="material-symbols-outlined text-sm">east</span>
                  </Link>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
