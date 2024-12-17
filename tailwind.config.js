/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: 
      { 
        'slide-fade-left': 'slideFadeLeft 0.3s ease-out', 
      }, 
      keyframes: 
      { 
        slideFadeLeft: 
        { 
          '0%': { opacity: 0, transform: 'translateX(100%)', }, 
          '100%': { opacity: 1, transform: 'translateX(0)', }, 
        }, 
      }
    },
  },
  plugins: [],
}

