import React from 'react';
import { motion } from 'motion/react';
import { FlowButton } from './FlowButton';

const rituals = [
  {
    key: "getaway",
    title: "The Ultimate Getaway",
    subtitle: "A 3-Hour Escape",
    description: "Experience the epitome of relaxation. Begin with our deeply detoxifying Seaside Scrub to shed city stress, followed by an 80-minute Signature Hot Stone Massage, and concluding with a restorative Vitamin-C Brightening Facial. Re-emerge completely transformed.",
    image: "/images/2024-07-30 (1).jpg",
    price: "$285",
  },
  {
    key: "glow",
    title: "The Ethereal Glow",
    subtitle: "Restoration & Radiance",
    description: "Designed to honor the art of presence. This ritual seamlessly blends our renowned VIP Arabian Hammam experience with a Bellanina Facelift Massage. Stimulate energy, release underlying tension, and restore your natural, luminous aura.",
    image: "/images/2024-10-22 (2).jpg",
    price: "$245",
  }
];

export default function SignatureRituals() {
  return (
    <section className="py-32 bg-[#0d0f0d] overflow-hidden">
      <div className="container mx-auto px-10">
        
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

        <div className="flex flex-col gap-24 md:gap-32">
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
                  className="w-full md:w-1/2 relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden group"
                >
                  <img 
                    src={ritual.image} 
                    alt={ritual.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
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
                  <div className="flex items-center gap-8">
                    <span className="font-headline text-2xl text-on-surface italic">{ritual.price}</span>
                    <FlowButton text="INQUIRE NOW" />
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
