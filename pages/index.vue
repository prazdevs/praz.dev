<script setup lang="ts">
import { site } from '~/config'

useHeadSafe({
  title: `${site.name} — ${site.description}`,
})
</script>

<template>
  <ContentDoc />
</template>
