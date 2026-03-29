"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2,
  Calendar,
  MessageSquare,
  ArrowRight
} from 'lucide-react'

// UI Components
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Button } from '../components/ui/button'

// Custom Luxury Icons (Fixed missing lucide icons)
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../components/ui/social-icons'

const FloatingOrb = ({ color, size, duration, delay, initialX, initialY }) => (
  <motion.div
    className={`absolute rounded-full blur-[80px] opacity-20 ${color}`}
    style={{ width: size, height: size, left: initialX, top: initialY }}
    animate={{
      x: [0, 50, -30, 0],
      y: [0, -60, 40, 0],
      scale: [1, 1.1, 0.9, 1],
    }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
)

const ContactInfoCard = ({ icon: Icon, title, details, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="group flex flex-col p-6 rounded-2xl glass hover:bg-white/10 transition-all duration-500 border border-primary/10 hover:border-primary/30"
  >
    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-primary font-headline text-xl mb-2">{title}</h3>
    {details.map((detail, idx) => (
      <p key={idx} className="text-on-background/70 font-body text-sm leading-relaxed">{detail}</p>
    ))}
  </motion.div>
)

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Treatment Inquiry',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    setIsSuccess(true)
    setTimeout(() => setIsSuccess(false), 5000)
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div ref={containerRef} className="relative bg-background min-h-screen w-full overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <FloatingOrb color="bg-primary" size="40vw" duration={15} delay={0} initialX="-10%" initialY="-10%" />
        <FloatingOrb color="bg-secondary" size="30vw" duration={18} delay={2} initialX="70%" initialY="20%" />
        <FloatingOrb color="bg-primary" size="35vw" duration={20} delay={4} initialX="20%" initialY="60%" />
      </div>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8 z-10">
        <motion.div 
          style={{ y: y1, opacity }}
          className="text-center max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-bold">The Serenity Connection</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-headline font-light text-on-background leading-[1.1] mb-8"
          >
            Inhale <span className="italic text-primary">Peace</span>,<br />
            Exhale <span className="italic text-primary">Inquiry</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-on-background/60 font-body font-light max-w-2xl mx-auto leading-relaxed"
          >
            Our dedicated concierge is ready to curate your bespoke spa experience. 
            Reach out to begin your journey into ultimate tranquility.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12"
          >
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-24 bg-gradient-to-b from-primary to-transparent mx-auto"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="relative z-20 px-4 sm:px-6 lg:px-8 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-4 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-headline text-on-background mb-6">Concierge <span className="text-primary italic">Direct</span></h2>
                <p className="text-on-background/70 font-body mb-8">
                  For immediate assistance or private event bookings, our specialist team is available via the following channels.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-4">
                <ContactInfoCard 
                  icon={Phone} 
                  title="Voice" 
                  details={["+91 111-234-5678", "+91 111-987-6543"]} 
                  delay={0.1}
                />
                <ContactInfoCard 
                  icon={Mail} 
                  title="Digital" 
                  details={["info@111spa.com", "concierge@111spa.com"]} 
                  delay={0.2}
                />
                <ContactInfoCard 
                  icon={MapPin} 
                  title="Sanctuary" 
                  details={["Building 111, Luxury Square", "New Delhi, India"]} 
                  delay={0.3}
                />
                <ContactInfoCard 
                  icon={Clock} 
                  title="Eternity" 
                  details={["Mon-Fri: 9AM - 10PM", "Weekends: 10AM - 6PM"]} 
                  delay={0.4}
                />
              </div>

              {/* Social Connect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="pt-8 border-t border-primary/10"
              >
                <h4 className="text-sm tracking-widest uppercase text-primary font-bold mb-6">Follow the Journey</h4>
                <div className="flex gap-4">
                  {[
                    { icon: FacebookIcon, label: "Facebook" },
                    { icon: InstagramIcon, label: "Instagram" },
                    { icon: TwitterIcon, label: "Twitter" }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl glass border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative glass rounded-[40px] p-8 md:p-12 border border-primary/20 overflow-hidden shadow-2xl"
              >
                {/* Decorative background for form */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
                
                <div className="relative z-10">
                  <h2 className="text-4xl font-headline text-on-background mb-2">Bespoke <span className="text-primary italic">Inquiry</span></h2>
                  <p className="text-on-background/60 font-body mb-10">Complete the form below and we will respond within 24 hours.</p>

                  <AnimatePresence mode="wait">
                    {!isSuccess ? (
                      <motion.form 
                        key="contact-form"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -20 }}
                        onSubmit={handleSubmit} 
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-xs uppercase tracking-[0.2em] font-bold text-primary ml-1">Guest Name</label>
                            <Input
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Your full name"
                              className="bg-white/5 border-primary/10"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs uppercase tracking-[0.2em] font-bold text-primary ml-1">Email Portfolio</label>
                            <Input
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="hello@sanctuary.com"
                              className="bg-white/5 border-primary/10"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-xs uppercase tracking-[0.2em] font-bold text-primary ml-1">Phone (Optional)</label>
                            <Input
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+91 000-000-0000"
                              className="bg-white/5 border-primary/10"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs uppercase tracking-[0.2em] font-bold text-primary ml-1">Subject of interest</label>
                            <select
                              name="service"
                              className="flex h-11 w-full rounded-md border border-primary/20 bg-background/50 backdrop-blur-sm px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary/50 transition-all duration-300 appearance-none text-on-background/70"
                              value={formData.service}
                              onChange={handleChange}
                            >
                              <option>Treatment Inquiry</option>
                              <option>Membership Discovery</option>
                              <option>Private Event Venue</option>
                              <option>Gift Experience</option>
                              <option>Other Sanctuary Matters</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-[0.2em] font-bold text-primary ml-1">Your Personal Message</label>
                          <Textarea
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="How may we assist in your serenity?"
                            className="bg-white/5 border-primary/10"
                          />
                        </div>

                        <div className="pt-4">
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full h-14 bg-primary hover:opacity-90 text-white group"
                          >
                            <AnimatePresence mode="wait">
                              {isSubmitting ? (
                                <motion.div
                                  key="loading"
                                  initial={{ x: -10, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  exit={{ x: 10, opacity: 0 }}
                                  className="flex items-center gap-2"
                                >
                                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                  Verifying Sanctuary Access...
                                </motion.div>
                              ) : (
                                <motion.div
                                  key="send"
                                  initial={{ x: -10, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  exit={{ x: 10, opacity: 0 }}
                                  className="flex items-center gap-2 font-headline text-lg tracking-wide"
                                >
                                  Submit Inquiry
                                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </Button>
                        </div>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success-message"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center py-12 text-center"
                      >
                        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                          <CheckCircle2 className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-3xl font-headline text-on-background mb-4">Inquiry Received</h3>
                        <p className="text-on-background/70 font-body max-w-sm mx-auto mb-8">
                          Thank you for connecting with us. Your journey to serenity has begun. A concierge will reach out shortly.
                        </p>
                        <Button 
                          variant="outline" 
                          onClick={() => setIsSuccess(false)}
                          className="border-primary/30 text-primary"
                        >
                          Send Another Message
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Sanctuary Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto rounded-[40px] overflow-hidden glass border border-primary/20 relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-6">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-xs tracking-widest uppercase text-primary font-bold">Our Physical Sanctuary</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-headline text-on-background mb-6 leading-tight">
                Located in the Heart of <span className="italic text-primary">Luxury</span>.
              </h2>
              <p className="text-on-background/70 font-body text-lg mb-8 leading-relaxed">
                Experience 111 International Spas at our flagship New Delhi location. 
                A haven designed to disconnect from the world and reconnect with yourself.
              </p>
              <Button className="w-max px-8 h-12 bg-primary hover:opacity-90 text-white">
                Get Directions
              </Button>
            </div>
            <div className="h-[400px] lg:h-auto bg-primary/5 relative group cursor-pointer overflow-hidden">
               {/* Artistic Map Placeholder */}
               <div className="absolute inset-0 opacity-20 grayscale scale-110 group-hover:scale-100 transition-transform duration-1000" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
               <div className="absolute inset-0 bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center p-8 glass rounded-2xl border border-primary/30 shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                    <MapPin className="w-10 h-10 text-primary mx-auto mb-4 animate-bounce" />
                    <h4 className="text-xl font-headline text-on-background mb-1">Building 111, Luxury Square</h4>
                    <p className="text-xs tracking-widest uppercase text-primary font-bold">New Delhi, India</p>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bottom Call to Action */}
      <section className="relative z-10 py-24 text-center px-4 overflow-hidden">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="max-w-3xl mx-auto"
        >
          <MessageSquare className="w-12 h-12 text-primary/30 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-headline text-on-background mb-6">Beyond the <span className="italic text-primary">Inquiry</span>.</h2>
          <p className="text-on-background/60 font-body text-lg mb-10 leading-relaxed italic">
            "True luxury is not just an experience, it's a feeling of being understood."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" className="h-12 px-10 bg-primary hover:opacity-90 text-white">Explore Treatments</Button>
            <Button variant="outline" className="h-12 px-10 border-primary/20 text-primary hover:bg-primary/5">Our Philosophy</Button>
          </div>
        </motion.div>
      </section>

      {/* Footer-like spacer for branding */}
      <div className="h-32" />
    </div>
  )
}

export default function Page() {
  return <ContactPage />
}
