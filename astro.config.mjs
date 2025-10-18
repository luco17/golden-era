import { defineConfig } from "astro/config";

import alpinejs from "@astrojs/alpinejs";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://goldenera.squaddy.app",
  integrations: [alpinejs()],

  vite: {
    plugins: [tailwindcss()],
  },
});