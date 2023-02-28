<script setup lang="ts">
const props = defineProps<{ tech: string }>()

const colors = {
  yellow: 'text-ctp-latte-yellow border-ctp-latte-yellow  dark:text-ctp-mocha-yellow dark:border-ctp-mocha-yellow',
  green: 'text-ctp-latte-green border-ctp-latte-green dark:text-ctp-mocha-green dark:border-ctp-mocha-green',
  blue: 'text-ctp-latte-blue border-ctp-latte-blue dark:text-ctp-mocha-blue dark:border-ctp-mocha-blue',
  red: 'text-ctp-latte-red border-ctp-latte-red dark:text-ctp-mocha-red dark:border-ctp-mocha-red',
  peach: 'text-ctp-latte-peach border-ctp-mocha-peach dark:text-ctp-mocha-peach dark:border-ctp-mocha-peach',
  pink: 'text-ctp-latte-pink border-ctp-latte-pink dark:text-ctp-mocha-pink dark:border-ctp-mocha-pink',
  sky: 'text-ctp-latte-sky border-ctp-latte-sky dark:text-ctp-mocha-sky dark:border-ctp-mocha-sky',
  purple: 'text-ctp-latte-mauve border-ctp-latte-mauve dark:text-ctp-mocha-mauve dark:border-ctp-mocha-mauve',
  text: 'text-ctp-latte-text border-ctp-latte-text dark:text-ctp-mocha-text dark:border-ctp-mocha-text',
}

const tags: Record<string, { label: string; color: string; icon: string }> = {
  javascript: {
    label: 'JavaScript',
    color: colors.yellow,
    icon: 'i-simple-icons-javascript',
  },
  typescript: {
    label: 'TypeScript',
    color: colors.blue,
    icon: 'i-simple-icons-typescript',
  },
  nodejs: {
    label: 'Node.js',
    color: colors.green,
    icon: 'i-simple-icons-nodedotjs',
  },
  react: {
    label: 'React',
    color: colors.sky,
    icon: 'i-simple-icons-react',
  },
  redux: {
    label: 'Redux',
    color: colors.purple,
    icon: 'i-simple-icons-redux',
  },
  nestjs: {
    label: 'NestJS',
    color: colors.red,
    icon: 'i-simple-icons-nestjs',
  },
  mongodb: {
    label: 'MongoDB',
    color: colors.green,
    icon: 'i-simple-icons-mongodb',
  },
  vuejs: {
    label: 'Vue.js',
    color: colors.green,
    icon: 'i-simple-icons-vuedotjs',
  },
  gatsby: {
    label: 'Gatsby',
    color: colors.purple,
    icon: 'i-simple-icons-gatsby',
  },
  vite: {
    label: 'Vite',
    color: colors.yellow,
    icon: 'i-simple-icons-vite',
  },
  cypress: {
    label: 'Cypress',
    color: colors.text,
    icon: 'i-simple-icons-cypress',
  },
  storytime: {
    label: 'Storytime',
    color: colors.pink,
    icon: 'i-ion-cafe',
  },
  accessibility: {
    label: 'Accessibility',
    color: colors.peach,
    icon: 'i-ion-accessibility',
  },
  nuxt: {
    label: 'Nuxt',
    color: colors.green,
    icon: 'i-simple-icons-nuxtdotjs',
  },
}

const label = computed(() => tags[props.tech]?.label ?? props.tech)
const color = computed(() => tags[props.tech]?.color ?? colors.text)
const icon = computed(() => tags[props.tech]?.icon ?? '')
</script>

<template>
  <span
    :class="color"
    border-1 border-opacity-50
    text-xs font-500
    inline-flex items-center
    gap-5px px-2 py-1 rounded-4px
  >
    <span inline-flex :class="icon" />
    <span font-bold>{{ label }}</span>
  </span>
</template>
