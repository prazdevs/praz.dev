<script setup lang="ts">
const od = useOpenDyslexic()
</script>

<template>
  <label for="od-switch" flex items-center cursor-pointer select-none>
    <div relative mr-2 rounded-full focus-within:outline-switch>
      <input id="od-switch" v-model="od.openDyslexic" sr-only type="checkbox">
      <div block bg-gray-200 dark:bg-opacity-16 w-12 h-6 rounded-full />
      <span font-sans absolute left-11px top-0 z-1 text-primary>1</span>
      <span font-sans absolute right-6px top-0 z-1 text-gray-400>O</span>
      <div
        :class="od.openDyslexic ? 'background-primary translate-x-6' : 'bg-gray-400'"
        absolute
        left-1
        top-1
        w-4
        h-4
        rounded-full
        transition
        z-3
      />
    </div>
    <span>Use OpenDyslexic font</span>
  </label>
</template>
