export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  experimental: {
    headNext: true,
    viewTransition: true,
  },
  features: {
    noScripts: true,
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/fontaine',
    'nuxt-icon',
  ],
  css: [
    '~/assets/styles/index.css',
  ],
  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: false,
    },
    navigation: {
      fields: ['date'],
    },
    highlight: {
      theme: {
        default: 'catppuccin-latte',
        dark: 'catppuccin-mocha',
      },
    },
  },
})
