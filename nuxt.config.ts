export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteUrl: 'https://praz.dev'
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/fontaine',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-simple-robots',
    'nuxt-simple-sitemap',
  ],
  css: [
    '@fontsource/indie-flower',
    '@fontsource/mononoki',
    '@fontsource/montserrat-alternates',
    '@fontsource/delius-unicase',
  ],
  unocss: {
    preflight: true,
  },
  colorMode: {
    classSuffix: '',
  },
  content: {
    highlight: {
      theme: 'css-variables',
    },
  },
  devtools: {
    enabled: true,
  },
})
