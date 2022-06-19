<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    description?: string
    image?: string
  }>(),
  {
    title: '',
    description: 'Pragmatic developer, avid learner and frontend nerd.',
    image: 'https://praz.dev/imgs/banner.png',
  }
)

const route = useRoute()
const url = computed(() => `https://praz.dev${route.path}`)
const title = computed(() =>
  props.title ? `${props.title} · praz.dev` : 'praz.dev'
)
</script>

<template>
  <Head>
    <!--? generic metadata -->
    <Title>{{ title }}</Title>
    <Meta name="description" :content="description" />
    <!--? opengraph metadata -->
    <Meta name="og:title" :content="title" />
    <Meta name="og:description" :content="description" />
    <Meta name="og:image" :content="image" />
    <Meta name="og:url" :content="url" />
    <Meta name="og:type" content="website" />
    <Meta name="og:locale" content="en" />
    <!--? twitter metadata -->
    <Meta name="twitter:title" :content="title" />
    <Meta name="twitter:description" :content="description" />
    <Meta name="twitter:url" :content="url" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:creator" content="PrazDevs" />
    <Meta name="twitter:site" content="PrazDevs" />
  </Head>
</template>
