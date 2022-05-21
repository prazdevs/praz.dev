<script setup lang="ts">
const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
</script>

<template>
  <div>
    a11y
    <ClientOnly>{{ reducedMotion }}</ClientOnly>
  </div>
</template>
