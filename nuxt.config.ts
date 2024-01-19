// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  devtools: { enabled: true },
  vite: {
    esbuild: {
      target: "esnext",
    },
    build: {
      target: "esnext",
    },
  },
})
