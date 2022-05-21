<script setup>
useHead({
  title: 'praz.dev',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  --at-apply: h-100vh m-0 p-0 antialiased;
  --at-apply: motion-reduce:transition-none;
  --at-apply: motion-safe:transition-colors;
}
body {
  --at-apply: background-color dark:text-white dark:text-opacity-90;
}
*, ::before, ::after {
  --at-apply: border-color-gray-200
  --at-apply: dark:border-color-white dark:border-opacity-16
}
</style>
