/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui"],
        display: ["Manrope", "ui-sans-serif", "system-ui"],
      },
      colors: {
        kairos: {
          950: "#0a0618",
          900: "#120928",
          850: "#171032",
          800: "#201043",
          700: "#32145d",
          600: "#53228c",
          500: "#6b2bd0",
          400: "#8d55f6",
          300: "#b79aff",
          200: "#e6dcff",
          100: "#f4f0ff",
        },
      },
      boxShadow: {
        panel: "0 18px 45px rgba(18, 9, 40, 0.08)",
        hero: "0 30px 80px rgba(8, 5, 20, 0.35)",
      },
    },
  },
  plugins: [],
};
