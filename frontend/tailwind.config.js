/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          iceBlue: '#C4E2F5',      /* Soft Ice Blue Base */
          bluePrimary: '#1591DC',  /* Primary Accent / CTA */
          blueSecondary: '#4BB8FA',/* Secondary Accent / Badges / Light Border */
          blueText: '#2C5EAD',     /* Primary Text & Header Light */
          slateBase: '#27374D',    /* Deep Slate Charcoal Dark Base */
          slateCard: '#526D82',    /* Dark Mode Card Background */
          slateSecondary: '#9DB2BF',/* Secondary Accent / Badges / Dark Border */
          slateText: '#DDE6ED',    /* Primary Text & Highlights Dark */
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
