import Aura from '@primevue/themes/aura'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@primevue/nuxt-module',
    "@nuxt/image"
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    },
    {
      path: '~/components/ui',
      pathPrefix: false
    }
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  primevue: {
    autoImport: false,
    components: {
      exclude: '*',
      include: ['Image']
    },
    options: {
      theme: {
        preset: Aura
      }
    }
  }
})