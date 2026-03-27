import { useState } from 'react';

export default function TextReveal({ word = "Cinematic Reveal", className = "", delayOffset = 0 }) {
  const [key, setKey] = useState(0);

  return (
    <div className={`text-reveal-container ${className}`}>
      <div key={key} className="text-wrapper">
        <h1 className="title" aria-label={word}>
          {word.split("").map((char, i) => (
            <span
              key={`${key}-${i}`}
              className="char"
              style={{
                "--index": i + delayOffset,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </div>

      <style>{`
        .text-reveal-container {
          background-color: transparent; 
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .text-wrapper {
          position: relative;
          z-index: 10;
        }

        .title {
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin: 0;
          text-shadow: 0 0 20px rgba(233, 193, 118, 0.3); /* The text-glow effect */
        }

        .char {
          display: inline-block;
          opacity: 0;
          filter: blur(12px);
          transform: translateY(40%) scale(1.1) translateZ(0);
          animation: cinematic-reveal 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: calc(0.06s * var(--index));
          will-change: transform, opacity, filter;
        }

        @keyframes cinematic-reveal {
          0% {
            opacity: 0;
            filter: blur(12px);
            transform: translateY(40%) scale(1.1);
          }
          50% {
             opacity: 0.7;
             filter: blur(4px);
          }
          100% {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
