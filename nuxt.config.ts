import { pwa } from './config/pwa'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@vue-macros/nuxt',
    '@pinia/nuxt',
    '@nuxt/content',
    '@vite-pwa/nuxt',
    'radix-vue/nuxt',
    'nuxt-svgo',
  ],
  app: {
    head: {
      meta: [
        { name: 'referrer', content: 'no-referrer' },
      ],
    },
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  content: {
    highlight: {
      theme: 'vitesse-dark',
    },
  },
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },
  typescript: {
    typeCheck: true,
  },
  pwa,
  devtools: { enabled: true },
})
