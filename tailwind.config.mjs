/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss", require("daisyui")],
  daisyui: {
    themes: ["cupcake", "valentine"],
  },
};
