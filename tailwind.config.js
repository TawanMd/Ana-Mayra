/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        surface: '#F9F9FB',
        surfaceAlt: '#F3F4F6',
        dark: {
          900: '#000000',
          800: '#0B0F17',
          700: '#161B26',
          600: '#232936',
          500: '#384152'
        },
        brand: {
          copper: '#B87333',
          bronze: '#C5A880',
          navy: '#0D2137'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Syne"', '"Plus Jakarta Sans"', 'sans-serif'],
        serifDisplay: ['"Cinzel"', 'serif'],
      },
      animation: {
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      boxShadow: {
        '21st': '0 0 0 1px rgba(0, 0, 0, 0.08), 0 20px 40px -15px rgba(0, 0, 0, 0.05)',
        '21st-hover': '0 0 0 1px rgba(0, 0, 0, 0.12), 0 30px 60px -12px rgba(0, 0, 0, 0.12)',
        'glow-subtle': '0 0 50px -10px rgba(0, 0, 0, 0.15)',
        'inner-light': 'inset 0 1px 0 rgba(255, 255, 255, 0.8)',
      }
    },
  },
  plugins: [],
}
