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

<style scoped lang="postcss">
.link {
  line-height: normal;
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: all var(--transition);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position-x: right;
  background-image: linear-gradient(
    to top,
    var(--color-accent) 0.125em,
    transparent 0.125em
  );

  &:hover {
    color: var(--color-accent);
    background-size: 0 100%;
  }
}
</style>
