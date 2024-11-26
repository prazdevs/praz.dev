export default defineNuxtConfig({
  // @keep-sorted
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/fontaine',
    '@vueuse/nuxt',
  ],
  devtools: {
    enabled: true,
  },
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
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    typedPages: true,
    viewTransition: true,
  },
  compatibilityDate: '2024-08-16',
  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
})
