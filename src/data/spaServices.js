import {
  Waves,
  Heart,
  Crown,
  Sparkles,
  Users,
  Flame,
  Leaf,
  Flower2,
  Gem,
  Zap,
  Sun,
  Droplets,
  Wind,
  Move,
  LayoutGrid,
  Hand,
} from "lucide-react"

function bannerPath(filename) {
  return `/images/banners/${encodeURIComponent(filename)}`
}

/** Full service records: list cards + detail page fields (no price or duration). */
export const SPA_SERVICES = [
  {
    id: "water-hydro-therapy-room",
    title: "Water Hydro Therapy Room",
    icon: Waves,
    image: bannerPath("WATER HYDRO THERAPY ROOM.png"),
    description:
      "Hot Tub or popullarly known as Spa Pool is a special bathing expeiance which not only clenses your wholebody throughly, but also comes along with a buch of helath benifits.",
    features: [
      "60 Min Body massage with hot Oil",
      "30 Min Spa Pool Experience / Hydro Therapy with hot water",
      "15 Min Steam Bath",
      "15 Min Jet Shower",
    ],
    intro: "Water Hydro Therapy Services - Live Life - King Size",
    benefits: [
      "It helps lower the blood pressure, relieves daily strees and improves blood circulation",
      "Improves sleep habits and provides a mental clarity due to privacy and clamness all around",
      "Also helps to improve skin health, hairgrowth",
      "Also enjoy snacks and beverages from the mini fridge at no extra cost",
    ],
    details:
      "The Royal Experience in our WATER HYDRO THERAPY ROOM. This therapy is designed to cleanse and relax your entire body while giving a calm and private luxury atmosphere.",
    gallery: [
      bannerPath("WATER HYDRO THERAPY ROOM.png"),
      bannerPath("WATER HYDRO THERAPY ROOM.png"),
    ],
  },
  {
    id: "the-healing-therapy-experience",
    title: "The Healing Therapy Experience",
    icon: Heart,
    image: bannerPath("The Healing Therapy Experience.png"),
    description:
      "It helps lower the blood pressure, which basically relieves you of your daily stress, improves blood circulation, improves sleep habits and provides a mental clarity due to privacy and calmness all around. This also helps to improve skin health, hair growth.",
    features: [
      "Without Spa Pool Room",
      "Any choice of massage",
      "(Aroma / Swedish / Deep Tissue)",
      "Also enjoy snacks and beverages from the mini fridge at no extra cost",
    ],
    intro: "The Healing Therapy Experience",
    benefits: [
      "Relieves daily stress and supports healthy blood pressure",
      "Improves blood circulation and sleep habits",
      "Provides mental clarity with calm and privacy",
      "Supports skin health and hair growth",
    ],
    details: "HEALING TOUCH THERAPY ROOM experience with your preferred massage style.",
    gallery: [
      bannerPath("The Healing Therapy Experience.png"),
      bannerPath("The Healing Therapy Experience.png"),
    ],
  },
  {
    id: "the-royal-4-hand-experience",
    title: "The Royal 4-Hand Experience",
    icon: Crown,
    image: bannerPath("The Royal 4-hand Experience.png"),
    description:
      "Performed by two therapists, this massage envelops you completely, giving you a comprehensive treatment. The Therapists use relaxing, slow movements along with harder, warmer and deeper focused movements targeting specific areas, and all around the body.",
    features: ["Performed by two therapists", "Comprehensive full body treatment", "Recommended for dry and dull skin, fatigue and dehydrated skin"],
    intro: "The Royal 4-hand Experience",
    benefits: [
      "Relaxes body with synchronized therapist movement",
      "Warmer and deeper focused pressure for specific areas",
      "Complete massage coverage all around the body",
      "Recommended for regular therapy seekers",
    ],
    details: "A premium dual therapist ritual in The Royal Experience group.",
    gallery: [
      bannerPath("The Royal 4-hand Experience.png"),
      bannerPath("The Royal 4-hand Experience.png"),
    ],
  },
  {
    id: "arabian-hammam-therapy",
    title: "Arabian Hammam Therapy",
    icon: Sparkles,
    image: bannerPath("Arabian Hammam Therapy.png"),
    description:
      "Hammam is a middle east way of royalty, in this service, our team provides a beauty bath in a Indulgent ambiance and provide a royal treatment with access to our VIP suite. This treatment makes itself known around the world for being a relaxing and cleansing Moroccan ritual that is centuries old.",
    features: [
      "Hammam treatments use hot steam to encourage a deep and invigorating cleanse",
      "Vitamin-E rich, olive-based soap",
      "Skin-nourishing and exfoliating properties",
      "Royal treatment with VIP suite access",
    ],
    intro: "Arabian Hammam Therapy",
    benefits: [
      "Profoundly relaxing and good for the skin",
      "Deep and invigorating cleanse through steam",
      "Exfoliation with olive-based soap",
      "Traditional Moroccan ritual experience",
    ],
    details: "Hammam differs slightly from traditional thermal spa and focuses on steam-led cleansing.",
    gallery: [
      bannerPath("Arabian Hammam Therapy.png"),
      bannerPath("Arabian Hammam Therapy.png"),
    ],
  },
  {
    id: "the-spa-pool-family-experience",
    title: "The Spa Pool Family Experience",
    icon: Users,
    image: bannerPath("The Spa Pool Family Experience.png"),
    description:
      "Hot Tub or popullarly known as Spa Pool is a special bathing expeiance which not only clenses your whole body throughly, but also comes along with a buch of helath benifits.",
    features: [
      "60 Min Body massage with hot Oil for adults only",
      "30 Min Spa Pool Experiance / Hydro Therapy with hot water",
      "15 Min Steam Bath",
      "15 Min Jet Shower",
      "Includes upto 2 Children allowed upto 5 years",
      "Also enjoy snacks and beverages from the mini fridge at no extra cost",
    ],
    intro: "The Spa Pool Family Experience",
    benefits: [
      "It helps lower blood pressure and relieves daily strees",
      "Improves blood circulation, sleep habits and mental clarity",
      "Also helps to improve skin health and hair growth",
      "Family friendly in COUPLES ROOM",
    ],
    details: "Includes family friendly spa pool flow with adult massage and kids allowance as mentioned.",
    gallery: [
      bannerPath("The Spa Pool Family Experience.png"),
      bannerPath("The Spa Pool Family Experience.png"),
    ],
  },
  {
    id: "full-body-hot-stone-therapy",
    title: "Full Body Hot Stone Therapy",
    icon: Flame,
    image: bannerPath("Full Body Hot Stone Therapy.png"),
    description:
      "Hot stone massage therapy with warm heat from Basalt stones melts away tension, eases muscle stiffness and increases circulation and metabolism.",
    features: [
      "Promotes deeper muscle relaxation through placement of smooth water-heated stones at key points on the body",
      "Reduces stress and anxiety",
      "Promotes sleep",
      "Boost immunity",
    ],
    intro: "Full Body Hot Stone Therapy",
    benefits: [
      "May help relieve symptoms of autoimmune diseases",
      "May help decrease cancer symptoms",
      "Eases muscle stiffness",
      "Increases circulation",
    ],
    details: "A deeply calming stone based therapy in the Exclusive Therapy section.",
    gallery: [
      bannerPath("Full Body Hot Stone Therapy.png"),
      bannerPath("Full Body Hot Stone Therapy.png"),
    ],
  },
  {
    id: "full-body-warm-bamboo-therapy",
    title: "Full Body Warm Bamboo Therapy",
    icon: Leaf,
    image: bannerPath("Full Body Warm Bamboo Therapy.png"),
    description:
      "Ease your stiff muscles with warm bamboo massage where bamboos of different shapes and sizes are used to roll on the stiff tissues to create sense of relaxation.",
    features: [
      "Pressure is a combination of both deep tissue and Swedish therapies",
      "Pressure range from medium to hard",
      "Resulting in deep healing",
    ],
    intro: "Full Body Warm Bamboo Therapy",
    benefits: ["Eases stiff muscles", "Relaxation with bamboo rolling", "Medium to hard pressure choice", "Deep healing output"],
    details: "Exclusive Therapy using heated bamboo movement and pressure variation.",
    gallery: [
      bannerPath("Full Body Warm Bamboo Therapy.png"),
      bannerPath("Full Body Warm Bamboo Therapy.png"),
    ],
  },
  {
    id: "full-body-natural-herbal-potli-therapy",
    title: "Full Body Natural Herbal Potli Therapy",
    icon: Flower2,
    image: bannerPath("Full Body Natural Herbal Potli Therapy.png"),
    description:
      "Ease your muscle and joint stiffness with heated bundles massage with pouches of herbs and herbal oils like Ash wagandha, Triphala, Neem that have rejuvenating effects on body, and help heal the lower back, neck and stiff joints aches.",
    features: ["Heated bundles massage", "Herbal pouches and oils", "Supports lower back, neck and stiff joints"],
    intro: "Full Body Natural Herbal Potli Therapy",
    benefits: ["Muscle and joint stiffness care", "Rejuvenating herbal effect on body", "Targeted neck and lower back comfort", "Traditional potli warmth"],
    details: "A natural herbal Exclusive Therapy focused on stiffness release and comfort.",
    gallery: [
      bannerPath("Full Body Natural Herbal Potli Therapy.png"),
      bannerPath("Full Body Natural Herbal Potli Therapy.png"),
    ],
  },
  {
    id: "full-body-kansa-therapy",
    title: "Full Body Kansa Therapy",
    icon: Gem,
    image: bannerPath("Full Body Kansa Therapy.png"),
    description:
      "Regenerate your tissues while removing toxins from your body with help of Kansa wand therapy. The wand can revitalize your complexion and plump the skin, along with enhanced blood flow, reduced body swelling and muscle stiffness with deep penetration.",
    features: [
      "Helps balance chakras and doshas",
      "Helps balance PH levels",
      "Enhanced blood flow",
      "Reduced body swelling and stiffness",
    ],
    intro: "Full Body Kansa Therapy",
    benefits: ["Tissue regeneration and detox support", "Complexion revitalizing touch", "Deep penetration effect", "Holistic body balance"],
    details: "Exclusive Therapy designed with Kansa wand application techniques.",
    gallery: [
      bannerPath("Full Body Kansa Therapy.png"),
      bannerPath("Full Body Kansa Therapy.png"),
    ],
  },
  {
    id: "full-body-revive-deep-tissue-therapy",
    title: "Full Body Revive Deep Tissue Therapy",
    icon: Zap,
    image: bannerPath("Full Body Revive Deep Tissue Therapy.png"),
    description:
      "Deep tissue massage is a massage therapy focussing on realigning deeper layers of muscles and connective tissues. It is especially helpful for chronic aches, pains and contracted areas such as stiff neck and upper back, low back pain, leg muscle tightness, and sore shoulders.",
    features: ["Realigning deeper muscle layers", "Helps chronic aches and pains", "Supports tight neck, back, legs and shoulders"],
    intro: "Full Body Revive Deep Tissue Therapy",
    benefits: ["Deep layer tension release", "Targets contracted areas", "Best for stiffness and muscle tightness", "Classical Therapy style"],
    details: "A core Classical Therapy for chronic tension and structural body discomfort.",
    gallery: [
      bannerPath("Full Body Revive Deep Tissue Therapy.png"),
      bannerPath("Full Body Revive Deep Tissue Therapy.png"),
    ],
  },
  {
    id: "full-body-vitalizing-balinese-therapy",
    title: "Full Body Vitalizing Balinese Therapy",
    icon: Sun,
    image: bannerPath("Full Body Vitalizing Balineses Therapy.png"),
    description:
      "Balinese massage is full-body, deep-tissue, holistic treatment using combination of gentle stretches, acupressure, reflexology, and aromatherapy to stimulate the flow of blood, oxygen and energy around your body, resulting in sense of well-being, calm and deep relaxation.",
    features: ["Gentle stretches and acupressure", "Reflexology and aromatherapy", "Stimulates blood, oxygen and energy flow"],
    intro: "Full Body Vitalizing Balineses Therapy",
    benefits: ["Sense of well-being", "Calm and deep relaxation", "Full body holistic treatment", "Classical Therapy experience"],
    details: "A Classical Therapy approach combining multiple healing modalities.",
    gallery: [
      bannerPath("Full Body Vitalizing Balineses Therapy.png"),
      bannerPath("Full Body Vitalizing Balineses Therapy.png"),
    ],
  },
  {
    id: "full-body-swedish-oil-therapy",
    title: "Full Body Swedish Therapy (Oil Therapy)",
    icon: Droplets,
    image: bannerPath("Full Body Swedish Therapy (Oil Theraphy).png"),
    description:
      "Swedish massage helps promote relaxation by releasing muscle tension with gentle massage. This therapy helps loosen up tight muscles caused by sedentary lifestyle or strenuous exercises and helps relieve tension in the lower back, shoulders and neck.",
    features: ["Gentle oil based massage", "Loosens tight muscles", "Relieves lower back, shoulder and neck tension"],
    intro: "Full Body Swedish Therapy (Oil Theraphy)",
    benefits: ["Promotes relaxation", "Releases muscle tension", "Helpful for sedentary lifestyle strain", "Classical oil therapy style"],
    details: "A Classical Therapy with smooth gentle pressure and restorative flow.",
    gallery: [
      bannerPath("Full Body Swedish Therapy (Oil Theraphy).png"),
      bannerPath("Full Body Swedish Therapy (Oil Theraphy).png"),
    ],
  },
  {
    id: "full-body-aromatherapy-therapy",
    title: "Full Body Aromatherapy Therapy",
    icon: Wind,
    image: bannerPath("Full Body Aromatheraphy Therapy.png"),
    description:
      "Aroma therapy is a oil therapy, its a holistic healing treatment using natural plant extracts to promote health and well-being and overall improves the body, mind, and soul. It enhances both physical and emotional health.",
    features: ["Holistic oil therapy", "Natural plant extracts", "Supports physical and emotional health"],
    intro: "Full Body Aromatheraphy Therapy",
    benefits: ["Body-mind-soul healing style", "Well-being support", "Plant based aroma wellness", "Classical Therapy segment"],
    details: "Classical aromatherapy process using natural extracts and oil application.",
    gallery: [
      bannerPath("Full Body Aromatheraphy Therapy.png"),
      bannerPath("Full Body Aromatheraphy Therapy.png"),
    ],
  },
  {
    id: "full-body-traditional-thai-therapy",
    title: "Full Body Traditional Thai Therapy",
    icon: Move,
    image: bannerPath("Full Body Traditional Thai Therapy.png"),
    description:
      "Thai massage, which originated in India, has been around for over 2,500 years. Originally regarded as a healing art, traditional Thai massage includes influences from both Ayurvedic and traditional Chinese medicine.",
    features: [
      "Unlike typical Western-type massages, it does not involve table oil kneading style",
      "Traditional Thai bodywork approach",
      "Ancient healing art influence",
    ],
    intro: "Full Body Traditional Thai Therapy",
    benefits: ["Long standing traditional healing practice", "Ayurvedic and Chinese medicine influence", "Classical Therapy signature", "Focused pressure-point style"],
    details: "A traditional Thai system based full body classical therapy.",
    gallery: [
      bannerPath("Full Body Traditional Thai Therapy.png"),
      bannerPath("Full Body Traditional Thai Therapy.png"),
    ],
  },
  {
    id: "full-body-refining-scrub",
    title: "Full Body Refining Scrub",
    icon: Hand,
    image: bannerPath("Full Body Refining Scrub.png"),
    description:
      "Experience a complete cleansing and exfoliating experience with our exclusive Jojoba Scrub treatment that's suitable for all skin types and is packed with antioxidants and anti-inflammatory ingredients.",
    features: [
      "Comprised of Jojoba refreshing scented green tea body scrub topped with Jojoba oil",
      "Helps exfoliate dead cells from your skin",
      "Recommended for enhanced cell renewal",
      "Recommended for improvise youthful skin",
    ],
    intro: "Full Body Refining Scrub",
    benefits: ["Complete cleansing and exfoliating experience", "Suitable for all skin types", "Antioxidants and anti-inflammatory ingredients", "Body Scrub Therapy segment"],
    details: "Live Life - King Size Body Scrub Therapy with Jojoba based exfoliation ritual.",
    gallery: [
      bannerPath("Full Body Refining Scrub.png"),
      bannerPath("Full Body Refining Scrub.png"),
    ],
  },
  {
    id: "full-body-therapy-scrub-combo",
    title: "Full Body Therapy & Scrub Combo",
    icon: LayoutGrid,
    image: bannerPath("Full Body Therapy & Scrub Combo.png"),
    description:
      "Experience a moist, glowing and smooth looking skin after a deep, vigorous yet gentle refining mineral salt scrub from sea salts that is rich in trace minerals which will help exfoliate the dead skin layers of the skin resulting in smooth skin.",
    features: [
      "Recommended for Indian skin type",
      "Recommended for tanned skin repair",
      "Recommended for skin deep cleansing",
      "Full body therapy and scrub combo",
    ],
    intro: "Full Body Therapy & Scrub Combo",
    benefits: ["Moist and smooth look", "Refining mineral salt scrub", "Sea salts rich in trace minerals", "Body Scrub Therapy finish"],
    details: "A combo ritual that supports deep exfoliation and visible skin smoothness.",
    gallery: [
      bannerPath("Full Body Therapy & Scrub Combo.png"),
      bannerPath("Full Body Therapy & Scrub Combo.png"),
    ],
  },
]

export function getServiceDetail(serviceId) {
  const s = SPA_SERVICES.find((x) => x.id === serviceId)
  if (!s) return null
  return {
    title: s.title,
    heroImage: s.image,
    gallery: s.gallery,
    intro: s.intro,
    benefits: s.benefits,
    details: s.details,
  }
}
