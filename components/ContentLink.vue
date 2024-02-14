<script setup lang="ts">
import { hasProtocol } from 'ufo'

defineProps<{
  href?: string
}>()
</script>

<template>
  <NuxtLink
    class="link"
    :href="href"
    :target="href && hasProtocol(href) ? '_blank' : '_self'"
  >
    <slot />
  </NuxtLink>
</template>

<style scoped>
.link {
  line-height: normal;
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  padding-bottom: 0.125rem;
  transition: all var(--transition);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position-x: right;
  background-image: linear-gradient(
    transparent 1.25em,
    var(--color-accent) 1.25em
  );

  &:hover {
    color: var(--color-accent);
    background-size: 0 100%;
  }
}
</style>
