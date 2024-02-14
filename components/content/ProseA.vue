<script setup lang="ts">
import { hasProtocol } from 'ufo'

defineProps<{
  href?: string
}>()
</script>

<template>
  <ContentLink
    :href="href"
    :target="href && hasProtocol(href) ? '_blank' : '_self'"
  >
    <slot />
  </ContentLink>
</template>
