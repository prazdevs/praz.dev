<script setup lang="ts">
withDefaults(defineProps<{ href: string }>(), { href: '' })
</script>

<template>
  <NuxtLink main-link :href="href">
    <slot />
  </NuxtLink>
</template>
