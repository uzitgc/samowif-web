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

    // optimizeDeps: {
    //   include: ["buffer"],
    //   esbuildOptions: {
    //     target: "esnext",
    //   },
    // },
    resolve: {
      alias: {
        crypto: 'crypto-browserify',
      },
    },
    optimizeDeps: {
      include: ["buffer"],
      esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
          global: 'globalThis',
        },
      },
    },
    define: {
      "process.env.BROWSER": true,
    },
  },
})
