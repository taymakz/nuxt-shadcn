import { appDescription, appName } from './constants/index'
const sw = process.env.SW === 'true'

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/seo',
    'nuxt-lucide-icons',
    '@vite-pwa/nuxt',
    '@nuxt/eslint',
    "nuxt-build-cache",
    "nuxt-security"
  ],
  experimental: {
    watcher: 'parcel', // 'chokidar' or 'parcel' are also options
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      routes: [
        '/'
      ],
    },
  },
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      titleTemplate: '%s | Nuxt',
      htmlAttrs: {
        dir: 'rtl',
        lang: 'fa-IR',
      },
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#F4F4F5' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#09090B' },
      ],
    },

  },
  site: {
    url: 'https://example.com',
    name: appName,
    description: appDescription,
    defaultLocale: 'fa', // not needed if you have @nuxtjs/i18n installed
  },
  robots: {
    // provide simple disallow rules for all robots `user-agent: *`
    disallow: [],
    allow: '*',
  },
  ogImage: {
    defaults: {
      component: 'NuxtSeo',
      props: {
        colorMode: 'dark',
      },
    },

  },
  pwa: {
    strategies: sw ? 'injectManifest' : 'generateSW',
    srcDir: sw ? 'config' : undefined,
    filename: sw ? 'sw.ts' : undefined,
    registerType: 'autoUpdate',
    manifest: {
      name: 'Font Changer',
      short_name: 'FC',
      theme_color: '#09090B',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'maskable-icon.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
  lucide: {
    namePrefix: 'Icon',
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
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
  eslint: {
    config: {
      standalone: false,
    },
  },
  security: {
    headers: {
      crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'require-corp',
    },
  },
})
