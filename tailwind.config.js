/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#F6F3EE",
        "surface": "#F9F6F1",
        "surface-variant": "#EFE8DD",
        "surface-container": "#F2EBE1",
        "on-background": "#1E1E1E",
        "on-surface": "#1E1E1E",
        "on-surface-variant": "#5A5A5A",
        
        "primary": "#C5A059",
        "on-primary": "#FFFFFF",
        "primary-container": "#EFE3D1",
        "on-primary-container": "#1E1E1E",
        
        "secondary": "#7A8572",
        "on-secondary": "#FFFFFF",
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
        "inverse-primary": "#F8D48E"
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
    },
  },
  plugins: [],
}
