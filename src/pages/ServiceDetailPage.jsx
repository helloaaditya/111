import React, { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import TextReveal from '../components/ui/TextReveal';
import { FlowButton } from '../components/ui/FlowButton';

const servicesData = {
  "aroma-massage": {
    title: "Aroma Therapy Massage",
    heroImage: "/images/2024-10-22.jpg",
    gallery: ["/images/2024-07-30 (1).jpg", "/images/2024-07-30 (2).jpg"],
    duration: "60 / 90 MIN",
    price: "From $150",
    intro: "A sensorial journey combining bespoke essential oils with fluid massage techniques to restore deep emotional and physical balance.",
    benefits: [
      "Relieves deep emotional stress and anxiety",
      "Hydrates and nourishes the skin",
      "Improves lymphatic drainage",
      "Encourages profound REM sleep"
    ],
    details: "Whether you seek intense hydration, cellular anti-aging, or deep tissue detoxification, our luxurious Aroma Massage promises a radiant glow and lasting physical results. Sink into our heated sanctuary beds as master therapists blend bespoke oils tailored specifically to your body's current chronological needs."
  },
  "swedish-massage": {
    title: "Swedish Relaxation",
    heroImage: "/images/2024-07-24.jpg",
    gallery: ["/images/premium_spa_hero.png", "/images/2024-09-26.jpg"],
    duration: "60 / 90 MIN",
    price: "From $135",
    intro: "The classic European technique utilizing long, flowing strokes to dissolve tension, improve circulation, and induce profound relaxation.",
    benefits: [
      "Reduces cortisol levels naturally",
      "Improves systemic blood circulation",
      "Eases muscular strain and stiffness",
      "Promotes a state of supreme calm"
    ],
    details: "Indulge in the ultimate relaxation with our Swedish Relaxation protocol at International Luxury Spa. Designed explicitly to rejuvenate a tired body and an overworked mind. Utilizing organic, cold-pressed grapeseed oils to ensure a seamless glide over your musculature."
  },
  "deep-tissue-massage": {
    title: "Deep Tissue Ritual",
    heroImage: "/images/2024-09-26.jpg",
    gallery: ["/images/2024-10-22.jpg", "/images/2024-07-30.jpg"],
    duration: "60 / 90 MIN",
    price: "From $160",
    intro: "Targeted, intensive therapy designed to release chronic muscle tension deeper within the body connective tissues and muscle fibers.",
    benefits: [
      "Releases chronic muscular tension patterns",
      "Breaks down localized scar tissue",
      "Increases joint mobility and range",
      "Accelerates athletic recovery"
    ],
    details: "We deliver the premier Deep Tissue experience. Specializing in advanced modalities, our therapists methodically apply sustained pressure using slow, deep strokes to target the inner layers of your muscles and connective tissues. Ideal for chronic aches, sports recovery, or postural constriction."
  },
  "thai-massage": {
    title: "Traditional Thai Healing",
    heroImage: "/images/2024-07-30 (1).jpg",
    gallery: ["/images/premium_spa_hero.png", "/images/2024-09-26.jpg"],
    duration: "90 / 120 MIN",
    price: "From $180",
    intro: "An ancient, dynamic practice involving gentle stretching, acupressure, and unblocking energy pathways for supreme vitality.",
    benefits: [
      "Dramatically increases flexibility",
      "Clears blocked energy lines (Sen)",
      "Stimulates internal organ function",
      "Relieves joint stiffness"
    ],
    details: "Our authentic Thai Healing therapy occurs on a traditional floor mat, where you remain fully clothed in loose, comfortable attire. Expert practitioners use their hands, knees, legs, and feet to move you into a series of yoga-like stretches. Think of it as 'lazy man's yoga' resulting in unparalleled physical liberation."
  },
  "geothermal-spa": {
    title: "Geothermal Stone Therapy",
    heroImage: "/images/2024-09-26 (1).jpg",
    gallery: ["/images/2024-07-24.jpg", "/images/2024-10-22.jpg"],
    duration: "90 MIN",
    price: "From $200",
    intro: "Harnessing the earth's natural heat, combining mineral-rich waters and therapeutic volcanic stones to detoxify the body.",
    benefits: [
      "Melts away deep-seated tension rapidly",
      "Expands blood vessels for better flow",
      "Sedates the central nervous system",
      "Draws out profound muscular toxins"
    ],
    details: "Utilizing mineral-rich, hyper-heated basalt stones born from volcanic activity, this treatment drives heat deep into your musculature. The penetrating warmth rapidly sedates the nervous system, allowing our therapists to perform deep tissue work without the typical discomfort, leaving you entering a state of absolute tranquility."
  }
};

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  
  const service = useMemo(() => servicesData[serviceId], [serviceId]);

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
              {service.duration} &bull; {service.price}
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
             <FlowButton text="BOOK THIS RITUAL" className="w-full md:w-auto" />
          </div>
        </motion.div>

        {/* Right Col: Gallery Column */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {service.gallery.map((imgSrc, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`w-full rounded-[2rem] overflow-hidden shadow-lg border border-primary/5 bg-surface ${i === 0 ? 'aspect-square' : 'aspect-[4/3]'}`}
            >
              <img src={imgSrc} alt={`${service.title} aesthetic`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out" />
            </motion.div>
          ))}
        </div>

      </section>

    </div>
  );
}
