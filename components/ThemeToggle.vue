<script setup lang="ts">
const colorMode = useColorMode()
function toggleDark() {
  colorMode.preference = colorMode.value === 'dark'
    ? 'light'
    : 'dark'
}
</script>

<template>
  <button
    class="theme-toggle"
    aria-label="toggle dark mode"
    @click="toggleDark"
  >
    <Icon name="ph:lightbulb-bold" />
  </button>
</template>

<style scoped>
.theme-toggle {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  padding: var(--spacing-3);
  margin: calc(-1 * var(--spacing-1));
  transition: color var(--transition);
  font-size: var(--font-size-xl);

  &::before {
    display: block;
    content: '';
    z-index: -1;
    position: absolute;
    height: 0;
    width: 0;
    background-color: transparent;
    border-radius: 9999px;
    transition: all var(--transition);
  }

  &:hover {
    color: var(--color-background);

    &::before {
      height: 100%;
      width: 100%;
      background-color: var(--color-accent);
    }
  }

  &:focus-visible {
    outline: solid var(--color-text) 3px;
    border-radius: 50%;
  }
}
</style>
