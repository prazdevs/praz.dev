<script setup lang="ts">
import { site } from '~/config'

useHeadSafe({
  titleTemplate: t => `${t} — ${site.name}`,
})
</script>

<template>
  <ContentDoc>
    <template #not-found>
      <p>{{ 'This post doesnt not exist' }}</p>
    </template>
    <template #empty>
      <p>{{ 'There is no content here (yet)...' }}</p>
    </template>
  </ContentDoc>
</template>
