<script setup lang="ts">
defineProps<{ id: string }>()
</script>
   
<template>
  <h2 h2-primary u:m-y="0.75em" :id="id">
    <slot />
  </h2>
</template>

