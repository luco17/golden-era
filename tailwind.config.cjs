/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      title: ["Ultra"],
      hand: ["Permanent Marker"],
      sans: ["Helvetica Neue"],
    },
    extend: {
      keyframes: {
        fadeUp: {
          "0%": { transform: "translateY(20px)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { transform: "translateX(-300px)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeInRight: {
          "0%": { transform: "translateX(300px)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeOpacity: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeOpacity 0.4s ease forwards 0.5s",
        fadeFromLeft:
          "fadeInLeft 0.8s ease forwards 0.5s, fadeOpacity 0.4s ease forwards 0.5s",
        fadeFromRight:
          "fadeInRight 0.8s ease forwards 0.5s, fadeOpacity 0.4s ease forwards 0.5s",
      },
    },
  },
  plugins: [],
};
