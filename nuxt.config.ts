import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content-edge',
  ],
  css: [
    '@/assets/fonts/opendyslexic.css',
    '@fontsource/montserrat-alternates/400.css',
    '@fontsource/montserrat-alternates/500.css',
    '@fontsource/montserrat-alternates/600.css',
    '@fontsource/montserrat-alternates/700.css',
  ],
  experimental: {
    reactivityTransform: true,
  },
  unocss: {
    preflight: true,
  },
  colorMode: {
    classSuffix: '',
  },
})
