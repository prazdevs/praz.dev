<script setup lang="ts">
defineProps<{ id: string }>()
</script>
   
<template>
  <h2 text-3xl font-600 u:m-y="0.75em" :id="id">
    <slot />
  </h2>
</template>

