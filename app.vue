<script setup lang="ts">
import { site } from '~/config'
</script>

<template>
  <header class="header">
    <NuxtLink
      to="/"
      class="header-logo"
      :aria-label="site.name"
    >
      <Logo />
    </NuxtLink>
    <nav class="header-nav">
      <NuxtLink
        v-for="to in ['/work', '/blog']"
        :key="to"
        :to="to"
        class="header-link"
        :class="{ active: $route.path.startsWith(to) }"
      >
        {{ to.slice(1) }}
      </NuxtLink>
    </nav>
  </header>
  <main class="content">
    <NuxtPage />
  </main>
  <footer class="footer">
    <Socials />
    {{ site.copyright }}
  </footer>
</template>

<style scoped>
.header {
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-3) var(--spacing-4);
}

.header-logo {
  height: 100%;
  background: none;
  transition: color var(--transition);

  &:hover {
    color: var(--color-accent);
  }

  &:focus-visible {
    outline: solid var(--color-text) 3px;
    outline-offset: var(--spacing-2);
    border-radius: var(--spacing-2);
  }
}

.header-nav {
  display: flex;
  align-items: center;
  gap: var(--spacing-6);
}

.header-link {
  font-size: var(--font-size-lg);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-bold);
  margin-bottom: 0.25rem;
  position: relative;
  transition: color var(--transition);
  background: none;

  &::before {
    content: '';
    position: absolute;
    background-color: transparent;
    left: 10%;
    right: 90%;
    bottom: -0.2em;
    height: 0.2em;
    transition: all var(--transition);
    border-radius: 1em;
  }

  &.active::before {
    background-color: var(--color-text);
    right: 10%;
  }

  &:hover {
    color: var(--color-accent);

    &::before {
      background-color: var(--color-accent);
      right: 10%;
    }
  }

  &:focus-visible {
    outline: solid var(--color-text) 3px;
    outline-offset: var(--spacing-2);
    border-radius: var(--spacing-2);
  }
}

.content {
  padding: 0 var(--spacing-4);
}

.footer {
  padding: var(--spacing-2) var(--spacing-4);
  font-size: var(--font-size-sm);
  text-align: center;
}
</style>
