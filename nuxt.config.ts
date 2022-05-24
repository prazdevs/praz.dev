import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@unocss/nuxt',
    '@vueuse/nuxt',
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
