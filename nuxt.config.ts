import vuetify from "vite-plugin-vuetify"
import { RouteRules } from "./config/RouteRules"

export default defineNuxtConfig({
  ssr: true,
  css: ["~/assets/css/main.css", "vuetify/styles"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        // @ts-ignore
        config.plugins.push(
          vuetify({
            autoImport: true,
          })
        )
      )
    },
    "@sidebase/nuxt-auth",
  ],

  auth: {
    provider: {
      type: "authjs",
    },
    globalAppMiddleware: {
      isEnabled: true,
    },
    baseURL: process.env.AUTH_ORIGIN,
  },

  build: { transpile: ["vuetify"] },
  vite: {
    ssr: { noExternal: ["vuetify"] },
  },
  routeRules: RouteRules,

  // @ts-ignore
  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    download: false,
    useStylesheet: true,
  },

  nitro: {
    preset: "node-server",
  },
})
