/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: '#020617', // Deep cinematic navy
        gold: {
          light: '#F5D394',
          DEFAULT: '#D4AF37', // Classic metallic gold
          dark: '#B8860B',
        },
        navy: {
          900: '#020617',
          800: '#0F172A',
          700: '#1E293B',
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'premium-gradient': 'linear-gradient(to right, #020617, #0F172A)',
      },
    },
  },
  plugins: [],
}
