import { identity, site, socials } from './config'

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  experimental: {
    headNext: true,
    typedPages: true,
    viewTransition: true,
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/critters',
    '@nuxtjs/fontaine',
    '@nuxtjs/seo',
    'nuxt-icon',
  ],
  css: [
    '~/assets/styles/index.css',
  ],
  app: {
    head: {
      templateParams: {
        separator: '–',
      },
    },
  },
  nitro: {
    prerender: {
      routes: ['/rss.xml'],
    },
  },
  postcss: {
    plugins: {
      'postcss-nesting': {},
      'postcss-custom-media': {},
    },
  },
  content: {
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
  critters: {
    config: {
      reduceInlineStyles: false,
    },
  },
  ogImage: {
    fonts: ['Quicksand:700', 'Lexend:400'],
  },
  schemaOrg: {
    identity: {
      type: identity.type,
      name: identity.name,
      sameAs: [
        socials.github,
        socials.twitter,
        socials.mastodon,
        socials.linkedin,
      ],
    },
  },
  site: {
    url: site.url,
    name: site.name,
    description: site.description,
    defaultLocale: 'en',
    indexable: false,
  },
  sitemap: {
    strictNuxtContentPaths: true,
  },
})
