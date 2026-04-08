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
      "Hot tub—popularly known as a spa pool—is a special bathing experience that cleanses your whole body thoroughly and comes with a host of health benefits. It helps lower blood pressure, eases daily stress, improves circulation and sleep, and supports mental clarity through privacy and calm. It also supports skin health and hair growth.",
    features: [
      "Body massage with hot oil",
      "Spa pool / hydro therapy with hot water",
      "Steam bath",
      "Jet shower",
      "Snacks & beverages from the mini fridge—no extra cost",
    ],
    intro:
      "Our signature hydro experience pairs immersive water therapy with massage and thermal rituals for a royal, full-body reset.",
    benefits: [
      "Supports healthy blood pressure and circulation",
      "Deep stress relief and calmer sleep",
      "Mental clarity in a private, serene setting",
      "Skin and hair wellness through thorough cleansing and warmth",
    ],
    details:
      "The spa pool experience is designed to cleanse and relax the entire body. Alongside hydrotherapy, your session includes restorative heat and water elements that work together to leave you refreshed. Complimentary snacks and chilled beverages from the mini fridge complete the experience.",
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
      "In our healing touch therapy room, this journey helps lower blood pressure, relieve stress, improve circulation and sleep, and encourage mental clarity through privacy and calm—while supporting skin health and hair growth. Enjoy snacks and beverages from the mini fridge at no extra cost.",
    features: [
      "Healing touch therapy room",
      "Without spa pool room",
      "Your choice of massage: Aroma, Swedish, or Deep Tissue",
      "Complimentary mini fridge refreshments",
    ],
    intro:
      "A focused healing-room experience with your preferred classical massage—crafted for relaxation, recovery, and clarity.",
    benefits: [
      "Stress relief and steadier sleep patterns",
      "Improved circulation and overall calm",
      "Skin and hair supported through therapeutic touch",
      "Flexible modality: Aroma, Swedish, or Deep Tissue",
    ],
    details:
      "This treatment takes place in our dedicated healing environment—without the spa pool—so the emphasis stays on expert massage tailored to you. Unwind afterward with complimentary snacks and drinks from the mini fridge.",
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
      "Performed by two therapists, this massage envelops you completely for a comprehensive treatment. Therapists combine relaxing, slow movements with deeper, warmer, focused work on specific areas and across the whole body.",
    features: [
      "Two therapists in sync",
      "Full-body coverage with layered techniques",
      "Blend of flowing and deep focused pressure",
    ],
    intro:
      "Four hands, one seamless rhythm—an immersive massage that feels both expansive and precisely targeted.",
    benefits: [
      "Ideal for dull or dehydrated skin and fatigue",
      "Deep relaxation with dual-therapist flow",
      "Targeted relief where you need it most",
      "A standout ritual for regular wellness",
    ],
    details:
      "The royal four-hand format allows simultaneous work on multiple areas, alternating gentle, enveloping strokes with firmer, warming pressure. It is especially rewarding when you want maximum coverage in a single session.",
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
      "Hammam is a Middle Eastern tradition of royalty: a beauty bath in an indulgent ambiance with royal treatment and access to our VIP suite. This relaxing, cleansing Moroccan ritual is centuries old. Unlike a classic thermal spa, hammam uses hot steam for a deep, invigorating cleanse, with vitamin-E-rich, olive-based soap prized for nourishing and exfoliating the skin.",
    features: [
      "VIP suite access",
      "Moroccan steam ritual",
      "Olive-based, vitamin-E-rich soap",
      "Deep cleanse and skin nourishment",
    ],
    intro:
      "Step into a timeless hammam ritual—steam, olive-rich soap, and royal hospitality in our VIP setting.",
    benefits: [
      "Profound relaxation and skin softening",
      "Deep cleansing through therapeutic steam",
      "Exfoliation and nourishment in one ritual",
      "An authentic Moroccan wellness heritage",
    ],
    details:
      "Our team guides you through a indulgent hammam-style cleanse in a serene, upscale environment. Hot steam opens the pores and prepares the skin for vitamin-E-rich olive soap that exfoliates gently while conditioning.",
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
      "The spa pool offers a thorough, cleansing soak with wide-ranging wellness benefits: supporting healthy blood pressure, easing stress, improving circulation and sleep, and encouraging mental clarity in a private, calm space—plus benefits for skin and hair. Includes body massage with hot oil for adults, spa pool hydrotherapy, steam bath, and jet shower. Up to two children up to five years may join. Snacks and beverages from the mini fridge are included at no extra cost.",
    features: [
      "Couples / family-oriented couples room setting",
      "Body massage with hot oil (adults)",
      "Spa pool hydrotherapy with hot water",
      "Steam bath and jet shower",
      "Up to 2 children (up to 5 years)",
      "Complimentary mini fridge refreshments",
    ],
    intro:
      "Share the spa pool ritual with your loved ones—adult massage and hydrotherapy, with space for little ones in a couples-room experience.",
    benefits: [
      "Family-friendly hydro and heat sequence",
      "Same wellness upside as our signature spa pool journey",
      "Adult-focused massage plus pool time for the group",
      "Inclusive refreshments for everyone",
    ],
    details:
      "Designed for adults who want the full hydro sequence while accommodating young children in a controlled, welcoming environment. The experience blends massage for adults with communal pool, steam, and shower elements.",
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
      "Hot stone massage uses soothing heat from basalt stones to melt tension, ease muscle stiffness, and support circulation and metabolism. Smooth, water-heated stones are placed at key points to promote deeper muscle relaxation.",
    features: [
      "Basalt stones with controlled heat",
      "Strategic stone placement",
      "Deeper muscle release",
    ],
    intro:
      "Warm stone work meets flowing massage for a session that sinks tension out of the body layer by layer.",
    benefits: [
      "May reduce stress and support sleep",
      "Eases stiffness and supports circulation",
      "Softer response for deeper work",
      "Holistic comfort for body and mind",
    ],
    details:
      "Each session combines hands-on massage with heated stones that prepare tight tissue for release. The warmth helps the nervous system settle so muscles can let go more fully.",
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
      "Ease stiff muscles with warm bamboo massage: varied bamboo shapes and sizes roll over tight tissue to create deep relaxation. Pressure blends deep-tissue and Swedish techniques from medium to firm for restorative results.",
    features: [
      "Warm bamboo tools in multiple sizes",
      "Medium to firm pressure range",
      "Fusion of Swedish flow and deep work",
    ],
    intro:
      "Rolling warm bamboo delivers a unique mix of glide and depth—perfect when you want both relaxation and real release.",
    benefits: [
      "Targets stubborn stiffness",
      "Encourages circulation in tight areas",
      "Customizable pressure",
      "Distinctive sensory experience",
    ],
    details:
      "Therapists use heated bamboo implements to knead and roll along muscle lines, adapting pace and pressure. The result is a structured, full-body treatment that feels both grounding and invigorating.",
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
      "Soothe muscle and joint stiffness with heated herbal bundles: pouches of herbs and oils such as ashwagandha, triphala, and neem for a rejuvenating effect on the body, especially the lower back, neck, and achy joints.",
    features: [
      "Heated herbal potli compresses",
      "Ayurvedic-inspired botanical blends",
      "Focus on back, neck, and joints",
    ],
    intro:
      "Warm herbal poultices and skilled massage combine for an earthy, restorative full-body treatment.",
    benefits: [
      "Eases joint and muscle stiffness",
      "Warmth carries botanical benefits into tissue",
      "Grounding, aromatic experience",
      "Supports mobility and comfort",
    ],
    details:
      "Heated potlis are pressed and stroked along the body to deliver moist heat and herbaceous oils. The ritual is ideal when you want natural ingredients paired with therapeutic warmth.",
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
      "Support tissue vitality and clarity with Kansa wand work. The wand can refresh the look of the skin, encourage blood flow, ease swelling and stiffness, and allow deeper-feeling work. Traditionally associated with balancing energy and pH.",
    features: [
      "Traditional Kansa metal wand",
      "Face and body revitalization",
      "Lymphatic and circulatory support",
    ],
    intro:
      "A metal-wand ritual rooted in Ayurvedic tradition—detoxifying in feel, luminous in finish.",
    benefits: [
      "Toning and revitalizing touch for skin",
      "Reduced-feeling puffiness and tension",
      "Deeper penetration with smooth glide",
      "Holistic sense of balance",
    ],
    details:
      "The Kansa wand is worked with oils across the body (and where appropriate, the face) in rhythmic patterns. Many guests describe a cooling-then-warming sensation and a clear, light feeling afterward.",
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
      "Deep tissue massage focuses on realigning deeper layers of muscle and connective tissue. It is especially helpful for chronic aches, contracted areas, stiff neck and upper back, low-back discomfort, leg tightness, and sore shoulders.",
    features: [
      "Slow, targeted deep pressure",
      "Chronic tension and adhesion focus",
      "Full-body structural work",
    ],
    intro:
      "When surface massage is not enough, revive deep tissue goes where discomfort lives—in deeper muscle and fascia.",
    benefits: [
      "Relief for long-standing tight spots",
      "Improved mobility in stuck areas",
      "Athletic and desk-life recovery",
      "Clear, honest pressure you can communicate",
    ],
    details:
      "Your therapist uses layered techniques to warm tissue before deeper strokes, always checking in on pressure. The goal is lasting ease, not short-lived intensity.",
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
      "Balinese massage is a full-body, deep-tissue, holistic treatment combining gentle stretches, acupressure, reflexology, and aromatherapy to stimulate blood, oxygen, and energy flow—leaving a sense of wellbeing, calm, and deep relaxation.",
    features: [
      "Stretching and acupressure elements",
      "Reflexology and aromatherapy touches",
      "Flowing, vitalizing full-body sequence",
    ],
    intro:
      "Island-inspired bodywork that blends stretch, pressure points, and scent into one fluid ritual.",
    benefits: [
      "Whole-body energy and circulation",
      "Deep relaxation with uplifting notes",
      "Joint-friendly gentle stretches",
      "Aromatherapy-enhanced mood support",
    ],
    details:
      "Balinese technique alternates broad, nurturing strokes with pinpoint work on feet, hands, and energy lines. Essential oils amplify the sensory journey from start to finish.",
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
      "Swedish massage promotes relaxation by easing muscle tension with smooth, gliding work. It helps loosen tight muscles from a sedentary routine or strenuous exercise and relieves tension in the lower back, shoulders, and neck.",
    features: [
      "Classic effleurage and kneading",
      "Premium oil glide",
      "Full-body relaxation focus",
    ],
    intro:
      "The quintessential oil massage—long strokes, gentle kneading, and full-body ease.",
    benefits: [
      "Lowers everyday muscle tension",
      "Supports circulation and sleep",
      "Ideal introduction to spa massage",
      "Targets neck, shoulders, and back",
    ],
    details:
      "Swedish flow is built for nervous-system downshifting: predictable rhythm, comforting pressure, and nourishing oils chosen for your skin.",
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
      "Aromatherapy is holistic oil therapy using natural plant extracts to support health and wellbeing—body, mind, and soul. It enhances both physical comfort and emotional balance.",
    features: [
      "Custom essential oil selection",
      "Full-body oil massage",
      "Mind-body sensory focus",
    ],
    intro:
      "Scent and touch together: botanical oils chosen to match how you want to feel—grounded, uplifted, or restored.",
    benefits: [
      "Emotional grounding through aroma",
      "Skin-nourishing botanical carriers",
      "Stress ease and gentle vitality",
      "Holistic, sensory-rich session",
    ],
    details:
      "After a brief consultation, your therapist blends oils to support your goals—whether relaxation, clarity, or gentle energy. Massage carries the actives into both skin and breath.",
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
      "Thai massage, with roots in India, has been practiced for over 2,500 years as a healing art, drawing from Ayurvedic and traditional Chinese medicine. Unlike typical Western oil massage on a table, traditional Thai work uses assisted movement, compression, and energy-line focus—often on a mat—with comfortable clothing.",
    features: [
      "Mat-based traditional sequence",
      "Compression and assisted stretching",
      "No heavy oil; comfortable attire",
    ],
    intro:
      "Dynamic, clothes-on bodywork that feels like a guided stretch session with expert hands.",
    benefits: [
      "Greater flexibility and joint ease",
      "Energizing yet meditative rhythm",
      "Ancient lineage, modern comfort",
      "Full-body opening without oil slick",
    ],
    details:
      "You’ll be guided through positions and stretches while pressure is applied along sen lines and muscle groups. It is an excellent choice when you want movement-based therapy rather than sliding oil strokes.",
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
      "A full cleansing and exfoliating journey with our Jojoba scrub—suitable for all skin types—with antioxidants and anti-inflammatory botanicals. Refreshing green-tea-scented Jojoba scrub topped with Jojoba oil helps lift dull, dead cells gently.",
    features: [
      "Jojoba-based scrub and oil finish",
      "Green tea inspired aroma",
      "Antioxidant-rich formula",
    ],
    intro:
      "Polished skin, zero harshness—Jojoba exfoliation followed by silky oil conditioning.",
    benefits: [
      "Recommended for cell renewal and youthful-looking skin",
      "Smooths texture without stripping",
      "Suitable for diverse skin types",
      "Spa glow in one visit",
    ],
    details:
      "The scrub is worked over the body to refine texture, then sealed in with Jojoba oil for softness. Ideal before a special event or whenever your skin feels dull.",
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
      "Enjoy moist, glowing, smooth-looking skin after a deep yet gentle mineral salt scrub from sea salts rich in trace minerals. Exfoliation lifts dead layers for a smoother feel.",
    features: [
      "Sea salt mineral scrub",
      "Therapy plus scrub in one journey",
      "Trace mineral skin feed",
    ],
    intro:
      "Scrub meets massage: mineral salts refine the skin, then therapeutic work completes the glow.",
    benefits: [
      "Recommended for Indian skin types and tanned-skin refresh",
      "Deep cleansing feel with visible smoothness",
      "Hydration-friendly finish",
      "Two rituals, one seamless booking",
    ],
    details:
      "Sea salts slough away buildup while trace minerals leave skin feeling revived. The combo pairs exfoliation with hands-on therapy so you leave both smooth and loosened up.",
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
