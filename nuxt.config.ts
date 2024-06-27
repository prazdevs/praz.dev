export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  experimental: {
    typedPages: true,
    viewTransition: true,
  },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/fontaine',
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
