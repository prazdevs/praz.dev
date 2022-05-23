<script setup lang="ts">
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => queryContent(path).findOne())
const { data: surround } = await useAsyncData(`surround-${path}`, () => queryContent('posts').findSurround(path))
</script>

<template>
  <ContentRenderer prose :value="data" />
</template>
