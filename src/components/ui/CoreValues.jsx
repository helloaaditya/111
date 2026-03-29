import React from 'react';
import { motion } from 'motion/react';

const values = [
  {
    icon: "spa", // Organic Botanicals
    title: "Organic Botanicals",
    desc: "Sourced directly from sustainable farms, our oils and scrubs nourish without synthetic interference."
  },
  {
    icon: "self_improvement", 
    title: "Ancient Techniques",
    desc: "Drawing from century-old healing rituals across the orient to properly re-align your body's energy."
  },
  {
    icon: "workspace_premium", 
    title: "Master Therapists",
    desc: "Each practitioner is rigorously trained in anatomy and holistic healing, ensuring a personalized recovery."
  },
  {
    icon: "mindfulness", 
    title: "Holistic Wellness",
    desc: "We treat the mind concurrently with the body, delivering a restorative state of total equilibrium."
  }
];

export default function CoreValues() {
  return (
    <section className="py-16 md:py-20 border-y border-outline-variant/10 bg-surface">
      <div className="container mx-auto px-4 sm:px-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {values.map((val, index) => (
            <motion.div 
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-start bg-transparent group"
            >
              <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                  {val.icon}
                </span>
              </div>
              <h4 className="font-headline text-2xl text-on-surface mb-4">{val.title}</h4>
              <p className="font-body text-on-surface-variant leading-relaxed text-sm">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
