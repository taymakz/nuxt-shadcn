export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-lucide-icons',
  ],
  lucide: {
    namePrefix: 'Icon',
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  app: {
    head: {
      titleTemplate: '%s | Nuxt',
    },
  },
  runtimeConfig: {
    public: {
      baseApi: '', // Base Api environment variable
      baseStorage: '', // Base Media environment variable
      domain: '', // Domain environment variable
    },
  },
  colorMode: {
    classSuffix: '',
  },
  tailwindcss: {
    viewer: false,
  },
})
