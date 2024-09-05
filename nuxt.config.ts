import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  ssr: false,
  server: {
    host: "172.0.0.11",
    port: 8000,
  },
  css: ["@/assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  buildModules: ["@pinia/nuxt"],
  vite: {
    server: {
      host: "172.0.0.11",
      port: 8000,
    },
  },
});
