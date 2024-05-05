/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    './vueform.config.ts', // or where `vueform.config.js` is located. Change `.js` to `.ts` if required.
    './node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
    './node_modules/@vueform/vueform/themes/tailwind/**/*.js',
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
        gradient: 'gradient 4s linear infinite',
      },
    },
  },
  plugins: [
    require('@vueform/vueform/tailwind'),
  ],
}