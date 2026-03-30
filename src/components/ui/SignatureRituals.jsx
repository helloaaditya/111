import React from 'react';
import { motion } from 'motion/react';
import { FlowButton } from './FlowButton';
import { Link } from 'react-router-dom';

const rituals = [
  {
    key: "aroma-ritual",
    title: "Signature Aroma Ritual",
    subtitle: "Sensory Rejuvenation",
    description: "Experience the ultimate in relaxation. Our signature Aroma Massage combines premium essential oils with advanced techniques to rejuvenate your senses, restore your natural glow, and leave you in a state of absolute tranquility.",
    image: "/images/massage/ser14.webp",
    price: "$195",
  },
  {
    key: "thai-ritual",
    title: "Traditional Thai Ritual",
    subtitle: "Vitality & Balance",
    description: "Experience the pinnacle of ancient healing. Our Thai Massage Ritual is meticulously designed for balance and vitality, utilizing expert stretching and pressure techniques to release deep-seated tension and restore alignment. Indulge in a journey of professional excellence and profound physical renewal.",
    image: "/images/massage/ser15.webp",
    price: "$225",
  }
];

export default function SignatureRituals() {
  return (
    <section className="py-10 md:py-12 bg-gradient-to-b from-surface-variant to-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="label-md uppercase tracking-[0.2em] text-tertiary mb-4 block">HALF-DAY PACKAGES</span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-on-surface">
            Signature <span className="italic">Rituals</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-16 md:gap-32">
          {rituals.map((ritual, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={ritual.key} 
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-20`}
              >
                {/* Image Section */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full md:w-1/2 relative h-[280px] sm:h-[380px] md:h-[600px] rounded-3xl overflow-hidden group"
                >
                  <img 
                    src={ritual.image} 
                    alt={ritual.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                  />

                </motion.div>

                {/* Text Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full md:w-1/2 flex flex-col justify-center"
                >
                  <span className="font-label text-primary tracking-[0.2em] text-xs mb-4 uppercase">{ritual.subtitle}</span>
                  <h3 className="font-headline text-3xl md:text-4xl lg:text-5xl text-on-surface mb-6 leading-tight">
                    {ritual.title}
                  </h3>
                  <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-10 max-w-lg">
                    {ritual.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 md:gap-8">
                    <Link to="/contact#booking-form">
                      <FlowButton text="INQUIRE NOW" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
