import React from 'react';
import { motion } from 'motion/react';
import TextReveal from '../components/ui/TextReveal';
import { FlowButton } from '../components/ui/FlowButton';

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden">
      
      {/* Premium Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Soft elegant gradient overlay over a beige background */}
        <div className="absolute inset-0 bg-surface z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-tertiary/10 blur-[100px] rounded-full z-0"></div>
        <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full z-0"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl pt-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-6 block"
          >
            OUR HERITAGE
          </motion.span>
          <div className="font-headline text-5xl md:text-7xl text-on-surface leading-tight tracking-tight mb-8">
            <TextReveal word="Elevating Wellness" />
            <TextReveal word="to an Art Form" className="italic text-tertiary" delayOffset={8} />
          </div>
        </div>
      </section>

      {/* Main Content - The Story */}
      <section className="py-20 md:py-32 px-6 w-full relative">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Imagery Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="/images/2024-07-30.jpg" 
              alt="Serene Spa Environment" 
              className="w-full h-full object-cover" 
            />
            {/* Experience Badge overlay */}
            <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-md px-8 py-6 rounded-2xl shadow-lg border border-primary/10 flex flex-col items-center">
              <span className="font-headline text-5xl text-primary mb-1">15</span>
              <span className="font-label text-xs tracking-widest uppercase text-on-surface-variant text-center max-w-[120px]">
                Years of Excellence
              </span>
            </div>
          </motion.div>

          {/* Right: Textual Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-headline text-4xl md:text-5xl text-on-surface leading-[1.2] mb-8">
              A Sanctuary of <br/> <span className="italic text-primary">Rejuvenation</span>
            </h2>
            <div className="font-body text-lg text-on-surface-variant leading-relaxed space-y-6">
              <p>
                At International Luxury Spa, we believe that true wellness goes beyond skin deep. It is an art form—a delicate balance of physical restoration and mental serenity. For over 15 years, we have cultivated a haven where time slows down and deep healing begins.
              </p>
              <p>
                Our expert wellness therapists provide a comprehensive suite of services, from luxurious bespoke facials and invigorating body therapies to soothing mineral baths. We harness the power of rare, organic botanicals and ancient holistic techniques to deliver an unparalleled experience.
              </p>
              <p className="italic text-tertiary text-xl border-l-2 border-primary/40 pl-6 my-10">
                "In the depth of winter, I finally learned that within me there lay an invincible summer."
              </p>
            </div>
          </motion.div>
        
        </div>
      </section>

      {/* Our Team Section - Converted from "Dentists" */}
      <section className="py-24 px-6 w-full bg-surface-variant/30 border-t border-b border-primary/10">
        <div className="container mx-auto">
          <div className="text-center mb-20">
             <span className="font-label text-xs uppercase tracking-[0.2em] text-tertiary mb-3 block">THE ARTISANS</span>
             <h2 className="font-headline text-4xl md:text-5xl text-on-surface">Meet Our Master Therapists</h2>
          </div>
          
          {/* Subtle Grid of Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { name: "Ella Thompson", role: "Holistic Wellness Director" },
              { name: "Vincent Cooper", role: "Lead Deep Tissue Specialist" },
              { name: "Danielle Bryant", role: "Botanical Esthetician" },
              { name: "Howard Holmes", role: "Geothermal Therapy Master" }
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group cursor-pointer flex flex-col items-center"
              >
                <div className="w-[200px] h-[260px] rounded-[2rem] overflow-hidden mb-6 bg-surface shadow-sm group-hover:shadow-xl transition-all duration-500 border border-transparent group-hover:border-primary/20 relative">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={`/images/2024-09-26.jpg`} alt={member.name} className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                </div>
                <h4 className="font-headline text-2xl text-on-surface mb-2">{member.name}</h4>
                <p className="font-label text-xs uppercase tracking-wider text-primary">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="py-24 md:py-32 px-6 w-full text-center flex flex-col items-center justify-center">
        <h2 className="font-headline text-5xl md:text-6xl text-on-surface mb-8 italic">Ready to Indulge?</h2>
        <p className="font-body text-lg text-on-surface-variant max-w-2xl mb-12">
          Experience the pinnacle of relaxation. Book your rejuvenating spa experience today and unwind in uncompromised luxury.
        </p>
        <FlowButton text="SCHEDULE YOUR VISIT" />
      </section>

    </div>
  );
}
