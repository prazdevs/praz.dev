<script setup lang="ts">
defineProps<{ id: string }>()
</script>
   
<template>
  <h3 text-2xl font-500 u:m-y="0.75em" :id="id">
    <slot />
  </h3>
</template>

