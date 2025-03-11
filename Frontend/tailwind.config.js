/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
}


