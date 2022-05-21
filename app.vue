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
}
body {
  --at-apply: background-color;
}
*, ::before, ::after {
  --at-apply: border-color-gray-200 dark:border-opacity-16;
}
</style>
