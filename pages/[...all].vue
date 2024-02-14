<script setup lang="ts">
// defineOgImageComponent('default')
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
