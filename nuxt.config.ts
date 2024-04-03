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
        description: site.description,
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
  robots: {
    blockNonSeoBots: true,
    groups: [{
      comment: 'Fuck AI.',
      userAgent: [
        'AdsBot-Google',
        'Amazonbot',
        'anthropic-ai',
        'Applebot',
        'AwarioRssBot',
        'AwarioSmartBot',
        'Bytespider',
        'CCBot',
        'ChatGPT-User',
        'ClaudeBot',
        'Claude-Web',
        'cohere-ai',
        'DataForSeoBot',
        'FacebookBot',
        'Google-Extended',
        'GPTBot',
        'ImagesiftBot',
        'magpie-crawler',
        'omgili',
        'omgilibot',
        'peer39_crawler',
        'peer39_crawler/1.0',
        'PerplexityBot',
        'YouBot',
      ],
      disallow: '/',
    }],
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
  },
  sitemap: {
    strictNuxtContentPaths: true,
  },
})
