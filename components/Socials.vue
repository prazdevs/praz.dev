<script setup lang="ts">
import { socials } from '~/config'
</script>

<template>
  <ul class="socials">
    <li>
      <NuxtLink
        class="link"
        target="_blank"
        aria-label="GitHub profile (opens in new tab)"
        :to="socials.github"
      >
        <Icon class="icon" name="ri:github-line" />
      </NuxtLink>
    </li>

    <li>
      <NuxtLink
        class="link"
        target="_blank"
        aria-label="Twitter profile (opens in new tab)"
        :to="socials.twitter"
      >
        <Icon class="icon" name="ri:twitter-line" />
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        class="link"
        target="_blank"
        aria-label="Mastodon profile (opens in new tab)"
        :to="socials.mastodon"
      >
        <Icon class="icon" name="ri:mastodon-line" />
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        class="link"
        target="_blank"
        aria-label="LinkedIn profile (opens in new tab)"
        :to="socials.linkedin"
      >
        <Icon class="icon" name="ri:linkedin-box-line" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
.socials {
  display: flex;
  justify-content: center;
  gap: var(--spacing-8);
  margin: var(--spacing-5) 0;
  padding: 0;
}

.link {
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: var(--spacing-2);
  font-size: var(--font-size-2xl);
  background-color: var(--color-text);
  border: 2px solid var(--color-text);

  & .icon {
    z-index: 3;
    position: relative;
    color: var(--color-background);
    transition: all var(--transition);
  }

  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-background);
    transition: all var(--transition);
    z-index: 2;
  }

  &:hover {
    & .icon {
      color: var(--color-text);
      transform: rotateX(360deg);
    }

    &::before {
      top: 0;
    }
  }

  &:focus-visible {
    outline: solid var(--color-text) 3px;
    outline-offset: var(--spacing-2);
  }
}
</style>
