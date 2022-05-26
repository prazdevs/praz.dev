<script setup lang="ts">
const props = defineProps<{ tech: string }>()

const colors = {
  yellow: 'text-yellow-700 bg-yellow-300 dark:text-yellow-200',
  green: 'text-green-700 bg-green-300 dark:text-green-300',
  blue: 'text-blue-800 bg-blue-300 dark:text-blue-300',
  red: 'text-red-700 bg-red-300 dark:text-red-300',
  orange: 'text-orange-600 bg-orange-300 dark:text-orange-200',
  pink: 'text-pink-700 bg-pink-300 dark:text-pink-300',
  cyan: 'text-cyan-700 bg-cyan-300 dark:text-cyan-300',
  purple: 'text-purple-700 bg-purple-300 dark:text-purple-300',
  gray: 'text-gray-700 bg-gray-300 dark:text-gray-300',
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
    color: colors.cyan,
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
    color: colors.gray,
    icon: 'i-simple-icons-cypress',
  },
  storytime: {
    label: 'Storytime',
    color: colors.pink,
    icon: 'i-ion-cafe',
  },
  accessibility: {
    label: 'Accessibility',
    color: colors.orange,
    icon: 'i-ion-accessibility',
  },
  nuxt: {
    label: 'Nuxt',
    color: colors.green,
    icon: 'i-simple-icons-nuxtdotjs',
  },
}

const label = computed(() => tags[props.tech]?.label ?? props.tech)
const color = computed(() => tags[props.tech]?.color ?? colors.gray)
const icon = computed(() => tags[props.tech]?.icon ?? '')
</script>

<template>
  <span
    :class="color"
    bg-opacity-20
    text-xs font-500
    inline-flex items-center
    gap-5px px-2 py-1 rounded-4px
  >
    <span inline-flex :class="icon" />
    <span>{{ label }}</span>
  </span>
</template>
