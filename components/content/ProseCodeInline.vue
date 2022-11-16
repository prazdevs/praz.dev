<script setup lang="ts">
const od = useOpenDyslexic();
</script>

<template>
  <span
    bg-gray-200
    dark:bg-gray-700
    px-1
    rounded-sm
    :u:font="od.openDyslexic ? 'monodyslexic' : 'mono'"
  >
    <ContentSlot :use="$slots.default" />
  </span>
</template>
