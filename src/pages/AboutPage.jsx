import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Sparkles, Award, Users, Calendar, ArrowRight } from 'lucide-react';

const StatCounter = ({ value, suffix, label, delay }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: false, amount: 0.5 });

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    let startTime = null;
    const duration = 2000;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <motion.div
      ref={counterRef}
      className="bg-[#F8F8F2]/80 backdrop-blur-sm p-8 rounded-lg flex flex-col items-center text-center group hover:bg-[#F8F8F2] transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="text-5xl font-light mb-2 text-primary">
        {count}{suffix}
      </div>
      <p className="text-on-surface-variant/70 text-sm">{label}</p>
      <motion.div 
        className="w-12 h-0.5 bg-primary mt-4 group-hover:w-20 transition-all duration-300"
      />
    </motion.div>
  );
};

export default function AboutPage() {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const stats = [
    { value: 15, suffix: "", label: "Years of Excellence" },
    { value: 5000, suffix: "+", label: "Treatments Delivered" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 50, suffix: "+", label: "Expert Therapists" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F2F2EB] via-[#F8F8F2] to-[#FEFEFE] text-[#202e44] overflow-hidden">
      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#F8F8F2] via-[#F2EDE4] to-[#E8DCC8]"
      >
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/about_us(1).avif"
            alt="Spa Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F2F2EB]/80 via-[#F8F8F2]/70 to-[#F2F2EB]/90" />
        </div>
        
        {/* Decorative background elements */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full bg-[#88734C]/20 blur-3xl"
          style={{ y: y1, rotate: rotate1 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#A9BBC8]/20 blur-3xl"
          style={{ y: y2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#C9B896]/15 blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Decorative patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#88734C05_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#88734C0A_1px,transparent_1px),linear-gradient(to_bottom,#88734C0A_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
        
        {/* Floating orbs */}
        <motion.div
          className="absolute top-40 right-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-[#88734C]/30 to-[#C9B896]/20 blur-2xl"
          animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-48 h-48 rounded-full bg-gradient-to-tr from-[#A9BBC8]/25 to-[#88734C]/15 blur-2xl"
          animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/3 w-36 h-36 rounded-full bg-gradient-to-bl from-[#C9B896]/25 to-transparent blur-xl"
          animate={{ y: [0, 20, 0], x: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="relative z-10 max-w-6xl mx-auto text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Heritage Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase font-light mb-4">
              Our Heritage
            </span>
          </motion.div>

          {/* Main Title with Vertical Text Effect */}
          <motion.div variants={itemVariants} className="mb-12">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight text-on-surface mb-6 tracking-tight leading-none">
              <span className="block mb-2">Elevating</span>
              <span className="block mb-2">Wellness</span>
              <span className="block text-primary">to an Art Form</span>
            </h1>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-2 mt-16"
          >
            <span className="text-xs text-on-surface/60 tracking-widest uppercase">Scroll to Discover</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-16 bg-gradient-to-b from-primary to-transparent"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32"
          >
            {/* Left: Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative aspect-[2/3] rounded-3xl overflow-hidden max-h-[800px] w-full max-w-md lg:max-w-full">
                <img
                  src="/images/about_us(1).avif"
                  alt="Serene Spa Environment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#202e44]/30 to-transparent" />
              </div>
              <motion.div
                className="absolute -bottom-8 -right-8 bg-[#88734C] text-white p-8 rounded-lg shadow-2xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-light mb-2">15</div>
                <div className="text-sm tracking-wider">Years of Excellence</div>
              </motion.div>
            </motion.div>

            {/* Right: Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-5xl font-light text-on-surface mb-6 leading-tight">
                  A Sanctuary of<br />
                  <span className="text-primary">Rejuvenation</span>
                </h2>
                <div className="w-24 h-px bg-primary mb-8" />
              </div>

              <div className="space-y-6 text-[#202e44]/80 leading-relaxed">
                <p className="text-lg">
                  At 111 International Spas, we believe that true wellness goes beyond skin deep. It is an art form—a delicate balance of physical restoration and mental serenity. For over 15 years, we have cultivated a haven where time slows down and deep healing begins.
                </p>
                <p className="text-lg">
                  Our expert wellness therapists provide a comprehensive suite of services, from luxurious bespoke facials and invigorating body therapies to soothing mineral baths. We harness the power of rare, organic botanicals and ancient holistic techniques to deliver an unparalleled experience.
                </p>
              </div>

              {/* Quote */}
              <motion.div
                className="border-l-4 border-[#88734C] pl-6 py-4 italic text-[#202e44]/70"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                "In the depth of winter, I finally learned that within me there lay an invincible summer."
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            ref={statsRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32"
          >
            {stats.map((stat, index) => (
              <StatCounter
                key={index}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={index * 0.1}
              />
            ))}
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariants}
            className="mb-32"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-5xl font-light text-[#202e44] mb-4">Our Services</h2>
              <div className="w-24 h-px bg-[#88734C] mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Sparkles className="w-8 h-8" />,
                  title: "Organic Botanicals",
                  description: "Sourced directly from sustainable farms, our oils and scrubs nourish without synthetic interference.",
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Ancient Techniques",
                  description: "Drawing from century-old healing rituals across the orient to properly re-align your body's energy.",
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Master Therapists",
                  description: "Each practitioner is rigorously trained in anatomy and holistic healing, ensuring a personalized recovery.",
                },
                {
                  icon: <Calendar className="w-8 h-8" />,
                  title: "Holistic Wellness",
                  description: "We treat the mind concurrently with the body, delivering a restorative state of total equilibrium.",
                },
                {
                  icon: <Sparkles className="w-8 h-8" />,
                  title: "Bespoke Facials",
                  description: "Luxurious treatments tailored to your unique skin needs using rare, organic ingredients.",
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Mineral Baths",
                  description: "Soothing therapeutic baths infused with natural minerals for deep relaxation and rejuvenation.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-[#F8F8F2]/80 backdrop-blur-sm p-8 rounded-lg group hover:bg-[#F8F8F2] transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-[#88734C] mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-light text-[#202e44] mb-3">{service.title}</h3>
                  <p className="text-[#202e44]/70 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="bg-on-surface text-surface p-12 md:p-16 rounded-lg text-center"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">Begin Your Journey</h2>
            <p className="text-surface/80 text-lg mb-8 max-w-2xl mx-auto">
              Experience the art of wellness. Book your appointment today and discover a sanctuary where healing begins.
            </p>
            <motion.button
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full flex items-center gap-2 font-light text-lg mx-auto transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
