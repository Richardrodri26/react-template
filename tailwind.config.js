/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--main_color) / <alpha-value>)',
        "primary-opacity": 'hsl(var(--opacity_main_color) / <alpha-value>)',
        "primary-scroll-hover": "hsl(var(--scroll_hover) / <alpha-value>)",
        "primary-scroll": "hsl(var(--scroll) / <alpha-value>)",
        "primary-a2": "hsl(var(--main_color_a2) / <alpha-value>)",
        "primary-contrary": "hsl(var(--contrary_main_color) / <alpha-value>)",
        "stroke-disable" : "var(--stroke_disabled)",
        "reverse-stroke": "var(--reverse_stroke_color)",
        "border-color": "var(--border_color)",
        "info-color": "var(--info_color)"
      },
      spacing: {
        "navBar-width": "260px",
      },
      fontFamily: {
        'monserrat': ['Montserrat', 'sans-serif'],
        'work-sans' : ['Work Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}