<script setup lang="ts">
const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
</script>

<template>
  <div>
    <ContentQuery v-slot="{ data }" path="posts" :only="['_id']">
      <pre>{{ data }}</pre>
    </ContentQuery>
  </div>
</template>
