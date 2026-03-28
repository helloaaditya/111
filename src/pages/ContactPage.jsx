import React from 'react';
import { motion } from 'motion/react';
import TextReveal from '../components/ui/TextReveal';
import { FlowButton } from '../components/ui/FlowButton';

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden pb-20">
      
      {/* Contact Hero */}
      <section className="relative w-full py-24 md:py-32 px-6 flex items-center justify-center text-center">
        <div className="relative z-10 container mx-auto max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="font-label text-xs uppercase tracking-[0.3em] text-tertiary mb-6 block"
          >
            AT YOUR SERVICE
          </motion.span>
          <div className="font-headline text-5xl md:text-7xl text-on-surface leading-tight tracking-tight mb-8">
            <TextReveal word="Begin Your" />
            <TextReveal word="Journey" className="italic text-primary" delayOffset={5} />
          </div>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
            className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
          >
            Ready to indulge in unparalleled tranquility? Contact us to schedule your appointment and unwind in absolute luxury.
          </motion.p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="px-6 w-full relative">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            className="bg-surface p-10 md:p-14 rounded-[3rem] shadow-xl border border-primary/10 w-full"
          >
            <h3 className="font-headline text-3xl text-on-surface mb-8">Reservation Inquiry</h3>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/70 pl-2">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-outline-variant py-3 px-2 focus:outline-none focus:border-primary transition-colors text-on-surface font-body" placeholder="Jane" />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/70 pl-2">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-outline-variant py-3 px-2 focus:outline-none focus:border-primary transition-colors text-on-surface font-body" placeholder="Doe" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/70 pl-2">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-outline-variant py-3 px-2 focus:outline-none focus:border-primary transition-colors text-on-surface font-body" placeholder="jane@example.com" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/70 pl-2">Preferred Ritual</label>
                <select className="w-full bg-transparent border-b border-outline-variant py-3 px-2 focus:outline-none focus:border-primary transition-colors text-on-surface font-body appearance-none cursor-pointer">
                  <option value="" disabled selected>Select a Service...</option>
                  <option value="aroma">Aroma Therapy Massage</option>
                  <option value="deep">Deep Tissue Ritual</option>
                  <option value="swedish">Swedish Relaxation</option>
                  <option value="thai">Traditional Thai Healing</option>
                  <option value="geothermal">Geothermal Stone Therapy</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/70 pl-2">Special Requests</label>
                <textarea rows="3" className="w-full bg-transparent border-b border-outline-variant py-3 px-2 focus:outline-none focus:border-primary transition-colors text-on-surface font-body resize-none" placeholder="Any specific areas of tension?"></textarea>
              </div>

              <FlowButton text="SUBMIT INQUIRY" className="w-full justify-center py-4" />
              <p className="text-[10px] tracking-wide text-on-surface-variant/50 text-center mt-2">
                A sanctuary concierge will contact you shortly to confirm your reservation.
              </p>

            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center h-full gap-16 lg:pl-10"
          >
            
            <div className="flex items-start gap-6">
               <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">location_on</span>
               </div>
               <div>
                 <h4 className="font-headline text-2xl text-on-surface mb-2">Our Sanctuary</h4>
                 <p className="font-body text-on-surface-variant mb-4 leading-relaxed">
                   111 Serenity Boulevard <br/>
                   Luxury District, NY 10001
                 </p>
                 <a href="#" className="font-label text-[10px] uppercase tracking-[0.2em] text-primary hover:opacity-70 transition-opacity border-b border-primary/30 pb-1">Get Directions</a>
               </div>
            </div>

            <div className="flex items-start gap-6">
               <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">schedule</span>
               </div>
               <div>
                 <h4 className="font-headline text-2xl text-on-surface mb-2">Sanctuary Hours</h4>
                 <p className="font-body text-on-surface-variant leading-relaxed mb-1">
                   <strong>Monday – Sunday:</strong> 10:00 am – 09:30 pm
                 </p>
                 <p className="font-body text-on-surface-variant/70 text-sm mt-3 italic">
                   Check out our seasonal discounts for the best wellness offers.
                 </p>
               </div>
            </div>

            <div className="flex items-start gap-6">
               <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">call</span>
               </div>
               <div>
                 <h4 className="font-headline text-2xl text-on-surface mb-2">Concierge</h4>
                 <p className="font-body text-on-surface-variant leading-relaxed">
                   +1 (800) 111-SPAS <br/>
                   reservations@internationalluxuryspa.com
                 </p>
               </div>
            </div>

          </motion.div>

        </div>
      </section>

    </div>
  );
}
