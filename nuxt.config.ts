import { site } from './config'

export default defineNuxtConfig({
  devtools: {
    enabled: true,
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
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      templateParams: {
        name: site.name,
        description: site.description,
        separator: '—',
      },
      titleTemplate: `%s %separator %name`,
    },
  },
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
