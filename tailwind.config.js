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
        // Primary - Warm Navy (not cold blue)
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#1a365d', // Main primary
          950: '#102a43',
        },
        // Accent - Florida Sunset/Coral
        accent: {
          50: '#fffaf0',
          100: '#feebc8',
          200: '#fbd38d',
          300: '#f6ad55',
          400: '#ed8936', // Main accent
          500: '#dd6b20',
          600: '#c05621',
          700: '#9c4221',
          800: '#7b341e',
          900: '#652b19',
        },
        // Sage Green - Trust + Calm
        sage: {
          50: '#f0fff4',
          100: '#c6f6d5',
          200: '#9ae6b4',
          300: '#68d391', // Main sage
          400: '#48bb78',
          500: '#38a169',
          600: '#2f855a',
          700: '#276749',
          800: '#22543d',
          900: '#1c4532',
        },
        // Warm Neutrals
        cream: '#fffaf0',
        sand: '#f7fafc',
        charcoal: '#2d3748',
        // Gold for badges
        gold: {
          400: '#ecc94b',
          500: '#d69e2e',
          600: '#b7791f',
        },
      },
      fontFamily: {
        heading: ['Fraunces', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'body': ['17px', { lineHeight: '1.7' }],
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(0,0,0,0.04), 0 4px 6px rgba(0,0,0,0.04), 0 12px 24px rgba(0,0,0,0.06)',
        'elevated': '0 4px 6px rgba(0,0,0,0.05), 0 10px 20px rgba(0,0,0,0.08), 0 20px 40px rgba(0,0,0,0.08)',
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 4px 6px rgba(0,0,0,0.04)',
        'float': '0 20px 60px rgba(0,0,0,0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.4s ease-out forwards',
        'pulse-soft': 'pulseSoft 2s infinite',
        'count-up': 'countUp 0.6s ease forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #fffaf0 0%, #fff5eb 50%, #f7fafc 100%)',
        'gradient-hero': 'linear-gradient(135deg, #1a365d 0%, #243b53 50%, #334e68 100%)',
      },
    },
  },
  plugins: [],
}
