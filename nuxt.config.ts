export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
    '@nuxtjs/color-mode',
    '@nuxtjs/fontaine',
    '@unocss/nuxt',
    '@vueuse/nuxt',
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
  image: {
    provider: 'ipx',
  },
  devtools: {
    enabled: true,
  },
})
