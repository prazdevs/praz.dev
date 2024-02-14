<script setup lang="ts">
defineProps<{ id?: string }>()
</script>

<template>
  <h4 :id="id">
    <slot />
  </h4>
</template>

<style scoped>
h4 {
  color: var(--color-accent);
  font-size: var(--font-size-xl);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-bold);
  line-height: 1.15;
  margin-top: 2.25rem;
  margin-bottom: 1rem;
}
</style>
