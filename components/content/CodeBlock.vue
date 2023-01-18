<script setup lang="ts">
defineProps<{ title?: string }>();
</script>

<template>
  <div
    font-mono
    u:bg="dark:#011627"
    p-6
    rounded-20px
    border-2
    dark:border-0
  >
    <div
      v-if="title"
      mt--6
      w-fit
      max-w-full
      overflow-hidden
      text-ellipsis
      px-2
      rounded-b-5px
      mb-6
      bg-gray-200
      dark:bg-gray-700
    >
      {{ title }}
    </div>
    <ContentSlot :use="$slots.default" />
  </div>
</template>
