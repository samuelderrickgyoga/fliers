/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins','ui-sans-serif','system-ui'],
        body: ['Inter','ui-sans-serif','system-ui']
      },
      colors: {
        accent: {
          50: '#f2f9ff',
          100: '#dff1ff',
          200: '#b8e4ff',
          300: '#7dd0ff',
          400: '#35b6ff',
          500: '#0b99ff',
          600: '#0079db',
          700: '#005ea9',
          800: '#024f89',
          900: '#063f6b',
          950: '#032945'
        }
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(56,189,248,0.45)'
      },
      backgroundImage: {
        'grid': 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}