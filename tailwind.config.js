/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "var(--background, #F6F3EE)",
        "surface": "#F9F6F1",
        "surface-variant": "#EFE8DD",
        "surface-container": "#F2EBE1",
        "on-background": "var(--foreground, #1E1E1E)",
        "on-surface": "var(--foreground, #1E1E1E)",
        "on-surface-variant": "var(--muted-foreground, #5A5A5A)",
        
        "primary": "var(--primary, #C5A059)",
        "on-primary": "var(--primary-foreground, #FFFFFF)",
        "primary-container": "#EFE3D1",
        "on-primary-container": "#1E1E1E",
        
        "secondary": "var(--secondary, #7A8572)",
        "on-secondary": "var(--secondary-foreground, #FFFFFF)",
        "secondary-container": "#E8EEE5",
        "on-secondary-container": "#1E1E1E",
        
        "tertiary": "#8B7E6B",
        "on-tertiary": "#FFFFFF",
        "tertiary-container": "#E0D7C6",
        "on-tertiary-container": "#1E1E1E",
        
        "outline": "#C4BFB5",
        "outline-variant": "#D9D4CC",
        
        "error": "#BA1A1A",
        "on-error": "#FFFFFF",
        "error-container": "#FFDAD6",
        "on-error-container": "#410002",
        "inverse-surface": "#31302E",
        "inverse-on-surface": "#F4F0EC",
        "inverse-primary": "#F8D48E",
        
        // Added for compatibility with standard component patterns
        "foreground": "var(--foreground, #1E1E1E)",
        "border": "var(--border, #E8E2D9)",
        "card": {
          DEFAULT: "var(--card, #FFFFFF)",
          foreground: "var(--card-foreground, #1E1E1E)"
        },
        "popover": {
          DEFAULT: "var(--popover, #FFFFFF)",
          foreground: "var(--popover-foreground, #1E1E1E)"
        },
        "muted": {
          DEFAULT: "var(--muted, #F9F6F1)",
          foreground: "var(--muted-foreground, #5A5A5A)"
        },
        "accent": {
          DEFAULT: "var(--accent, #EFE3D1)",
          foreground: "var(--accent-foreground, #1E1E1E)"
        },
        "destructive": {
          DEFAULT: "var(--destructive, #BA1A1A)",
          foreground: "var(--primary-foreground, #FFFFFF)"
        },
        "input": "var(--input, #E8E2D9)",
        "ring": "var(--ring, rgba(197, 160, 89, 0.5))"
      },
      fontFamily: {
        "headline": ["Cormorant Garamond", "serif"],
        "body": ["DM Sans", "sans-serif"],
        "cormorant": ["Cormorant Garamond", "serif"],
        "dmsans": ["DM Sans", "sans-serif"],
        "manrope": ["Manrope", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.125rem", 
        "lg": "0.25rem", 
        "xl": "0.5rem", 
        "full": "0.75rem"
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        }
      },
      backgroundImage: {
        "glass-gradient": "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.2))",
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        ".glass": {
          "background": "rgba(255, 255, 255, 0.03)",
          "backdrop-filter": "blur(12px)",
          "-webkit-backdrop-filter": "blur(12px)",
          "border": "1px solid rgba(255, 255, 255, 0.1)",
          "box-shadow": "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
        },
        ".glass-dark": {
          "background": "rgba(15, 15, 15, 0.4)",
          "backdrop-filter": "blur(16px)",
          "-webkit-backdrop-filter": "blur(16px)",
          "border": "1px solid rgba(255, 255, 255, 0.05)",
          "box-shadow": "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
        },
        ".gold-glow": {
          "box-shadow": "0 0 20px rgba(197, 160, 89, 0.2)",
        }
      })
    }
  ],
}
