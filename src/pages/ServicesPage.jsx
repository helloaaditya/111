"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Sparkles, Droplets, Heart, Flower2, Wind, Leaf } from "lucide-react"
import { cn } from "../lib/utils"

const ContainerScroll = React.forwardRef(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative w-full", className)}
      style={{ ...props.style }}
      {...props}
    >
      {children}
    </div>
  )
})
ContainerScroll.displayName = "ContainerScroll"

const CardSticky = React.forwardRef(
  (
    {
      index,
      incrementY = 10,
      incrementZ = 10,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const y = index * incrementY
    const z = index * incrementZ

    return (
      <motion.div
        ref={ref}
        layout="position"
        style={{
          top: y,
          backfaceVisibility: "hidden",
          ...style,
        }}
        className={cn("sticky", className)}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)
CardSticky.displayName = "CardSticky"

const SPA_SERVICES = [
  {
    id: "service-1",
    title: "Signature Massages",
    icon: Heart,
    description: "Experience our world-renowned massage therapies, from Swedish and deep tissue to hot stone and aromatherapy. Each treatment is customized to your needs, promoting relaxation, relieving tension, and restoring balance to body and mind.",
    features: ["Swedish Massage", "Deep Tissue", "Hot Stone Therapy", "Aromatherapy"],
    image: "/images/massage/ser1.webp"
  },
  {
    id: "service-2",
    title: "Facial Treatments",
    icon: Sparkles,
    description: "Rejuvenate your skin with our luxurious facial treatments. Using premium organic products and advanced techniques, we offer customized facials that cleanse, exfoliate, and nourish, leaving your skin radiant and refreshed.",
    features: ["Anti-Aging Facial", "Hydrating Treatment", "Deep Cleansing", "Organic Skincare"],
    image: "/images/massage/ser2.webp"
  },
  {
    id: "service-3",
    title: "Body Treatments",
    icon: Droplets,
    description: "Indulge in our comprehensive body treatments designed to detoxify, exfoliate, and hydrate. From body wraps to scrubs, each treatment uses natural ingredients to leave your skin silky smooth and deeply nourished.",
    features: ["Body Wraps", "Salt Scrubs", "Mud Therapy", "Detox Treatments"],
    image: "/images/massage/ser3.webp"
  },
  {
    id: "service-4",
    title: "Hydrotherapy",
    icon: Wind,
    description: "Immerse yourself in the healing power of water. Our hydrotherapy facilities include mineral pools, whirlpools, and therapeutic baths that promote circulation, ease muscle tension, and provide deep relaxation.",
    features: ["Mineral Pools", "Whirlpool Therapy", "Vichy Shower", "Steam Room"],
    image: "/images/massage/ser12.webp"
  },
  {
    id: "service-5",
    title: "Wellness Programs",
    icon: Flower2,
    description: "Embark on a holistic wellness journey with our comprehensive programs. Combining massage, meditation, yoga, and nutrition guidance, we help you achieve lasting balance and vitality in your daily life.",
    features: ["Yoga Sessions", "Meditation Classes", "Nutrition Counseling", "Wellness Coaching"],
    image: "/images/massage/ser5.webp"
  },
  {
    id: "service-6",
    title: "Specialty Rituals",
    icon: Leaf,
    description: "Experience our signature spa rituals inspired by ancient healing traditions from around the world. Each multi-step treatment combines various therapies for a transformative and deeply restorative experience.",
    features: ["Ayurvedic Rituals", "Thai Massage", "Balinese Treatment", "Japanese Onsen"],
    image: "/images/massage/ser14.webp"
  },
]

const ADDITIONAL_SERVICES = [
  {
    title: "Manicure & Pedicure",
    description: "Professional nail care services with premium products",
  },
  {
    title: "Hair & Scalp Treatments",
    description: "Nourishing treatments for healthy, beautiful hair",
  },
  {
    title: "Couples Packages",
    description: "Romantic spa experiences designed for two",
  },
  {
    title: "Bridal Services",
    description: "Complete beauty preparation for your special day",
  },
]

function InternationalSpaServices() {
  const [scrollProgress, setScrollProgress] = React.useState(0)
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const containerHeight = containerRef.current.offsetHeight
        const viewportHeight = window.innerHeight
        const scrollableHeight = containerHeight - viewportHeight
        
        const scrolled = Math.max(0, -rect.top)
        const progress = Math.min(scrolled / scrollableHeight, 1)
        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f1ea] to-[#e8dfd0] overflow-x-hidden">
      {/* Hero Section - Negative margin to pull it up behind the navbar */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden -mt-24 md:-mt-32 pt-24 md:pt-32">
        {/* Premium Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/premium_spa_hero.png" 
            alt="Premium Spa Environment" 
            className="h-full w-full object-cover"
          />
          {/* Refined Overlays */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f5f1ea] to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center md:px-6 -mt-12 md:-mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-5xl rounded-2xl sm:rounded-[3rem] border border-white/20 bg-white/10 p-4 sm:p-8 md:p-16 backdrop-blur-2xl shadow-2xl"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-6 inline-block rounded-full border border-white/30 bg-white/10 px-6 py-2 text-xs font-light tracking-[0.3em] uppercase text-white"
            >
              LUXURY SPA SERVICES
            </motion.span>
            <h1 className="mb-6 text-3xl sm:text-4xl font-headline font-light tracking-tight text-white md:text-6xl lg:text-7xl drop-shadow-lg">
              Discover Our <span className="italic text-[#C5A059] font-normal">Premium</span> <br className="hidden md:block" /> Spa Services
            </h1>
            <p className="mx-auto mb-2 font-body font-light text-white/90 text-sm sm:text-base md:text-xl max-w-2xl leading-relaxed drop-shadow-md">
              Indulge in world-class treatments designed to rejuvenate your body, refresh your mind, and restore your spirit at 111 International Spas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Stack Section */}
      <section ref={containerRef} className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <motion.div 
            className="md:sticky md:left-0 md:top-32 h-fit md:py-12"
            style={{
              opacity: 1 - scrollProgress * 0.3,
            }}
          >
            <h5 className="mb-2 text-xs font-light uppercase tracking-widest text-[#C5A059]">
              Our Services
            </h5>
            <h2 className="mb-6 text-3xl font-headline font-light tracking-tight text-[#3a2f23] md:text-4xl lg:text-5xl">
              Experience the Art of{" "}
              <span className="font-normal text-[#C5A059]">Wellness</span>
            </h2>
            <p className="max-w-prose font-body font-light leading-relaxed text-[#5a4a3a]/80">
              At 111 International Spas, we offer a comprehensive range of treatments and therapies designed to promote holistic wellness. Each service is performed by our expert therapists using the finest natural products and time-honored techniques.
            </p>
            <div className="mt-8 space-y-4">
              <h3 className="text-sm font-normal uppercase tracking-wider text-[#C5A059]">
                Additional Services
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {ADDITIONAL_SERVICES.map((service, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-[#C5A059]/10 bg-white/40 p-4 backdrop-blur-sm"
                  >
                    <h4 className="mb-1 text-sm font-normal text-[#3a2f23]">
                      {service.title}
                    </h4>
                    <p className="text-xs font-light text-[#5a4a3a]/70">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Progress indicator */}
            <div className="mt-12">
              <div className="flex items-center gap-3">
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-[#C5A059]/20">
                  <motion.div
                    className="h-full bg-[#C5A059]"
                    style={{ width: `${scrollProgress * 100}%` }}
                  />
                </div>
                <span className="text-xs font-light text-[#C5A059]">
                  {Math.round(scrollProgress * 100)}%
                </span>
              </div>
              <p className="mt-2 text-xs font-light text-[#5a4a3a]/60">
                Scroll to explore all services
              </p>
            </div>
          </motion.div>

          <ContainerScroll className="min-h-[300vh] space-y-12 py-12">
            {SPA_SERVICES.map((service, index) => {
              const IconComponent = service.icon
              return (
                <CardSticky
                  key={service.id}
                  index={index + 2}
                  className="overflow-hidden rounded-3xl border border-[#C5A059]/20 bg-white shadow-2xl shadow-[#C5A059]/5"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 flex items-center gap-4">
                      <div className="rounded-full bg-white/95 p-3.5 shadow-xl backdrop-blur-sm">
                        <IconComponent className="h-7 w-7 text-[#C5A059]" />
                      </div>
                      <h2 className="text-3xl font-headline font-normal tracking-tight text-white drop-shadow-lg">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <div className="p-8 md:p-10" style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale', textRendering: 'optimizeLegibility' }}>
                    <p className="mb-8 font-body font-normal text-lg leading-relaxed text-[#1a1510]">
                      {service.description}
                    </p>
                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                        Featured Treatments
                      </h4>
                      <div className="flex flex-wrap gap-2.5">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="rounded-full border border-[#C5A059]/20 bg-[#F6F3EE] px-4 py-1.5 text-xs font-normal text-[#2d241b] transition-colors hover:bg-[#C5A059]/10"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardSticky>
              )
            })}
          </ContainerScroll>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-[#FFFFFF] to-[#F6F3EE] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-headline font-light tracking-tight text-[#3a2f23] md:text-4xl">
              Why Choose{" "}
              <span className="font-normal text-[#C5A059]">111 International Spas</span>
            </h2>
            <p className="mb-12 font-body font-light leading-relaxed text-[#5a4a3a]/80">
              We are committed to providing an unparalleled spa experience that nurtures your well-being and leaves you feeling renewed.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Expert Therapists",
                description: "Our certified professionals bring years of experience and passion to every treatment.",
              },
              {
                title: "Premium Products",
                description: "We use only the finest organic and natural products for optimal results.",
              },
              {
                title: "Tranquil Environment",
                description: "Escape to our serene sanctuary designed for complete relaxation and rejuvenation.",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#C5A059]/10 bg-white/40 p-8 text-center backdrop-blur-sm transition-all hover:shadow-2xl hover:shadow-[#C5A059]/10 hover:-translate-y-1"
              >
                <h3 className="mb-3 text-xl font-headline font-normal text-[#3a2f23]">
                  {benefit.title}
                </h3>
                <p className="font-body font-light text-[#5a4a3a]/80">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#C5A059] to-[#8B7E6B] py-16 text-center text-white md:py-24 mx-4 mb-8 rounded-3xl shadow-2xl">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-6 text-3xl font-headline font-light tracking-tight md:text-5xl">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl font-body font-light opacity-90 text-lg">
            Book your appointment today and discover the transformative power of our spa services.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border-2 border-white bg-white px-10 py-4 font-body font-light text-[#C5A059] text-lg transition-all hover:bg-transparent hover:text-white"
          >
            Book Now
          </motion.button>
        </div>
      </section>
    </div>
  )
}

export default function ServicesPage() {
  return <InternationalSpaServices />
}
