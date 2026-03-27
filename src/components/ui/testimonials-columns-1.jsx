"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div 
                  className="p-8 rounded-md border border-outline-variant/20 bg-surface-container/30 backdrop-blur-md max-w-[320px] w-full hover:bg-surface-container/50 transition-colors" 
                  key={i}
                >
                  <div className="font-body text-on-surface-variant leading-relaxed mb-6 italic">"{text}"</div>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-surface-container-highest border border-outline-variant/30 overflow-hidden shrink-0">
                      <span className="material-symbols-outlined text-on-surface-variant/70 text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-label tracking-[0.2em] text-primary text-[10px] mb-1 uppercase">{name}</div>
                      <div className="text-on-surface-variant text-xs italic">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
