"use client"

import * as React from "react"
import { SPA_SERVICES } from "../data/spaServices"

const WHATSAPP_BOOKING_LINK =
  "https://wa.me/919133497000?text=Hi%2C%20I%20want%20to%20book%20an%20appointment%20at%20Aura%20International%20Thai%20Spa"

const IMAGE_OVERRIDES = {
  "water-hydro-therapy-room": "/images/banners/WATER%20HYDRO%20THERAPY%20ROOM.png",
  "the-healing-therapy-experience": "/images/deaura/healing.webp",
  "the-royal-4-hand-experience": "/images/deaura/fourhand.webp",
  "arabian-hammam-therapy": "/images/deaura/arabian.webp",
  "the-spa-pool-family-experience": "/images/deaura/poolfamily.webp",
  "full-body-warm-bamboo-therapy": "/images/deaura/bamboo.webp",
  "full-body-natural-herbal-potli-therapy": "/images/deaura/herbalpotli.webp",
  "full-body-kansa-therapy": "/images/deaura/kasatherey.webp",
  "full-body-revive-deep-tissue-therapy": "/images/deaura/deeptissue.webp",
  "full-body-vitalizing-balinese-therapy": "/images/deaura/vertilizing.webp",
  "full-body-swedish-oil-therapy": "/images/deaura/swedeshi.webp",
  "full-body-aromatherapy-therapy": "/images/deaura/aroma.webp",
  "full-body-traditional-thai-therapy": "/images/deaura/thaispa.webp",
  "full-body-refining-scrub": "/images/deaura/refingscrub.webp",
  "full-body-therapy-scrub-combo": "/images/banners/Full%20Body%20Therapy%20%26%20Scrub%20Combo.png",
}

const TIMED_INCLUDES = {
  "water-hydro-therapy-room": [
    "60 Min Body massage with hot oil",
    "30 Min Spa Pool Experience / Hydro Therapy with hot water",
    "15 Min Steam Bath",
    "15 Min Jet Shower",
  ],
  "the-spa-pool-family-experience": [
    "60 Min Body massage with hot oil for adults only",
    "30 Min Spa Pool Experience / Hydro Therapy with hot water",
    "15 Min Steam Bath",
    "15 Min Jet Shower",
    "Includes up to 2 children allowed up to 5 years",
  ],
}

const BROCHURE_COPY = {
  "water-hydro-therapy-room": {
    description:
      "Hot Tub or popullarly known as Spa Pool is a special bathing expeiance which not only clenses your wholebody throughly, but also comes along with a buch of helath benifits.",
    details:
      "It helps lower the blood pressure, which basically relieves you of your daily strees, improves blood circulation, improves sleep habits and provides a mental clarity due to privacy and clamness all around. This also helps to improve skin health, hairgrowth. Also enjoy snacks and beverages from the mini fridge at no extra cost.",
  },
  "the-healing-therapy-experience": {
    description:
      "It helps lower the blood pressure, which basically relieves you of your daily stress, improves blood circulation, improves sleep habits and provides a mental clarity due to privacy and calmness all around.",
    details:
      "This also helps to improve skin health, hair growth. Also enjoy snacks and beverages from the mini fridge at no extra cost. HEALING TOUCH THERAPY ROOM.",
    includes: ["Without Spa Pool Room", "Any choice of massage", "(Aroma / Swedish / Deep Tissue)"],
  },
  "the-royal-4-hand-experience": {
    description:
      "Performed by two therapists, this massage envelops you completely, giving you a comprehensive treatment. The Therapists use relaxing, slow movements along with harder, warmer and deeper focused movements targeting specific areas, and all around the body.",
    details: "Recommended for: Dry and dull skin. Fatigue, dehydrated skin and regular wellness care.",
  },
  "arabian-hammam-therapy": {
    description:
      "Hammam is a middle east way of royalty, in this service, our team provides a beauty bath in a Indulgent ambiance and provide a royal treatment with access to our VIP suite.",
    details:
      "This treatment makes itself known around the world for being a relaxing and cleansing Moroccan ritual that is centuries old. Hammam differs slightly from the traditional thermal spa. While both are profoundly relaxing and good for the skin, rather than using thermal waters, hammam treatments use hot steam to encourage a deep and Invigorating cleanse. Hammam treatments also use vitamin-E rich, olive-based soap known for its skin-nourishing and exfoliating properties.",
  },
  "the-spa-pool-family-experience": {
    description:
      "Hot Tub or popullarly known as Spa Pool is a special bathing expeiance which not only clenses your whole body throughly, but also comes along with a buch of helath benifits.",
    details:
      "It helps lower the blood pressure, which basically relieves you of your daily strees, improves blood circulation, improves sleep habits and provides a mental clarity due to privacy and clamness all around. This also helps to improve skin health, hair growth. Also enjoy snacks and beverages from the mini fridge at no extra cost. COUPLES ROOM.",
  },
  "full-body-hot-stone-therapy": {
    description:
      "Hot stone massage therapy with warm heat from Basalt stones melts away tension, eases muscle stiffness and increases circulation and metabolism.",
    details:
      "Hot stone massage therapy promotes deeper muscle relaxation through the placement of smooth, water-heated stones at key points on the body. It reduces stress and anxiety, promotes sleep, relieve symptoms of autoimmune diseases and may help decrease cancer symptoms, boost immunity.",
  },
  "full-body-warm-bamboo-therapy": {
    description:
      "Ease your stiff muscles with warm bamboo massage where bamboos of different shapes and sizes are used to roll on the stiff tissues to create sense of relaxation.",
    details:
      "The pressure here is a combination of both deep tissue and Swedish therapies, which range from medium to hard pressure resulting in deep healing.",
  },
  "full-body-natural-herbal-potli-therapy": {
    description:
      "Ease your muscle and joint stiffness with heated bundles massage with pouches of herbs and herbal oils like Ash wagandha, Triphala, Neem that have rejuvenating effects on body.",
    details: "Helps heal the lower back, neck and stiff joints aches.",
  },
  "full-body-kansa-therapy": {
    description:
      "Regenerate your tissues while removing toxins from your body with help of Kansa wand therapy.",
    details:
      "The wand can revitalize your complexion and plump the skin, along with enhanced blood flow, reduced body swelling and muscle stiffness with deep penetration. This treatment also helps balance chakras, doshas and balance PH levels.",
  },
  "full-body-revive-deep-tissue-therapy": {
    description:
      "Deep tissue massage is a massage therapy focussing on realigning deeper layers of muscles and connective tissues.",
    details:
      "It is especially helpful for chronic aches, pains and contracted areas such as stiff neck and upper back, low back pain, leg muscle tightness, and sore shoulders.",
  },
  "full-body-vitalizing-balinese-therapy": {
    description:
      "Balinese massage is full-body, deep-tissue, holistic treatment using combination of gentle stretches, acupressure, reflexology, and aromatherapy.",
    details:
      "It stimulates the flow of blood, oxygen and energy around your body, resulting in sense of well-being, calm and deep relaxation.",
  },
  "full-body-swedish-oil-therapy": {
    description:
      "Swedish massage helps promote relaxation by releasing muscle tension with gentle massage.",
    details:
      "This therapy helps loosen up tight muscles caused by sedentary lifestyle or strenuous exercises and helps relieve tension in the lower back, shoulders and neck.",
  },
  "full-body-aromatherapy-therapy": {
    description:
      "Aroma therapy is a oil therapy, its a holistic healing treatment using natural plant extracts to promote health and well-being and overall improves the body, mind, and soul.",
    details: "It enhances both physical and emotional health.",
  },
  "full-body-traditional-thai-therapy": {
    description:
      "Thai massage, which originated in India, has been around for over 2,500 years. Originally regarded as a healing art, traditional Thai massage includes influences from both Ayurvedic and traditional Chinese medicine.",
    details:
      "Unlike typical Western-type massages, it doesn't involve lying on a massage bed while a massage therapist applies oil to your body and kneads your muscles and pressure points.",
  },
  "full-body-refining-scrub": {
    description:
      "Experience a complete cleansing and exfoliating experience with our exclusive Jojoba Scrub treatment that's suitable for all skin types and is packed with antioxidants and anti-inflammatory ingredients.",
    details:
      "Comprised of Jojoba refreshing scented green tea body scrub topped with Jojoba oil, this treatment helps you exfoliate dead cells from your skin the best way.",
    includes: ["Recommended for:", "Enhanced cell renewal, improvise youthful skin"],
  },
  "full-body-therapy-scrub-combo": {
    description:
      "Experience a moist, glowing and smooth looking skin after a deep, vigorous yet gentle refining mineral salt scrub from sea salts that is rich in trace minerals.",
    details:
      "This helps exfoliate the dead skin layers of the skin resulting in smooth skin.",
    includes: ["Recommended for:", "Indian skin type, tanned skin repair, skin deep cleansing"],
  },
}

const GROUPS = [
  {
    title: "The Royal Experience",
    ids: [
      "water-hydro-therapy-room",
      "the-healing-therapy-experience",
      "the-royal-4-hand-experience",
      "arabian-hammam-therapy",
      "the-spa-pool-family-experience",
    ],
  },
  {
    title: "Exclusive Therapy",
    ids: [
      "full-body-hot-stone-therapy",
      "full-body-warm-bamboo-therapy",
      "full-body-natural-herbal-potli-therapy",
      "full-body-kansa-therapy",
    ],
  },
  {
    title: "Classical Therapy",
    ids: [
      "full-body-revive-deep-tissue-therapy",
      "full-body-vitalizing-balinese-therapy",
      "full-body-swedish-oil-therapy",
      "full-body-aromatherapy-therapy",
      "full-body-traditional-thai-therapy",
    ],
  },
  {
    title: "Body Scrub Therapy",
    ids: ["full-body-refining-scrub", "full-body-therapy-scrub-combo"],
  },
]

function getService(id) {
  return SPA_SERVICES.find((service) => service.id === id)
}

function ServiceCard({ service }) {
  const copy = BROCHURE_COPY[service.id]
  const includes = TIMED_INCLUDES[service.id] ?? copy?.includes ?? service.features
  const image = IMAGE_OVERRIDES[service.id] ?? service.image

  return (
    <article className="rounded-2xl md:rounded-3xl border border-[#C5A059]/20 bg-white shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 gap-0 md:grid-cols-12">
        <div className="md:col-span-4 border-b border-[#C5A059]/15 md:border-b-0 md:border-r bg-[#11161d] p-0 sm:p-0 md:p-6">
          <div className="h-[220px] sm:h-[250px] md:h-full min-h-[220px] md:min-h-[240px] flex items-center justify-center rounded-none md:rounded-2xl bg-black/30 p-0 md:p-3">
            <img
              src={image}
              alt={`${service.title} therapy visual`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-8 p-4 sm:p-6 md:p-10">
          <h3 className="font-headline text-xl sm:text-2xl md:text-3xl text-[#1a1510] mb-3 md:mb-4">
            {service.title}
          </h3>

          <p className="font-body text-sm sm:text-base text-[#3b3127] leading-relaxed mb-4 md:mb-5">
            {copy?.description ?? service.description}
          </p>
          <p className="font-body text-sm sm:text-base text-[#5a4a3a] leading-relaxed mb-5 md:mb-6">
            {copy?.details ?? service.details}
          </p>

          {includes?.length > 0 && (
            <div className="mb-6 md:mb-8">
              <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] sm:tracking-[0.2em] text-[#C5A059] mb-3">
                Includes
              </h4>
              <ul className="space-y-2">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 sm:gap-3 text-[#2d241b]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C5A059]" />
                    <span className="font-body text-sm sm:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="pt-1 md:pt-2">
            <a
              href={WHATSAPP_BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-[#C5A059] px-6 sm:px-7 py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] sm:tracking-[0.15em] text-white transition-colors hover:bg-[#ad8945] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1319] via-[#171d26] to-[#11161d] -mt-24 md:-mt-32 text-white">
      <section className="pt-24 md:pt-28 pb-8 md:pb-10 px-3 sm:px-4 md:px-6">
        <div className="container mx-auto">
          <div className="mx-auto max-w-5xl rounded-2xl border border-[#C5A059]/30 bg-[#11161d] shadow-2xl overflow-hidden">
            <div className="px-4 py-5 sm:px-5 sm:py-6 md:px-8 md:py-7 flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 md:gap-8">
              <img
                src="/images/logo_final.png"
                alt="111 International Luxury Spa logo"
                className="h-14 md:h-16 w-auto object-contain shrink-0"
              />
              <div className="text-center sm:text-left">
                <p className="text-[#C5A059] tracking-[0.28em] uppercase text-[10px] mb-1.5">111</p>
                <h1 className="font-headline text-lg sm:text-2xl md:text-3xl leading-tight">
                  INTERNATIONAL
                  <br />
                  LUXURY SPA
                </h1>
                <p className="mt-1.5 font-headline text-base sm:text-xl md:text-2xl tracking-[0.14em] sm:tracking-[0.16em] text-[#C5A059]">
                  OUR MENU
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-5xl">
        <div className="mb-10 md:mb-14">
          <p className="text-[#C5A059] uppercase tracking-[0.25em] text-xs mb-2">Our Menu</p>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl text-white">
            16 Signature Services
          </h2>
        </div>

        <div className="space-y-12 md:space-y-14">
          {GROUPS.map((group) => (
            <section key={group.title} aria-label={group.title}>
              <h3 className="mb-6 md:mb-8 text-[#C5A059] text-lg md:text-xl font-headline tracking-[0.12em] uppercase">
                {group.title}
              </h3>
              <div className="space-y-8">
                {group.ids.map((id) => {
                  const service = getService(id)
                  if (!service) return null
                  return <ServiceCard key={service.id} service={service} />
                })}
              </div>
            </section>
          ))}
        </div>
        </div>
      </section>
    </div>
  )
}
