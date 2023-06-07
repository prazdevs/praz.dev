<script setup lang="ts">
import '@catppuccin/palette/style'

useHead({
  htmlAttrs: {
    lang: 'en',
  },
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
  --at-apply: bg-ctp-latte-base text-ctp-latte-text;
  --at-apply: dark:(bg-ctp-mocha-base text-ctp-mocha-text);
  --at-apply: motion-safe:(transition-background-color transition-text-color);
}
*, ::before, ::after {
  --at-apply: border-color-gray-200 dark:border-opacity-16;
}
* {
  --at-apply: selection:(bg-ctp-latte-red text-ctp-latte-base);
  --at-apply: dark:(selection:(bg-ctp-mocha-red text-ctp-mocha-base));
  --at-apply: motion-reduce:(!transition-none);
}

html.light {
  --shiki-color-text: var(--ctp-latte-text);
  --shiki-color-background: var(--ctp-latte-mantle);
  --shiki-token-constant: var(--ctp-latte-blue);
  --shiki-token-string: var(--ctp-latte-peach);
  --shiki-token-comment: var(--ctp-latte-subtext0);
  --shiki-token-keyword: var(--ctp-latte-mauve);
  --shiki-token-parameter: var(--ctp-latte-teal);
  --shiki-token-function: var(--ctp-latte-blue);
  --shiki-token-string-expression: var(--ctp-latte-peach);
  --shiki-token-punctuation: var(--ctp-latte-text);
  --shiki-token-link: var(--ctp-latte-peach);
}

html.dark {
  --shiki-color-text: var(--ctp-mocha-text);
  --shiki-color-background: var(--ctp-mocha-mantle)
  --shiki-token-constant: var(--ctp-mocha-blue);
  --shiki-token-string: var(--ctp-mocha-yellow);
  --shiki-token-comment: var(--ctp-mocha-subtext0);
  --shiki-token-keyword: var(--ctp-mocha-mauve);
  --shiki-token-parameter: var(--ctp-mocha-teal);
  --shiki-token-function: var(--ctp-mocha-blue);
  --shiki-token-string-expression: var(--ctp-mocha-yellow);
  --shiki-token-punctuation: var(--ctp-mocha-text);
  --shiki-token-link: var(--ctp-mocha-yellow);
}

code {
  font-family: inherit;
}

pre {
  white-space: pre-wrap;
  font-family: inherit;
}
</style>
