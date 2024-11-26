export default defineNuxtConfig({
  // @keep-sorted
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/fontaine',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
  ],
  devtools: {
    enabled: true,
  },
  css: [
    '~/assets/styles/index.css',
  ],
  site: {
    url: 'https://praz.dev',
    name: 'PraZ.dev',
    defaultLocale: 'en',
    socials: {
      bsky: 'https://bsky.app/profile/praz.dev',
      github: 'https://github.com/prazdevs',
      linkedin: 'https://www.linkedin.com/in/sachabouillez',
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
  robots: {
    blockAiBots: true,
    blockNonSeoBots: true,
    credits: false,
  },
  seo: {
    meta: {
      colorScheme: 'dark',
      themeColor: '#352c34',
    },
  },
})
