/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme palette
        dark: {
          bg: '#0a0a0a',        // Near-black background
          surface: '#111111',   // Slightly lighter for cards
          border: '#1f1f1f',    // Subtle borders
          muted: '#2a2a2a',     // Muted elements
        },
        // Accent color - professional blue
        accent: {
          DEFAULT: '#3b82f6',   // Primary accent (blue-500)
          hover: '#2563eb',     // Hover state (blue-600)
          light: '#60a5fa',     // Light accent (blue-400)
          dark: '#1e40af',      // Dark accent (blue-800)
        },
        // Text colors for dark theme
        text: {
          primary: '#f5f5f5',   // Primary text (almost white)
          secondary: '#a3a3a3', // Secondary text (gray-400)
          muted: '#737373',     // Muted text (gray-500)
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [],
}
