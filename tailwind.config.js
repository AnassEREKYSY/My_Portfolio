/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Using CSS variables for dynamic theming
        'dark-bg': 'var(--bg)',
        'dark-surface': 'var(--surface)',
        'dark-border': 'var(--border)',
        'dark-muted': 'var(--muted)',
        'accent': {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          light: 'var(--accent-light)',
          dark: 'var(--accent-dark)',
        },
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        
        // Light theme palette (for reference, applied via CSS variables)
        'light-bg': '#ffffff',
        'light-surface': '#f5f5f5',
        'light-border': '#e5e7eb',
        'light-muted': '#e0e0e0',
        'light-text-primary': '#1a1a1a',
        'light-text-secondary': '#4a4a4a',
        'light-text-muted': '#6b7280',
        'light-accent': '#0ea5e9',
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
