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
        // Ultra-minimal editorial palette
        ink: {
          50: '#f6f6f5',
          100: '#e7e6e4',
          200: '#d1d0cc',
          300: '#b3b1ab',
          400: '#8f8c83',
          500: '#6f6b62',
          600: '#5a574f',
          700: '#47443e',
          800: '#2d2b27',
          900: '#1b1a18',
          950: '#0f0e0d',
        },
        porcelain: {
          50: '#fdfdfc',
          100: '#fbfaf8',
          200: '#f5f2ee',
          300: '#eee8e1',
          400: '#e3d9cf',
          500: '#d2c4b7',
        },
        champagne: {
          50: '#fbf8f1',
          100: '#f4eddd',
          200: '#e7d9b9',
          300: '#d6bf8a',
          400: '#c3a25f',
          500: '#ad8741',
          600: '#8f6d33',
          700: '#72562b',
          800: '#5d4628',
          900: '#4d3a22',
        },
        // Keep existing names used in the codebase for easier migration
        primary: {
          50: '#f6f6f5',
          100: '#e7e6e4',
          200: '#d1d0cc',
          300: '#b3b1ab',
          400: '#8f8c83',
          500: '#6f6b62',
          600: '#5a574f',
          700: '#47443e',
          800: '#2d2b27',
          900: '#1b1a18',
          950: '#0f0e0d',
        },
        cream: {
          50: '#fdfdfc',
          100: '#fbfaf8',
          200: '#f5f2ee',
          300: '#eee8e1',
          400: '#e3d9cf',
        },
        accent: {
          50: '#fbf8f1',
          100: '#f4eddd',
          200: '#e7d9b9',
          300: '#d6bf8a',
          400: '#c3a25f',
          500: '#ad8741',
          600: '#8f6d33',
          700: '#72562b',
          800: '#5d4628',
          900: '#4d3a22',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['4.25rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['3.25rem', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-md': ['2.375rem', { lineHeight: '1.18', letterSpacing: '-0.02em' }],
        'display-sm': ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 14, 13, 0.08)',
        soft2: '0 18px 50px rgba(15, 14, 13, 0.10)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
