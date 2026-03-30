import React, { useState } from 'react';
import TextReveal from '../components/ui/TextReveal';
import Testimonials from '../components/ui/Testimonials';
import SignatureRituals from '../components/ui/SignatureRituals';
import ZoomParallaxSection from '../components/ui/ZoomParallaxSection';
import CoreValues from '../components/ui/CoreValues';
import Navbar from '../components/ui/Navbar';
import FeaturedTreatments from '../components/ui/FeaturedTreatments';
import { FlowButton } from '../components/ui/FlowButton';
import Footer from '../components/ui/Footer';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribing(true);
    
    try {
      await fetch("https://formsubmit.co/ajax/roshands00270@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `New Newsletter Subscription: ${email}`,
          Email: email,
          Message: "A new user has requested to join the Inner Circle."
        })
      });
      setEmail('');
      // Show simple success feedback
      alert("Welcome to the Inner Circle! Your subscription was successful.");
    } catch (error) {
      console.error("Subscription failed:", error);
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/30">
      <Navbar />

      <main className="pt-0 [overflow-x:clip]">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 z-0 overflow-hidden bg-surface">
            <img 
              alt="Luxury Spa Interior" 
              className="w-full h-full object-cover" 
              src="/images/premium_spa_hero.png" 
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-surface to-transparent"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4 sm:px-10 text-center max-w-4xl">

            <div className="font-headline text-5xl md:text-7xl lg:text-8xl text-white leading-tight tracking-tight mb-8 shadow-sm">
              <TextReveal word="Welcome to" />
              <TextReveal word="111 International" className="italic" delayOffset={10} />
              <div className="md:mt-2">
                <TextReveal word="Luxury Spa" className="italic text-[#C5A059]" delayOffset={20} />
              </div>
            </div>
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}
              className="font-body text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12 drop-shadow-md"
            >
              Welcome to our International Luxury Spa, where indulgence meets tranquility. Escape into a world of rejuvenation and relaxation with our bespoke treatments and serene ambiance, crafted to elevate your wellness experience.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            >
              <Link to="/about">
                <FlowButton text="EXPLORE SANCTUARY" />
              </Link>
              <Link to="/services">
                <FlowButton text="VIEW TREATMENTS" />
              </Link>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2.2 }}
            className="absolute bottom-10 left-10 hidden md:flex flex-col gap-4"
          >
            <div className="w-[1px] h-24 bg-gradient-to-b from-transparent to-primary/40"></div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/60 rotate-180" style={{ writingMode: 'vertical-lr' }}>SCROLL TO DISCOVER</span>
          </motion.div>
        </section>

        {/* Core Values */}
        <CoreValues />

        {/* Our Philosophy (Asymmetric Layout) */}
        <section className="py-16 md:py-20 px-4 sm:px-10 bg-surface overflow-hidden">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:col-span-5 relative"
            >
              <span className="label-md uppercase tracking-[0.2em] text-tertiary mb-4 block">ABOUT US</span>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-on-surface leading-[1.1] mb-10">
                Revitalize with Our <br/> <span className="italic">Spa Services</span>
              </h2>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-8">
                Welcome to International Luxury Spa, where true serenity and rejuvenation await. We offer a sanctuary of relaxation, making us an ideal choice for your wellness journey. Our expert therapists provide a range of services designed for deep relaxation and holistic wellness.
              </p>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed italic mb-12">
                "In the depth of winter, I finally learned that within me there lay an invincible summer."
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="md:col-span-6 md:col-start-7 relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-surface-container shadow-2xl">
                <img 
                  alt="Serene Spa Interior" 
                  className="w-full h-full object-cover" 
                  src="/images/2024-10-22.jpg" 
                  data-alt="Sunlit minimalist spa room" 
                />
              </div>
              {/* Decorative Floating Element */}
              <div className="absolute -bottom-10 -left-10 bg-tertiary-container p-8 rounded-xl hidden lg:block">
                <span className="material-symbols-outlined text-4xl text-on-tertiary-container mb-4 block">nature</span>
                <h4 className="font-headline text-xl text-on-tertiary-container mb-2">Organic Essence</h4>
                <p className="font-body text-sm text-on-tertiary-container/80 max-w-[180px]">Bespoke oils crafted from wild-harvested botanicals.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Treatments (The "Immersive Gallery") */}
        <FeaturedTreatments />

        {/* Signature Rituals */}
        <SignatureRituals />

        {/* Zoom Parallax Gallery */}
        <ZoomParallaxSection />

        {/* Testimonials */}
        <Testimonials />

        {/* Newsletter / CTA Section - Premium Upgrade */}
        <section className="py-10 md:py-16 px-4 sm:px-10 overflow-hidden relative">
          {/* Decorative background blurs to anchor the section */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-tertiary/5 blur-[100px] rounded-full -z-10"></div>

          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="container mx-auto bg-surface-variant/90 backdrop-blur-xl border border-primary/25 rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center shadow-[0_20px_50px_rgba(197,160,89,0.06)]"
          >
            {/* Animated Floating Shapes - Subtle gold for consistent beige highlight */}
            <motion.div 
              animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-primary/15 rounded-full blur-2xl"
            ></motion.div>
            <motion.div 
              animate={{ y: [0, 15, 0], opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-20 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
            ></motion.div>

            <span className="material-symbols-outlined text-primary text-5xl mb-8 opacity-80">spa</span>
            <h2 className="font-headline text-4xl md:text-6xl text-on-surface mb-6 tracking-tight">Join the <span className="italic">Inner Circle</span></h2>
            <p className="font-body text-on-surface-variant max-w-xl mb-12 leading-relaxed text-lg text-balance">
              Receive exclusive access to our seasonal rituals, wellness journals, and priority booking for retreat weekends.
            </p>
            
            <form onSubmit={handleSubscribe} className="w-full max-w-lg">
              <div className="relative group">
                <div className="flex flex-col md:flex-row gap-3 p-2 bg-white/50 backdrop-blur-md rounded-2xl md:rounded-full border border-primary/5 shadow-sm group-focus-within:border-primary/20 group-focus-within:shadow-md transition-all duration-500">
                  <input 
                    className="flex-grow bg-transparent px-6 py-4 rounded-full text-on-surface font-label text-sm tracking-wider placeholder:text-on-surface-variant/40 focus:outline-none" 
                    placeholder="ENTER YOUR EMAIL" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubscribing}
                  />
                  <div className="md:w-auto w-full flex justify-center md:justify-start">
                    <button type="submit" disabled={isSubscribing}>
                      <FlowButton text={isSubscribing ? "SUBSCRIBING..." : "SUBSCRIBE"} className="pointer-events-none" />
                    </button>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-[10px] tracking-[0.2em] text-on-surface-variant/50 uppercase">By subscribing you agree to our Privacy Policy</p>
            </form>
          </motion.div>
        </section>
      </main>

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
}
