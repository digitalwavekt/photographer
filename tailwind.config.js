module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { jet: { DEFAULT: '#0A0A0C', 800: '#121216', 700: '#1B1B21' },
              cerulean: { DEFAULT: '#007BA7', glow: '#2CB5E8' },
              rose: { DEFAULT: '#FF2E88', soft: '#FF7AB6' } },
    fontFamily: { display: ['var(--font-display)'], script: ['var(--font-script)'] },
    boxShadow: { neon: '0 0 24px rgba(255,46,136,.55)', blue: '0 0 24px rgba(44,181,232,.45)' } } },
  plugins: [] }
