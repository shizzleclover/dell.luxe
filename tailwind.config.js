/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'luxury-gold': '#C9A86E',
        'luxury-charcoal': '#333333',
        'luxury-navy': 'var(--color-luxury-navy, #010400)',
        'luxury-ivory': '#F7F5F0',
        'luxury-plum': '#7A4D5A',
        'luxury-black': '#1A1A1A',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Raleway', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'elegant': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
} 