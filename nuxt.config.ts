export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
    '@nuxtjs/robots',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt',
  ],
  css: [
    '@/assets/fonts/opendyslexic.css',
    '@fontsource/indie-flower',
    '@fontsource/montserrat-alternates/400.css',
    '@fontsource/montserrat-alternates/500.css',
    '@fontsource/montserrat-alternates/600.css',
    '@fontsource/montserrat-alternates/700.css',
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
})
