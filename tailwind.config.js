/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': {
          DEFAULT: '#dc2626',
          dark: '#991b1b',
          light: '#f87171',
        },
        'brand-green': {
          DEFAULT: '#059669',
          dark: '#047857',
          light: '#34d399',
        },
        'brand-yellow': {
          DEFAULT: '#f59e0b',
          light: '#fcd34d',
        },
        'brand-gray': {
          '900': '#111827',
          '800': '#1f2937',
          '700': '#374151',
          '300': '#d1d5db',
          '100': '#f3f4f6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'urgent-pulse': 'urgentPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'shake': 'shake 0.5s ease-in-out infinite',
      },
      keyframes: {
        urgentPulse: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(245, 158, 11, 0.7)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 0 12px rgba(245, 158, 11, 0)' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        }
      },
      boxShadow: {
        'intense': '0 25px 50px -12px rgba(0, 0, 0, 0.45)',
      }
    },
  },
  plugins: [],
}
