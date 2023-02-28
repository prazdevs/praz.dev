<script setup lang="ts">
defineProps<{ title?: string }>();
</script>

<template>
  <div
    font-mono
    p-6
    rounded-20px
    border-2
    bg-ctp-latte-base-mantle
    dark:bg-ctp-mocha-mantle
    border-ctp-latte-crust
    dark:border-0
    leading-normal
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
      bg-ctp-latte-crust
      dark:bg-ctp-mocha-crust
    >
      {{ title }}
    </div>
    <ContentSlot :use="$slots.default" />
  </div>
</template>
