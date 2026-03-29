"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
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
    date: '',
    service: 'Select Service...',
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
    <div ref={containerRef} className="relative bg-background min-h-screen w-full overflow-hidden -mt-24 md:-mt-32">
      {/* Background Elements — absolute so they're clipped by overflow-hidden */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <FloatingOrb color="bg-primary" size="40vw" duration={15} delay={0} initialX="-10%" initialY="-10%" />
        <FloatingOrb color="bg-secondary" size="30vw" duration={18} delay={2} initialX="70%" initialY="20%" />
        <FloatingOrb color="bg-primary" size="35vw" duration={20} delay={4} initialX="20%" initialY="60%" />
      </div>

      {/* Hero Section */}
      <section className="relative h-auto min-h-[60vh] sm:h-[80vh] flex items-center justify-center pt-24 md:pt-48 px-4 sm:px-6 lg:px-8 z-10">
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
            <span className="text-xs tracking-[0.2em] uppercase text-[#8B0000] font-bold">GET IN TOUCH</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-8xl font-headline font-light text-on-background leading-[1.1] mb-8"
          >
            Get Appointment
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-on-background/60 font-body font-light max-w-2xl mx-auto leading-relaxed"
          >
            Ready to indulge? Book your rejuvenating spa experience today. Contact us to schedule your appointment and unwind in luxury at International Luxury Spa.
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group flex flex-col p-8 rounded-2xl glass border border-primary/10 shadow-lg relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10" />
                  <h3 className="text-3xl font-headline text-on-background mb-6 relative z-10">Opening Hours</h3>
                  <div className="space-y-4 font-body text-on-background/80 relative z-10">
                    <div className="flex justify-between border-b border-primary/10 pb-2">
                       <span>Monday to Sunday:</span>
                       <span>10:00 am – 09:30 pm</span>
                    </div>
                    <div className="flex justify-between border-b border-primary/10 pb-2">
                       <span>Saturday:</span>
                       <span>10:00 am – 09:30 pm</span>
                    </div>
                    <div className="flex justify-between border-b border-primary/10 pb-2">
                       <span>Sunday:</span>
                       <span>10:00 am – 09:30 pm</span>
                    </div>
                    <p className="pt-4 text-[#8B0000] font-medium">
                      Check out seasonal discounts for best offers.
                    </p>
                  </div>
                </motion.div>

                <ContactInfoCard 
                  icon={MapPin} 
                  title="Location" 
                  details={[
                    "4th floor, 28, above OGHA Wellness,", 
                    "P Janardhan Reddy Nagar, Gachibowli,", 
                    "Hyderabad, Telangana 500032"
                  ]} 
                  delay={0.2}
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ContactInfoCard 
                    icon={Mail} 
                    title="Our Email:" 
                    details={["Info@111internationalspa.com"]} 
                    delay={0.3}
                  />
                  <ContactInfoCard 
                    icon={Phone} 
                    title="Call Now:" 
                    details={["+91-63649-44762"]} 
                    delay={0.4}
                  />
                </div>
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
            <div className="lg:col-span-8 overflow-visible" id="booking-form" style={{ scrollMarginTop: '120px' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative glass rounded-2xl sm:rounded-[40px] p-4 sm:p-8 md:p-12 border border-primary/20 overflow-hidden shadow-2xl"
              >
                {/* Decorative background for form */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
                
                <div className="relative z-10">
                  <h2 className="text-4xl font-headline text-on-background mb-2">Get Appointment</h2>
                  <p className="text-on-background/60 font-body mb-10">Complete the form below and we will respond shortly.</p>

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
                            <Input
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="First Name"
                              className="bg-white/5 border-primary/20 h-12"
                            />
                          </div>
                          <div className="space-y-2">
                            <Input
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Eamil"
                              className="bg-white/5 border-primary/20 h-12"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <select
                              name="service"
                              className="flex h-12 w-full rounded-md border border-primary/20 bg-background/50 backdrop-blur-sm px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary/50 transition-all duration-300 appearance-none text-on-background/70"
                              value={formData.service}
                              onChange={handleChange}
                            >
                              <option>Select Service...</option>
                              <option>Aroma Massage</option>
                              <option>Deep Tissue Massage</option>
                              <option>Swedish Massage</option>
                              <option>Thai Massage</option>
                              <option>Massage</option>
                              <option>Geothermal Spa</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Input
                              name="date"
                              type="date"
                              required
                              value={formData.date || ''}
                              onChange={handleChange}
                              placeholder="dd-mm-yyyy"
                              className="bg-white/5 border-primary/20 h-12 text-on-background/70"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Textarea
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write comments"
                            className="bg-white/5 border-primary/20 min-h-[120px]"
                          />
                        </div>

                        <div className="pt-4">
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full h-14 bg-primary hover:bg-primary/90 text-white group"
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
                                  SUBMIT NOW
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
                        <h3 className="text-3xl font-headline text-on-background mb-4">Request Received</h3>
                        <p className="text-on-background/70 font-body max-w-sm mx-auto mb-8">
                          Thank you for getting in touch. We will confirm your appointment details shortly.
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
          className="max-w-7xl mx-auto rounded-2xl sm:rounded-[40px] overflow-hidden glass border border-primary/20 relative"
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
                Experience 111 International Spas at our flagship Hyderabad location. 
                A haven designed to disconnect from the world and reconnect with yourself.
              </p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=111+International+Spa+-+Best+Spa+In+Hitech+City" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="w-max px-8 h-12">
                  Get Directions
                </Button>
              </a>
            </div>
            <div className="h-[400px] lg:h-auto bg-primary/5 relative overflow-hidden">
               <iframe 
                  src="https://maps.google.com/maps?q=111%20International%20Spa%20-%20Best%20Spa%20In%20Hitech%20City&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full border-0 transition-all duration-1000"
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
               />
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
            <Link to="/services">
              <Button variant="default" className="h-12 px-10">Explore Treatments</Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="h-12 px-10 border-primary/20">Our Philosophy</Button>
            </Link>
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
