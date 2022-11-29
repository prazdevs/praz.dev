<script setup lang="ts">
withDefaults(defineProps<{ src: string; alt?: string }>(), { alt: "" });
</script>

<template>
  <figure flex flex-col items-center justify-center my-7>
    <NuxtImg
      w-full
      max-w-600px
      :src="`/content/${src}`"
      :alt="alt"
      loading="lazy"
      decoding="async"
      width="600px"
    />
    <figcaption italic text-sm mt-1>
      <ContentSlot :use="$slots.caption" unwrap="p" />
    </figcaption>
  </figure>
</template>
