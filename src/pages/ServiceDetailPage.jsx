import React, { useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import TextReveal from '../components/ui/TextReveal';
import { FlowButton } from '../components/ui/FlowButton';
import { getServiceDetail } from '../data/spaServices';

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  
  const service = useMemo(() => getServiceDetail(serviceId), [serviceId]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden pb-32">
      
      {/* Detail Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
           <img 
            src={service.heroImage} 
            alt={service.title} 
            className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
           <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }}
            className="inline-block px-4 py-2 bg-surface backdrop-blur-md rounded-full border border-primary/20 mb-8 shadow-sm"
          >
            <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary">
              111 International Thai Spa
            </span>
          </motion.div>
          
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface leading-tight tracking-tight mb-8">
            <TextReveal word={service.title.split(' ').slice(0, -1).join(' ')} />
            <br className="hidden md:block" />
            <TextReveal word={service.title.split(' ').slice(-1).join(' ')} className="italic text-tertiary" delayOffset={5} />
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
            className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
          >
            {service.intro}
          </motion.p>
        </div>
      </section>

      {/* Main Content Info */}
      <section className="container mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 py-16">
        
        {/* Left Col: Details & Booking */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col"
        >
          <h3 className="font-label text-xs uppercase tracking-[0.3em] text-tertiary mb-6 block border-b border-primary/20 pb-4">
            The Experience
          </h3>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-12">
            {service.details}
          </p>

          <h3 className="font-label text-xs uppercase tracking-[0.3em] text-tertiary mb-6 block border-b border-primary/20 pb-4">
            Therapeutic Benefits
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {service.benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-sm mt-1 shrink-0">spa</span>
                <span className="font-body text-on-surface-variant">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="w-full bg-surface-variant border border-primary/10 rounded-3xl p-8 lg:p-12 text-center flex flex-col items-center">
             <h4 className="font-headline text-3xl text-on-surface mb-2">Reserve Your Time</h4>
             <p className="font-body text-on-surface-variant mb-8 text-sm max-w-xs mx-auto">
               Secure your preferred therapist and time slot in our sanctuary.
             </p>
             <Link to="/contact#booking-form">
               <FlowButton text="BOOK THIS RITUAL" className="w-fit px-12" />
             </Link>
          </div>
        </motion.div>

        {/* Right Col: single image */}
        <div className="lg:col-span-5 flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg border border-primary/5 bg-surface"
          >
            <img
              src={service.gallery[0] ?? service.heroImage}
              alt={service.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </motion.div>
        </div>

      </section>

    </div>
  );
}
