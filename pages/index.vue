<script setup lang="ts">
defineOgImageComponent('default')

useHeadSafe({
  titleTemplate: '%siteName %separator %description',
})
</script>

<template>
  <ContentDoc />
</template>
