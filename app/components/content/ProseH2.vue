<script setup lang="ts">
defineProps<{ id?: string }>()
</script>

<template>
  <h2 :id="id">
    <slot />
  </h2>
</template>

<style scoped>
h2 {
  color: var(--color-accent);
  font-size: var(--font-size-3xl);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-bold);
  line-height: 1.15;
  margin-top: 2.25rem;
  margin-bottom: 1rem;
}
</style>
