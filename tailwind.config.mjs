/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0a',
          surface: '#151515',
          border: '#2a2a2a',
          text: '#e5e5e5',
          'text-muted': '#9ca3af',
        },
        accent: {
          DEFAULT: '#f97316',
          hover: '#fb923c',
          light: '#fdba74',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
