export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  experimental: {
    typedPages: true,
    viewTransition: true,
  },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
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
