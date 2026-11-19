/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0f',
          surface: '#12121a',
          surface2: '#1a1a28',
          card: 'rgba(18, 18, 28, 0.75)',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(99, 102, 241, 0.35)',
        },
        light: {
          bg: '#f8fafc',
          surface: '#ffffff',
          surface2: '#f1f5f9',
          card: 'rgba(255, 255, 255, 0.85)',
          border: 'rgba(0, 0, 0, 0.08)',
          borderHover: 'rgba(99, 102, 241, 0.4)',
        },
        primary: {
          DEFAULT: '#6366f1',
          hover: '#4f46e5',
          dark: '#4338ca',
          light: '#818cf8',
        },
        accent: {
          DEFAULT: '#22d3ee',
          glow: '#06b6d4',
          light: '#67e8f9',
        },
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'gradient-blob': 'blob 10s infinite ease-in-out',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'float-reverse 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-25px, 25px) scale(0.92)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      boxShadow: {
        'glow-indigo': '0 0 25px -5px rgba(99, 102, 241, 0.35)',
        'glow-cyan': '0 0 25px -5px rgba(34, 211, 238, 0.35)',
        'glow-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
};
