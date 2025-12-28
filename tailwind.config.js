/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme backgrounds
        dark: {
          950: '#0f0f0f', // Main background
          900: '#171717', // Cards, elevated surfaces
          800: '#262626', // Hover states, borders
          700: '#404040', // Subtle accents
          600: '#525252', // Muted elements
        },
        // Gold accent - use sparingly
        accent: {
          400: '#fbbf24',
          500: '#f59e0b', // Primary gold
          600: '#d97706',
        },
        // Blue for trust elements
        trust: {
          500: '#3b82f6',
          600: '#2563eb',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Georgia', 'serif'],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        'elevated': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      },
    },
  },
  plugins: [],
}
