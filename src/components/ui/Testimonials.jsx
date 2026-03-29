import React from "react";
import { TestimonialsColumn } from "./testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "The Water Hydro Therapy at 111 International Spa truly impressed me with its beautiful setup and smooth, relaxing flow. The moment I walked into the therapy room, I noticed how carefully everything was arranged—from the lighting to the ambiance.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&q=80",
    name: "Asif Shaik",
    role: "Google Review",
  },
  {
    text: "I had an amazing experience! The jacuzzi was incredibly relaxing, and the deep tissue massage was just perfect — it really helped release all the tension. The staff were warm, professional, and made me feel at home.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&q=80",
    name: "Taarak Kumar",
    role: "Google Review",
  },
  {
    text: "My visit to the Royal Thai Therapy Room was an amazing combination of skin care and relaxation. The therapist began with a refreshing body scrub that deeply cleansed my skin and improved its texture.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80",
    name: "Parvez Shaik",
    role: "Google Review",
  },
  {
    text: "My session in the Royal Thai Therapy Room was a perfect blend of healing, comfort, and rejuvenation. The room had a calm, spiritual vibe with traditional Thai décor, soft music, and dim lighting that instantly relaxed my senses.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&q=80",
    name: "Sk imran",
    role: "Google Review",
  },
  {
    text: "I recently had the pleasure of visiting 111 spa, and I can confidently say it was an exceptional experience from start to finish. The moment I walked in, I was greeted by a warm and friendly staff who made me feel right at home.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
    name: "Pk H Gamer",
    role: "Google Review",
  },
  {
    text: "111 International Thai Spa is noted for its good ambience, attentive and knowledgeable staff, and a highly skilled, considerate therapist who provides a highly recommended experience. I'm so happy with the management and service.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&q=80",
    name: "Kudumula Venkat Kudumula",
    role: "Google Review",
  },
  {
    text: "Very clean and well-maintained spa with excellent service. The therapists are skilled and make sure you feel completely relaxed. Highly recommended for anyone visiting Hitech City.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80",
    name: "Abuzar",
    role: "Google Review",
  },
  {
    text: "I never knew a good massage could lift a person's spirits and make them feel so much at peace. The ambience was authentic and the massage beds comfortable, but the staff and their polite service were unmatched.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
    name: "Orsu jagadeesh567",
    role: "Google Review",
  },
  {
    text: "Really an amazing place for the body to get de-stressed. The staff are amazing and very helpful when it comes to greeting and being very nice, especially the therapist who understood exactly where the pain was.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&q=80",
    name: "Divya ND",
    role: "Google Review",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-10"
        >
          <span className="material-symbols-outlined text-primary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
          <span className="label-md uppercase tracking-[0.2em] text-primary mb-4 block text-center">CLIENT EXPERIENCES</span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-on-surface text-center">
            What Our Guests Say
          </h2>
        </motion.div>

        {/* The scrolling columns with custom mask to fade out standardly */}
        <div className="flex justify-center gap-4 md:gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[600px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} duration={20} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={12} />
        </div>
      </div>
    </section>
  );
}
