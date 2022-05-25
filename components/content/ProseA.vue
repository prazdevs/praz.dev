<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <NuxtLink main-link :href="href">
    <slot />
  </NuxtLink>
</template>
