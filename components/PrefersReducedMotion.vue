<script setup lang="ts">
const rm = useMediaQuery('(prefers-reduced-motion: reduce)')
</script>

<template>
  <div>
    <ClientOnly>
      <div v-if="rm" text-red-600 dark:text-red-500 flex items-center>
        <span text-lg inline-block mr-1 i-iconoir-delete-circled-outline />
        <span>{{ 'Animations are disabled.' }}</span>
      </div>
      <div v-else text-green-700 dark:text-green-300 flex items-center>
        <span text-lg inline-block mr-1 i-iconoir-check-circled-outline />
        <span>{{ 'Animations are enabled.' }}</span>
      </div>
    </ClientOnly>
  </div>
</template>
