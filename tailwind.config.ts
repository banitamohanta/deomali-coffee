import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          50: '#f5f0eb',
          100: '#e6dbd1',
          200: '#d4c0b0',
          300: '#bfa08a',
          400: '#a87f64',
          500: '#8b5e3c',
          600: '#6b4423',
          700: '#4a2c17',
          800: '#3d2314',
          900: '#2c180e',
          950: '#1a0e08',
        },
        cream: {
          50: '#fdfcfa',
          100: '#faf6f0',
          200: '#f5ede3',
          300: '#ede0d0',
          400: '#e0cbb0',
          500: '#d4b896',
        },
        forest: {
          50: '#f2f7f2',
          100: '#e0ece0',
          200: '#c4d9c4',
          300: '#9bbf9b',
          400: '#6a9e6a',
          500: '#4a7c4a',
          600: '#3d633d',
          700: '#334f33',
          800: '#2a3f2a',
          900: '#1f2e1f',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
