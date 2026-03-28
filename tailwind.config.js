/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: '#020617', // Deep cinematic navy
        gold: {
          light: '#E5C87B',
          DEFAULT: '#C9A962',
          dark: '#A68A4F',
        },
        navy: {
          950: '#01040f',
          900: '#020617',
          800: '#0F172A',
          700: '#1E293B',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
        // Arabic display headings: Azkadinya Bold (system) → Noto Kufi Arabic (web)
        'arabic': ['Azkadinya', 'AzkadineBold', 'Noto Kufi Arabic', 'sans-serif'],
        // Arabic body text: 29LT Riwaya Informal (system) → IBM Plex Sans Arabic (web)
        'arabic-body': ['29LT Riwaya', '29LT Riwaya Informal', 'IBM Plex Sans Arabic', 'Tajawal', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'premium-gradient': 'linear-gradient(to right, #020617, #0F172A)',
      },
    },
  },
  plugins: [],
}
