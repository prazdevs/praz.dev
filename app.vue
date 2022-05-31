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

html.light {
  --shiki-color-text: #333333;
  --shiki-color-background: #eeeeee;
  --shiki-token-constant: #4876d6;
  --shiki-token-string: #c96765;
  --shiki-token-comment: #939dbb;
  --shiki-token-keyword: #994cc3;
  --shiki-token-parameter: #AA0000;
  --shiki-token-function: #4876d6;
  --shiki-token-string-expression: #c96765;
  --shiki-token-punctuation: #333333;
  --shiki-token-link: #c96765;
}

html.dark {
  --shiki-color-text: #ffffff;
  --shiki-color-background: #333333;
  --shiki-token-constant: #82AAFF;
  --shiki-token-string: #ecc48d;
  --shiki-token-comment: #637777;
  --shiki-token-keyword: #c792ea;
  --shiki-token-parameter: #7fdbca;
  --shiki-token-function: #82AAFF;
  --shiki-token-string-expression: #ecc48d;
  --shiki-token-punctuation: #ffffff;
  --shiki-token-link: #ecc48d;
}
</style>
