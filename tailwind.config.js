/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        gradient: {
          to: { 'background-position': '200% center' },
        },
      },
      animation: {
        slidein: "slidein 2s ease 300ms",
        gradient: 'gradient 5s linear infinite',
      },
    },
  },
  plugins: [],
}