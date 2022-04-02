import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  // server: {
  //   port: 8000,
  //   host: "172.0.0.11",
  // },
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
});
